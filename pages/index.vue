<script setup lang="ts">
import * as useFoo from "~/composables/useFoo";
const foo = useFoo.useFoo();
const hello = useHello();
</script>

<template>
  <div>
    <h1>Pages</h1>
    <p>{{ foo }}</p>
    <p>{{ hello }}</p>
  </div>
</template>

<style lang="scss">
h1 {
  text-align: center;
}
</style>
