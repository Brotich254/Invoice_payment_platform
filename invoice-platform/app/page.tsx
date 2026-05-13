import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center max-w-xl px-4">
        <div className="text-5xl mb-4">🧾</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">InvoiceFlow</h1>
        <p className="text-lg text-gray-500 mb-8">Create invoices, send payment links, get paid fast.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/login" className="border bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition">Login</Link>
          <Link href="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition font-semibold">Get Started Free</Link>
        </div>
      </div>
    </div>
  );
}
