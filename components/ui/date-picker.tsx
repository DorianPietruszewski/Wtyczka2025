"use client"

import * as React from "react"
import { format } from "date-fns"
import { pl } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DatePickerProps {
  placeholder?: string
  value?: Date
  onChange?: (date: Date | undefined) => void
  disabled?: boolean
  className?: string
}

export default function DatePicker({
  placeholder,
  value,
  onChange,
  disabled = false,
  className,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value)
  const [inputValue, setInputValue] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false)
  const [validationError, setValidationError] = React.useState<string>("")
  const [calendarMonth, setCalendarMonth] = React.useState<Date>(value || new Date())

  React.useEffect(() => {
    if (date) {
      setInputValue(format(date, "dd-MM-yyyy"))
    } else {
      setInputValue("")
    }
  }, [date])

  React.useEffect(() => {
    setDate(value)
    if (value) {
      setCalendarMonth(value)
    }
  }, [value])

  // Funkcja do walidacji daty (wspólna dla inputa i wyboru z kalendarza)
  const validateDate = (dateToValidate: Date | undefined) => {
    if (!dateToValidate) {
      setValidationError("")
      return false
    }
    const day = dateToValidate.getDate()
    const month = dateToValidate.getMonth() + 1
    const year = dateToValidate.getFullYear()
    const currentYear = new Date().getFullYear()
    const minYear = currentYear - 150
    if (day < 1 || day > 31) {
      setValidationError("Dzień musi być między 1 a 31")
      return false
    }
    if (month < 1 || month > 12) {
      setValidationError("Miesiąc musi być między 1 a 12")
      return false
    }
    if (year < minYear || year > currentYear) {
      setValidationError(`Rok musi być między ${minYear} a ${currentYear}`)
      return false
    }
    // Sprawdzenie czy data rzeczywiście istnieje
    const parsedDate = new Date(year, month - 1, day)
    if (parsedDate.getDate() !== day || parsedDate.getMonth() !== month - 1 || parsedDate.getFullYear() !== year) {
      setValidationError("Ta data nie istnieje")
      return false
    }
    // Sprawdź czy data nie jest z przyszłości
    const today = new Date()
    today.setHours(23, 59, 59, 999)
    if (parsedDate > today) {
      setValidationError("Data nie może być z przyszłości")
      return false
    }
    setValidationError("")
    return true
  }

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    onChange?.(selectedDate)
    validateDate(selectedDate)
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numbersOnly = value.replace(/\D/g, "")
    let formattedValue = ""
    if (numbersOnly.length > 0) {
      formattedValue = numbersOnly.substring(0, 2)
      if (numbersOnly.length > 2) {
        formattedValue += "-" + numbersOnly.substring(2, 4)
        if (numbersOnly.length > 4) {
          formattedValue += "-" + numbersOnly.substring(4, 8)
        }
      }
    }
    setInputValue(formattedValue)

    // Waliduj tylko jeśli mamy dokładnie 8 cyfr
    if (numbersOnly.length === 8) {
      const day = Number.parseInt(numbersOnly.substring(0, 2))
      const month = Number.parseInt(numbersOnly.substring(2, 4))
      const year = Number.parseInt(numbersOnly.substring(4, 8))
      // Sprawdź czy data jest poprawna bez tworzenia obiektu Date
      if (
        day >= 1 && day <= 31 &&
        month >= 1 && month <= 12 &&
        year >= (new Date().getFullYear() - 150) && year <= new Date().getFullYear()
      ) {
        // Sprawdź czy data istnieje i nie jest z przyszłości
        const parsedDate = new Date(year, month - 1, day)
        if (
          parsedDate.getDate() === day &&
          parsedDate.getMonth() === month - 1 &&
          parsedDate.getFullYear() === year &&
          parsedDate <= new Date(new Date().setHours(23, 59, 59, 999))
        ) {
          setDate(parsedDate)
          onChange?.(parsedDate)
          setCalendarMonth(parsedDate)
          setValidationError("")
        } else {
          setValidationError("Ta data nie istnieje lub jest z przyszłości")
        }
      } else {
        // Zakresy poza dozwolonymi
        if (day < 1 || day > 31) setValidationError("Dzień musi być między 1 a 31")
        else if (month < 1 || month > 12) setValidationError("Miesiąc musi być między 1 a 12")
        else if (year < (new Date().getFullYear() - 150) || year > new Date().getFullYear()) setValidationError(`Rok musi być między ${new Date().getFullYear() - 150} a ${new Date().getFullYear()}`)
      }
    } else {
      // Jeśli niepełna data, nie zmieniaj daty ani komunikatu
    }
  }

  React.useEffect(() => {
    // Synchronizuj input tylko jeśli data została ustawiona przez props (np. z zewnątrz)
    if (date && value && +date === +value) {
      setInputValue(format(date, "dd-MM-yyyy"))
    }
    // Nie nadpisuj inputValue jeśli użytkownik wpisuje niepoprawną datę
  }, [date, value])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Pozwól na nawigację, backspace, delete, tab itp.
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Tab" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Home" ||
      e.key === "End" ||
      (e.ctrlKey && (e.key === "a" || e.key === "c" || e.key === "v" || e.key === "x"))
    ) {
      return
    }

    // Blokuj wszystko oprócz cyfr
    if (!/\d/.test(e.key)) {
      e.preventDefault()
    }

    // Blokuj wprowadzanie jeśli już mamy maksymalną długość (10 znaków: dd.mm.yyyy)
    const currentValue = (e.target as HTMLInputElement).value
    const numbersOnly = currentValue.replace(/\D/g, "")
    if (numbersOnly.length >= 8 && /\d/.test(e.key)) {
      e.preventDefault()
    }
  }

  const handleInputBlur = () => {
    // Jeśli data jest ustawiona, sformatuj input
    if (date) {
      setInputValue(format(date, "dd-MM-yyyy"))
    }
  }

  // Generuj lata (150 lat wstecz od dzisiaj)
  const currentYear = new Date().getFullYear()
  const minYear = currentYear - 150
  const years = Array.from({ length: 151 }, (_, i) => currentYear - i)

  // Miesiące
  const months = [
    { value: 0, label: "Styczeń" },
    { value: 1, label: "Luty" },
    { value: 2, label: "Marzec" },
    { value: 3, label: "Kwiecień" },
    { value: 4, label: "Maj" },
    { value: 5, label: "Czerwiec" },
    { value: 6, label: "Lipiec" },
    { value: 7, label: "Sierpień" },
    { value: 8, label: "Wrzesień" },
    { value: 9, label: "Październik" },
    { value: 10, label: "Listopad" },
    { value: 11, label: "Grudzień" },
  ]

  const handleMonthChange = (monthValue: string) => {
    const newMonth = Number.parseInt(monthValue)
    const newDate = new Date(calendarMonth.getFullYear(), newMonth, 1)
    setCalendarMonth(newDate)
  }

  const handleYearChange = (yearValue: string) => {
    const newYear = Number.parseInt(yearValue)
    const newDate = new Date(newYear, calendarMonth.getMonth(), 1)
    setCalendarMonth(newDate)
  }

  const handlePreviousMonth = () => {
    const newDate = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1)
    setCalendarMonth(newDate)
  }

  const handleNextMonth = () => {
    const newDate = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1)
    setCalendarMonth(newDate)
  }

  // W Popover przekazujemy isOpen i onOpenChange, aby kontrolować otwieranie/zamykanie
  return (
    <div className={cn("w-full", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            disabled={disabled}
            className={cn(
              "w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2 pr-10 focus:ring-2 focus:ring-cyan-400 font-mono tracking-wider",
              validationError && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            )}
            placeholder={placeholder}
            aria-invalid={!!validationError}
          />
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              disabled={disabled}
              className="absolute right-0 top-0 h-full px-3 hover:bg-cyan-200 hover:text-black text-cyan-200 bg-black/60 border border-cyan-400 rounded-md"
            >
              <CalendarIcon className="h-4 w-4 text-cyan-200 transition-colors hover:text-black" />
              <span className="sr-only">Otwórz kalendarz</span>
            </Button>
          </PopoverTrigger>
        </div>
        <PopoverContent className="bg-black/90 border-cyan-400 text-cyan-200 rounded-md shadow-lg min-w-[20rem] max-w-[22rem] w-full">
          <div className="flex items-center justify-between gap-2 mb-2 w-full">
            <div className="flex-1 flex justify-center gap-2">
              <Select value={calendarMonth.getMonth().toString()} onValueChange={handleMonthChange}>
                <SelectTrigger className="rounded-md border border-cyan-400 bg-black/60 text-cyan-200 px-2 py-1 focus:ring-2 focus:ring-cyan-400 min-w-[7.5rem]">
                  <SelectValue>{months[calendarMonth.getMonth()].label}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-cyan-400 text-cyan-200">
                  {months.map(m => (
                    <SelectItem key={m.value} value={m.value.toString()}>{m.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={calendarMonth.getFullYear().toString()} onValueChange={handleYearChange}>
                <SelectTrigger className="rounded-md border border-cyan-400 bg-black/60 text-cyan-200 px-2 py-1 focus:ring-2 focus:ring-cyan-400 min-w-[6rem]">
                  <SelectValue>{calendarMonth.getFullYear()}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-cyan-400 text-cyan-200 max-h-48 overflow-y-auto">
                  {years.map(y => (
                    <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              disabled={disabled}
              locale={pl}
              month={calendarMonth}
              onMonthChange={setCalendarMonth}
              initialFocus
              className="rounded-md"
              classNames={{
                head_row: "flex",
                head_cell: "text-cyan-300 rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-cyan-900/50 [&:has([aria-selected])]:bg-cyan-400/80 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-cyan-200 hover:bg-cyan-400 hover:text-black",
                day_range_end: "day-range-end",
                day_selected: "bg-cyan-400 text-black hover:bg-cyan-300 hover:text-black focus:bg-cyan-400 focus:text-black",
                day_today: "bg-cyan-900 text-cyan-200",
                day_outside: "text-cyan-700 opacity-50 aria-selected:bg-cyan-400/50 aria-selected:text-black aria-selected:opacity-30",
                day_disabled: "text-cyan-700 opacity-50",
                day_range_middle: "aria-selected:bg-cyan-300 aria-selected:text-black",
                day_hidden: "invisible",
              }}
            />
          </div>
        </PopoverContent>
      </Popover>
      {validationError && (
        <p className="text-xs text-red-500 font-medium mt-1">{validationError}</p>
      )}
    </div>
  )
}
