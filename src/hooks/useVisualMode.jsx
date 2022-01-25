
import {useState} from "react";

const useVisualMode = (initial, replace) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (!replace) {
      setMode(newMode);
      history.push(newMode);
      setHistory(history);
    }
    setMode(newMode);
    history.pop()
    history.push(newMode);
    setHistory(history);
  }
  function back() {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    }
  }

  return { mode, transition, back };
};

export default useVisualMode;