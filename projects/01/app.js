let vm = new Vue({
    el: "#container",
    data: {
        running: true,
        gameOver: false,
        winner: null,
        playerLife: 1,
        monsterLife: 1
    },
    computed: {
        playerLifeBar() {
            let pl = this.playerLife;
            return {
                height: "100%",
                width: `${pl * 100}%`,
                background:
                    pl > 0.3 ? (pl > 0.5 ? "#28a745" : "#ffc107") : "#dc3545"
            };
        },
        monsterLifeBar() {
            let ml = this.monsterLife;
            return {
                height: "100%",
                width: `${ml * 100}%`,
                background:
                    ml > 0.3 ? (ml > 0.5 ? "#28a745" : "#ffc107") : "#dc3545"
            };
        }
    },
    methods: {
        atack() {},
        specialAtack() {},
        damagePlayer() {
            this.playerLife -= Math.random() / 2;
        },
        damageMonster() {
            //  ...
        },
        healPlayer() {
            // ...
        },
        giveUp() {
            // ...
        }
    }
});
