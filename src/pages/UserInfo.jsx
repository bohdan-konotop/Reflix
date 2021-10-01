import Header from '../components/Header'
import img from '../assets/img/no-image.jpg'
import { useState } from 'react'

const UserInfo = ({location}) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const loggedIn = users.find(el=> el.isLoggedIn);
  const [friendInArray, setFriendInArray] = useState(loggedIn.friends.includes(location.state.name));

  const addToFriend = () => {
    if (friendInArray) {
      console.log(loggedIn.friends.indexOf(location.state.name))
      loggedIn.friends.splice(loggedIn.friends.indexOf(location.state.name), 1);
    } else {
      loggedIn.friends.push(location.state.name);
    }
    setFriendInArray(loggedIn.friends.includes(location.state.name))
    localStorage.setItem('users', JSON.stringify(users));
  }

  return (
    <>
      <Header />
        <main className='main'>
          <div className="container">
            <div className="user">
              <img width="320"
                   src={location.state.image?.original || img}
                   alt={location.state.name + ' image'}/>
              <div className="user__description">
                <p><b>Name:</b> {location.state.name}</p>
                <p><b>Country:</b> {location.state.country?.name || 'unknown'}</p>
                <p><b>Birthday:</b> {location.state.birthday || 'unknown'}</p>
                <p><b>Deathday:</b> {location.state.deathday || 'alive'}</p>
                <p><b>Gender:</b> {location.state.gender || 'unknown'}</p>
              </div>
            </div>
            <button className="friend__btn" onClick={addToFriend}>{friendInArray ? 'Delete friend' : 'Add friend'}</button>
          </div>
        </main>
    </>
  );
}

export default UserInfo;