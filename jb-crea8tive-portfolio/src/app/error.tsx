"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-[#040B17] text-white">
      <h1 className="font-display text-5xl font-bold">
        Something went wrong.
      </h1>

      <button
        onClick={reset}
        className="rounded-full bg-brand-gold px-8 py-4 font-semibold text-black"
      >
        Try Again
      </button>
    </div>
  );
}