import Image from "next/image";
import ReactResizeDetector from "react-resize-detector";
import { Parallax } from "react-scroll-parallax";

const IntroMain = () => {
  return (
    <ReactResizeDetector handleWidth>
      {({ width, height }) => (
        <div
          style={{
            backgroundColor: "#efece6",
            height: "100vh",
            zIndex: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h1 className="site-main-title at-item">
              The IT solution for your business
            </h1>
          </div>
          <Parallax
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            speed={-5}
          >
            <Image
              src={`/image/${width < 688 ? "iphone" : "ipad"}-intro.webp`}
              width={width < 688 ? width : 1400}
              height={width < 688 ? 826 : 1200}
            />
          </Parallax>
        </div>
      )}
    </ReactResizeDetector>
  );
};

export default IntroMain;
