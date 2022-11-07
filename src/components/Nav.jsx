import React from 'react'
import { Link } from 'react-router-dom'
import iSHOP from "../assests/iSHOP.png"
import "./css.css"

const Nav = () => {
  return (
    <div>
        <img src={iSHOP} alt="iSHOP" style={{marginTop:"0px"}} className="ishop"/>
        <nav class="navbar navbar-expand-lg bg-light" style={{marginTop:"40px"}}>
  <div class="container-fluid, nav" style={{marginLeft:"630px" , marginTop:"-54px",color:"black" , textAlign:"center"}}>
    {/* <Link class="navbar-brand" to="#">Navbar</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/" style={{color:"black",position:"relative",left:"10px",top:"30px"}}>Home</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{position:"relative",left:"60px", top:"30px"}}>
            Store
          </Link>
          <ul class="dropdown-menu" style={{width:"600px", height:"300px", marginLeft:"-87px"}} >
            <li><Link class="dropdown-item" to="/store/Accessories">Accessories</Link></li>
            <li><Link class="dropdown-item" to="#" style={{position:"relative",bottom:"31px",left:"248px"}}>Category</Link></li>
            <li><Link class="dropdown-item" to="#" style={{position:"relative",bottom:"63px",left:"453px"}}>Category</Link></li>
            <div className='dropdown-items'>
               <span>AirPort & Wireless <br/><br/> Camera & vedio <br/><br/>Car & Travel<br/><br/> Bags,Shells & sleeves</span>
            </div>
            <div className='second-item'>
                <span>Charging Devices <br/><br/>Connected Home Device<br/><br/> Care Display & Graphic<br/><br/> Fitness & Sport</span>
            </div>
            <div className='third-item'>
                <span>Mice & Keyboards <br/><br/>Music Creation<br/><br/> Networking & Server</span>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav