import { Component, ReactNode } from "react";
import { ErrorBoundaryContent } from "./ErrorBoundaryContent";

export interface IErrorBoundaryProps {
  children: ReactNode;
  content?: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children, content = <ErrorBoundaryContent /> } = this.props;

    return hasError ? content : children;
  }
}

export default ErrorBoundary;
