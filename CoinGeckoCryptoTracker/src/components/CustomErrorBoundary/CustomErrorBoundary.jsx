import { ErrorBoundary } from 'react-error-boundary';
import { AlertTriangle } from 'lucide-react';
function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="rounded-2xl shadow-xl p-6 max-w-md w-full border border-red-200">
                <div className="flex items-start space-x-4">
                    <div className="text-red-600">
                        <AlertTriangle className="w-8 h-8" />
                    </div>
                    <div className='text-wrap'>
                        <h2 className="text-xl font-semibold text-red-600 mb-2">
                            Oops! Something went wrong.
                        </h2>
                        <p className="text-amber-200 mb-2">
                            {error?.message || "An unexpected error occurred."}
                        </p>
                        <button
                            onClick={resetErrorBoundary}
                            className="mt-3 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function CustomErrorBoundary({ children }) {
    return (
        <ErrorBoundary
            FallbackComponent={CustomErrorBoundaryUI}
            onReset={() => window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    )
}