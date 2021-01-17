import React, { useState, useEffect } from 'react';


const Timer = (props: any) => {
  const [timerVal, setTimerVal] = useState(0) // is a number of milliseconds

  // Date object --> Time string
  const convertDateObjToArr = (dateObj: Date) => {
    let s: number = dateObj.getUTCSeconds()
    let m: number = dateObj.getUTCMinutes()
    let h: number = dateObj.getUTCHours()
    let ss = ("0" + s).slice(-2);
    let mm = ("0" + m).slice(-2);
    let hh = ("0" + h).slice(-2);
    return `${hh}:${mm}:${ss}`
  }

  useEffect(() => {
    if (props.isTimerActive) {
      const timer = setInterval(() => {
        setTimerVal(Number(new Date()) - Number(props.timerObj.start_time) - Number(props.timerObj.cumulative_pause_duration));
      }, 1000);
      
      return () => clearInterval(timer);
    }
    if (!props.timerObj.start_time) {
      setTimerVal(0)
    }
  }, [props.timerObj, props.isTimerActive]);

  return (
    <>
    <div>
      {convertDateObjToArr(new Date(timerVal))}
    </div>
    </>
  );
};

export default Timer;