import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DatePicker from "@/components/ui/date-picker";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const wydzialy = [
	{ value: "W1", label: "WYDZIAŁ MECHANICZNY W1" },
	{
		value: "W2",
		label:
			"WYDZIAŁ ELEKTROTECHNIKI, ELEKTRONIKI, INFORMATYKI I AUTOMATYKI  W2",
	},
	{ value: "W3", label: "WYDZIAŁ CHEMICZNY W3" },
	{
		value: "W4",
		label:
			"WYDZIAŁ TECHNOLOGII MATERIAŁOWYCH I WZORNICTWA TEKSTYLIÓW W4",
	},
	{ value: "W5", label: "WYDZIAŁ BIOTECHNOLOGII I NAUK O ŻYWNOŚCI W5" },
	{
		value: "W6",
		label:
			"WYDZIAŁ BUDOWNICTWA, ARCHITEKTURY I INŻYNIERII ŚRODOWISKA W6",
	},
	{
		value: "W7",
		label:
			"WYDZIAŁ FIZYKI TECHNICZNEJ, INFORMATYKI I MATEMATYKI STOSOWANEJ W7",
	},
	{ value: "W8", label: "WYDZIAŁ ZARZĄDZANIA I INŻYNIERII PRODUKCJI W8" },
	{
		value: "W9",
		label:
			"WYDZIAŁ INŻYNIERII PROCESOWEJ I OCHRONY ŚRODOWISKA W9",
	},
];
const roczniki = [
	{ value: "I1", label: "I stopień – rok 1" },
	{ value: "I2", label: "I stopień – rok 2" },
	{ value: "I3", label: "I stopień – rok 3" },
	{
		value: "I4",
		label: "I stopień – rok 4 (dla studiów inżynierskich – 7 semestrów)",
	},
	{ value: "II1", label: "II stopień – rok 1" },
	{ value: "II2", label: "II stopień – rok 2" },
];
const rozmiary = [
	{ value: "S", label: "S" },
	{ value: "M", label: "M" },
	{ value: "L", label: "L" },
	{ value: "XL", label: "XL" },
	{ value: "XXL", label: "XXL" },
];
const diety = [
	{ value: "mięsna", label: "mięsna" },
	{ value: "wegetariańska", label: "wegetariańska" },
	{ value: "wegańska", label: "wegańska" },
	{ value: "bezglutenowa", label: "bezglutenowa" },
];

export default function RegistrationForm() {
	const [form, setForm] = useState({
		imie: "",
		nazwisko: "",
		dataUrodzenia: null as Date | null,
		numerIndeksu: "",
		wydzial: "",
		rocznik: "",
		rozmiar: "",
		dieta: "",
		alergeny: "",
		uwagi: "",
		akceptacja: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
		const { name, value, type } = target;
		setForm({
			...form,
			[name]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: obsługa wysyłki
		alert("Dziękujemy za zgłoszenie! (prototyp)");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 w-full max-w-md mx-auto"
		>
			<div>
				<Label htmlFor="imie">Imię</Label>
				<Input
					id="imie"
					name="imie"
					value={form.imie}
					onChange={handleChange}
					required
					maxLength={50}
				/>
			</div>
			<div>
				<Label htmlFor="nazwisko">Nazwisko</Label>
				<Input
					id="nazwisko"
					name="nazwisko"
					value={form.nazwisko}
					onChange={handleChange}
					required
					maxLength={100}
				/>
			</div>
			<div>
				<Label htmlFor="dataUrodzenia">Data urodzenia</Label>
				<DatePicker
					label="Data urodzenia"
					value={form.dataUrodzenia ?? undefined}
					onChange={date => setForm({ ...form, dataUrodzenia: date ?? null })}
				/>
			</div>
			<div>
				<Label htmlFor="numerIndeksu">Numer indeksu</Label>
				<Input
					id="numerIndeksu"
					name="numerIndeksu"
					value={form.numerIndeksu}
					onChange={handleChange}
					required
					pattern="\d{6}"
					maxLength={6}
					minLength={6}
				/>
			</div>
			<div>
				<Label htmlFor="wydzial">Wydział</Label>
				<Select
					name="wydzial"
					value={form.wydzial}
					onValueChange={value => setForm({ ...form, wydzial: value })}
					required
				>
					<SelectTrigger className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2">
						<SelectValue placeholder="Wybierz wydział" />
					</SelectTrigger>
					<SelectContent>
						{wydzialy.map(opt => (
							<SelectItem key={opt.value} value={opt.value}>
								{opt.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div>
				<Label htmlFor="rocznik">Rocznik</Label>
				<Select
					name="rocznik"
					value={form.rocznik}
					onValueChange={value => setForm({ ...form, rocznik: value })}
					required
				>
					<SelectTrigger className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2">
						<SelectValue placeholder="Wybierz rocznik" />
					</SelectTrigger>
					<SelectContent>
						{roczniki.map(opt => (
							<SelectItem key={opt.value} value={opt.value}>
								{opt.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div>
				<Label htmlFor="rozmiar">Rozmiar koszulki</Label>
				<Select
					name="rozmiar"
					value={form.rozmiar}
					onValueChange={value => setForm({ ...form, rozmiar: value })}
					required
				>
					<SelectTrigger className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2">
						<SelectValue placeholder="Wybierz rozmiar" />
					</SelectTrigger>
					<SelectContent>
						{rozmiary.map(opt => (
							<SelectItem key={opt.value} value={opt.value}>
								{opt.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div>
				<Label htmlFor="dieta">Rodzaj diety</Label>
				<Select
					name="dieta"
					value={form.dieta}
					onValueChange={value => setForm({ ...form, dieta: value })}
					required
				>
					<SelectTrigger className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2">
						<SelectValue placeholder="Wybierz dietę" />
					</SelectTrigger>
					<SelectContent>
						{diety.map(opt => (
							<SelectItem key={opt.value} value={opt.value}>
								{opt.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div>
				<Label htmlFor="alergeny">Alergeny</Label>
				<textarea
					id="alergeny"
					name="alergeny"
					value={form.alergeny}
					onChange={handleChange}
					maxLength={1000}
					className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2"
					rows={2}
				/>
			</div>
			<div>
				<Label htmlFor="uwagi">Dodatkowe uwagi</Label>
				<textarea
					id="uwagi"
					name="uwagi"
					value={form.uwagi}
					onChange={handleChange}
					maxLength={2000}
					className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2"
					rows={2}
				/>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox
					id="akceptacja"
					name="akceptacja"
					checked={form.akceptacja}
					onCheckedChange={(checked) =>
						setForm({ ...form, akceptacja: !!checked })
					}
					required
				/>
				<Label htmlFor="akceptacja">
					Akceptuję regulamin i RODO (wymagane)
				</Label>
			</div>
			<Button
				type="submit"
				className="mt-2 bg-cyan-400 text-black font-bold hover:bg-cyan-300 neon-border"
			>
				Wyślij zgłoszenie
			</Button>
		</form>
	);
}
