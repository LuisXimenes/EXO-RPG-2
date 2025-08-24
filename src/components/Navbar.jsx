// src/components/Navbar.jsx
export default function Navbar({ setPage }) {
  return (
    <nav className="bg-gray-800 p-4 flex gap-6 shadow-md">
      <button
        onClick={() => setPage("characters")}
        className="hover:text-blue-400"
      >
        Personagens
      </button>
      <button onClick={() => setPage("create")} className="hover:text-blue-400">
        Criar Ficha
      </button>
    </nav>
  );
}
