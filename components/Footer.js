import { Link } from "react-scroll/modules";

const Footer = () => {
  return (
    <footer
      className="footer_footer__h8U9o"
      style={{ opacity: "1", transform: "none" }}
    >
      <div className="footer_container__HdEoV">
        <div className="footer_left__h63j3">
          <div className="footer_lockup__6Qt_9">
            <Link
              className="footer_mainLogo__j0C_z"
              style={{ marginRight: "0px" }}
              href="/"
            >
              <div className="footer_logo__cY_lO">
                <img
                  alt="Capital Brand Logo"
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
          <div className="footer_line__UuaEz"></div>
          <Link
            className="footer_tab__Ndquc footer_selected__GjUa9"
            to="managed-it-services"
          >
            <div className="footer_icon__2qZ_U">
              <img
                alt="Tools"
                sizes="100vw"
                srcset="/icons/tools.svg"
                src="/icons/tools.svg"
                decoding="async"
                data-nimg="fill"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "red",
                  opacity: "0",
                }}
              />
              <img
                alt="Tools"
                sizes="100vw"
                srcset="/icons/tools.svg"
                src="/icons/tools.svg"
                decoding="async"
                data-nimg="fill"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "contain",
                  color: "red",
                  opacity: "1",
                }}
              />
            </div>
            <div className="footer_popup__6zzE6">Managed IT</div>
          </Link>
          <Link className="footer_tab__Ndquc false" to="web-design">
            <div className="footer_icon__2qZ_U">
              <img
                alt="Code"
                sizes="100vw"
                srcset="/icons/code.svg"
                src="/icons/code.svg"
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
              <img
                alt="Code"
                sizes="100vw"
                srcset="/icons/code.svg"
                src="/icons/code.svg"
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
                  opacity: "0",
                }}
              />
            </div>
            <div className="footer_popup__6zzE6">Web Design</div>
          </Link>
          <Link className="footer_tab__Ndquc false" to="networking-solutions">
            <div className="footer_icon__2qZ_U">
              <img
                alt="Network"
                sizes="100vw"
                srcset="/icons/networking.svg"
                src="/icons/networking.svg"
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
              <img
                alt="Network"
                sizes="100vw"
                srcset="/icons/networking.svg"
                src="/icons/networking.svg"
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
                  opacity: "0",
                }}
              />
            </div>
            <div className="footer_popup__6zzE6">Networking Solutions</div>
          </Link>
          <Link className="footer_tab__Ndquc false" to="data-management">
            <div className="footer_icon__2qZ_U">
              <img
                alt="Data"
                sizes="100vw"
                srcset="/icons/data.svg"
                src="/icons/data.svg"
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
              <img
                alt="SeDatand"
                sizes="100vw"
                srcset="/icons/data.svg"
                src="/icons/data.svg"
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
                  opacity: "0",
                }}
              />
            </div>
            <div className="footer_popup__6zzE6">Data Management</div>
          </Link>
          <div
            className="footer_underline__la4Wc"
            style={{ transform: "translateX(0px) scale(1)" }}
          ></div>
        </div>
        <div className="footer_right__iQ9v4">
          <div className="footer_mainContainer__SOtcL">
            <Link
              className="footer_link__BTBa6 false"
              target="_blank"
              href="https://twitter.com/"
            >
              Twitter
            </Link>
            <Link className="footer_link__BTBa6 false" href="/founders">
              Founders
            </Link>
            <Link className="footer_link__BTBa6 false" href="/team">
              Team
            </Link>
            <Link className="footer_link__BTBa6 false" href="/faqs">
              FAQs
            </Link>
          </div>
          <Link
            className="footer_mainButton__c_pnE"
            href="http://localhost:3000"
          >
            Start
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
