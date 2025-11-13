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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 bg-gradient-to-b from-fuselage-50 to-fuselage-100 p-6 text-center">
      <div className="flex w-full max-w-md flex-col items-center space-y-6 rounded-2xl bg-white p-8 shadow-md">
        <AlertTriangle className="h-14 w-14 text-red-500" />
        <h1 className="text-2xl font-semibold text-gray-800">
          Something went wrong
        </h1>
        <p className="text-sm text-gray-600 sm:text-base">
          An unexpected error occurred. You can try reloading the page or
          clearing your cookies and cache.
        </p>

        {debugMode && error && (
          <pre className="max-h-64 w-full overflow-auto rounded-lg bg-gray-100 p-4 text-left text-xs text-red-600 sm:text-sm">
            {error.message || String(error)}
          </pre>
        )}

        <div className="mt-4 flex w-full flex-col justify-center gap-4 sm:flex-row">
          <Button
            onClick={handleReload}
            className="flex w-auto items-center justify-center gap-2 sm:w-full"
            size={'lg'}
          >
            <RefreshCw className="h-4 w-4" />
            Reload
          </Button>
        </div>
      </div>
    </div>
  );
};
