/* eslint-disable no-unused-vars */
import React, { ErrorInfo, Suspense } from 'react';

import { PageError } from '@/widgets/PageError';
import { Loader } from '@/shared/ui/Loader';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Suspense fallback={<Loader />}>
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}
