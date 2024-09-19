import "./styles.scss";

export default function Cooperation2Block() {
  return (
    <section id="application" className="cooperation-2-block">
      <div>
        <h2
          dangerouslySetInnerHTML={{
            __html: "Мы всегда готовы сотрудничать",
          }}
          className="text-h1"
        />
        <a href="mailto:store@artlebedev.ru" className="text-h1">
          store@artlebedev.ru
        </a>
      </div>
    </section>
  );
}
