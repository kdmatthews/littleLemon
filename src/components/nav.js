
function Nav() {
    return (
      <nav className="nav-container">
        <ul>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </ul>
        <ul>
        <img src="littlelemonlogo.jpg" alt="Little Lemon Logo with lemon image" className="logo"/>
        </ul>
       <ul className="navlinks">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/booking">Reserve Dining</a>
        </li>
        <li>
            <a href="/confirmed">Submit Dining Reservation</a>
        </li>
       </ul>
      </nav>
    );
  }
  export default Nav;