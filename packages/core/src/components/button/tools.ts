import { ExButton } from "./index";

export function getButtonClass(
  props: InstanceType<typeof ExButton>["$props"]
): string | undefined {
  const { color, type, plain } = props;
  let className = "";
  if (color) {
    className += `ex-button--colored `;
    if (plain) {
      className += `ex-button--colored--plain `;
    }
  } else {
    if (type) {
      if (plain) {
        className += `ex-button--${type}--plain `;
      } else {
        className += `ex-button--${type} `;
      }
    }
  }

  return `${className} ${getButtonSize(props)} ${getButtonRound(props)}`;
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
