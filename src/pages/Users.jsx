import Header from '../components/Header'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/people')
      .then(users => {
        setUsers(users.data)
      })
  }, [])

  const createUserList = (users) => {
    return (
        <div className="container">
          <main className="main">
            <ul className='user-list'>
              {users.map(person => {
                return (
                  <Link to={{
                    pathname: '/user/'+person.id,
                    state: person
                  }}>
                    <li key={person.id + '_' + person.name}>{person.name}</li>
                  </Link>
                );
              })}
            </ul>
          </main>
        </div>
    );
  }

  return (
    <div style={{background: '#000'}}>
      <Header />
      {createUserList(users)}
    </div>
  );
}

export default Users;