import * as React from "react"

type ErrorBoundaryProps = Omit<React.ComponentProps<"div">, "onError"> & {
  key: React.Key
  children?: React.ReactNode
  onError: (error: Error) => void
}

type ErrorBoundaryState = {
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  override componentDidCatch(error: Error) {
    this.props.onError(error)
  }

  override render() {
    return this.state.error ? null : this.props.children
  }
}
