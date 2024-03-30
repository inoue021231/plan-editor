/* import "./home.scss"; */
import React from "react";
import { useEffect, useState } from "react";

type Schedule = {
  title: string;
  content: string;
  time: string;
  // place: string;
};

const Home = () => {
  const [schedules, setSchedules] = useState<Schedule>();

  const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (schedules !== undefined) {
      setSchedules({
        title: schedules.title,
        content: event.target.value,
        time: schedules.time,
      });
    }
  };

  useEffect(() => {
    setSchedules({
      title: "テスト",
      content: "応用情報技術者試験",
      time: "12:00",
    });
  }, []);

  return (
    <>
      {schedules !== undefined && (
        <div className="box">
          <div className="box__header">
            <div className="box__time">{schedules.time}</div>
            <div className="box__title">{schedules.title}</div>
          </div>
          <div className="box__content">{schedules.content}</div>
          <input
            type="text"
            onChange={(event) => handleChangeContent(event)}
            value={schedules.content}
          ></input>
        </div>
      )}
    </>
  );
};

export default Home;
