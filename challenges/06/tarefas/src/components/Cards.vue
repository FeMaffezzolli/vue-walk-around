<template>
  <div class="tasksWrapper">
    <Card
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      @clickedCard="$emit('clickedCard', index)"
      @deleteAtIndex="$emit('deleteAtIndex', index)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: { Card },
  props: ["list"]
};
</script>

<style>
.tasksWrapper {
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
