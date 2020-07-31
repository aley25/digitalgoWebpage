<template>

<div class="justify-center px-8 py-10 gradientegris" id="contactenos">
    <div>
      <h1 class="font-gill-sans text-lg text-white pb-5">Más que una empresa, somos un aliado para hacer crecer su organización
        Contactenos.
      </h1>
    </div>
    <div class="">
        <form class="contact-form" @submit.prevent="sendEmail">
        
            <div class="md:flex">
            <div class="md:w-1/2 form-group md:px-5">
                <label class="text-white" for="nombre">Nombre completo:  </label>
                <input type="text" id="nombre" class="form-control" v-model="nombre">
            </div>
                
            <div class="md:w-1/2 form-group md:px-5">
                <label class="text-white" for="email">Correo Electronico</label>
                <input type="text" id="email" class="form-control" v-model="correo">
            </div>
            </div>
            
            <div class="form-group md:px-10">
            <label for="comentarios">Cuentanos sobre ti:</label>
            <!-- <div class="md:w-128 md:h-64 md:flex md:justify-center"> -->
                <textarea id="comentarios" class="md:w-128 md:h-56 form-control md:mx-auto" v-model="mensaje"></textarea>
            <!-- </div> -->
            </div>
            <button class="bg-orange-400 btn btn-primary" >Enviar Mensaje</button>
        </form>

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
            emailjs.send('gmail', 'template_rvrXzJSe', objeto, 'user_TpybzVHiQ3yRHyYswPd0g')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });
        }
    }
}
</script>



<style  scoped>

</style>