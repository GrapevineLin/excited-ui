<template>
  <ExButton type="default" @click="toast">toast</ExButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ExToast } from "excited-ui";

export default defineComponent({
  setup() {
    function toast() {
      ExToast("niu");
    }
    return { toast };
  },
});
</script>

<style scoped></style>
