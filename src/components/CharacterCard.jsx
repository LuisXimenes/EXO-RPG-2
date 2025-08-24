// src/components/CharacterCard.jsx
export default function CharacterCard({ character }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-4 border border-gray-700">
      <h2 className="text-xl font-semibold">{character.name}</h2>
      <p>Classe: {character.classe}</p>
      <p>Nível: {character.nivel}</p>
      <button className="mt-2 px-3 py-1 bg-blue-600 rounded hover:bg-blue-500">
        Ver Ficha
      </button>
    </div>
  );
}
