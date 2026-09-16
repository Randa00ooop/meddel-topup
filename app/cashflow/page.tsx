import Link from "next/link";

const transactions = [
  { id: "TRX-001", game: "Mobile Legends", item: "86 Diamonds", in: 20000, modal: 18200, profit: 1800, status: "Sukses", time: "10:15 WIB" },
  { id: "TRX-002", game: "Free Fire", item: "140 Diamonds", in: 19000, modal: 17100, profit: 1900, status: "Sukses", time: "10:30 WIB" },
  { id: "TRX-003", game: "PUBG Mobile", item: "60 UC", in: 15000, modal: 13800, profit: 1200, status: "Sukses", time: "11:05 WIB" },
  { id: "TRX-004", game: "Genshin Impact", item: "300 Genesis", in: 65000, modal: 60000, profit: 5000, status: "Sukses", time: "11:40 WIB" },
];

export default function CashflowPage() {
  const totalIn = transactions.reduce((acc, t) => acc + t.in, 0);
  const totalModal = transactions.reduce((acc, t) => acc + t.modal, 0);
  const totalProfit = transactions.reduce((acc, t) => acc + t.profit, 0);

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-blue-400 hover:underline text-sm mb-6 inline-block">
          ← Kembali ke Beranda
        </Link>

        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-500">Laporan Cashflow Digital</h1>
            <p className="text-slate-400 text-sm mt-1">Pencatatan Otomatis Real-Time Store fffff</p>
          </div>
          <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-semibold px-3 py-1 rounded-full">
            ● System Active
          </span>
        </div>

        {/* Ringkasan Metrics Cashflow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-xs font-medium">Total Cash In (Pemasukan)</p>
            <h3 className="text-2xl font-bold text-green-400 mt-2">
              Rp {totalIn.toLocaleString("id-ID")}
            </h3>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-xs font-medium">Total Cash Out (Modal API Supplier)</p>
            <h3 className="text-2xl font-bold text-red-400 mt-2">
              Rp {totalModal.toLocaleString("id-ID")}
            </h3>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-xs font-medium">Net Profit (Laba Bersih)</p>
            <h3 className="text-2xl font-bold text-blue-400 mt-2">
              Rp {totalProfit.toLocaleString("id-ID")}
            </h3>
          </div>
        </div>

        {/* Tabel Mutasi Transaksi Digital */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div className="p-4 border-b border-slate-700">
            <h2 className="font-semibold text-sm">Riwayat Mutasi Arus Kas</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/50 text-slate-400 text-xs uppercase border-b border-slate-700">
                <tr>
                  <th className="p-4">ID TRX</th>
                  <th className="p-4">Waktu</th>
                  <th className="p-4">Produk</th>
                  <th className="p-4">Masuk (Gross)</th>
                  <th className="p-4">Modal Supplier</th>
                  <th className="p-4">Margin (Profit)</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {transactions.map((trx) => (
                  <tr key={trx.id} className="hover:bg-slate-700/30">
                    <td className="p-4 font-mono text-xs text-blue-400">{trx.id}</td>
                    <td className="p-4 text-xs">{trx.time}</td>
                    <td className="p-4 font-medium text-white">{trx.game} - {trx.item}</td>
                    <td className="p-4 text-green-400">+Rp {trx.in.toLocaleString("id-ID")}</td>
                    <td className="p-4 text-red-400">-Rp {trx.modal.toLocaleString("id-ID")}</td>
                    <td className="p-4 font-bold text-blue-400">+Rp {trx.profit.toLocaleString("id-ID")}</td>
                    <td className="p-4">
                      <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded">
                        {trx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}