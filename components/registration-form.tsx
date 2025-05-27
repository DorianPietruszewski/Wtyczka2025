import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DatePicker from "@/components/ui/date-picker";
import { ComboBox } from "@/components/ui/combobox";

const wydzialy = [
	{ value: "W1", label: "Wydział Mechaniczny (W1)" },
	{ value: "W2", label: "Wydział Elektrotechniki, Elektroniki, Informatyki i Automatyki (W2)" },
	{ value: "W3", label: "Wydział Chemiczny (W3)" },
	{ value: "W4", label: "Wydział Technologii Materiałowych i Wzornictwa Tekstyliów (W4)" },
	{ value: "W5", label: "Wydział Biotechnologii i Nauk o Żywności (W5)" },
	{ value: "W6", label: "Wydział Budownictwa, Architektury i Inżynierii Środowiska (W6)" },
	{ value: "W7", label: "Wydział Fizyki Technicznej, Informatyki i Matematyki Stosowanej (W7)" },
	{ value: "W8", label: "Wydział Organizacji i Zarządzania (W8)" },
	{ value: "W9", label: "Wydział Inżynierii Procesowej i Ochrony Środowiska (W9)" },
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

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
		const { name, value, type } = target;
		setForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const selected = Object.entries(form)
			.map(([key, val]) => `${key}: ${val instanceof Date ? val.toLocaleDateString() : val}`)
			.join("\n");
		alert(`Dziękujemy za zgłoszenie! (prototyp)\n\nPodsumowanie:\n${selected}`);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-5 w-full max-w-lg mx-auto bg-black/70 neon-border rounded-2xl p-8 shadow-xl"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
				<div>
					<Label htmlFor="imie">Imię</Label>
					<Input
						id="imie"
						name="imie"
						value={form.imie}
						onChange={handleChange}
						required
						maxLength={50}
						className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2 focus:ring-2 focus:ring-cyan-400"
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
						className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2 focus:ring-2 focus:ring-cyan-400"
					/>
				</div>
				<div className="md:col-span-2">
					<Label htmlFor="dataUrodzenia">Data urodzenia</Label>
					<DatePicker
						value={form.dataUrodzenia ?? undefined}
						onChange={(date) => setForm((prev) => ({ ...prev, dataUrodzenia: date ?? null }))}
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
						className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2 focus:ring-2 focus:ring-cyan-400"
					/>
				</div>
				<div>
					<Label htmlFor="wydzial" className="text-cyan-400">Wydział</Label>
					<ComboBox
						options={wydzialy}
						value={form.wydzial}
						onChange={val => setForm(prev => ({ ...prev, wydzial: val }))}
						name="wydzial"
						label={undefined}
						placeholder="Wybierz wydział"
						required
					/>
				</div>
				<div>
					<Label htmlFor="rocznik" className="text-cyan-400">Rocznik</Label>
					<select
						id="rocznik"
						name="rocznik"
						value={form.rocznik}
						onChange={handleChange}
						required
						className="w-full rounded-md border-2 border-cyan-400 bg-black text-cyan-400 p-2 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-300"
					>
						<option value="" disabled className="bg-black text-cyan-400">
							Wybierz rocznik
						</option>
						{roczniki.map((opt) => (
							<option key={opt.value} value={opt.value} className="bg-black text-cyan-400">
								{opt.label}
							</option>
						))}
					</select>
				</div>
				<div>
					<Label htmlFor="rozmiar" className="text-cyan-400">Rozmiar koszulki</Label>
					<select
						id="rozmiar"
						name="rozmiar"
						value={form.rozmiar}
						onChange={handleChange}
						required
						className="w-full rounded-md border-2 border-cyan-400 bg-black text-cyan-400 p-2 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-300"
					>
						<option value="" disabled className="bg-black text-cyan-400">
							Wybierz rozmiar
						</option>
						{rozmiary.map((opt) => (
							<option key={opt.value} value={opt.value} className="bg-black text-cyan-400">
								{opt.label}
							</option>
						))}
					</select>
				</div>
				<div>
					<Label htmlFor="dieta" className="text-cyan-400">Rodzaj diety</Label>
					<select
						id="dieta"
						name="dieta"
						value={form.dieta}
						onChange={handleChange}
						required
						className="w-full rounded-md border-2 border-cyan-400 bg-black text-cyan-400 p-2 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-300"
					>
						<option value="" disabled className="bg-black text-cyan-400">
							Wybierz dietę
						</option>
						{diety.map((opt) => (
							<option key={opt.value} value={opt.value} className="bg-black text-cyan-400">
								{opt.label}
							</option>
						))}
					</select>
				</div>
				<div className="md:col-span-2">
					<Label htmlFor="alergeny">Alergeny</Label>
					<textarea
						id="alergeny"
						name="alergeny"
						value={form.alergeny}
						onChange={handleChange}
						maxLength={1000}
						className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2 focus:ring-2 focus:ring-cyan-400"
						rows={2}
					/>
				</div>
				<div className="md:col-span-2">
					<Label htmlFor="uwagi">Dodatkowe uwagi</Label>
					<textarea
						id="uwagi"
						name="uwagi"
						value={form.uwagi}
						onChange={handleChange}
						maxLength={2000}
						className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2 focus:ring-2 focus:ring-cyan-400"
						rows={2}
					/>
				</div>
			</div>
			<div className="flex items-center gap-3 mt-2">
				<Checkbox
					id="akceptacja"
					name="akceptacja"
					checked={form.akceptacja}
					onCheckedChange={(checked) => setForm((prev) => ({ ...prev, akceptacja: !!checked }))}
					required
				/>
				<Label htmlFor="akceptacja" className="text-cyan-200">
					Akceptuję regulamin i RODO (wymagane)
				</Label>
			</div>
			<Button
				type="submit"
				className="mt-4 bg-cyan-400 text-black font-bold hover:bg-cyan-300 neon-border rounded-lg shadow-lg px-8 py-3 text-lg"
			>
				Wyślij zgłoszenie
			</Button>
		</form>
	);
}
