import "./App.css";
import AppHeader from "./components/AppHeader";
import Place from "./components/Place";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
      </header>
      <body>
        <p></p>
        <Place
          title="Jojo's Coffee Shop"
          placeName="New Haven"
          countryName="CT"
          imageURL="https://i.pinimg.com/originals/75/78/75/757875a72986040d247601d6a4842e98.jpg"
          mapLink="https://www.google.com/maps/place/1178+Chapel+St,+New+Haven,+CT+06511,+USA/@41.3088831,-72.934031,19z/data=!3m1!4b1!4m5!3m4!1s0x89e7d9b2ea53bdb5:0xf796451332101b30!8m2!3d41.3088821!4d-72.9334838?hl=en"
          bio="The best coffee in one of the best cities (with the closest demographic makeup to the US average), with the best baristas too. Either plays neo-soul or 60s rock depending on their mood."
        />
        <Place
          title="Badalona beach"
          placeName="Near Barcelona"
          countryName="Spain"
          imageURL="https://images.unsplash.com/photo-1518775188744-3c1ca12de12b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\&ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=1491\&q=80"
          mapLink="https://www.google.com/maps/place/Badalona,+Barcelona,+Spain/@41.4501605,2.2054768,13z/data=!3m1!4b1!4m5!3m4!1s0x12a4bb1298efb741:0x987b0abc3e6ea84d!8m2!3d41.4469883!4d2.2450325"
          bio="The most beautiful mini-city I've visited in Spain. Long-walking distance to Barcelona but with calmer beaches and less party-party vibes. For the best experience, don't even bother staying in an apartment, rent a boat in the marina instead."
        />
        <Place
          title="One spot in the Olympic Park"
          placeName="Stratford"
          countryName="London"
          imageURL="https://images.unsplash.com/photo-1624474201747-a358fed92251?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          mapLink="https://www.google.com"
          bio="There's one spot by the water in the Olympic Park where you couldn't hear anything man-made during lockdown. Location is deliberately left out so you won't disturb me."
        />
      </body>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
