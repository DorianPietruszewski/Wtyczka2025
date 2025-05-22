import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function SubTabs({ value, onChange }: { value: string, onChange: (v: string) => void }) {
  return (
    <Tabs value={value} onValueChange={onChange} className="w-full flex justify-center mt-2">
      <TabsList className="bg-black/60 neon-border">
        <TabsTrigger value="rejestracja">Rejestracja</TabsTrigger>
        <TabsTrigger value="co-zabrac">Co warto zabrać</TabsTrigger>
        <TabsTrigger value="info">Informacje o wyjeździe</TabsTrigger>
        <TabsTrigger value="aktualnosci">Aktualności</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
// Użyj tego komponentu pod główną nawigacją na każdej podstronie/tabie.
