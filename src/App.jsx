 import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { Gallery } from './components/gallery/Gallery'
import { Levels } from './components/levels/Levels'
import { Program } from './components/programmes/Program'
import { Plan } from './components/plan/Plan'
import { Reviews } from './components/reviews/Reviews'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
// import { Notfound } from './components/not-found/Notfound'
// import { Scrollup } from './components/scrollup/Scrollup'
import './App.css'

export function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Gallery />
        <Levels />
        <Program />
        <Plan />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      {/* <Notfound /> */}
      {/* <Scrollup /> */}
      <p></p>
    </>
  )
}
