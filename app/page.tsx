import Link from "next/link";


export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center p-24">
        <samp className="text-5xl">hola paqui !!!</samp>
        <Link href={'/about'}> IR Page-About</Link>
      </main>
    </div>
  );
}
