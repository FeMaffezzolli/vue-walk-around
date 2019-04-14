new Vue({
    el: "#desafio",
    data: {
        valor: ""
    },
    methods: {
        alert(str) {
            alert(str);
        },
        down(e) {
            // alert("Down");
            this.valor = e.target.value;
        }
    }
});
