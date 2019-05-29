import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("countLetter", function(str) {
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
});

new Vue({
    render: h => h(App)
}).$mount("#app");
