import React, { useState } from "react";
import Link from "next/link";
import ReactResizeDetector from "react-resize-detector";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import ActiveLink from "components/shared/ActiveLink";
import Image from "next/image";
const BsNavLink = (props) => {
  const { href, title, className = "" } = props;
  return (
    <ActiveLink activeClassName="active" href={href}>
      <Link
        className={`nav-link port-navbar-link ${className}`}
        title={title}
      />
    </ActiveLink>
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

          <Collapse className="justify-content-end" isOpen={isOpen} navbar>
            <Nav className="mr-auto" hidden={!isOpen} navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/about" title="Page #1" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/projects" title="Page #2" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </ReactResizeDetector>
  );
};

export default Header;
