import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import Navigationlink from './shared/Navigationlink';

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: 'transparent', position: 'static', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex' }}>
        <Logo/>
        <div>
          { 
          auth?.isLoggedIn ?( 
            <>
              <Navigationlink 
                bg="#00fffc"
                text="Go To Chat"
                textColor='black'
                to='/chat'
              />
              <Navigationlink 
                bg="#51538f" 
                textColor='white'
                to='/'
                text="Logout"
                onClick={auth.logOut}
              />
            </> ) : 
          <>
            <Navigationlink 
              bg="#00fffc"
              text="Login"
              textColor='black'
              to='/login'
            />
            <Navigationlink 
              bg="#51538f" 
              textColor='white'
              to='/signup'
              text="signgUp"
              onClick={auth.logOut}
            />
          </>
        }
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header