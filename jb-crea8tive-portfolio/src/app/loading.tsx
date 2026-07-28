export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#040B17]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-brand-gold border-t-transparent" />

        <h2 className="font-display text-2xl font-bold text-white">
          JB<span className="text-brand-gold">.</span>
        </h2>
      </div>
    </div>
  );
}
