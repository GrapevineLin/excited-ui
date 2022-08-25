<template>
  <img :src="src" />
</template>

<script lang="ts">
export default {
  name: "Image",
  setup(props: { src: string }) {
    return props;
  },
};
</script>
