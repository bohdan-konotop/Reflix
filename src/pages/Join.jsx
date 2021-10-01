import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

export const Join = () => {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [avaLink, setAvaLink] = useState('');
  const [password, setPassword] = useState('');
  const [emptyFieldsErr, setEmptyFieldsErr] = useState(false);
  const [isMailTaken, setIsMailTaken] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!mail.length || !name.length || !avaLink.length || !password.length) {
      setEmptyFieldsErr(true)
      return;
    } else {
      setEmptyFieldsErr(false)
    }

    if (localStorage.getItem('users') === null) {
      localStorage.setItem('users', JSON.stringify([]));
    }

    const users = JSON.parse(localStorage.getItem('users'));

    if (users.find(el => el.mail === mail)) {
      setIsMailTaken(true);
      return;
    } else setIsMailTaken(false);

    const addUser = {
      id: users.length,
      isLoggedIn: false,
      name: name,
      password: password,
      mail: mail,
      avatar: avaLink,
      liked: [],
      friends: []
    }

    localStorage.setItem('users', JSON.stringify([...users, addUser]));
    history.push('/sign-in');
  }

  return (
    <div className="login-form__container">
      <div className="login-form__wrapper">
        <div className="login-form__links">
          <span className="login-form__link__active">Join</span>
          <span className="login-form__link">
            <Link to='/sign-in'>Sign In</Link>
          </span>
        </div>
        <hr />
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              <input type="email"
                     placeholder="Email"
                     value={mail}
                     onChange={
                       (e) => {setMail(e.target.value)}
                     }
              />
            </label>
            <label>
              <input type="text"
                     placeholder="Full name"
                     value={name}
                     onChange={
                       (e) => {setName(e.target.value)}
                     }
              />
            </label>
            <label>
              <input type="url"
                     placeholder="Avatar link"
                     value={avaLink}
                     onChange={
                       (e) => {setAvaLink(e.target.value)}
                     }
              />
            </label>
            <label>
              <input type="password"
                     placeholder="Password"
                     value={password}
                     onChange={
                       (e) => {setPassword(e.target.value)}
                     }
              />
            </label>
            <button className="login__btn" type='submit'>Join Us</button>
          </form>
        <p className='login-form__error'>{(emptyFieldsErr && 'All fields should be filled!')
        || (isMailTaken && 'This mail address is already taken')}</p>
      </div>
    </div>
  );
}

export default Join;