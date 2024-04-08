const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="wrapper">
          <div className="text">
            <h1>Web design examples to inspire</h1>
            <img id="mobile" src="/assets/hero-img.png" alt="" />
            <p>
              <span>Handpicked </span>real-world examples. <br /> I don’t want
              your email, I just hope you enjoy :)
            </p>
          </div>

          <img id="desktop" src="/assets/hero-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
