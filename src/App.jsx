import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Review from './components/Review/Review'
import Team from './components/Team/Team'
import About from './components/About/About'
import Products from './components/Products/Products'
import Clients from './components/Clients/Clients'
import Educare from './components/Educare/Educare'
const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
        <main>
          <Home />
          <Clients />
          <Products />
          <About/>
          <Team />
          <Review />
          <Educare/>
        </main>
          <Footer />

    </div>
  )
}
export default App