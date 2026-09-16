"use client";

import { useState, use } from "react";
import Link from "next/link";

const nominalList = [
    { id: 1, name: "86 Diamonds", price: "Rp 20.000" },
    { id: 2, name: "172 Diamonds", price: "Rp 40.000" },
    { id: 3, name: "257 Diamonds", price: "Rp 60.000" },
    { id: 4, name: "706 Diamonds", price: "Rp 160.000" },
    { id: 5, name: "2195 Diamonds", price: "Rp 490.000" },
    { id: 6, name: "Starlight Member", price: "Rp 130.000" },
];

export default function TopupDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const gameName = resolvedParams.slug.replace("-", " ").toUpperCase();

    const [userId, setUserId] = useState("");
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-slate-900 text-white p-8">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="text-blue-400 hover:underline text-sm mb-6 inline-block">
                    ← Kembali ke Beranda
                </Link>

                <h1 className="text-3xl font-bold mb-2 text-blue-500">Top Up {gameName}</h1>
                <p className="text-slate-400 text-sm mb-8">
                    Masukkan ID Akun dan pilih jumlah nominal yang ingin dipesan.
                </p>

                {/* Form User ID */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
                    <h2 className="text-lg font-semibold mb-4">1. Masukkan User ID</h2>
                    <input
                        type="text"
                        placeholder="Contoh: 12345678 (1234)"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Pilihan Nominal Produk */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
                    <h2 className="text-lg font-semibold mb-4">2. Pilih Nominal Top Up</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {nominalList.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedItem(item.id)}
                                className={`p-4 rounded-lg border cursor-pointer transition ${selectedItem === item.id
                                        ? "border-blue-500 bg-blue-950/40"
                                        : "border-slate-700 bg-slate-900 hover:border-slate-500"
                                    }`}
                            >
                                <div className="font-semibold text-sm">{item.name}</div>
                                <div className="text-blue-400 text-xs mt-1">{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tombol Beli */}
                <button
                    onClick={() => alert(`Pesanan berhasil! ID: ${userId}`)}
                    disabled={!userId || !selectedItem}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold transition text-center"
                >
                    Bayar Sekarang
                </button>
            </div>
        </main>
    );
}