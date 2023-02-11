import { motion } from "framer-motion";
import { useState } from "react";
const Wheel = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div id="content-area">
        <div className="wrap container-fluid" role="document">
          <main className="content">
            <div className="container noPadding">
              <div id="panel_window">
                <a href="#" className="moveRight">
                  <i className="fa fa-angle-right"></i>
                </a>
                <a href="#" className="moveLeft">
                  <i className="fa fa-angle-left"></i>
                </a>
                <div id="rotated_panels">
                  <div className="pure-u-6 panel_rethink panel selected">
                    <p>
                      It’s really a one-word business model. We know that the
                      most powerful solutions often come from unlikely places,
                      so we continually rethink how to best serve our clients –
                      never satisfied until we’ve gone beyond&nbsp;expectations.
                    </p>
                  </div>

                  <div className="pure-u-6 panel_independent panel">
                    <p>
                      We're a completely owner-operated shop. All of our
                      partners are hands-on leaders working on every aspect of
                      our business. We’re only accountable to ourselves and our
                      clients – and we wouldn’t have it any other&nbsp;way.
                    </p>
                  </div>

                  <div className="pure-u-6 panel_creative panel">
                    <p>
                      Our depth of experience and range of expertise, along with
                      a rigorous creative process, consistently generate more,
                      and more quality ideas – proving that creativity and
                      discipline do go&nbsp;together.
                    </p>
                  </div>

                  <div className="pure-u-6 panel_agency panel">
                    <p>
                      We're agents of change who’ve been integrated since day
                      one. From strategy, advertising and design to social,
                      digital and product innovation, there are always new
                      solutions and ideas to be found in every aspect of
                      a&nbsp;business.
                    </p>
                  </div>

                  <div className="pure-u-6 panel_here panel">
                    <p>
                      Between our offices in Vancouver, Toronto and Montreal we
                      serve all of our clients, no matter where they’re based.
                      We’re fluent in English and French, with bilingual
                      Rethinkers across all&nbsp;offices.
                    </p>
                  </div>

                  <div className="pure-u-6 panel_help panel">
                    <p>
                      Helping is what the Biztech culture is all about. We're a
                      naturally collaborative bunch who know how to come
                      together and get things done. We believe in sharing,
                      giving back, working hard and playing nice.
                    </p>
                  </div>

                  <div className="pure-u-6 panel_you panel ">
                    <p>
                      We’re extremely proud to work with so many amazing clients
                      – some since day one. Together we create brand clarity,
                      relevance, excitement and momentum. We’d love to help
                      build your brand and boost your&nbsp;business.
                    </p>
                  </div>
                </div>

                <motion.div
                  onClick={() => setIsActive(!isActive)}
                  animate={{
                    rotate: isActive ? 90 : 0,
                  }}
                  className="us-wheel-container"
                >
                  <svg
                    version="1.1"
                    id="us-wheel"
                    data-name="us-wheel"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 490 490"
                    xmlSpace="preserve"
                  >
                    <g
                      id="word-rethink"
                      className="wheel-selected-word word selected"
                    >
                      <path
                        className="st0"
                        d="M160.9,21.5c1.3-0.7,3.6-1.8,6-2.6c3.1-1.1,5.2-1.3,7.2-0.8c1.7,0.4,3.2,1.6,3.9,3.5c0.7,2.1,0.1,4.6-2.1,6.3
		l0,0.1c2.7-0.2,5.6,1,6.6,4.2c0.7,2.1,0.4,4-0.6,5.6c-1.2,2-3.6,3.7-7.9,5.1c-2.3,0.8-4.2,1.2-5.3,1.5L160.9,21.5z M168.3,29.2
		l2.2-0.7c2.9-1,4.1-2.9,3.4-4.9c-0.7-2.2-2.7-2.6-5.4-1.7c-1.2,0.4-1.9,0.7-2.4,1L168.3,29.2z M171.9,39.9c0.6-0.1,1.3-0.3,2.3-0.7
		c2.7-0.9,4.8-2.8,3.8-5.6c-0.9-2.7-3.6-3-6.6-2l-2.1,0.7L171.9,39.9z"
                      />
                      <path
                        className="st0"
                        d="M192.1,11.9l5.7,23.9l-4.4,1l-5.7-23.9L192.1,11.9z"
                      />
                      <path
                        className="st0"
                        d="M205.7,31.4l9.9-19.8l0-0.1l-11.3,1.6l-0.5-3.7L220.8,7l0.4,2.6l-9.8,19.6l0,0.1l12.4-1.7l0.5,3.7L206,33.9
		L205.7,31.4z"
                      />
                      <path
                        className="st0"
                        d="M237,9.8l-7,0.2l-0.1-3.8l18.5-0.5l0.1,3.8l-7.1,0.2l0.5,20.8l-4.5,0.1L237,9.8z"
                      />
                      <path
                        className="st0"
                        d="M271.4,20.9l-9.2-0.8l-0.6,7.2l10.3,0.9l-0.3,3.7l-14.8-1.2l2-24.5l14.2,1.2l-0.3,3.7l-9.8-0.8l-0.5,6.3
		l9.2,0.8L271.4,20.9z"
                      />
                      <path
                        className="st0"
                        d="M297.6,35.9c-1.1,0.3-3.5,0.4-6.4-0.2c-7.6-1.5-11.3-7.3-9.8-14.6c1.6-7.9,8.1-11.6,15.4-10.1
		c2.9,0.6,4.8,1.6,5.6,2.2l-1.7,3.3c-1-0.7-2.5-1.5-4.5-1.9c-4.9-1-9,1.4-10.2,7.2c-1.1,5.3,1.4,9.3,6.6,10.4c1.8,0.4,3.7,0.4,5,0.1
		L297.6,35.9z"
                      />
                      <path
                        className="st0"
                        d="M317.9,17l-3.2,9.3l9.8,3.3l3.2-9.3l4.2,1.4L324,45l-4.2-1.4l3.5-10.2l-9.8-3.3l-3.5,10.2l-4.2-1.4l7.9-23.2
		L317.9,17z"
                      />
                    </g>
                    <g id="word-is">
                      <path
                        className="st0"
                        d="M360,35l-11.5,21.7l-4-2.1l11.5-21.7L360,35z"
                      />
                      <path
                        className="st0"
                        d="M359.8,57.5c0.8,1.5,2.2,3.3,4.1,4.6c2.4,1.6,4.5,1.3,5.6-0.4c1-1.6,0.6-3.1-1.4-5.8c-2.6-3.4-3.6-6.6-1.6-9.6
                    c2.2-3.4,6.7-4.1,11.1-1.2c2.2,1.5,3.6,3,4.3,4.3l-2.9,2.4c-0.5-0.9-1.5-2.4-3.4-3.6c-2.4-1.6-4.3-1-5,0.2c-1,1.6-0.3,3.1,1.7,6
                    c2.7,3.7,3.3,6.6,1.3,9.6c-2.2,3.3-6.5,4.5-11.8,1.1c-2.2-1.4-4-3.5-4.7-4.9L359.8,57.5z"
                      />
                    </g>
                    <g id="word-an">
                      <path
                        className="st0"
                        d="M394.9,81.3l-6.3,3.6l-3.4-3.2l22.6-12.4l4.2,3.9l-11.1,23.3l-3.5-3.3l3.2-6.6L394.9,81.3z M402.4,83.7
                  l2.7-5.7c0.7-1.4,1.5-2.9,2.3-4.2l-0.1,0c-1.2,0.8-2.7,1.8-4,2.5l-5.5,3.1L402.4,83.7z"
                      />
                      <path
                        className="st0"
                        d="M406.4,102.5l19.1-15.5l3.2,4l-4.2,11.6c-1.1,3-2.4,5.9-3.8,8.4l0,0.1c2.4-2.3,4.8-4.4,7.7-6.7l6.6-5.4
                  l2.6,3.2l-19.1,15.5l-2.9-3.6l4.3-11.8c1.1-2.9,2.4-6.1,3.8-8.8l-0.1-0.1c-2.3,2.1-4.8,4.2-8,6.8l-6.8,5.5L406.4,102.5z"
                      />
                    </g>
                    <g id="word-independent" className="word">
                      <path
                        className="st0"
                        d="M454.5,128.4l-21.3,12.2l-2.2-3.9l21.3-12.2L454.5,128.4z"
                      />
                      <path
                        className="st0"
                        d="M438.1,149.3l22.4-10l2.1,4.7l-7,10.1c-1.8,2.6-3.8,5.1-5.8,7.2l0,0.1c2.9-1.6,5.7-3,9.2-4.5l7.8-3.5l1.7,3.8
                    l-22.4,10l-1.9-4.2l7.2-10.2c1.8-2.5,3.9-5.3,6-7.5l-0.1-0.1c-2.8,1.5-5.8,2.8-9.5,4.4l-8,3.6L438.1,149.3z"
                      />
                      <path
                        className="st0"
                        d="M472.6,169.6c0.9,1.8,1.7,4.2,2.5,6.7c1.3,4.4,1.2,7.7,0,10.4c-1.2,2.8-3.6,5-7.6,6.2c-4.2,1.2-7.8,0.7-10.4-1
                    c-2.8-1.7-5-5.2-6.3-9.7c-0.7-2.5-1.1-4.5-1.4-5.9L472.6,169.6z M453.9,179.7c0.1,0.6,0.3,1.5,0.6,2.4c1.6,5.6,5.6,8,11.6,6.3
                    c5.2-1.5,7.3-5.3,5.8-10.7c-0.4-1.4-0.8-2.3-1.1-2.9L453.9,179.7z"
                      />
                      <path
                        className="st0"
                        d="M469.7,216.8l-1.4-9.1l-7.1,1.1l1.6,10.2l-3.6,0.6l-2.3-14.6l24.2-3.8l2.2,14.1l-3.6,0.6l-1.5-9.7l-6.3,1
                    l1.4,9.1L469.7,216.8z"
                      />
                      <path
                        className="st0"
                        d="M484.1,227.2c0.4,1.6,0.7,3.8,0.8,6.8c0.1,3.3-0.4,5.7-1.7,7.3c-1.1,1.5-3,2.5-5.3,2.6
                    c-2.3,0.1-4.3-0.5-5.7-1.9c-1.9-1.7-2.8-4.5-3-7.6c0-0.8,0-1.6,0-2.2l-9.2,0.4l-0.2-4.4L484.1,227.2z M472.9,232.2
                    c-0.1,0.6-0.1,1.3-0.1,2.2c0.1,3.3,1.9,5.3,4.8,5.2c2.7-0.1,4.1-2.1,4-5.2c-0.1-1.2-0.2-2.1-0.3-2.6L472.9,232.2z"
                      />
                      <path
                        className="st0"
                        d="M470.4,267.9l0.6-9.2l-7.2-0.5l-0.7,10.3l-3.7-0.2l1-14.8l24.5,1.7l-1,14.2l-3.7-0.2l0.7-9.8l-6.3-0.4
                    l-0.6,9.2L470.4,267.9z"
                      />
                      <path
                        className="st0"
                        d="M458.4,276.9l24.1,4.6l-1,5l-11.5,4.2c-3,1.1-6.1,1.9-8.9,2.6l0,0.1c3.3,0.3,6.4,0.8,10.1,1.5l8.4,1.6
                    l-0.8,4.1l-24.1-4.6l0.9-4.5l11.8-4.3c2.9-1,6.2-2.1,9.2-2.7l0-0.1c-3.1-0.4-6.3-1-10.3-1.8l-8.6-1.7L458.4,276.9z"
                      />
                      <path
                        className="st0"
                        d="M475.2,313.3c-0.3,2-1,4.4-1.8,6.9c-1.5,4.3-3.4,7-5.9,8.6c-2.6,1.6-5.8,2.1-9.8,0.7c-4.1-1.4-6.8-3.9-8-6.8
                    c-1.3-3-1.1-7.1,0.4-11.6c0.8-2.5,1.6-4.3,2.3-5.6L475.2,313.3z M454,310.8c-0.3,0.6-0.6,1.4-0.9,2.3c-1.9,5.5,0,9.8,5.9,11.8
                    c5.1,1.8,9.1-0.2,10.9-5.5c0.5-1.3,0.7-2.3,0.7-3L454,310.8z"
                      />
                      <path
                        className="st0"
                        d="M445.7,350.3l4-8.3l-6.5-3.2l-4.5,9.3l-3.3-1.6l6.5-13.3l22.1,10.7l-6.2,12.8l-3.3-1.6l4.3-8.8l-5.7-2.8
                    l-4,8.3L445.7,350.3z"
                      />
                      <path
                        className="st0"
                        d="M431.3,354.2l20.6,13.4l-2.8,4.3l-12.3-0.4c-3.2-0.1-6.3-0.5-9.2-1l0,0.1c2.9,1.5,5.6,3.2,8.8,5.2l7.2,4.7
                    l-2.3,3.5l-20.6-13.4l2.5-3.9l12.5,0.5c3.1,0.2,6.5,0.4,9.5,0.9l0-0.1c-2.8-1.6-5.5-3.3-8.9-5.5l-7.4-4.8L431.3,354.2z"
                      />
                      <path
                        className="st0"
                        d="M427.6,395.3l4.5-5.4l2.9,2.4L423,406.6l-2.9-2.4l4.5-5.4l-15.9-13.4l2.9-3.4L427.6,395.3z"
                      />
                    </g>
                    <g id="word-creative" className="word">
                      <path
                        className="st0"
                        d="M376.8,416.9c0.5-1.1,1.9-3,4.2-4.9c6-5,12.7-4.3,17.5,1.4c5.2,6.2,4,13.5-1.7,18.4c-2.3,1.9-4.3,2.8-5.3,3
                  l-1.5-3.4c1.2-0.4,2.7-1.1,4.3-2.4c3.8-3.2,4.6-7.9,0.8-12.4c-3.5-4.1-8.1-4.7-12.2-1.3c-1.4,1.2-2.6,2.7-3.2,3.8L376.8,416.9z"
                      />
                      <path
                        className="st0"
                        d="M382.6,441.7c-1.2,1.2-3.2,2.7-5.4,4.1c-3,1.9-5.3,2.8-7.4,2.5c-1.7-0.2-3.3-1.2-4.5-3
                  c-1.7-2.7-1.1-5.6,0.4-7.6l-0.1-0.1c-1.8,0.4-3.6-0.4-5.5-2.1c-2.3-2.1-4.4-4.2-5.4-4.7l3.9-2.5c0.7,0.4,2.3,1.8,4.5,4
                  c2.3,2.3,3.9,2.5,6,1.2l1.9-1.2l-5.5-8.4l3.7-2.4L382.6,441.7z M372.9,435l-2.2,1.5c-2.5,1.7-3.2,4-1.9,6.1
                  c1.5,2.3,3.7,2.3,6.2,0.7c1.2-0.8,1.9-1.4,2.2-1.7L372.9,435z"
                      />
                      <path
                        className="st0"
                        d="M340.2,450.7l8.3-4.1l-3.2-6.5l-9.3,4.6l-1.6-3.3l13.3-6.6l11,22l-12.8,6.4l-1.6-3.3l8.8-4.4l-2.8-5.7
                  l-8.3,4.1L340.2,450.7z"
                      />
                      <path
                        className="st0"
                        d="M324.2,453.1l-0.4-7.3l4.4-1.6l0.9,25.8l-5.4,1.9l-15.8-20.4l4.5-1.6l4.4,5.8L324.2,453.1z M318.7,458.7l3.9,5
                  c0.9,1.2,1.9,2.7,2.7,3.9l0.1,0c-0.1-1.5-0.4-3.2-0.5-4.7l-0.3-6.3L318.7,458.7z"
                      />
                      <path
                        className="st0"
                        d="M303,474.2l6.8-1.6l0.9,3.6l-18,4.3l-0.9-3.6l6.9-1.7l-4.9-20.2l4.4-1L303,474.2z"
                      />
                      <path
                        className="st0"
                        d="M278.3,482.8l-3.6-24.3l4.4-0.7l3.6,24.3L278.3,482.8z"
                      />
                      <path
                        className="st0"
                        d="M259.2,460.1l9.2,24.1l-4.9,0.2l-3.9-11c-1.1-3-2-5.9-2.9-8.8l-0.1,0c-0.5,2.9-1.2,6-2.1,9l-3,11.4l-4.8,0.2
                  l7.2-24.9L259.2,460.1z"
                      />
                      <path
                        className="st0"
                        d="M223.7,470.4l9.2,0.6l0.5-7.2l-10.3-0.7l0.2-3.7l14.8,1l-1.6,24.5l-14.2-0.9l0.2-3.7l9.8,0.6l0.4-6.3l-9.2-0.6
                  L223.7,470.4z"
                      />
                    </g>
                    <g id="word-agency" className="word">
                      <path
                        className="st0"
                        d="M195.8,461.9l3.7-6.2l4.5,1.1l-13.5,21.9l-5.6-1.4l-1.8-25.8l4.7,1.2l0.5,7.3L195.8,461.9z M188.2,463.5
                  l0.4,6.3c0.1,1.6,0.1,3.3,0.1,4.8l0.1,0c0.7-1.3,1.5-2.9,2.2-4.2l3.3-5.4L188.2,463.5z"
                      />
                      <path
                        className="st0"
                        d="M157.4,443.2c1.7,0,4.8,0.4,7.9,1.6c3.9,1.5,6.4,3.6,7.8,6.6c1.3,2.7,1.3,6.2-0.1,9.7
                  c-2.8,7.2-9.8,9.9-17.4,6.9c-2.8-1.1-4.8-2.5-5.6-3.5l2.2-3c1,1,2.4,2.1,4.8,3c4.9,1.9,9.4,0.4,11.5-5c2-5.2,0-9.5-4.7-11.4
                  c-1.5-0.6-2.7-0.8-3.3-0.8l-2.2,5.7l4,1.6l-1.3,3.3l-8.1-3.2L157.4,443.2z"
                      />
                      <path
                        className="st0"
                        d="M132.1,441l8.1,4.4l3.4-6.3l-9.1-4.9l1.7-3.2l13,7l-11.7,21.6l-12.6-6.8l1.7-3.2l8.6,4.7l3-5.6l-8.1-4.4
                  L132.1,441z"
                      />
                      <path
                        className="st0"
                        d="M128.9,426.4l-14.2,20l-4.2-3l0.9-12.2c0.2-3.2,0.7-6.3,1.4-9.1l-0.1,0c-1.7,2.8-3.4,5.5-5.6,8.5l-5,7
                  l-3.4-2.4l14.2-20l3.8,2.7l-1,12.5c-0.3,3.1-0.7,6.5-1.3,9.5l0.1,0c1.7-2.7,3.5-5.4,5.9-8.6l5.1-7.2L128.9,426.4z"
                      />
                      <path
                        className="st0"
                        d="M92.1,397.4c1.1,0.3,3.2,1.5,5.4,3.5c5.7,5.3,5.9,12.1,0.8,17.6c-5.5,5.9-12.9,5.7-18.4,0.6
                  c-2.2-2-3.3-3.9-3.6-4.9l3.1-2c0.5,1.2,1.4,2.6,2.9,4c3.7,3.4,8.4,3.5,12.4-0.8c3.7-4,3.7-8.6-0.3-12.3c-1.3-1.2-3-2.3-4.2-2.6
                  L92.1,397.4z"
                      />
                      <path
                        className="st0"
                        d="M83,386.3l-7.8,6.6l-5.9,15.2l-3.3-3.9l2.9-6.3c0.8-1.8,1.5-3.2,2.4-4.8l0-0.1c-1.6,0.5-3.2,1-5.1,1.5
                  l-6.7,1.8l-3.3-3.9l16.1-3l7.9-6.7L83,386.3z"
                      />
                    </g>
                    <g id="word-here" className="word">
                      <path
                        className="st0"
                        d="M39.8,368.4l8.5-4.9l-5.1-9l-8.5,4.9l-2.2-3.9l21.3-12.1l2.2,3.9l-9.4,5.4l5.1,9l9.4-5.4l2.2,3.9L42,372.3
                  L39.8,368.4z"
                      />
                      <path
                        className="st0"
                        d="M34.2,325.9l3.6,8.5l6.7-2.8l-4-9.5l3.4-1.4l5.7,13.7l-22.7,9.4l-5.5-13.2l3.4-1.4l3.8,9l5.8-2.4l-3.6-8.5
                  L34.2,325.9z"
                      />
                      <path
                        className="st0"
                        d="M17.7,319.1c-0.7-1.5-1.6-3.9-2.4-6.4c-1-3.4-1.1-5.9-0.2-7.8c0.7-1.6,2.1-2.8,4.1-3.4c3-0.9,5.7,0.6,7.1,2.6
                  l0.1,0c0.1-1.9,1.5-3.3,3.6-4.6c2.7-1.6,5.3-3,6-3.7l1.3,4.4c-0.6,0.6-2.4,1.7-5.1,3.2c-2.9,1.6-3.5,3-2.9,5.4L30,311l9.7-2.8
                  l1.2,4.3L17.7,319.1z M26.9,311.9l-0.7-2.6c-0.8-2.9-2.9-4.3-5.2-3.6c-2.6,0.7-3.3,2.9-2.5,5.7c0.4,1.4,0.7,2.2,1,2.6L26.9,311.9z"
                      />
                      <path
                        className="st0"
                        d="M21.5,276l1.5,9.1l7.1-1.2l-1.7-10.2l3.6-0.6l2.4,14.6l-24.2,4L8,277.7l3.6-0.6l1.6,9.7l6.3-1l-1.5-9.1
                  L21.5,276z"
                      />
                    </g>
                    <g id="word-to">
                      <path
                        className="st0"
                        d="M9.7,248.9l0.1,7L6.1,256l-0.3-18.5l3.8-0.1l0.1,7.1l20.8-0.3l0.1,4.5L9.7,248.9z"
                      />
                      <path
                        className="st0"
                        d="M20.8,207.3c8.2,1,12.3,6.5,11.5,13.2c-0.8,6.9-6.6,10.6-13.7,9.8c-7.5-0.9-12.2-6.2-11.4-13.1
                    C8,210.1,13.9,206.5,20.8,207.3z M19.1,225.5c5,0.6,9.2-1.5,9.7-5.7c0.5-4.3-3.2-7.2-8.3-7.8c-4.6-0.5-9.2,1.2-9.7,5.7
                    C10.2,222.1,14,225,19.1,225.5z"
                      />
                    </g>
                    <g id="word-help" className="word">
                      <path
                        className="st0"
                        d="M16,176.3l9.4,3l3.2-9.9l-9.4-3l1.4-4.3l23.3,7.6l-1.4,4.3l-10.3-3.3l-3.2,9.9l10.3,3.3l-1.4,4.3l-23.3-7.6
                  L16,176.3z"
                      />
                      <path
                        className="st0"
                        d="M43.7,143.5l-3.9,8.4l6.5,3.1l4.4-9.4l3.3,1.6l-6.3,13.4l-22.2-10.4l6.1-12.9l3.3,1.6l-4.2,8.9l5.7,2.7
                  l3.9-8.4L43.7,143.5z"
                      />
                      <path
                        className="st0"
                        d="M37.3,126.7l2.3-3.8l17.8,10.8l5.2-8.6l3.2,1.9l-7.6,12.5L37.3,126.7z"
                      />
                      <path
                        className="st0"
                        d="M51.3,105.5c0.7-1.4,1.9-3.3,3.8-5.7c2-2.6,4-4.1,6-4.5c1.8-0.4,3.9,0,5.8,1.4c1.8,1.4,2.9,3.2,3.1,5.1
                  c0.3,2.5-0.7,5.2-2.7,7.7c-0.5,0.7-1,1.2-1.5,1.6l7.3,5.7l-2.7,3.5L51.3,105.5z M63.1,109c0.4-0.3,0.9-0.9,1.5-1.6
                  c2-2.7,2-5.3-0.3-7c-2.2-1.7-4.5-1.1-6.4,1.4c-0.8,1-1.2,1.7-1.4,2.2L63.1,109z"
                      />
                    </g>
                    <g id="word-you" className="word">
                      <path
                        className="st0"
                        d="M98.1,88.9l-6.9-7.5l-15.4-5.3l3.7-3.5l6.4,2.6c1.9,0.8,3.2,1.4,4.9,2.2l0.1,0c-0.6-1.6-1.1-3.2-1.7-5L87,65.7
                  l3.7-3.4l3.6,16l7,7.6L98.1,88.9z"
                      />
                      <path
                        className="st0"
                        d="M122.4,53.7c4.8,6.7,3.5,13.4-2,17.4c-5.6,4-12.3,2.3-16.5-3.6c-4.4-6.1-3.6-13.2,2-17.2
                  C111.7,46.1,118.3,48.1,122.4,53.7z M107.7,64.7c2.9,4.1,7.3,5.8,10.8,3.3c3.5-2.5,3.2-7.2,0.2-11.4c-2.7-3.8-7.1-6-10.7-3.4
                  C104.3,55.9,104.8,60.6,107.7,64.7z"
                      />
                      <path
                        className="st0"
                        d="M129.5,35.8l6.7,12.7c2.2,4.3,5,5.3,7.7,3.9c2.9-1.5,3.5-4.4,1.3-8.6L138.5,31l4-2.1l6.5,12.4
                  c3.5,6.7,1.6,11.5-3.6,14.2c-5,2.6-9.8,1.6-13.4-5.3l-6.5-12.4L129.5,35.8z"
                      />
                    </g>
                  </svg>
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Wheel;
