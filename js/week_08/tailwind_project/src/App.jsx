import './App.css'
import Header from './components/Header/Header'
import Product from './components/Product'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-wrap content-between'>
        <div className='w-full block'>
          <Header/>
          <main>
          <Product/>
          </main>
          {/* footer */}
        </div>
      </div>
    </>
  )
}

export default App
