// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";

export default function App() {
  const [page, setPage] = useState("characters");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar setPage={setPage} />
      <main className="p-6">
        {page === "characters" && <Characters />}
        {page === "create" && <h1>Criar Ficha (em construção)</h1>}
      </main>
    </div>
  );
}
