import {useState} from "react";

const useVisualMode = (initial, replace) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    const newHistory = [...history];
    if (replace) {
      newHistory.pop();
    }

    setMode(newMode);
    newHistory.push(newMode);
    setHistory(newHistory);
  }

  function back() {
    if (history.length < 2) {
      return;
    }
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
    setMode(newHistory[newHistory.length - 1]);
  }

  return {mode, transition, back};
};

export default useVisualMode;