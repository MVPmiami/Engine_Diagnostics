import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Service from "../Service";
import ProgressBar from "../../atoms/ProgressBar";
import p1 from "./../../../assets/img/p1.png";
import p2 from "./../../../assets/img/p2.png";
import p3 from "./../../../assets/img/p3.png";
import p4 from "./../../../assets/img/p4.png";
import p5 from "./../../../assets/img/p5.png";

const Services = () => {
  let items = [
    {
      id: 1,
      img: p1,
      title: "Общее обследование",
      text: "Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.",
    },
    {
      id: 2,
      img: p2,
      title: "Тепловизионная съемка",
      text: "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания",
    },
    {
      id: 3,
      img: p3,
      title: "Телеинспекция инженерных сетей",
      text: "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
    },
    {
      id: 4,
      img: p4,
      title: "Тахеометрическая съемка",
      text: "Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве",
    },
    {
      id: 5,
      img: p5,
      title: "Диагностика высотных сооружений",
      text: "Оценка состояния антенн и дымовых труб при помощи альпинистов и квадрокоптеров с 30-кратным зумом",
    },
  ];
  let ref = useRef();
  let services = items.map((item) => (
    <Service key={item.id} title={item.title} text={item.text} img={item.img} />
  ));

  const [width, setWidth] = useState(0);
  const findWidth = (scrollLeftMax, scrollLeft) => {
    return (scrollLeft * 100) / scrollLeftMax;
  };
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e) => {
        if (el.clientWidth <= 496) {
          return false;
        }
        if (el.scrollLeft === el.scrollLeftMax && e.deltaY >= 0) {
          return false;
        } else if (el.scrollLeft !== el.scrollLeftMax && e.deltaY >= 0) {
          e.preventDefault();
        } else if (el.scrollLeft === el.scrollLeftMax && e.deltaY <= 0) {
          e.preventDefault();
        } else if (el.scrollLeft !== 0 && e.deltaY <= 0) {
          e.preventDefault();
        } else if (el.scrollLeft === 0 && e.deltaY <= 0) {
          return false;
        }
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: "smooth",
        });
        setWidth(findWidth(el.scrollLeftMax, el.scrollLeft));
      };
      el.addEventListener("wheel", onWheel);
      return () => {
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, []);
  return (
    <div className={styles.servicesWrapper}>
      <h2 className={styles.headerServices}>Услуги</h2>
      <h2 className={styles.headerDescription}>
        Выполняем как комплексное обследование, так и отдельные виды работ
      </h2>
      <div className={styles.itemsWrapper} ref={ref}>
        {services}
      </div>
      <ProgressBar width={width} />
    </div>
  );
};

export default Services;
