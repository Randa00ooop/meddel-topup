"use client";

import { useState, use } from "react";
import Link from "next/link";

const nominalList = [
    { id: 1, name: "86 Diamonds", price: 20000 },
    { id: 2, name: "172 Diamonds", price: 40000 },
    { id: 3, name: "257 Diamonds", price: 60000 },
    { id: 4, name: "706 Diamonds", price: 160000 },
    { id: 5, name: "2195 Diamonds", price: 490000 },
    { id: 6, name: "Starlight Member", price: 130000 },
];

const paymentMethods = [
    { id: "qris", name: "QRIS (Semua E-Wallet)", category: "E-Wallet" },
    { id: "gopay", name: "GoPay", category: "E-Wallet" },
    { id: "dana", name: "DANA", category: "E-Wallet" },
    { id: "ovo", name: "OVO", category: "E-Wallet" },
    { id: "bca", name: "BCA Virtual Account", category: "Bank Transfer" },
];

export default function TopupDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const gameName = resolvedParams.slug.replace("-", " ").toUpperCase();

    const [userId, setUserId] = useState("");
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    const selectedNominal = nominalList.find((item) => item.id === selectedItem);

    return (
        <main className="min-h-screen bg-slate-900 text-white p-8">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="text-blue-400 hover:underline text-sm mb-6 inline-block">
                    ← Kembali ke Beranda
                </Link>

                <h1 className="text-3xl font-bold mb-2 text-blue-500">Top Up {gameName}</h1>
                <p className="text-slate-400 text-sm mb-8">
                    Masukkan ID Akun, pilih nominal, dan tentukan metode pembayaran.
                </p>

                {/* 1. Form User ID */}
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

                {/* 2. Pilihan Nominal Produk */}
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
                                <div className="text-blue-400 text-xs mt-1">
                                    Rp {item.price.toLocaleString("id-ID")}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Metode Pembayaran */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
                    <h2 className="text-lg font-semibold mb-4">3. Pilih Pembayaran</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {paymentMethods.map((pay) => (
                            <div
                                key={pay.id}
                                onClick={() => setSelectedPayment(pay.id)}
                                className={`p-4 rounded-lg border cursor-pointer flex justify-between items-center transition ${selectedPayment === pay.id
                                    ? "border-blue-500 bg-blue-950/40"
                                    : "border-slate-700 bg-slate-900 hover:border-slate-500"
                                    }`}
                            >
                                <span className="font-medium text-sm">{pay.name}</span>
                                <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                                    {pay.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tombol Bayar */}
                <button
                    onClick={() => setShowModal(true)}
                    disabled={!userId || !selectedItem || !selectedPayment}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold transition text-center"
                >
                    Bayar Sekarang
                </button>

                {/* Modal Ringkasan Pembayaran */}
                {showModal && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-md w-full relative">
                            <h3 className="text-xl font-bold text-blue-400 mb-4">Detail Pembayaran</h3>
                            <div className="space-y-3 text-sm border-y border-slate-700 py-4 mb-4">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Game:</span>
                                    <span className="font-semibold">{gameName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">User ID:</span>
                                    <span className="font-semibold">{userId}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Item:</span>
                                    <span className="font-semibold">{selectedNominal?.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Metode:</span>
                                    <span className="font-semibold uppercase">{selectedPayment}</span>
                                </div>
                                <div className="flex justify-between text-base font-bold text-blue-400 pt-2 border-t border-slate-700/50">
                                    <span>Total Bayar:</span>
                                    <span>Rp {selectedNominal?.price.toLocaleString("id-ID")}</span>
                                </div>
                            </div>

                            {/* Instruksi Transfer Demo */}
                            <div className="bg-slate-900 p-4 rounded-lg text-center mb-6 border border-slate-700">
                                <p className="text-xs text-slate-400 mb-1">Transfer e-Wallet / QRIS ke:</p>
                                <p className="font-mono font-bold text-lg text-green-400">0821-xxxx-xxxx</p>
                                <p className="text-xs text-slate-500 mt-1">a.n. FFFFF</p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition"
                                >
                                    Tutup
                                </button>
                                <button
                                    onClick={() => {
                                        alert("Terima kasih! Pesanan kamu sedang diproses.");
                                        setShowModal(false);
                                    }}
                                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition"
                                >
                                    Konfirmasi Sudah Bayar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}