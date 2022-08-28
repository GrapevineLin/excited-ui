<template>
  <img :src="src" />
</template>

<script lang="ts">
export default {
  name: "ExImage",
  setup(props: { src: string }) {
    return props;
  },
};
</script>
