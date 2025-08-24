// src/pages/Characters.jsx
import CharacterCard from "../components/CharacterCard";

export default function Characters() {
  const characters = [
    { id: 1, name: "Kael", classe: "Combatente", nivel: 2 },
    { id: 2, name: "Lyra", classe: "Ocultista", nivel: 4 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Seus Personagens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}
