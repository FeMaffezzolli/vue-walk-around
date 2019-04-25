<template>
  <div id="app">
    <h1>TO DO LIST</h1>
    <span>
      <input @keyup.enter="createNew" type="text" name="todo" id="input">
      <button @click="createNew">OK</button>
      <!-- <button v-if="list.length > 0" @click="clearList" id="clear">Clear</button> -->
    </span>
    <Cards :list="list" :deleteAtIndex="deleteAtIndex"/>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
  components: { Cards },
  data: function() {
    return {
      list: []
    };
  },
  methods: {
    createNew() {
      let item = document.querySelector("#input").value;
      if (!item) return;
      this.list.push(item);
      document.querySelector("#input").value = "";
    },
    clearList() {
      if (window.confirm("Deseja mesmo limpar?")) {
        this.list = [];
      }
    },
    deleteAtIndex(i) {
      if (window.confirm("Confirma a exclusão dessa tarefa?")) {
        this.list.splice(i, 1);
      }
    }
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}

button {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

#clear {
  background-color: darkred;
  margin-left: 3em;
  padding: 16px 24px;
}

input {
  padding: 16px 32px;
}

li {
  list-style: none;
}
</style>
