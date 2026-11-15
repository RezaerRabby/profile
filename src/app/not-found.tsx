
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-5 text-center text-white">
      <h1 className="text-8xl font-bold text-amber-400">404</h1>

      <h2 className="mt-6 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md leading-7 text-slate-400">
        Sorry, the page you are looking for does not exist
        or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-md bg-amber-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
      >
        Back to Home
      </Link>
    </main>
  );
}
