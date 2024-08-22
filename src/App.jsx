
import './App.css'
import Header from './composent/1-Header/header'
import Hero from './composent/2-Services/Services'
import Main from './composent/3-About Us/About Us'
import About from './composent/3-About Us/About Us'
import Projects from './composent/4-Projects/Projects'
import Contact from './composent/5-Contact/Contact'
import Footer from './composent/Footer/footer'

function App() {
  
  return (
    <>
      <div className='Container'>

        <Header></Header>
        <div className='divider'></div>
        <Hero></Hero>
        <div className='divider'></div>
        <Main></Main>
        <div className='divider'></div>
        <About></About>
        <div className='divider'></div>
        <Projects></Projects>
        <div className='divider'></div>
        <Contact></Contact>
        <div className='divider'></div>
        <Footer></Footer>
        </div>  
    </>
  )
}

export default App
