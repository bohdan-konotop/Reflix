import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import img from '../assets/img/no-image.jpg'

const Main = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows?page=0')
      .then(shows => {
        setShows(shows.data)
      })
  }, [])

  const createPosters = (shows) => {
    return shows.map(post => {
      return (
        <Link to={{
          pathname: '/movie/'+post.id,
          state: post
        }}>
          <div className="main__posts-item" key={post.id + '_' + post.name}>
            <img width="250" height="353"
                 src={post.image?.medium || img}
                 alt={post.id}/>
            <p>{post.name}</p>
          </div>
        </Link>
      );
    })
  }

  return (
    <div style={{background: '#000'}}>
      <Header />
      <main className="main">
        <div className="container">
          <div className="main__posts">
            {createPosters(shows)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;