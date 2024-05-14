import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

function App() {
  const [bottomBorder, setBottomBorder] = useState<boolean>(true);
  const [minute, setMinute] = useState<number | null | string>(null);
  const [second, setSecond] = useState<number | null | string>(null);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  function handleStart() {
    setTimerActive(true);
    setMinute(20);
    setSecond(0);
  }

  useEffect(() => {
    if (timerActive) {
      const interval = setInterval(() => {
        if (second > 0) {
          setSecond(second - 1);
        } else {
          if (minute === 0) {
            clearInterval(interval);
            setTimerActive(false);
            if (bottomBorder) {
              setBottomBorder(false);
              setMinute(5);
            }
          } else {
            setMinute(minute - 1);
            setSecond(59);
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerActive, minute, second, bottomBorder]);
  const Zero2 = styled.span`
    font-weight: 900;
  `;

  const WrapperP = styled.div`
    width: 320px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 20px;
    text-align: center;
  `;

  const Pomodoro = styled.button`
    font-size: 19px;
    padding-bottom: 10px;
    border: 1px solid white;
    display: inline-block;
    cursor: pointer;
    border-bottom-color: ${bottomBorder ? "blue" : "white"};
    padding-left: 25px;
    padding-right: 25px;
    background: white;
    padding-top: 10px;
    color: blue;
    font-weight: 100;

    &:hover {
      transition: all 0.5s;
      background: #ecf3f3;
    }
  `;

  const Rest = styled.button`
    font-size: 19px;
    background: white;
    padding-bottom: 10px;
    padding-top: 10px;
    border: 1px solid white;
    display: inline-block;
    cursor: pointer;
    border-bottom-color: ${!bottomBorder ? "green" : "white"};
    color: green;
    padding-left: 25px;
    padding-right: 25px;
    font-weight: 100;

    &:hover {
      transition: all 0.5s;
      background: #ecf3f3;
    }
  `;

  const Zero1 = styled.span`
    font-weight: 900;
  `;

  const Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    font-family: sans-serif;
  `;

  const Text1 = styled.h1`
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  `;

  const WrapperT = styled.div`
    width: 500px;
    margin: 0 auto;
  `;

  const Timer = styled.span`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 6px solid #d3e0fb;
    display: inline-block;
    margin-top: 40px;
    margin-left: 30px;
    position: relative;
    background: #f7faff;
  `;

  const Time = styled.h1`
    color: #2563eb;
    font-size: 105px;
    font-weight: 100;
    position: absolute;
    left: 70px;
    top: 50px;
  `;

  const Level = styled.h5`
    color: #2563eb;
    font-size: 20px;
    font-weight: 100;
    position: absolute;
    left: 175px;
    top: 250px;
  `;

  const Popular = styled.h5`
    color: #2563eb;
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    left: 165px;
    top: 280px;
  `;

  const Start = styled.button`
    width: 400px;
    height: 61px;
    border-radius: 25px;
    background: #2563eb;
    font-size: 20px;
    font-weight: 700;
    border: none;
    letter-spacing: 2px;
    color: white;
    margin-left: 40px;
    margin-top: 30px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      opacity: 0.8;
    }
  `;

  function handleStart() {
    setTimerActive(true);
    setMinute(20);
    setSecond(0);
  }

  return (
    <Wrapper>
      <Text1>Why don't you take a challenge? 😏</Text1>
      <WrapperT>
        <WrapperP>
          <Pomodoro onClick={() => setBottomBorder(true)}>
            Pomodoro <Zero1>{0}</Zero1>
          </Pomodoro>
          <Rest onClick={() => setBottomBorder(false)}>
            Rest <Zero2>{0}</Zero2>
          </Rest>
        </WrapperP>
        <Timer>
          <Time>
            {minute !== null && second !== null
              ? `${minute}:${second}`
              : "20:00"}
          </Time>
          <Level>Level</Level>
          <Popular>Popular</Popular>
        </Timer>
        <Start onClick={handleStart}>START</Start>
      </WrapperT>
    </Wrapper>
  );
}

export default App;
