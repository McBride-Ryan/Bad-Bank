function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
        Hamm Banking
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
              <a href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a  href="#/alldata/">
                Users
              </a>
            </li>
           
            <li className="nav-item">
              <a  href="#/deposit/">
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a  href="#/withdraw/">
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a  href="#/login/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a  href="#/CreateAccount/">
                Create User
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { NavBar };
