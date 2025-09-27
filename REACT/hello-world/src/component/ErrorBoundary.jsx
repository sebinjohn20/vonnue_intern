import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    // State to track if an error occurred
    this.state = {
      hasError: false
    };
  }

  // Update state when an error is caught
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

   componentDidCatch(error,info){
    
   }
  render() {
    // If there is an error, show fallback UI
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    // Otherwise, render children components normally
    return this.props.children;
  }
}

export default ErrorBoundary;
