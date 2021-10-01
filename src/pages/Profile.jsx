import Header from '../components/Header'
import img from '../assets/img/no-image.jpg'

const Profile = () => {
  const allProfiles = JSON.parse(localStorage.getItem('users'));
  const loggedProfile = allProfiles.find(el=> el.isLoggedIn)

  return (
    <>
      <Header />
        <main className='main'>
          <div className="container">
            <div className="user">
              <img width="320"
                   src={loggedProfile.avatar || img}
                   alt={'Profile image'}/>
              <div className="user__description">
                <p><b>Name:</b> {loggedProfile.name}</p>
                <p><b>Mail:</b> {loggedProfile.mail}</p>
                <p><b>Liked:</b> {loggedProfile.liked?.join(', ') || 'nothing'}</p>
                <p><b>Friends:</b> {loggedProfile.friends?.join(', ') || 'no one'}</p>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}

export default Profile;