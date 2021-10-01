import {Link} from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useState } from 'react'
import axios from 'axios'
import img from '../assets/img/no-image.jpg'

const Search = ({location}) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get(location.state.link)
      .then(shows => {
        setShows(shows.data)
      })
  }, [])

  const createPosters = (show) => {
    return show.map(post => {
      return (
        <Link to={{
          pathname: '/movie/'+post.show.id,
          state: post.show
        }}>
          <div className="main__posts-item" key={post.id + '_' + post.name}>
            <img width="250" height="353"
                 src={post.show.image?.medium || img}
                 alt={post.show.id}/>
            <p>{post.show.name}</p>
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

export default Search;