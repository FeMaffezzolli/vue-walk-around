export default {
    computed: {
        cInput1() {
            let str = this.inputC1;
            return str ? str.replace(/ /g, ",") : "";
        },
        cInput2() {
            let str = this.inputC2;
            if (str && str.length > 0) {
                return str
                    .split(" ")
                    .map(s => `${s} (${s.length})`)
                    .join(" ");
            }
            return "";
        }
    }
};
