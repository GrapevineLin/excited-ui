<template>
  <ExButton type="default" @click="openDialog">openDialog</ExButton>

  <ExDialog v-model="showDialog" class="w-[400px]" title="Dialog">
    I see, dead eyes on the verge of suicide
    <br />
    I realize it's not alright
  </ExDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const showDialog = ref(false);
    function openDialog() {
      showDialog.value = true;
    }
    return { showDialog, openDialog };
  },
});
</script>

<style scoped></style>
