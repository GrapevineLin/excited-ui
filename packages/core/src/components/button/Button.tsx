import { defineComponent } from "vue";

export const props = {
  color: {
    type: String,
    default: "white",
  },
  icon: {
    type: String,
    required: false,
  },
  variant: {
    type: String,
    default: "fill",
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
      text-${props.color === "white" ? "black" : "white"}
      bg-${props.color}
      hover:bg-${String(props.color)}
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
