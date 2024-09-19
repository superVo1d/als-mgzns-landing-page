import "./styles.scss";

export default function AboutBlock() {
  return (
    <section id="about" className="about-block">
      <div>
        <h2
          className="text-h1"
          dangerouslySetInnerHTML={{
            __html: "Магазинус&nbsp;&mdash; это...",
          }}
        />

        <div className="about-block__container">
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  "Дизайнерские вещи, одежда, аксессуары, игрушки и&nbsp;книги, которые приятно покупать себе и&nbsp;дарить друзьям",
              }}
            />
            <img
              src="/about/about_1.png"
              className="desktop"
              loading="lazy"
              alt=""
            />
          </div>
          <img
            src="/about/about_0-mob.png"
            className="mobile"
            loading="lazy"
            alt=""
          />
          <div>
            <img
              src="/about/about_0.png"
              loading="lazy"
              className="desktop"
              alt=""
            />
            <p
              dangerouslySetInnerHTML={{
                __html:
                  "А&nbsp;также крутые штуки для всей компании, кастомный дизайн и&nbsp;корпоративные подарки. Магазинус существует с&nbsp;1995 года",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
