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
          auth?.isLoggedIn ? ( 
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
                text="Logout"
                to='/'
                onClick={auth?.logOut}
              />
            </> ) : 
          <>
            <Navigationlink 
              bg="#00fffc"
              textColor='black'
              text="Login"
              to='/login'
              onClick={auth?.logIn}
            />
            <Navigationlink 
              bg="#51538f" 
              textColor='white'
              text="signgUp"
              to='/signup'
              onClick={auth?.signUp}
            />
          </>
        }
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header