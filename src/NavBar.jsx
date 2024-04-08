const NavBar = () => {
  return (
    <div className="nav-bar">
      <div>
        <img className="logo" src="./src/assets/Logo.png" alt="" />

        <p className="title">
          <span className="main">
            {" "}
            <span className="The">The</span>{" "}
            <span className="creative">Creative</span> Cache
          </span>{" "}
          <br />
          <span className="under-text">by Suede</span>
        </p>
        <a className="cta" href="/">To main site</a>
      </div>
    </div>
  );
};

export default NavBar;
