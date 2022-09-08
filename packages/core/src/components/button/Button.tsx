import { defineComponent } from "vue";
import { getButtonClass } from "./tools";

export const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
] as const;

export const buttonSizes = ["default", "mini", "medium", "large"] as const;

export const props = {
  color: {
    type: String,
  },
  icon: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    values: buttonTypes,
    default: () => "default",
  },
  size: {
    type: String,
    values: buttonSizes,
  },
  square: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
};

export const ExButton = defineComponent({
  name: "ExButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
      ex-button
      py-2
      px-4
      font-semibold 
      shadow-md 
      text-white 
      hover:opacity-80
      border-none 
      cursor-pointer 
      m-1
      ${getButtonClass(props)}
      `}
        style={{ "--ex-button-color": props.color }}
      >
        {props.icon && (
          <i class={`i-ic-baseline-${String(props.icon)} p-3`}></i>
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});

export type ExButton = InstanceType<typeof ExButton>;
