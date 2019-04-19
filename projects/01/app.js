let vm = new Vue({
    el: "#container",
    data: {
        running: true,
        gameOver: false,
        winner: null,
        playerLife: 1,
        monsterLife: 1,
        attacks: []
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
        attack() {
            this.damageMonster();
            this.damagePlayer();
        },
        specialAttack() {
            this.damageMonster(true);
            this.damagePlayer(true);
        },
        damagePlayer(special) {
            factor = special ? 15 : 10;

            let damage = Math.random() / factor;
            if (damage > this.playerLife) {
                this.playerLife = 0;
                this.gameIsOver("Monster");
            } else {
                this.playerLife -= damage;
            }
            this.attacks.push({
                who: "player",
                action: "perdeu",
                value: damage * 100
            });
        },
        damageMonster(special) {
            factor = special ? 10 : 15;

            let damage = Math.random() / factor;
            if (damage > this.monsterLife) {
                this.monsterLife = 0;
                this.gameIsOver("Player");
            } else {
                this.monsterLife -= damage;
            }
            // this.attacks.push(`Monstro perdeu ${(damage * 100).toFixed(0)}`);
            this.attacks.push({
                who: "monster",
                action: "perdeu",
                value: damage * 100
            });
        },
        healPlayer() {
            this.damagePlayer();
            let heal = Math.random() / 10;
            if (this.playerLife + heal >= 1) {
                this.playerLife = 1;
            } else {
                this.playerLife += heal;
            }
            // this.attacks.push(`Player ganhou ${(heal * 100).toFixed(0)}`);
            this.attacks.push({
                who: "player",
                action: "ganhou",
                value: heal * 100
            });
        },
        giveUp() {
            this.gameIsOver("Monster");
        },
        reset() {
            this.gameOver = false;
            this.playerLife = 1;
            this.monsterLife = 1;
            this.winner = null;
            this.running = true;
            this.attacks = [];
        },
        gameIsOver(winner) {
            this.winner = winner;
            this.gameOver = true;
            this.running = false;
        }
    }
});
