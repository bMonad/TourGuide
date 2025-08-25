import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id='error-page' className='flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 '>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status} : {error.error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage