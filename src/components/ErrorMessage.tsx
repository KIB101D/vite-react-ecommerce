interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({
  title = "Something went wrong",
  message,
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-md text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 font-heading">
          {title}
        </h2>

        <p className="mt-3 leading-relaxed text-gray-500">{message}</p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-3 mt-8 text-sm font-medium text-white transition bg-black rounded-xl hover:bg-gray-800 active:scale-[0.98]"
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
