import { Suspense } from 'react'
import './App.css'

import DaisyuiNav from './components/daisyUI/daisyuiNav'
import NavBar from './components/navBar/navBar'
import Prices from './components/prices/prices'
import DaisyPriceCard from './components/daisyUI/daisyPriceCard'
import ResultChart from './components/recharts/resultChart'

const PricePromise = fetch('priceData.json').then(res => res.json());

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyuiNav></DaisyuiNav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl flex mt-40 mx-auto"></span>}>
          <Prices PricePromise={PricePromise}></Prices>
        </Suspense>

        <ResultChart></ResultChart>
        
      </main>
    </>
  )
}

export default App
