<template>
  <div id="app">
    <h4>Autor {{name}}</h4>
    <h1>Filtros & Mixins (Desafio)</h1>

    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <h5>Space to Comma</h5>
    <input v-model="input1" type="text" name="input1" id="input1">
    <p>{{ input1 | spaceToComma }}</p>

    <hr>

    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o
    valor na string final-->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <h5>Global Filter</h5>
    <input v-model="input2" type="text" name="input2" id="input2">
    <p>{{ input2 | countLetter }}</p>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Felipe Maffezzolli",
      input1: "",
      input2: ""
    };
  },
  filters: {
    spaceToComma(str) {
      return str ? str.replace(/ /g, ",") : "";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
