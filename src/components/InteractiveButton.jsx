import {useRef, useState} from "react";
import {motion} from "framer-motion";

const CYCLE_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "αβγδεζηθικλμνξοπρστυφχψω∑∏∆∫∞≈≠≤≥";

export default function InteractiveButton({text}) {
  return (
    <div className="flex justify-center items-center min-h-[200px] p-4">
      <CustomButton text={text} />
    </div>
  );
}

const CustomButton = ({text}) => {
  const intervalRef = useRef(null);
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const screambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLE_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");
      setDisplayText(screambled);
      pos++;
      if (pos > text.length * CYCLE_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <motion.button
      whileTap={{scale: 0.95}}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="w-full px-8 py-4 text-lg font-bold text-white rounded-lg overflow-hidden relative group bg-primary">
      <span className="absolute inset-0 w-full h-full bg-[#ff5c72] rounded-lg transform scale-0 transition-transform duration-300 ease-out group-hover:scale-100 "></span>
      <span className="relative z-10">{displayText}</span>
    </motion.button>
  );
};
