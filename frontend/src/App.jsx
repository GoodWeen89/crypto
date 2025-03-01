import AppLayout from './components/layout/AppLayout'
import { CryptoContextProvider } from './components/context/crypto-context'

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout /> 
    </CryptoContextProvider>
  )
}

// https://www.youtube.com/watch?v=S4HOy6yTclU&t=582s