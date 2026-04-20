import { Component, ReactNode } from 'react';

import { ErrorBoundaryComponent } from '@components/atoms/error-boundary/ErrorBoundary';

interface Props {
  debugMode: boolean;
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryComponent
          debugMode={this.props.debugMode}
          error={this.state.error}
        />
      );
    }

    return this.props.children;
  }
}
