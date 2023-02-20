<template>
  <Teleport to="body">
    <Transition name="bg">
      <div
        v-if="showDialog"
        class="ex-dialog-container fixed inset-0 bg-[hsla(var(--ex-overlay-color),var(--ex-overlay-opacity))] z-[var(--ex-dialog-z-index)] grid place-items-center"
        @click.prevent="clickModal"
      >
        <Transition name="scale">
          <div
            class="ex-dialog bg-[hsl(var(--ex-dialog-background-color))] rounded-sm p-6"
            v-bind="$attrs"
            @click.stop
          >
            <slot v-if="showTitle" name="header">
              <div class="ex-dialog-title text-lg font-bold">
                {{ title }}
              </div>
            </slot>

            <div class="ex-dialog-content">
              <slot> </slot>
            </div>

            <div class="ex-dialog-footer">
              <slot name="footer"> </slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, watch } from "vue";

export const props = {
  showTitle: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    require: false,
  },
  modelValue: {
    type: Boolean,
    require: true,
  },
};

export default defineComponent({
  name: "ExDialog",
  inheritAttrs: false,
  props,
  setup(props, ctx) {
    const showDialog = ref(false);

    function open() {
      showDialog.value = true;
    }

    function close() {
      showDialog.value = false;
    }

    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          open();
          nextTick(() => {
            ctx.emit("open");
          });
        } else {
          close();
          nextTick(() => {
            ctx.emit("close");
          });
        }
      }
    );

    onMounted(() => {
      if (props.modelValue) {
        open();
      }
    });

    function clickModal() {
      if (!props.modelValue) return;
      ctx.emit("update:modelValue", false);
    }

    return {
      showDialog,
      clickModal,
    };
  },
});
// export default ExDialog;
// export type ExDialog = InstanceType<typeof ExDialog>;
</script>

<style lang="scss" scoped>
// .ex-dialog-container {
//   // z-index: var(--ex-dialog-z-index, 2000);
//   //   position: fixed;
//   //   left: 0;
//   //   right: 0;
//   //   top: 0;
//   //   bottom: 0;
//   //   height: 100%;
//   //   background-color: rgba(0, 0, 0, 0.5);
//   //   overflow: auto;
//   //   z-index: 2000;
//   .ex-dialog {
//     // margin: var(--ex-dialog-margin-top, 15vh) auto 50px;
//     // background-color: var(--ex-dialog-background-color, white);
//   }
// }
</style>
