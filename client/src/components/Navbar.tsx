import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookies, removeCookies] = useCookies(['token']);
  const navigate = useNavigate();

  const logout = () => {
    console.log('logout');
    removeCookies('token');
    // navigate to login
    navigate('/login');
  };

  return (
    <div className="font-medium bg-gray-900 p-3 fixed w-screen top-0 ">
      <ul>
        <li className="mr-5">
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Index</Link>
        </li>{' '}
        <li className="ml-[59rem]">
          {isLoggedIn ? (
            <span className="cursor-pointer text-white" onClick={logout}>
              Logout
            </span>
          ) : (
            <span
              className="cursor-pointer text-white"
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
