const FeatureSection = ({ id, title, subtitle, description, last }) => {
  return (
    <>
      <div id={id} className="featured-container">
        <div className="featured-image"></div>
        <div className="featured">
          <h1 className="featured-title">{title}</h1>
          <h5 className="featured-subtitle">{subtitle}</h5>
          <p className="featured-description">{description}</p>
        </div>
        {!last && <hr style={{ borderWidth: "2px" }} />}
      </div>
    </>
  );
};

export default FeatureSection;
