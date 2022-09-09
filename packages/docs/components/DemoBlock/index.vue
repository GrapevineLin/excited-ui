<template>
  <slot />
  <div class="vp-raw">
    <slot name="demo" />
  </div>

  <div
    class="flex items-center justify-between mt-6 cursor-pointer rounded-md bg-gray-100 border-solid border-gray-200 py-2 px-2"
    :class="{ '!text-primary': showCode }"
    @click="showCode = !showCode"
  >
    <div class="flex items-center">
      {{ codeTip }}
    </div>
    <div class="i-ic-baseline-code icon-code mx-2 flex-shrink-0"></div>
  </div>

  <div v-show="showCode" class="mt-2">
    <slot name="code" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "demo-block",
  props: {
    codeTip: {
      type: String,
      required: false,
    },
  },
  setup() {
    const showCode = ref<boolean>(false);

    return { showCode };
  },
});
</script>

<style lang="scss" scoped>
.icon-code {
  color: gray;
  width: 26px;
  height: 26px;
}
</style>
