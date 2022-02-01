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
    <div className="font-medium bg-gray-900 p-3 fixed w-screen top-0 z-10 ">
      <ul className="navUl">
        <li className="">
          <Link to="/home">Home</Link>
        </li>
        <li className="ml-3">
          <Link to="/">Index</Link>
        </li>
        <li className="ml-3">
          <Link to="/new-post">Create Post</Link>
        </li>
        <input type="text" className="w-[50rem] ml-3" />
        <li className="ml-3 ">
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
