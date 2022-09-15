import { ExButton } from "./index";

export function getButtonClass(
  props: InstanceType<typeof ExButton>["$props"]
): string | undefined {
  const { color, type, outline, text } = props;
  let className = "";
  if (text) {
    className += `text `;
  }
  if (color) {
    className += `ex-button--colored `;
  } else {
    if (type) {
      className += `ex-button--${type} `;
    }
  }

  if (!outline) {
    className += `border-none `;
  } else {
    className += `outline`;
  }

  return `${className} ${getButtonSize(props)}  ${getShadow(
    props
  )}${getButtonRound(props)} ${getDisabled(props)}`;
}

function getButtonSize(props: InstanceType<typeof ExButton>["$props"]): string {
  const { size } = props;
  let className = "";
  if (size) {
    if (size === "default") {
      className += "text-base";
    }
    if (size === "small") {
      className += "text-sm";
    }
    if (size === "medium") {
      className += "text-xl";
    }
    if (size === "large") {
      className += "text-2xl";
    }
  }
  return className;
}

function getButtonRound(
  props: InstanceType<typeof ExButton>["$props"]
): string {
  let className = "";
  const { square } = props;
  if (square) {
    className += "rounded-md";
  } else {
    className += "rounded-xl";
  }
  return className;
}

function getDisabled(props: InstanceType<typeof ExButton>["$props"]): string {
  let className = "";
  const { disabled } = props;
  if (disabled) {
    className += " opacity-50 cursor-not-allowed ";
  } else {
    className += " hover:opacity-80 focus:opacity-80 ";
  }
  return className;
}

function getShadow(props: InstanceType<typeof ExButton>["$props"]): string {
  let className = "";
  const { text } = props;
  if (!text) {
    className += " shadow-md  ";
  }
  return className;
}
