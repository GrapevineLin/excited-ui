import { defineComponent, PropType } from "vue";
import { unoColors, unoIcons } from "../../config/unocss";
import "uno.css";

export type IColor = typeof unoColors[number];
export type IIcon = typeof unoIcons[number];

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
  icon: {
    type: String as PropType<IIcon>,
    required: false,
  },
};

export default defineComponent({
  name: "ExButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${String(props.color)}-500 
      hover:bg-${String(props.color)}-700 
      border-none 
      cursor-pointer 
      m-1
      `}
      >
        {props.icon && (
          <i class={`i-ic-baseline-${String(props.icon)} p-3`}></i>
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
