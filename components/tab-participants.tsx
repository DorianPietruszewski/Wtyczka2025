export default function ParticipantsTab() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[60vh] gap-8 pt-8">
      <h2 className="text-3xl font-bold text-cyan-200 mb-4 neon-text">Dla uczestników</h2>
      <ul className="list-disc pl-6 text-cyan-200 space-y-2 text-lg">
        <li>Co zabrać na wyjazd</li>
        <li>Plan wyjazdu</li>
        <li>FAQ</li>
        <li>Ważne kontakty</li>
        <li>Aktualności</li>
      </ul>
    </section>
  );
}
