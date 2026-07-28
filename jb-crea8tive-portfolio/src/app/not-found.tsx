import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-[#040B17] text-white">
      <h1 className="font-display text-7xl font-bold">404</h1>

      <p className="text-white/70">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="rounded-full bg-brand-gold px-8 py-4 font-semibold text-black"
      >
        Back Home
      </Link>
    </div>
  );
}