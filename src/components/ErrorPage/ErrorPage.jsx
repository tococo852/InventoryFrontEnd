import { useRouteError } from "react-router";
const ErrorPage = () => {
    const error = useRouteError();

    console.error(error);

    return (
        <div>
            <h1>There was an error!</h1>

            <p>{error?.statusText || error?.message}</p>

            {error?.stack && (
                <pre>{error.stack}</pre>
            )}
        </div>
    );
};

export default ErrorPage;