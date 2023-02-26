import React, { useState } from "react";
import ReactResizeDetector from "react-resize-detector";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import Image from "next/image";
import { Link } from "react-scroll/modules";

const BsNavLink = (props) => {
  const { to, title, className = "" } = props;
  return (
    <Link
      activeClass="active"
      className={`nav-link port-navbar-link ${className}`}
      title={title}
      to={to}
      duration={500}
      spy={true}
      smooth={true}
      offset={0}
    >
      {title}
    </Link>
  );
};

const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <Navbar
          className={` ${width < 688 && isOpen ? "is-open" : "is-closed"}`}
          light
          expand="md"
          style={{ backgroundColor: "#efece6" }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <Image
              style={{ margin: "auto" }}
              className="centered-logo"
              src="/image/biztechlogo.png"
              width={90}
              height={45}
              alt="logo"
            />
          </div>

          <NavbarToggler
            onClick={toggle}
            style={{ position: "absolute", right: "1em", top: "0.5em" }}
          />

          {/* <Collapse className="justify-content-end" isOpen={isOpen} navbar>
            <Nav className="mr-auto" hidden={isOpen} navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink
                  title="Managed IT Services"
                  to="managed-it-services"
                />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink title="Web Design" to="web-design" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink
                  title="Networking Solutions"
                  to="networking-solutions"
                />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink title="Data Management" to="data-management" />
              </NavItem>
            </Nav>
          </Collapse> */}
        </Navbar>
      )}
    </ReactResizeDetector>
  );
};

export default Header;
