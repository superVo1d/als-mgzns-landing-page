import Button from "../../Button";

import "./styles.scss";

export default function EventsBlock() {
  const events = [
    {
      name: "Международная ярмарка интеллектуальной литературы «Нон-фикшен»",
      date: "<nobr>5–8</nobr>&nbsp;декабря",
      city: "Москва",
    },
    {
      name: "Территория будущего. Москва-2030",
      date: "15 августа — 8&nbsp;сентября",
      city: "Москва",
    },
    {
      name: "Урбан-форум-2024",
      date: "1&nbsp;августа — 8&nbsp;сентября",
      city: "Москва",
    },
    {
      name: "Летние дни Студии Артемия Лебедева",
      date: "<nobr>13–14</nobr>&nbsp;июля",
      city: "Москва",
    },
    {
      name: "ВК-фест",
      date: "<nobr>13–14</nobr>&nbsp;июля",
      city: "Москва",
    },
    {
      name: "Книжный фестиваль «Красная площадь»",
      date: "<nobr>6–9</nobr>&nbsp;июня",
      city: "Москва",
    },
    {
      name: "Книжная ярмарка «Рассвет бук фейр»",
      date: "<nobr>1–2</nobr>&nbsp;июня",
      city: "Москва",
    },
    {
      name: "РИФ ин зе сити",
      date: "<nobr>27–28</nobr>&nbsp;мая",
      city: "Москва",
    },
    {
      name: "Фестиваль «Книгамай»",
      date: "<nobr>17–19</nobr>&nbsp;мая",
      city: "Москва",
    },
    {
      name: "Тотальная инсталляция «Любовь от А до Я»",
      date: "15&nbsp;мая9&nbsp;– 309&nbsp;июня",
      city: "Москва",
    },
  ];

  return (
    <section className="events-block">
      <div>
        <h2
          dangerouslySetInnerHTML={{
            __html: "Мы на&nbsp;меро&shy;прия&shy;тиях",
          }}
          className="text-h1"
        />
        <div className="events-block__container">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: "2024",
              }}
              className="text-h2 desktop"
            />
            <div className="events-block__table">
              {events.map((event, index) => (
                <div key={index}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: event.name,
                    }}
                  />
                  <div dangerouslySetInnerHTML={{ __html: event.date }} />
                  <div dangerouslySetInnerHTML={{ __html: event.city }} />
                </div>
              ))}
            </div>
            <Button
              href="https://store.artlebedev.ru/expo/?utm_source=event&utm_medium=landing&utm_campaign=presentica"
              outline
            >
              Смотреть еще
            </Button>
          </div>
          <div>
            <img
              src="/events/events_0.png"
              className="desktop"
              loading="lazy"
              alt=""
            />
            <img
              src="/events/events_0-mob.png"
              className="mobile"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
