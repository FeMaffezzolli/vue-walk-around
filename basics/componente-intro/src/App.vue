<template>
  <div>
    <h1>Contadores</h1>
    <p>{{contador}}</p>
    <button @click="contador++">Mais</button>
    <button @click="contador--">Menos</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  }
};
</script>

<style>
button {
  background: #333;
  color: #fff;
}
</style>
