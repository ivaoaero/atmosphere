import React from 'react';

import { AlertTriangle, RefreshCw } from 'lucide-react';

import { Button } from '../button';

interface ErrorBoundaryProps {
  debugMode: boolean;
  error?: Error;
}

export const ErrorBoundaryComponent: React.FC<ErrorBoundaryProps> = ({
  error,
  debugMode,
}) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="from-fuselage-50 to-fuselage-100 dark:from-fuselage-800 dark:to-fuselage-900 flex min-h-screen flex-col items-center justify-center bg-linear-to-b p-6 text-center transition-colors duration-300">
      <div className="dark:border-fuselage-700 dark:bg-fuselage-800 flex w-full max-w-md flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-md transition-colors duration-300 dark:border">
        <AlertTriangle className="dark:text-semantic-red-400 h-14 w-14 text-red-500" />

        <h1 className="dark:text-fuselage-50 text-2xl font-semibold text-gray-800">
          Something went wrong
        </h1>

        <p className="dark:text-fuselage-300 text-sm text-gray-600 sm:text-base">
          An unexpected error occurred. You can try reloading the page or
          clearing your cookies and cache.
        </p>

        {debugMode && error && (
          <pre className="dark:border-fuselage-600 dark:bg-fuselage-700 dark:text-semantic-red-200 max-h-64 w-full overflow-auto rounded-lg bg-gray-100 p-4 text-left text-xs text-red-600 sm:text-sm dark:border">
            {error.message || String(error)}
          </pre>
        )}

        <div className="mt-4 flex w-full flex-col justify-center gap-4 sm:flex-row">
          <Button
            onClick={handleReload}
            className="flex w-auto items-center justify-center gap-2 sm:w-full"
            size="lg"
          >
            <RefreshCw className="h-4 w-4" />
            Reload
          </Button>
        </div>
      </div>
    </div>
  );
};
