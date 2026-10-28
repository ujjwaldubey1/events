import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="font-mono text-xs tracking-[0.22em] text-flare uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl italic">Not on this map.</h1>
      <Link href="/" className="mt-8 inline-block text-flare hover:underline">
        Back to Circuit
      </Link>
    </div>
  );
}
