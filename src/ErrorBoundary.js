import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, errorInfo);
    }

    render() {
        console.log("ERRORBOUNDARY render");
        if (this.state.hasError) {
            if (this.props.errorUI) {
                return this.props.errorUI;
            }
            return <div> Something went Wrong</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;