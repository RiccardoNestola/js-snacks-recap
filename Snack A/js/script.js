
 const  {createApp} = Vue
createApp({
    data(){
        return{
            message:'',
            macMessage:[],
            userMessage:[],
        }
    },




    methods:{
        newMessage(content){
            if(this.message !== ''){
                this.message='';
                this.userMessage.push(content)
            }
            setTimeout(() => {
                this.getRandomMessage()
            },500)
        },
        



        getRandomMessage(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((response) => {
            this.macMessage.push(response.data.response)         
            })
        }

    },
    

}).mount('#app');