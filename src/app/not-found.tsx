import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background text-foreground">
      <h2 className="font-grotesk text-6xl font-bold mb-4 grad-text">404</h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
        Página no encontrada / Page not found
      </p>
      <Link
        href="/es"
        className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Volver al inicio / Return home
      </Link>
    </div>
  );
}
