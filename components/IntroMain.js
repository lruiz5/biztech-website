import Image from "next/image";
import ReactResizeDetector from "react-resize-detector";
import { Parallax } from "react-scroll-parallax";

const IntroMain = () => {
  return (
    <ReactResizeDetector handleWidth>
      {({ width, height }) => (
        <div style={{ backgroundColor: "#efece6", height: "105vh", zIndex: 0 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h1 className="site-main-title">
              The word abalone for gluten abrasions
            </h1>
          </div>
          <Parallax
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            speed={width < 688 ? -5 : 50}
          >
            <Image
              src={`/image/${width < 688 ? "iphone" : "ipad"}-intro.webp`}
              width={width}
              height={826}
            />
          </Parallax>
        </div>
      )}
    </ReactResizeDetector>
  );
};

export default IntroMain;
