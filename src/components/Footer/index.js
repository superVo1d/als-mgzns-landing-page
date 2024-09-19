import "./styles.scss";

const FooterItem = ({ item }) => {
  return (
    <div className="footer__item">
      {item.icon && (
        <span className="icon">
          <img src={"/icons/" + item.icon} loading="lazy" alt="" />
        </span>
      )}
      <div dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
};

export default function Footer() {
  const social = [
    {
      href: "https://www.instagram.com/magazinus_als",
      icon: "instagram.svg",
    },
    {
      href: "https://www.instagram.com/artlebedevru",
      icon: "instagram.svg",
    },
    {
      href: "https://t.me/artlebedev",
      icon: "telegram.svg",
    },
    {
      href: "https://vk.com/artlebedev_news",
      icon: "vk.svg",
    },
  ];

  const blocks = [
    {
      icon: "location.svg",
      text: `
            <p>
                <a href="https://store.artlebedev.ru/offline/lik/" target="_blank">Магазинус в&nbsp;офлайне</a>
                </br>
                </br>
                Большая Никитская, 35
            </p>
            <p>
                <a href="https://store.artlebedev.ru/offline/" target="_blank">Все магазинусы</a>
            </p>
            <p>
                <a href="https://store.artlebedev.ru/wholesale/" target="_blank">Оптовая торговля</a>
            </p>
            <p>
                <a href="https://store.artlebedev.ru/expo/" target="_blank">Выездная торговля</a>
            </p>
        `,
    },
    {
      icon: "clock.svg",
      text: `
        <p><b>График работы</b></p>
        <p>Наш онлайн-магазин работает 24&nbsp;часа в&nbsp;сутки, 365 дней в&nbsp;году (366&nbsp;в високосные годы). Администраторы отвечают на&nbsp;вопросы по&nbsp;телефону ежедневно с&nbsp;10:00 до&nbsp;21:00, обработка платежей и&nbsp;доставка товаров осуществляются с&nbsp;понедельника по&nbsp;пятницу (кроме праздников) с&nbsp;10:00 до&nbsp;19:00 по&nbsp;московскому времени.</p>
        `,
    },
    {
      icon: "delivery.svg",
      text: `
        <p><a href="https://store.artlebedev.ru/delivery/" target="_blank">Доставка</a></p>
        <p>Мы&nbsp;доставляем товары по&nbsp;всему миру. Способ доставки покупатели выбирают при оформлении заказа. Стоимость доставки включается в&nbsp;счет автоматически и&nbsp;зависит от&nbsp;веса посылки и&nbsp;адреса получателя.</p>
        <p>Курьерская доставка по&nbsp;Москве бесплатна при заказе на&nbsp;сумму свыше 3500&nbsp;рублей.</p>
        <p><a href="https://store.artlebedev.ru/order/" target="_blank">Заказ</a></p>
        <p>
            <a href="https://store.artlebedev.ru/payment/" target="_blank">Оплата</a>
            </br>
            <img src="/icons/umoney.svg" />
            <img src="/icons/mir.svg" />
            <img src="/icons/visa.svg" />
            <img src="/icons/mc.svg" />
            </br>
            Принимаем к&nbsp;оплате наличные (при самовывозе и&nbsp;курьерской доставке), карты &laquo;Виза&raquo;, &laquo;Мастеркард&raquo; и&nbsp;&laquo;Мир&raquo;, &laquo;Юмани&raquo;, а&nbsp;также банковские переводы.
        </p>
        `,
    },
    {
      text: `
          <p><a href="https://store.artlebedev.ru/contacts/" target="_blank">Контакты</a></p>
          <p>8&nbsp;800 200-40-33</br><sub>Бесплатный по&nbsp;России</sub></p>
          <p>+7&nbsp;495 105-91-24</br><sub>в&nbsp;Москве</sub></p>
          <p><a href="mailto:sales@artlebedev.ru" target="_blank">sales@artlebedev.ru</a></br>
          <sub>Оптовикам и&nbsp;распространителям</sub></p>
          <p><a href="https://t.me/ALSStoreBot" target="_blank">t.me/ALSStoreBot</a></br>
          <sub>Телеграм бот</sub></p>
          <p><a href="mailto:store@artlebedev.ru" target="_blank">store@artlebedev.ru</a></br>
          <sub>Электро почта</sub></p>
          `,
    },
    {
      text: `
        <p><a href="https://store.artlebedev.ru/privacy/" target="_blank">Рекламные сообщения</a></p>
        <p><a href="https://store.artlebedev.ru/terms/" target="_blank">Юридическая информация</a></p>
        <p><a href="https://store.artlebedev.ru/privacy/" target="_blank">Политика обработки персональных данных</a></p>
        `,
    },
  ];

  return (
    <footer id="contacts" className="footer">
      <div className="footer__container-top">
        <a
          href="https://store.artlebedev.ru/expo/?utm_source=event&utm_medium=landing&utm_campaign=presentica"
          target="_blank"
          rel="noreferrer"
        >
          <img src="mgzns-logo.svg" loading="lazy" alt="" />
        </a>
        <div className="footer__social">
          {social.map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noreferrer">
              <img src={"/icons/" + item.icon} loading="lazy" alt="" />
            </a>
          ))}
        </div>
      </div>
      <div className="footer__container">
        <div>
          {blocks.slice(0, 2).map((item, index) => (
            <FooterItem item={item} key={index} />
          ))}
        </div>
        <div>
          {blocks.slice(2, 3).map((item, index) => (
            <FooterItem item={item} key={index} />
          ))}
        </div>
        <div>
          {blocks.slice(3, 5).map((item, index) => (
            <FooterItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="footer__container-bottom">
        <div>
          <span dangerouslySetInnerHTML={{ __html: "©&nbsp;1995–2024 " }} />
          <a href="https://www.artlebedev.ru/" target="_blank" rel="noreferrer">
            Студия Артемия Лебедева
          </a>
        </div>
      </div>
    </footer>
  );
}
