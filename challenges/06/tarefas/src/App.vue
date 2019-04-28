<template>
  <div id="app">
    <Progress v-show="list.length" :progress="progress"/>
    <h1>TO DO LIST</h1>
    <span>
      <input
        @keyup.enter="createNew"
        type="text"
        name="todo"
        id="input"
        placeholder="Digite a tarefa aqui"
      >
      <button @click="createNew">OK</button>
      <!-- <button v-if="list.length > 0" @click="clearList" id="clear">Clear</button> -->
    </span>
    <Cards v-if="list.length" :list="list" @deleteAtIndex="deleteTask" @clickedCard="toggleCard"/>
    <h3 class="message" v-else>Você está com tudo em dia ! =)</h3>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Progress from "@/components/Progress.vue";

export default {
  components: { Cards, Progress },
  data: function() {
    return {
      list: []
    };
  },
  methods: {
    createNew() {
      let item = document.querySelector("#input").value;
      if (!item) return;
      const reallyNew = this.list.filter(t => t.name === item).length == 0;
      if (reallyNew) this.list.push({ name: item, done: false });
      document.querySelector("#input").value = "";
    },
    clearList() {
      if (window.confirm("Deseja mesmo limpar?")) {
        this.list = [];
      }
    },
    deleteTask(i) {
      if (window.confirm("Confirma a exclusão dessa tarefa?")) {
        this.list.splice(i, 1);
      }
    },
    toggleCard(i) {
      this.list[i].done = !this.list[i].done;
    }
  },
  computed: {
    progress() {
      let total = this.list.length;
      let done = this.list.filter(i => i.done).length;
      return Math.round((done / total) * 100) || 0;
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
  margin-bottom: 30px;
  font-weight: 300;
  font-size: 3rem;
}

button {
  background-color: #33dd88;
  outline: none;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline- block;
  font-size: 16px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

#clear {
  background-color: darkred;
  margin-left: 3em;
  padding: 16px 24px;
}

input {
  padding: 16px 32px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  outline: none;
}

li {
  list-style: none;
}

.message {
  margin-top: 45px;
}
</style>
