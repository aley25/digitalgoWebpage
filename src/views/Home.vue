<template>
<div class="font-lora">
  <div class="justify-center pt-12 md:pt-16" id="portafolio">

    <div class="bg-red-1000 py-6 md:flex md:flex-row-reverse">

      <div class="md:w-1/2">
        <img class="md:w-144 md:h-144" src="/images/phone.png" alt="">
      </div>
      
      <div class="md:justify-center md:align md:w-1/2 md:flex md:flex-col">
        <div class="mb-10">
          <h1 class="text-3xl mt-5 text-black italic mb-3">Marketing Digital</h1>
          <p class="text-white ">Llegar a mas clientes cada día es una tarea muy importante, permitenos ayudarte a crear 
            una campaña de marketing excepcional en tus redes sociales.d
          </p>
        </div>

        <router-link :to="{ name: 'home' }" class="underline text-white text-xl">
          <span>Solicite Servicio </span>
        </router-link>
      </div>
      
    </div>

    <div class="bg-green-1000 py-6 md:flex md:flex-row-reverse md:align-middle">

      <div class="md:w-1/2 md:h-auto md:mr-6 md:m-auto">
        <img class="px-5" src="/images/3d.svg" alt="">
      </div>

      <div class="md:justify-center md:align md:w-1/2 md:flex md:flex-col">
        <div class="mb-10 mx-5">
          <h1 class="text-3xl mt-5 text-black italic mb-3">Desarrollo Web</h1>
          <p class="text-white">Desarrollamos tu página web para dar a conocer tu empresa
            a todos tus clientes y gestión de la información
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dolore, unde in voluptatum impedit dolorem ipsa consequatur ipsum 
            possimus delectus explicabo consequuntur architecto vero sit voluptatibus 
            perferendis nobis praesentium illum accusantium?
          </p>
        </div>

        <router-link :to="{ name: 'home' }" class="underline text-white text-xl mb-10 p-10">
          <span>Solicite Servicio </span>
        </router-link>
      </div>
      
      
    </div>
    
  </div>
  
  <div id="nosotros" class="gradienteblanco md:flex py-5">

    <div class="md:w-1/3 py-5">

      <h1 class="text-lg mb-5 text-indigo-700">Innovadores</h1>
      <p class="mx-3 justify-center">En Digital Go buscamos el promover la digitalización de todas las empresas ya sean pequeñas, medianas
        y grandes, esto mediante el uso de nuevas tecnologías de desarrollo web que nos permite brindar una mejor experiencia
        y tener una escalabilidad alta.
      </p>
      <div class="flex justify-center mt-3 md:p-5">
        <img class="w-24 h-24" src="/images/solution.svg" alt="">
      </div>
      

    </div>

    <div class="md:w-1/3 py-5 md:h-auto">

      <h1 class="text-lg mb-5 text-indigo-700">Compromiso</h1>
      <p class="mx-3 justify-center">En Digital Go estamos comprometidos con el avance tecnologico que se está dando a nivel mundial
        debido al COVID, buscamos que todos los negocios se puedan Digitalizar y llegar a sus clientes de una mejor manera.
      </p>

      <div class="flex justify-center mt-3 md:p-10 align-bottom">
        <img class="w-24 h-24" src="/images/meeting.svg" alt="">
      </div>

    </div>

    <div class="md:w-1/3 py-5">

      <h1 class="text-lg mb-5 text-indigo-700">Metas</h1>

      <div class="mx-3 text-white md:text-black">
        <ul class="px-3 justify-center list-disc">
          <li>Ayudar a todo tipo de negocio a llegar a sus clientes de una manera correcta.</li>
          <li>Atender a las necesidades del mercado con la digitalización.</li>
          <li>Ser líderes en el mercado del mercadeo y desarrollo de contenido web.</li>
        </ul>
      </div>

      <div class="flex justify-center mt-3 align-bottom">
        <img class="w-24 h-24" src="/images/chart.svg" alt="">
      </div>
    </div>

  </div>

  <dg-contact></dg-contact>

  
</div>

</template>

<script>

import DgContact from '@/components/DgContact'
export default {
  name: 'Home',
  components: {
    DgContact
  },
  methods:{
    
  }
}
</script>



<style scoped>

.gradientegris{
  background: rgb(115,115,115);
  background: linear-gradient(180deg, rgba(115,115,115,1) 0%, rgba(203,213,224,1) 100%);
}


.gradienteblanco{
  background: rgb(203,213,224);
  background: linear-gradient(180deg, rgba(203,213,224,1) 0%, rgba(115,115,115,1) 100%);
}
</style>