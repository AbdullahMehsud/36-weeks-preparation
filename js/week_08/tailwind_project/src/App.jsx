import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Product from './components/Product'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-wrap content-between'>
        <div className='w-full block'>
          <Header/>
          <main>
          <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
