import NFJLogo from './assets/NFJLogo.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={NFJLogo} className="logo react" alt="Newfoundland Fighting Jam logo" />
      </div>
      <div className="card">
        <p>
          {/* Automatically embeds the latest video from the NFJ youtube account */}
          <iframe width="600" height="340" src="https://www.youtube.com/embed?listType=user_uploads&list=NewfoundlandFJ" allowFullScreen className="embed" />
          <iframe width="600" height="340" src="https://player.twitch.tv/?channel=newfoundlandfightingjam&autoplay=false&parent=localhost" allow="encrypted-media *;" className="embed" />
        </p>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
