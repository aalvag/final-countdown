import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TimerContainer } from "./components/TimerContainer";
import TimerInput from "./components/TimerInput";

function App() {
  const [time, setTime] = useState(new Date("Dec 2, 2022 00:00:00").getTime());
  const [newTime, setNewTime] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      const difference = time - now;
      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("Llegue 🎉");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  return (
    <div className="App">
      <Header message={message} />
      <TimerContainer days={days} hours={hours} minutes={minutes} seconds={seconds} />
      {/* <TimerInput value={newTime} handleClick={handleClick} handleChange={handleChange} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

