import NFJLogo from './assets/NFJLogo.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={NFJLogo} className="logo react" alt="Newfoundland Fighting Jam logo" />
      </div>
      <div className="list-horizontally">
        <div className='icon-container'>
          <a href='https://x.com/NLFightingJam' target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='social-icon twitter'>
              {/* !Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
              <path fill="#FAF9F6" d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" />
            </svg>
          </a>
        </div>
        <div className='icon-container'>
          <a href='https://discord.gg/npRxWfkqdv' target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='social-icon discord'>
              {/* !Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
              <path fill="#5865F2" d="M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z" />
            </svg>
          </a>
        </div>
        <div className='icon-container'>
          <a href='https://www.facebook.com/groups/newfoundlandfightingjam/' target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="social-icon facebook">
              {/* Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
              <path fill='#1877F2' d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" /></svg>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="embedded-media">
          <h2 className="label">Latest YouTube VOD</h2>
          {/* Automatically embeds the latest video from the NFJ youtube account */}
          <iframe src="https://www.youtube.com/embed?listType=user_uploads&list=NewfoundlandFJ" allowFullScreen className="embed embedded-media" />
        </div>
        <div>
          <h2 className="label">Live Twitch Stream</h2>
          {/* Twitch channel embed */}
          <iframe src="https://player.twitch.tv/?channel=newfoundlandfightingjam&autoplay=false&parent=nlfightingjam.com&parent=localhost" allow="encrypted-media *;" className="embed embedded-media" />
        </div>
      </div>
      <div className='card'>
        <div>
          <h2 className="label">About Us</h2>
          <p className="left">
            NFJ (Newfoundland Fighting Jam) is a local community run and operated MUNSU group that has been fostering and hosting our local fighting game community for nearly 20 years. From newer titles like Street Fighter 6 and Guilty Gear Strive, to old school fighting games from the 90s, and everything in between.

            We are a place for likeminded people to come share in our love of this hobby. We host tournaments or otherwise play games almost every Sunday, participate in outside events, and host our own special events throughout the year. Sundays are free and welcome to all, and we are always looking to welcome new gamers into the fold.
          </p>
        </div>
      </div>
      <div className="card">
        <div>
          <h2 className="label">Upcoming Events</h2>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSt_Johns&showPrint=0&mode=AGENDA&showTabs=0&showCalendars=0&title=Upcoming%20NFJ%20Events&src=nlfightingjam%40gmail.com&color=%230b8043" frameBorder="0" scrolling="no" className="embed calendar"></iframe>
        </div>
      </div>
    </>
  )
}

export default App
