import Button from "../../Button";

import "./styles.scss";

export default function CooperationBlock() {
  return (
    <section className="cooperation-block">
      <div>
        <h2
          className="text-h1"
          dangerouslySetInnerHTML={{
            __html: "Сотрудничество с&nbsp;Магазинусом",
          }}
        />
        <Button href="#application" color="white" size="large">
          Оставить заявку
        </Button>
      </div>
    </section>
  );
}
