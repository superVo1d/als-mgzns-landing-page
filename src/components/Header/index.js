import "./styles.scss";
import Button from "../Button";

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src="mgzns-logo.svg" loading="lazy" alt="" />
        <nav>
          <ul>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#projects">Проекты</a>
            </li>
            <li>
              <a href="#products">Что у нас есть</a>
            </li>
            <li>
              <a href="#faq">Вопрос-ответ</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
        <Button href="#application">Оставить заявку</Button>
      </div>
    </header>
  );
}
