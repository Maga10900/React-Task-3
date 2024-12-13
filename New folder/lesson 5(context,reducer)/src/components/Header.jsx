import { Link, useNavigate } from "react-router-dom"

function Header() {
  let navigate = useNavigate()

    return (
      <header>
        <h1>Header</h1>
        <ul>
          <li><button onClick={() => navigate('/')}>HOME</button></li>
          <li><Link to='/services'>SERVICES</Link></li>
          <li><Link to='/bag'>BAG</Link></li>
        </ul>
      </header>
    )
  }
  
  export default Header
  
  