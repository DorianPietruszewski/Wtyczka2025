export default function RulesTab() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[60vh] gap-8 pt-8">
      <h2 className="text-3xl font-bold text-cyan-200 mb-4 neon-text">Regulamin</h2>
      <div className="bg-black/60 neon-border rounded-xl p-6 text-cyan-100 max-w-2xl">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Przestrzegaj zasad bezpieczeństwa.</li>
          <li>Szanuj innych uczestników i organizatorów.</li>
          <li>Nie spożywaj alkoholu poza wyznaczonymi miejscami.</li>
          <li>Dbaj o czystość i porządek.</li>
          <li>Stosuj się do poleceń organizatorów.</li>
        </ol>
      </div>
    </section>
  );
}
