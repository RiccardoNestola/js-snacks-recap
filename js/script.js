const { createApp } = Vue

    createApp({
        data() {
            return {

            numbers: [],
            
        }
    },
        methods: {

        getNumbers(){

                axios.get(`https://flynn.boolean.careers/exercises/api/random/int`)
                .then( (response) => {

                this.numbers.push(response.data.response);
                console.log(this.numbers);
                });


            }
            

            
        },


        created() {
            this.getNumbers()
        }


    }).mount('#app')





/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/
    

    