Vue.component('candidato', {
    //props:['nombre', 'correo', 'imagen'],
    props:{
        nombre:{
            type: [String, Array], //null = *
            required: true,
        },
        correo:{
            type: String,
            default: 'Juan@media.es'
        },
        imagen: String,
        location:{
            type: Object,
            default(){
                return{
                    ciudad: 'Valencia',
                }
            }
        },
    },
    template:'#candidato-template',
});

const app = new Vue({
    el:'main',
    mounted(){
        this.obtenerCandidatos();
    },
    data:{
        candidatos:[],
    },
    methods:{
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=100')
            .then((respuesta) => {
                this.candidatos = respuesta.data.results;
            });
        }
    }
});