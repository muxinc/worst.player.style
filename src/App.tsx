import PlayerComp from './components/PlayerComp';
import Menu from './components/Menu';
import Hero from './components/Hero';
import About from './components/About';
import PlayerStyle from './components/PlayerStyle';
import Judges from './components/Judges';
import Prizes from './components/Prizes';
import Banner from './components/Banner';
import Rules from './components/Rules';
import Submit from './components/Submit';
import Footer from './components/Footer';
import Start from './components/Start';
function App() {
  return (
    <>
      <style>
        {`
          .noise {
            background-color: #DDD1C2;
            position: relative;
            isolation: isolate;
          }
          // .noise::before {
          //   content: "";
          //   position: absolute;
          //   top: 0;
          //   left: 0;
          //   width: 100%;
          //   height: 100%;
          //   background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          //   mix-blend-mode: soft-light;
          //   opacity: 0.7;
          //   z-index: 1;
          // }
        `}
      </style>
      <div className="noise min-h-screen">
        <Banner />
        <Hero />
        <PlayerComp />

        <div className="container mx-auto pb-6 max-w-5xl mt-32">
          <div className="grid grid-cols-[224px_1fr] gap-20">
            <Menu />
            <div>
              <About />
              <Rules />
              <Judges />
              <Prizes />
              <PlayerStyle />
              <Start />
              <Submit />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
