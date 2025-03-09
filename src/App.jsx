
import { FooterPage } from './components/Footer'
import { HeaderPage } from './components/Header'
import { MainContainer } from './components/MainContainer'
import { RoutesMain } from './routes'
import './sass/index.scss'

function App() {


  return (
    <div className='app'>
      <HeaderPage />
      <MainContainer>
        <RoutesMain />
      </MainContainer>
      <FooterPage />
    </div>
  )
}

export default App
