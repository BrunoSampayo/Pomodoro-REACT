import {Home} from './pages/Home'
import * as C from './AppStyles'

const App = ()=>{
  return(
    <div>
        <C.Header>
          <div className="user">Fulano</div>
          <h1>POMODORO</h1>
          <div className="menu">
            <div className="menuLine"></div>
            <div className="menuLine"></div>
            <div className="menuLine"></div>
          </div>
        </C.Header>

        <C.Container>
          <Home/>
        </C.Container>

      <C.Footer>
        <div className='left'>Bruno Sampayo</div>
        <div className="middle">copyright ©</div>
        <div className="right">2023</div>
      </C.Footer>
    </div>
  )
}

export default App
