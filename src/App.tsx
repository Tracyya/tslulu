import React from 'react';
import {useAuth} from "context/auth_context"
import {AuthenticatedApp} from "authenticated-app"
import {UnauthenticatedApp} from "unauthenticated-app"

function App() {
  const {user}=useAuth()
  return (
    <div className="App">
     {user?<AuthenticatedApp/>:<UnauthenticatedApp/>}
    </div>
  );
}

export default App;
