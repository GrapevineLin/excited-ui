import { defineComponent } from "vue";

export const props = {
  color: {
    type: String,
    default: "blue", // 设定默认颜色
  },
  icon: {
    type: String,
    required: false,
  },
};

export const ExButton = defineComponent({
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

export type ExButton = InstanceType<typeof ExButton>;
