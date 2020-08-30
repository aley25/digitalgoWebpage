<template>

<div class="justify-center px-8 py-16 bg-white" id="contactenos">
    <div class="md:flex flex-row">
        <div class="hidden md:w-1/2 md:flex justify-center" id="mailbox">
            <div class="md:w-1/2">            
                <img class="align-middle w-208 h-208 " id="mail"  src="/images/mail.svg" alt="nueva">
            </div>
        </div>
        <div class="md:w-1/2">
            
            <h1 class="text-4xl mb-10 md:mb-10 text-black font-heebo">Contactenos</h1>

            <form class="contact-form" @submit.prevent="sendEmail" data-netlify="true">
                
                <div class="form-group md:px-5 pb-3 font-heebo">
                    <input type="text" id="nombre" placeholder="Nombre" class="h-12 pl-5 form-control border rounded-full shadow-lg" 
                    v-model="nombre">
                </div>
                    
                <div class="form-group md:px-5 pb-3 font-heebo">
                    <input type="text" id="email" placeholder="Email" class="h-12 pl-5 form-control border rounded-full shadow-lg" 
                    v-model="correo">
                </div>
                

                
                <div class="form-group md:px-5 pb-3 font-heebo">
                    <textarea id="comentarios" placeholder="Cuentanos sobre ti" 
                    class="pt-8 h-24 pl-5  md:h-32 mb-5 form-control border rounded-75 shadow-lg" 
                    v-model="mensaje"></textarea>
                </div>
                
                <button class="w-64 mt-3 bg-orange-400 btn btn-primary border-none rounded-full text-black hover:bg-orange-300 font-heebo">Enviar Mensaje</button>
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

            //Object type sweetalert to reused whenever is necessary
            Toast : this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
            })
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
            var self = this;
            if(objeto.email != ""){
                emailjs.send('gmail', 'template_rvrXzJSe', objeto, 'user_TpybzVHiQ3yRHyYswPd0g')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);                    
                    self.correo = '';
                    self.nombre = '';
                    self.mensaje = '';
                    self.successAlert('Correo enviado Correctamente');
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    self.failAlert('Error al enviar el correo, intentelo nuevamente.');
                });

             
            }else{
                self.failAlert('Es necesario un correo para poder enviar la información, intentelo nuevamente.');
            }
            
        },
        successAlert(message){
            this.Toast.fire({
                icon: 'success',
                title: message
            });
        },
        failAlert(message){
            this.Toast.fire({
                icon: 'error',
                title: message
            });
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

#marginObjects{
    margin: 3px;
}



</style>