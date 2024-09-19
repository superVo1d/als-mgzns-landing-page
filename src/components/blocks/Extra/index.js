import "./styles.scss";

export default function ExtraBlock() {
  return (
    <section className="extra-block">
      <div>
        <h2
          dangerouslySetInnerHTML={{
            __html: "Дополнительно",
          }}
          className="text-h1"
        />
        <div className="extra-block__container">
          <a
            href="https://store.artlebedev.ru/?utm_source=event&utm_medium=landing&utm_campaign=presentica"
            target="_blank"
            rel="noreferrer"
          >
            <span
              dangerouslySetInnerHTML={{ __html: "Розничная</br>торговля" }}
            />
            <span className="icon" />
          </a>
          <a
            href="https://store.artlebedev.ru/expo/?utm_source=event&utm_medium=landing&utm_campaign=presentica"
            target="_blank"
            rel="noreferrer"
          >
            <span
              dangerouslySetInnerHTML={{ __html: "Выездная</br>торговля" }}
            />
            <span className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
