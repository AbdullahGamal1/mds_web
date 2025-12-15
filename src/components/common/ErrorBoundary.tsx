import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center">
          <div className="max-w-md rounded-lg bg-white p-8 shadow-xl">
            <h1 className="mb-4 text-3xl font-bold text-red-600">Ooops!</h1>
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Something went wrong.</h2>
            <p className="mb-6 text-gray-600">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            {this.state.error && (
              <pre className="mb-6 max-h-40 overflow-auto rounded bg-gray-100 p-2 text-left text-xs text-red-800">
                {this.state.error.toString()}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="rounded bg-blue-600 px-6 py-2 pb-2.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
