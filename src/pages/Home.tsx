/* import "./home.scss";
import { useEffect, useState } from "react";

type Schedule = {
  title?: string;
  content?: string;
  time?: string;
  // place?: string;
};

const Home = () => {
  const [schedules, setSchedules] = useState<Schedule>({});
  useEffect(() => {
    setSchedules({
      title: "テスト",
      content: "応用情報技術者試験",
      time: "12:00",
    });
  }, []);

  return (
    <div className="box">
      <div className="box__header">
        <div className="box__time">{schedules.time}</div>
        <div className="box__title">{schedules.title}</div>
      </div>
      <div className="box__content">{schedules.content}</div>
    </div>
  );
};

export default Home;
 */
