import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    telefon: "",
    uczelnia: "",
    kierunek: "",
    rok: "",
    dodatkowe: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: obsługa wysyłki
    alert("Dziękujemy za zgłoszenie! (prototyp)");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div>
        <Label htmlFor="imie">Imię</Label>
        <Input id="imie" name="imie" value={form.imie} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="nazwisko">Nazwisko</Label>
        <Input id="nazwisko" name="nazwisko" value={form.nazwisko} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="telefon">Telefon</Label>
        <Input id="telefon" name="telefon" value={form.telefon} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="uczelnia">Uczelnia</Label>
        <Input id="uczelnia" name="uczelnia" value={form.uczelnia} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="kierunek">Kierunek studiów</Label>
        <Input id="kierunek" name="kierunek" value={form.kierunek} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="rok">Rok studiów</Label>
        <Input id="rok" name="rok" value={form.rok} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="dodatkowe">Dodatkowe informacje</Label>
        <textarea id="dodatkowe" name="dodatkowe" value={form.dodatkowe} onChange={handleChange} className="w-full rounded-md border border-cyan-400 bg-black/60 text-cyan-200 p-2" rows={3} />
      </div>
      <Button type="submit" className="mt-2 bg-cyan-400 text-black font-bold hover:bg-cyan-300 neon-border">Wyślij zgłoszenie</Button>
    </form>
  );
}
