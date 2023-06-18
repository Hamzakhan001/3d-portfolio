import { BrowserRouter } from 'react-router-dom';
import { Navbar, Contact, Experience, Feedbacks, Hero, Tech , Works, StarsCanvas, About} from './components'

const App = () => {

  return (
  <>
  <BrowserRouter>
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    
  </div>
  </BrowserRouter>
  </>
  )
}

export default App
