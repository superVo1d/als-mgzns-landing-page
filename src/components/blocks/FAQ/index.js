import { useState } from "react";
import "./styles.scss";
import classNames from "classnames";

const FAQBlockItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={classNames("faq-block__item", {
        "faq-block__item_expanded": expanded,
      })}
    >
      <div
        className="faq-block__question"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span dangerouslySetInnerHTML={{ __html: item.question }} />
        <span className="icon" />
      </div>
      <div className="faq-block__answer">
        <span dangerouslySetInnerHTML={{ __html: item.answer }} />
      </div>
    </div>
  );
};

export default function FAQBlock() {
  const items = [
    {
      question: "На&nbsp;какую минимальную сумму принимаются заказы?",
      answer:
        "Сумма заказа ничем не&nbsp;ограничена. Любую партию мы&nbsp;начнем собирать сразу после получения заявки. Все детали заказа отображаются при его оформлении.",
    },
    {
      question: "Как долго готовятся партии?",
      answer:
        "Время изготовления товаров и&nbsp;сборки заказа&nbsp;&mdash; от&nbsp;15&nbsp;рабочих дней. Точные сроки зависят от&nbsp;величины партии и&nbsp;сложности производства.",
    },
    {
      question: "А&nbsp;что насчет логистики?",
      answer:
        "Заказы доставляются в&nbsp;любую точку мира. Чем дальше от&nbsp;Москвы, тем дороже и&nbsp;дольше.",
    },
    {
      question: "Предоставляются&nbsp;ли образцы перед выпуском партии?",
      answer:
        "Да, мы&nbsp;отправляем заказчикам пробные экземпляры и&nbsp;только потом, если все хорошо, начинаем основной выпуск.",
    },
  ];

  return (
    <section id="faq" className="faq-block">
      <div>
        <h2
          dangerouslySetInnerHTML={{
            __html: "Вопрос – ответ",
          }}
          className="text-h1"
        />
        <div className="faq-block__container">
          {items.map((item, index) => (
            <FAQBlockItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
