
const message=prompt("Inserisci qualcosa");
const app=new Vue(
    {
        el:'#app',
        data:{
            messaggio: message,
            link:"",
            src:""
        },
        methods:{
            mostraImg: function(){
                this.src=this.link;
            }
        }
    }
)