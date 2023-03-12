const Hero = ({ image, copy, children }) => {
  return (
    <header>
      <div className="container hero__container">
        <div className="hero__container-left">
          <div className="hero__image">
            <img src={image} alt="Home Image" />
          </div>
        </div>
        <div className="hero__container-right">
          <h1>{copy}</h1>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
