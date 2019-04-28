<template>
  <div class="card" :class="{ done: item.done }" @click="$emit('clickedCard')">
    <p>{{ item.name }}</p>
    <span class="close" @click.stop="$emit('deleteAtIndex')">X</span>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  },
  computed: {
    cardStyle() {
      return {};
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: white;
  background-color: red;
  border-left: 5px solid darkred;
  margin: 1em;
  padding-left: 2em;
  padding-right: 2em;
  width: 130px;
  height: 80px;
  border-radius: 10px;
  overflow: auto;
  word-wrap: break-word;
  user-select: none;
}

.done {
  background-color: green;
  border-left: 5px solid darkgreen;
  text-decoration-line: line-through;
}

.close {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  right: 10px;
  top: 10px;
  width: 15px;
  height: 15px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 0.6rem;
}
</style>
