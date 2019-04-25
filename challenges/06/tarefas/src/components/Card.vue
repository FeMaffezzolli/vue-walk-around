<template>
  <div class="card">
    <p>{{ text }}</p>
    <button @click="deleteAtIndex(id)">X</button>
  </div>
</template>

<script>
export default {
  props: ["text", "id", "deleteAtIndex"]
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-content: space-evenly;
  align-items: center;
  background-color: darkred;
  color: white;
  margin: 1em;
  padding-left: 2em;
  padding-right: 2em;
  width: auto;
  height: auto;
  overflow: hidden;
  user-select: none;
}

button {
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style>
