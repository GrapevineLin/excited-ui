import { defineComponent, PropType, toRefs } from "vue";
import { unoColors, unoIcons } from "../../config/unocss"
import "uno.css";

export type IColor = keyof typeof unoColors
export type IIcon = keyof typeof unoIcons
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue'  // 设定默认颜色
  },
  icon: {
    icon: String as PropType<IIcon>,
    required: false
  }
}

export default defineComponent({
  name: "Button",
  props,
  setup(props, { slots }) {
    return () => <button
      class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
      border-none 
      cursor-pointer 
      m-1
      `}
    >
      {props.icon && <i class={`i-ic-baseline-${props.icon} p-3`}></i>}
      {slots.default ? slots.default() : ''}
    </button>
  }
});