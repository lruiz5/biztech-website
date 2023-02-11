import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CircleType from "circletype";

const sentence = [
  { word: "Biztech", position: 0, active: true, id: 0 },
  { word: "is", position: -1, active: false, id: 1 },
  { word: "an", position: -1, active: false, id: 2 },
  { word: "independent", position: 60, active: false, id: 3 },
  { word: "creative", position: 120, active: false, id: 4 },
  { word: "agency", position: 180, active: false, id: 5 },
  { word: "here", position: 240, active: false, id: 5 },
  { word: "to", position: -1, active: false, id: 5 },
  { word: "help", position: 300, active: false, id: 5 },
  { word: "you", position: 360, active: false, id: 5 },
];

const FramerWheel = () => {
  const ref = useRef();
  const [position, setPosition] = useState(0);
  const [selectedWord, setSelectedWord] = useState(sentence[0]);

  useEffect(() => {
    console.log(ref.current);
    const circleType = new CircleType(
      document.getElementById("rotated")
    ).radius(80);
  });

  const handleWordChange = () => {
    setSelectedWord(sentence[selectedWord.id + 1]);
    setPosition(selectedWord.position);
  };
  return (
    <>
      <motion.div
        animate={{
          x: 0,
          y: 0,
          z: -1,
          scale: 1,
          rotate: position,
        }}
        className="circular-text"
      >
        <span ref={ref} id="rotated">
          {`Biztech is an independent creative agency here to help you` + " "}
        </span>
      </motion.div>
      <div className="spinner-nav">
        <FaAngleLeft size={"3em"} />
        <p className="description-text">
          Hello, this is a paragraph. what should we do if we say too much? keep
          typing and find out! we are testing the new system out so be aware of
          this buggy feature.
        </p>
        <FaAngleRight size={"3em"} />
      </div>
    </>
  );
};

export default FramerWheel;
