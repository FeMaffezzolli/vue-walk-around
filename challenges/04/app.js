let vm = new Vue({
    el: "#desafio",
    data: {
        classEfeito: "destaque",
        c3: null,
        c4: null,
        apply: "true",
        style5: {
            width: "100px",
            height: "100px"
        },
        color5: "",
        width: "0"
    },
    computed: {
        class4() {
            return this.apply === "true" ? this.c4 : null;
        }
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.classEfeito =
                    this.classEfeito === "destaque" ? "encolher" : "destaque";
            }, 2000);
        },
        iniciarProgresso() {
            let val = 0;
            let temporizador = setInterval(() => {
                (val += 1), (this.width = `${val}%`);
                if (val == 100) clearInterval(temporizador);
            }, 50);
        }
    }
});
