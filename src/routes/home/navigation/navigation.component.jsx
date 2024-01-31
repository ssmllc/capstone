import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import { UserContext } from '../../../contexts/user.context';

import './navigation.styles.scss';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log('currentUser', currentUser);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className="logo-container" to='/'>
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>SIGNOUT</span>
          ) : (
            <Link
              className='nav-link'
              to='/auth'>
                SIGNIN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;