import { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const scroll = (event) => {
      if (window.scrollY < 200) {
        setActiveTab("");
      }
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  return (
    <footer
      className="footer_footer"
      style={{ opacity: "1", transform: "none" }}
    >
      <div className="footer_container">
        <div className="footer_left">
          <div className="footer_lockup">
            <Link
              className="footer_mainLogo"
              style={{ marginRight: "0px" }}
              href="/"
            >
              <div className="footer_logo">
                <img
                  alt="Biztech Brand Logo"
                  sizes="100vw"
                  srcset="/image/biztechlogo.png"
                  src="/image/biztechlogo.png"
                  decoding="async"
                  data-nimg="fill"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: '"transparent"',
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="footer_line"></div>
          <Link
            className={`footer_tab ${
              activeTab === "managed-it-services" ? "footer_selected" : "false"
            }`}
            onClick={() => setActiveTab("managed-it-services")}
            to="managed-it-services"
          >
            <div className="footer_icon">
              <img
                alt="Tools"
                sizes="100vw"
                src={
                  activeTab === "managed-it-services"
                    ? "/icons/tools.svg"
                    : "/icons/tools-white.svg"
                }
                decoding="async"
                data-nimg="fill"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                  opacity: "1",
                }}
              />
            </div>
            <div className="footer_popup">Managed IT</div>
          </Link>
          <Link
            className={`footer_tab ${
              activeTab === "web-design" ? "footer_selected" : "false"
            }`}
            onClick={() => setActiveTab("web-design")}
            to="web-design"
          >
            <div className="footer_icon">
              <img
                alt="Code"
                sizes="100vw"
                src={
                  activeTab === "web-design"
                    ? "/icons/code.svg"
                    : "/icons/code-white.svg"
                }
                decoding="async"
                data-nimg="fill"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                  opacity: "1",
                }}
              />
            </div>
            <div className="footer_popup">Web Design</div>
          </Link>
          <Link
            className={`footer_tab ${
              activeTab === "networking-solutions" ? "footer_selected" : "false"
            }`}
            onClick={() => setActiveTab("networking-solutions")}
            to="networking-solutions"
          >
            <div className="footer_icon">
              <img
                alt="Network"
                sizes="100vw"
                src={
                  activeTab === "networking-solutions"
                    ? "/icons/networking.svg"
                    : "/icons/networking-white.svg"
                }
                decoding="async"
                data-nimg="fill"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                  opacity: "1",
                }}
              />
            </div>
            <div className="footer_popup">Networking Solutions</div>
          </Link>
          <Link
            className={`footer_tab ${
              activeTab === "data-management" ? "footer_selected" : "false"
            }`}
            onClick={() => setActiveTab("data-management")}
            to="data-management"
          >
            <div className="footer_icon">
              <img
                alt="SeDatand"
                sizes="100vw"
                src={
                  activeTab === "data-management"
                    ? "/icons/data.svg"
                    : "/icons/data-white.svg"
                }
                decoding="async"
                data-nimg="fill"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "transparent",
                  opacity: "1",
                }}
              />
            </div>
            <div className="footer_popup">Data Management</div>
          </Link>
          {/* <div
            className="footer_underline"
            style={{ transform: "translateX(0px) scale(1)" }}
          ></div> */}
        </div>
        <div className="footer_right">
          <div className="footer_mainContainer">
            <Link
              className="footer_link false"
              target="_blank"
              href="https://twitter.com/"
            >
              Twitter
            </Link>
            <Link className="footer_link false" href="/founders">
              Founders
            </Link>
            <Link className="footer_link false" href="/team">
              Team
            </Link>
            <Link className="footer_link false" href="/faqs">
              FAQs
            </Link>
          </div>
          <Link className="footer_mainButton" href="http://localhost:3000">
            Start
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
