'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold text-heading">Что-то пошло не так</h1>
        <p className="mb-6 text-gray-600">Произошла непредвиденная ошибка</p>
        <button
          onClick={reset}
          className="inline-block rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}
