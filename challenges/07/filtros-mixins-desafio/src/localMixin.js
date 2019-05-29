export default {
    computed: {
        cInput1() {
            let str = this.inputC1;
            return str ? str.replace(/ /g, ",") : "";
        },
        cInput2() {
            let str = this.inputC2;
            if (str && str.length > 0) {
                let words = str.split(" ");
                let counts = words.map(s => `(${s.length})`);
                let finalArray = [];
                for (let index = 0; index < counts.length; index++) {
                    finalArray.push(words[index]);
                    finalArray.push(counts[index]);
                }
                return finalArray.join(" ");
            }
            return "";
        }
    }
};
