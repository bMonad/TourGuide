import Home from './tour-guide/Home.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>

        <Home />
      </GoogleOAuthProvider>
    </>
  )
}

export default App;
