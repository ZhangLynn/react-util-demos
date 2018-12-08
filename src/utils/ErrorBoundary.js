/**
 * created by LynnZhang on 2018/12/8
 */
import React from 'react'

const ErrorBoundary = errorInfo => WrapComponent => {
    return class ErrorBoundary extends React.Component{
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
        }

        componentDidCatch(error, info) {
            // You can also log the error to an error reporting service
            // logErrorToMyService(error, info);
        }

        render() {
            if (this.state.hasError) {
                // You can render any custom fallback UI
                return <h1>{errorInfo}</h1>;
            }

            return <WrapComponent/>;
        }
    }
}
export default ErrorBoundary