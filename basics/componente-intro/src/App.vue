<template>
  <div>
    <h1>Contadores</h1>
    <contador/>
    <contador/>
    <contador/>
    <hr>
    <label for="ice-cream-choice">Choose a flavor:</label>
    <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">
    <datalist id="ice-cream-flavors">
      <option value="Chocolate"></option>
      <option value="Coconut"></option>
      <option value="Mint"></option>
      <option value="Strawberry"></option>
      <option value="Vanilla"></option>
    </datalist>
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
label {
  font-family: "Fira Sans", sans-serif;
}
</style>
