export default function ContactTab() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[60vh] gap-8 pt-8">
      <h2 className="text-3xl font-bold text-cyan-200 mb-4 neon-text">Kontakt</h2>
      <div className="bg-black/60 neon-border rounded-xl p-6 text-cyan-100 max-w-xl">
        <p><b>Mail:</b> wtyczka2025@email.com</p>
        <p><b>Telefon:</b> 123 456 789</p>
        <p><b>Facebook:</b> <a href="https://facebook.com" className="underline text-cyan-300 hover:text-cyan-100">facebook.com/wtyczka2025</a></p>
      </div>
    </section>
  );
}
