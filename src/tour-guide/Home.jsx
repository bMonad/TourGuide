import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage.jsx'
import Hero from '../components/pages/Hero.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PlanTrip from '../components/pages/PlanTrip.jsx'
import { Toaster } from 'sonner'
import ViewTrip from '../view-trip/[tripid]/ViewTrip.jsx'

const Layout = () => (
    <main className='min-h-screen grid grid-rows-[1fr_auto]'>
        <div className='pb-3'>
            <Header />
            <Toaster />
            <Outlet />
        </div>
        <Footer />
    </main>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Hero /> },
            { path: 'plan-trip', element: <PlanTrip /> },
            { path: 'view-trip/:tripid', element: <ViewTrip /> },
        ],
    },
]);

const Home = () => <RouterProvider router={router} />

export default Home