
const {createApp} = Vue;

createApp({
    data(){
        return{
            result: '',
            userNumber: '',
        }
    },

    methods: {
        getRandomNumber(items){
            axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=' + items)
            .then((response) => {
                const numbers = response.data.response;
                let sum = 0;
                numbers.forEach(element => {
                    sum += element;
                });
                this.result = sum;
            });
        }
    },

}).mount("#app")