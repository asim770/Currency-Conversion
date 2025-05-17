import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './components'
import {useCurrencyinfo} from './hooks'

function App() {
  const [amount,setAmount]=useState(0)
  const [currency,setCurrency]=useState("usd")
  const [to,setTo] =useState("inr")
  const [from,setFrom] = useState("usd")
  const [convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrencyinfo(from)

  return (
    <>
      <h1 className='text-3xl text-center '>Currency Convertor</h1>  
    </>
  )
}

export default App
