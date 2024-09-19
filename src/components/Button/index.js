import classNames from "classnames";
import "./styles.scss";

export default function Button(props) {
  return (
    <a
      className={classNames(props.className, "button", {
        [`button_${props.color}`]: props.color,
        [`button_size-${props.size}`]: props.size,
        button_outline: props.outline,
      })}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
