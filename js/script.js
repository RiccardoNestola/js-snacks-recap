const { createApp } = Vue

    createApp({
        data() {
            return {

            invitati: [],
            inputName:"",
            
        }
    },
        methods: {

            getRandomName(){
                for (let index = 0; index < 10; index++) {
    
                    axios.get(`https://flynn.boolean.careers/exercises/api/random/name`)
                    .then( (response) => {
    
                        const nomi = response.data.response
                        this.invitati.push(nomi);
                    });
                }
    
    
                },

                enterUser(){
                    if (this.invitati.includes(this.inputName)){
                        return true
                    } else {
                        return false
                    }
                    }
            

            
        },


        created() {
            this.getRandomName()
        }


    }).mount('#app')





/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/
    

    