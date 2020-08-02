<template>

<div class="justify-center px-8 py-10 gradientegris" id="contactenos">
    <div class="md:flex flex-row">
        <div class="hidden md:w-1/2 md:flex justify-center" id="mailbox">
            <div class="md:w-1/2">            
                <img class="align-middle w-208 h-208 " id="mail"  src="/images/mail.svg" alt="nueva">
            </div>
        </div>
        <div class="md:w-1/2">
            <h1 class="text-4xl mb-10 md:mb-10 text-gray-300">Contactenos</h1>
            <form class="contact-form" @submit.prevent="sendEmail">
            
                
                <div class="form-group md:px-5 pb-3">
                    <input type="text" id="nombre" placeholder="Nombre" class="h-12 pl-5 form-control border rounded-full" 
                    v-model="nombre">
                </div>
                    
                <div class="form-group md:px-5 pb-3">
                    <input type="text" id="email" placeholder="Email" class="h-12 pl-5 form-control border rounded-full" 
                    v-model="correo">
                </div>
                

                
                <div class="form-group md:px-5 pb-3">
                    <textarea id="comentarios" placeholder="Cuentanos sobre ti" class="pt-8 h-24 pl-5  md:h-32 mb-5 form-control border rounded-75" 
                    v-model="mensaje"></textarea>
                </div>
                
                <button class="mt-3 bg-orange-400 btn btn-primary border-none text-black hover:bg-orange-300" >Enviar Mensaje</button>
            </form>

        </div>
    </div>
  
</div>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name:"DgContact",
    data: function (){
        return{
            correo:"",
            nombre:"",
            mensaje:"",
        }
    },
    methods:{
        sendEmail(){
            var objeto = {
                "email" : this.correo,
                "to_name" : this.nombre,
                "message_html" : this.mensaje,
                "from_name" : "Digital GO !!!",
                "reply_to": "alpizardavid99@gmail.com"
            }
            console.log(this.correo)
            if(objeto.email != ""){
                emailjs.send('gmail', 'template_rvrXzJSe', objeto, 'user_TpybzVHiQ3yRHyYswPd0g')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });
            }
        }    
    }
}
</script>



<style  scoped>
@keyframes rotation {
  0%   {transform: rotate(0deg); float: left;}
  50%  {transform: rotate(30deg); float: center;}
  100%  {transform: rotate(45deg); float: right;}
}

@keyframes movement {
  0%   {justify-content: start;}
  50%  {justify-content: center;}
  100% {justify-content: end;}
}

#mail{
    animation: rotation 3s ease-in-out infinite;
}

#mailbox{
    animation: movement 4s infinite;
}


</style>