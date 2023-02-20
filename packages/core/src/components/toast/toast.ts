import { createVNode, render } from "vue";
import ToastComponent from "@/components/toast/toast.vue";

let div: HTMLDivElement | null = null;

let timer: NodeJS.Timeout | string | number | undefined;

type title = string;
interface ToastType {
  title: title;
  duration?: number;
}
type union = title | ToastType;

const DEFAULT_TITLE = "";
const DEFAULT_DURATION = 2 * 1000;

let hasSetup = false;

function setup() {
  if (hasSetup) return;
  hasSetup = true;
  div = document.createElement("div");
  div.setAttribute("class", "toast-wrapper");
  document.body.appendChild(div);
}

export function Toast(options: union) {
  setup();
  let title, duration;
  if (typeof options === "string") {
    title = options || DEFAULT_TITLE;
    duration = DEFAULT_DURATION;
  } else {
    title = (options as ToastType).title ?? DEFAULT_TITLE;
    duration = (options as ToastType).duration ?? DEFAULT_DURATION;
  }
  // 创建虚拟dom  (组件对象， props)
  const vnode = createVNode(ToastComponent, { title });

  // 把虚拟dom渲染到div
  render(vnode, div as HTMLDivElement);
  clearTimeout(timer);
  timer = setTimeout(() => {
    render(null, div as HTMLDivElement);
  }, duration);
}
