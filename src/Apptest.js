
import './index.css';

function Apptest() {
  return (
    <div className="App">
      <header className="App-header">
        {/* header  */}

        <div class="containerForHeader">
        <main>
            <div class="header-img">
                <div class="bottom-left">
                    <img src="https://images.squarespace-cdn.com/content/v1/5f690c728f0c97777d2f3942/f342e666-c2d2-4a0b-9383-8096df6806e5/ilolo-logo-sig.png?format=1500w"
                        width="100" height="100" alt="Ilolo Izu Logo"/>
                </div>
             <div class="aboutHeader">
                <nav class="navbar">
                  <a href="about.html">
                      <h3>About</h3>
                  </a>
                </nav>
             </div>
          </div>
        </main>
    </div>

      </header>

      <body>

    <div class="centerStage">
        <h1>Ilolo Izu</h1>
        <h2>Software Engineer</h2>
        <p>
            Hi! Welcome to my website, here you can join the journey and follow me in my path to success in the field of
            web development.
            My coding bootcamp journey begins with learning HTML, CSS, and Javascript—using them to make amazing
            webpages like the one that you are on right now!
            Enrolling at Flatiron School will grant me the <em>jumpstart</em> I need in my career!
        </p>

        <img id="ME"
            src="https://images.squarespace-cdn.com/content/v1/5f690c728f0c97777d2f3942/e8877125-3c18-4933-b6b6-bf09e681da39/JII05042-Edit.jpg?format=500w"
            width="260" height="260"/>
    </div>

    <div class="containerForHeader">
        <nav class="navbar">

        </nav>
    </div>
    <div class="centerStage">
        <h2>About Ilolo</h2>
        <p> My name is Ilolo Izu (e-lo-lo e-zu), known some places by my first name—Justin! I graduated with a
            Bachelor's degree focused in Allied Health with a Minor in Business Administration from Texas A&M University
            in December 2019. I am currently transitioning from the 4 years of experience in the Medical Field and
            seeking different professional opportunities. I'm currently learning Software Engineering from Flatiron
            School.
            I also have an interest in real estate investing and entrepreneurship. On the side, I also am a freelance <a
                href="https://www.iloloizu.com/"> videographer, photographer, and digital editor.</a> I also coach
            younger athletes in the sport of track and field to give back to the community all the knowledge I've
            learned as a <a href="https://en.wikipedia.org/wiki/Ilolo_Izu">decorated athlete</a> myself.</p>
        <img id="trackstar" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ilolo_Izu_track.jpg" width="36%"
            height="36%" />
        <img id="pictures"
            src="https://images.squarespace-cdn.com/content/5f690c728f0c97777d2f3942/1635883604770-6EPN2F6PJUEGB5RLX7WK/DSC02422.jpg?format=1500w&content-type=image%2Fjpeg"
            width="58.2%" height="58.2%" />

    </div>
</body>

<footer>
    <div class="container">
        <nav class="links">
            <a id="links" href="https://www.linkedin.com/in/ilolo-izu/">LinkedIn</a> <a id="links"
                href="https://github.com/iloloizu">Github</a>
            <a id="links" href="mailto: iloloizu97@gmail.com">Contact</a>
        </nav>
    </div>
    <script src="index.js"></script>
</footer>

    </div>
  );
}

export default Apptest;
