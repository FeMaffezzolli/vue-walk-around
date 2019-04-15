new Vue({
    el: "#desafio",
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor === 37 ? "Igual" : "Diferente";
        }
    },
    watch: {
        resultado(newVal, oldVal) {
            if (newVal) {
                setTimeout(() => {
                    this.valor = 0;
                }, 5000);
            }
        }
    }
});
