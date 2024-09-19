import "./styles.scss";

const ProjectItem = ({ item }) => (
  <div className="projects-block__item">
    <a href={item.href} target="_blank" rel="noreferrer">
      <img loading="lazy" className="desktop" src={item.image} alt="" />
      {item.imageMobile && (
        <img loading="lazy" src={item.imageMobile} className="mobile" alt="" />
      )}
      <div dangerouslySetInnerHTML={{ __html: item.name }} />
    </a>
  </div>
);

export default function ProjectsBlock() {
  const cards = [
    {
      name: "Мерч группы «Ленинград»",
      href: "https://www.artlebedev.ru/leningrad/tour-merch/",
    },
    {
      name: "Коллекция одежды для «Мурмуризма»",
      href: "https://www.artlebedev.ru/murmurizm/",
    },
    {
      name: "Коллекция посуды для Императорского фарфорового завода",
      href: "https://www.artlebedev.ru/ipm/",
    },
    {
      name: "Футболки для Культурного центра посольства Республики Корея",
      href: "https://www.artlebedev.ru/korean-culture-center/shirts/",
    },
    {
      name: "Мерч «Хохловки»",
      href: "https://www.artlebedev.ru/hohlovka/merch/",
    },
    {
      name: "Форма хокейного клуба «АВАНГАРД» для предсезонных игр 2023 года",
      href: "https://www.artlebedev.ru/avangard/preseason-kit2/",
    },
    {
      name: "Футболки для фонда поддержки слепоглухих «Со-единение»",
      href: "https://www.artlebedev.ru/so-edinenie/shirts/",
    },
    {
      name: "Мясорубка «Китфорт»",
      href: "https://store.artlebedev.ru/designed/kitfort-kt-2101-1/#119381",
    },
    {
      name: "Конфеты «Скандик»",
      href: "https://store.artlebedev.ru/designed/scandic/",
    },
    {
      name: "Часы «Радиус»",
      href: "https://store.artlebedev.ru/designed/radius/",
    },
    {
      name: "Сироп без</br>сахара",
      href: "https://store.artlebedev.ru/designed/sirop-bez-sakhara-500/#162825",
    },
    {
      name: "Кофе в капсулах для кофемашин «Неспрессо»",
      href: "https://store.artlebedev.ru/designed/coffee4-capsules-nikaragua/",
    },
    {
      name: "Шоппер",
      href: "https://store.artlebedev.ru/designed/shopper/#149505",
    },
    {
      name: "Подушка",
      href: "https://store.artlebedev.ru/designed/podushka/#167723",
    },
    {
      name: "Нашивка",
      href: "https://www.artlebedev.ru/iron-ons/ouch/",
    },
    {
      name: "Чехол",
      href: "https://store.artlebedev.ru/designed/small-suitcase-cover/#143984",
    },
  ].map((item, index) => ({
    ...item,
    image: `/projects/projects_${index}.png`,
    imageMobile:
      index !== 3 && index < 12
        ? `/projects/projects_${index}-mob.png`
        : undefined,
  }));

  const rows = [4, 3, 4, 5];

  const chunkArray = (items, rows) => {
    let chunked = [];
    let index = 0;

    rows.forEach((row) => {
      chunked.push(items.slice(index, index + row));
      index += row;
    });

    return chunked;
  };

  const chunkedCards = chunkArray(cards, rows);

  return (
    <section id="projects" className="projects-block">
      <h2
        className="text-h1"
        dangerouslySetInnerHTML={{
          __html: "Проекты",
        }}
      />
      <div className="projects-block__container">
        {chunkedCards.map((row, rowIndex) => (
          <div className="projects-block__row" key={rowIndex}>
            {row.map((item, index) => (
              <ProjectItem key={index} item={item} />
            ))}
          </div>
        ))}
      </div>
      <a
        href="https://www.artlebedev.ru/everything/?utm_source=event&utm_medium=landing&utm_campaign=presentica"
        target="_blank"
        className="projects-block__link"
        rel="noreferrer"
      >
        <span
          dangerouslySetInnerHTML={{
            __html: "Больше работ на&nbsp;сайте студии",
          }}
        />
        <span className="icon" />
      </a>
    </section>
  );
}
