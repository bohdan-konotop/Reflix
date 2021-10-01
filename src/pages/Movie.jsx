import Header from '../components/Header';
import { useState } from 'react';
import img from '../assets/img/no-image.jpg';

const Movie = ({location}) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const loggedIn = users.find(el=> el.isLoggedIn);
  const [movieInArray, setMovieInArray] = useState(loggedIn.liked.includes(location.state.name));

  const addToLiked = () => {
    if (movieInArray) {
      console.log(loggedIn.liked.indexOf(location.state.name))
      loggedIn.liked.splice(loggedIn.liked.indexOf(location.state.name), 1);
    } else {
      loggedIn.liked.push(location.state.name);
    }
    setMovieInArray(loggedIn.liked.includes(location.state.name))
    localStorage.setItem('users', JSON.stringify(users));
  }

  return (
    <>
      <Header />
        <main className='main'>
          <div className="container">
            <div className="movie">
              <img width="270" height="400"
                   src={location.state.image?.medium || img}
                   alt={location.state.name + ' image'}/>
              <div className="movie__description">
                <p><b>Title:</b> {location.state.name}</p>
                <p><b>Language:</b> {location.state.language}</p>
                <p><b>Genres:</b> {location.state.genres.join(', ').toLowerCase()}</p>
                <p><b>Status:</b> {location.state.status}</p>
                <p><b>Premiered:</b> {location.state.premiered}</p>
                <p><b>Ended:</b> {location.state.ended || 'No'}</p>
                <p><b>Description:</b> {location.state.summary.replace(/(<\w>|<\/\w>)/g, '')}</p>
              </div>
            </div>
            <button className="like__btn" onClick={addToLiked}>{movieInArray ? 'Unlike' : 'Like'}</button>
          </div>
        </main>
    </>
  );
}

export default Movie;