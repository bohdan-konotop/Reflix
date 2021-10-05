import { Link, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Header = () => {
  const [update, setUpdate] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  const forceUpdate = () => {
    setUpdate(update => update + 1);
  }

  const logout = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    const loggedUser = users.find(el=> el.isLoggedIn);
    loggedUser.isLoggedIn = false;

    localStorage.setItem('users', JSON.stringify(users));
    forceUpdate();
  }

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));

    if (!users?.find(el=> el.isLoggedIn)) {
      history.push('/sign-in');
    }
  }, [update])

  const search = (e) => {
    if(e.key === 'Enter'){
      history.push({
          pathname: '/search',
          search: `?search=${searchInput}`,
          state: {link: `https://api.tvmaze.com/search/shows?q=${searchInput}`}
        })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <h1 className="header__logo">
          <Link to='/'>REFLIX</Link>
        </h1>
        <nav>
          <ul className="header__nav__list">
            <li className="header__nav__list__item">
              <Link to='/'>Main</Link>
            </li>
            <li className="header__nav__list__item">
              <Link to='/users'>Users</Link>
            </li>
            <li className="header__nav__list__item">
              <Link to='/profile'>Profile</Link>
            </li>
            <li className="header__nav__list__item" onClick={logout}>
              <Link to='/sign-in'>Logout</Link>
            </li>
          </ul>
        </nav>
        <div className="header__search">
          <label>
            <input type="text" placeholder="Search" onKeyPress={search} onChange={(e) => setSearchInput(e.target.value)}/>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;