<template>
  <div class="tasksWrapper">
    <Card
      v-for="(item, index) in list"
      :key="index"
      :id="index"
      :text="item"
      :deleteAtIndex="deleteAtIndex"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: { Card },
  props: ["list", "deleteAtIndex"],
  methods: {
    alerta() {
      alert("opa");
    }
  }
};
</script>

<style>
.tasksWrapper {
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
