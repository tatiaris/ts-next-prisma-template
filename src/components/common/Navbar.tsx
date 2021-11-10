import React from 'react';
import { logout, navigatePath } from '../Helper';
import { config } from '../config';

/**
 * Navbar component
 */
interface NavbarProps {
  userSession: any;
}
export const Navbar: React.FC<NavbarProps> = (props): React.ReactElement => {
  return (
    <div className="navbar">
      <div>
        <a href="/" style={{ fontSize: '1.25rem', color: 'white', textDecoration: 'none' }}>
          {config.name}
        </a>
      </div>
      <div>
        {props.userSession ? (
          <button onClick={() => logout()} className="flat">
            Logout
          </button>
        ) : (
          <div>
            <button onClick={() => navigatePath('/login')} className="flat">
              Login
            </button>{' '}
            <button onClick={() => navigatePath('/signup')} className="flat">
              Signup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
