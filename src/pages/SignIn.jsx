import { Link, useHistory } from 'react-router-dom'
import {useState, useEffect} from 'react';

const SignIn = () => {
  const history = useHistory();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongMail, setWrongMail] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    if(users && users.find(el=> el.isLoggedIn)) {
      history.push('/');
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const findMail = users.find(el => el.mail === mail)

    if(findMail && findMail.password === password) {
      findMail.isLoggedIn = true;
      localStorage.setItem('users', JSON.stringify(users));
      setWrongMail(false);
      history.push('/');
    } else {
      setWrongMail(true);
      setPassword('');
    }
  }

  return (
    <div className="login-form__container">
      <div className="login-form__wrapper">
        <div className="login-form__links">
          <span className="login-form__link__active">Sign in</span>
          <span className="login-form__link">
            <Link to='/join'>Join</Link>
          </span>
        </div>
        <hr/>
        <form className="login-form" onSubmit={handleSubmit} >
          <label>
            <input type="email"
                   placeholder="Email"
                   onChange={(e) => setMail(e.target.value)}
            />
          </label>
          <label>
            <input type="password"
                   placeholder="Password"
                   onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="login__btn" type='submit'>Sign In</button>
        </form>
        <p className='login-form__error'>{wrongMail && 'Email or password is incorrect!'}</p>
      </div>
    </div>
  );
}

export default SignIn;