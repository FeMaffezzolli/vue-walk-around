<template>
  <div class="card">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["text"],
  data() {}
};
</script>

<style>
.card {
  display: grid;
  align-items: center;
  background-color: darkred;
  color: white;
  margin: 1em;
  padding: 1em;
  width: 100px;
  height: auto;
  overflow: hidden;
}
</style>
