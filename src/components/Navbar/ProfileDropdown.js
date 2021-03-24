import { Link } from 'react-router-dom';
import './ProfileDropdown.css';

export default function Navbar({show, isLogin}) {
  const displayClass = show? "drop-down-content" : "none";
  const loginText = isLogin ? "LOG OUT" : "LOG IN"

  return (
    <div className={displayClass}>
      <ul>
        <li>
          <Link to="/profile">My Profileeeeeee</Link>
        </li>
        <li>
          <Link to="/login">{loginText}</Link>
        </li>
      </ul>
    </div>
  )
}