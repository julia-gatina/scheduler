import {useState} from "react";

/**
 * sets mode and history, performs transition between modes
 * @param initial
 * @param replace
 * @returns {{mode: unknown, back: back, transition: transition}}
 */
const useVisualMode = (initial, replace) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    const newHistory = [...history];
    if (replace) {
      newHistory.pop();
    }
    setMode(newMode);
    newHistory.push(newMode);
    setHistory(newHistory);
  };

  const back = () => {
    if (history.length < 2) {
      return;
    }
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
    setMode(newHistory[newHistory.length - 1]);
  };

  return {mode, transition, back};
};

export default useVisualMode;