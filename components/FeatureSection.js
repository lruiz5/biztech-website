const FeatureSection = ({ id, title }) => {
  return (
    <>
      <div
        id={id}
        style={{
          backgroundColor: "#000000",
          height: "100vh",
          position: "relative",
          zIndex: 1,
          color: "red",
        }}
      >
        <p className="featured-title">{title}</p>
      </div>
    </>
  );
};

export default FeatureSection;
