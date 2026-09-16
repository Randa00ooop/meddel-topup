import Link from "next/link";

const games = [
  { id: "mobile-legends", name: "Mobile Legends" },
  { id: "free-fire", name: "Free Fire" },
  { id: "pubg-mobile", name: "PUBG Mobile" },
  { id: "genshin-impact", name: "Genshin Impact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      {/* Header */}
      <header className="max-w-4xl mx-auto flex justify-between items-center pb-8 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-blue-500">Meddel Topup</h1>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold transition">
          Masuk / Daftar
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto my-12 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Top Up Game Favoritmu Cepat & Murah
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          Pilih game favoritmu di bawah untuk mulai mengisi ulang nominal item atau voucher.
        </p>

        {/* List Game Interaktif */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {games.map((game) => (
            <Link key={game.id} href={`/topup/${game.id}`}>
              <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500 hover:scale-105 cursor-pointer transition text-center h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-slate-700 rounded-lg mb-4 flex items-center justify-center font-bold text-slate-400">
                  GAME
                </div>
                <h3 className="font-semibold text-sm">{game.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}