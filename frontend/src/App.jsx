import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

import { useEffect, useState } from 'react'
import { Wallet } from "./services/near-wallet";
import Form from './components/Form';
import SignIn from './components/SignIn';
import Messages from './components/Messages';
import { utils } from 'near-api-js'; 

const CONTRACT_NAME = "guestbook.near-examples.testnet"
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_NAME })

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
