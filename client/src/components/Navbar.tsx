import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="font-medium bg-gray-900 p-3 fixed w-screen top-0">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Index</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
