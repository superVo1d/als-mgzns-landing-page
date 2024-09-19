import Button from "../../Button";

import "./styles.scss";

export default function DiscountsBlock() {
  return (
    <section className="discounts-block clearfix">
      <div className="discounts-block__text">
        <h1
          dangerouslySetInnerHTML={{
            __html: "Магазинус делает корпоративные подарки",
          }}
          className="text-h1"
        />
        <p
          dangerouslySetInnerHTML={{
            __html:
              "Предлагаем потрясающие штуки в&nbsp;больших и&nbsp;маленьких количествах. При оформлении заказа в&nbsp;сентябре&nbsp;&mdash; скидка&nbsp;10%",
          }}
        />
        <Button href="#application" color="white">
          Оставить заявку
        </Button>
      </div>
    </section>
  );
}
