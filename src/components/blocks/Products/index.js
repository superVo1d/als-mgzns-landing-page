import "./styles.scss";

export default function ProductsBlock() {
  const cards = [
    {
      name: "Одежда",
      href: "https://store.artlebedev.ru/apparel/",
    },
    {
      name: "Книги",
      href: "https://store.artlebedev.ru/books/",
    },
    {
      name: "Произведено</br>студией",
      href: "https://store.artlebedev.ru/made/",
    },

    {
      name: "Электроника",
      href: "https://store.artlebedev.ru/electronics/",
    },

    {
      name: "Подарочные сертификаты",
      href: "https://store.artlebedev.ru/certificates/",
    },
    {
      name: "Кофе и&nbsp;еда",
      href: "https://store.artlebedev.ru/coffee-shop/",
    },
    {
      name: "Аксессуары",
      href: "https://store.artlebedev.ru/accessories/",
    },
    {
      name: "Упаковка и&nbsp;открытки",
      href: "https://store.artlebedev.ru/gift-wrapping/",
    },
    {
      name: "Плакаты",
      href: "https://store.artlebedev.ru/posters/ ",
    },
    {
      name: "Игры и&nbsp;игрушки",
      href: "https://store.artlebedev.ru/toys-games/",
    },
  ].map((item, index) => ({
    ...item,
    image: `/products/product_${index}.png`,
    imageMobile: `/products/product_${index}-mob.png`,
  }));

  return (
    <section id="products" className="products-block">
      <div>
        <h2
          dangerouslySetInnerHTML={{
            __html: "Что у нас есть",
          }}
          className="text-h1"
        />
        <div className="products-block__container">
          {cards.map((item, index) => (
            <div key={index} className="products-block__item">
              <a href={item.href}>
                <img
                  src={item.image}
                  className="desktop"
                  alt=""
                  loading="lazy"
                />
                {item.imageMobile && (
                  <img
                    src={item.imageMobile}
                    className="mobile"
                    alt=""
                    loading="lazy"
                  />
                )}
                <div dangerouslySetInnerHTML={{ __html: item.name }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
