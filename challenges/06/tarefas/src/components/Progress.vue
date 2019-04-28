<template>
  <div class="progressBar">
    <div class="progress" :style="{width: progress + '%'}">
      <span class="progressLabel">{{ progress }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["progress"]
};
</script>

<style>
.progressBar {
  width: 60%;
  border: solid 1px white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.progress {
  display: flex;
  justify-content: center;
  background-color: green;
  height: 100%;
  border-radius: 10px;
}

.progressLabel {
  z-index: 1;
  margin-left: 12px;
}
</style>
