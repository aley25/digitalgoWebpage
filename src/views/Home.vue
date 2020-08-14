<template>
<div class="font-lora">

	<div id="landing" class="flex justify-center pt-12 md:mt-26 md:pt-16 h-screen w-screen" :style="{ backgroundImage: 'url(' + require('@/assets/images/bannerbg.png') + ')' }">
		
		<div class="flex flex-col justify-center md:flex-row py-6">

			<div class="flex flex-col justify-center align-middle md:w-1/2">
				<h1 class="font-black  text-3xl text-blue-600 mb-6">Digital Go, Su mejor solución</h1>
				<p class="font-bold  px-10 mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
					Possimus assumenda neque cumque. Eius iste illum enim vel numquam placeat, 
					itaque qui fugiat nulla eligendi, adipisci tempora officia laborum doloribus 
					voluptate.
				</p>
				<div class="justify-center">
					<button x-on:click="isOpen = false" href="" 
					v-scroll-to="{
						el: '#contactenos',
						duration: 700,
						offset: -100,
					}" class="btn bg-blue-700 w-64 text-white text-2xl rounded-full hover:bg-blue-400 hover:text-black ">
					Contactenos</button>
				</div>
			</div>

			<div class="hidden md:flex md:w-1/2 ml-4 justify-center">
				<img class="md:w-9/12 md:h-auto" src="@/assets/images/background.svg" alt="Background">
			</div>

			
		</div>
	</div>

<!--:style="{ backgroundImage: 'url(' + require('@/assets/images/white-gradient.jpg') + ')' }"  -->
	<div class="justify-center py-16 md:pt-16 h-auto bg-cover bg-white" id="portafolio"  >
		<div class="px-10">
		<h1 class=" text-4xl font-black mb-5 text-blue-600">Servicios</h1>
		<h3 class=" text-xl">Comprometidos con nuestros clientes, se brindan los servicios de campaña de marketing, </h3>
		</div>
		<div class=" py-6 md:flex md:flex-row">

			<div class="md:w-1/2 md:flex md:justify-center md:m-auto transform hover:scale-125">
				<img class="md:w-128 md:h-auto" src="/images/phone.png" alt="">
			</div>
		
			<div class="md:justify-center md:align md:w-1/2 md:flex md:flex-col px-10">
				<div class="mb-10 mx-5">
					<h1 class="text-3xl mt-5 text-blue-600 mb-6  font-black ">Marketing Digital</h1>
					<p class="text-black ">Llegar a mas clientes cada día es una tarea muy importante, permitenos ayudarte a crear 
						una campaña de marketing excepcional en tus redes sociales.
					</p>
				</div>

				<div class="justify-center">
					<button x-on:click="isOpen = false" href="" 
					v-scroll-to="{
						el: '#contactenos',
						duration: 700,
						offset: -100,
					}" class="btn bg-blue-700 w-64 text-white text-2xl rounded-full hover:bg-blue-400 hover:text-black">Solicite Servicio</button>
				</div>

			</div>
		
		</div>

		<div class="md:px-20 py-32 md:flex md:flex-row-reverse md:align-middle">

			<div class="md:w-1/2 md:h-auto md:mr-6 md:m-auto transform hover:scale-125">
				<img class="px-5" src="/images/3d.svg" alt="">
			</div>

			<div class="md:justify-center md:align md:w-1/2 md:flex md:flex-col">
				<div class="mb-10 mx-5">

					<h1 class="text-3xl mt-5 text-blue-600 mb-6  font-black">Desarrollo Web</h1>

					<p class="text-black ">Desarrollamos tu página web para dar a conocer tu empresa
					
						a todos tus clientes y gestión de la información
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
						Dolore, unde in voluptatum impedit dolorem ipsa consequatur ipsum 
						possimus delectus explicabo consequuntur architecto vero sit voluptatibus 
						perferendis nobis praesentium illum accusantium?
					</p>
				</div>

				<div class="justify-center">
					<button x-on:click="isOpen = false" href="" 
					v-scroll-to="{
						el: '#contactenos',
						duration: 700,
						offset: -100,
					}" class="btn bg-blue-700 w-64 text-white text-2xl rounded-full hover:bg-blue-400 hover:text-black">Solicite Servicio</button>
				</div>

			</div>
		
		</div>
		
	</div>
  
	<div id="nosotros" class="bg-white pt-20 pb-10 md:py-24 px-6">

		<h1 class="text-5xl mb-10 md:mb-20 text-blue-600 font-black">Sobre Nosotros</h1>

		<div class="md:flex">
			
			<div class="bg-white md:w-1/3 py-5 my-4 md:mx-3 border border-blue-300 rounded-lg shadow-md">

				<h1 class="text-lg mb-5 text-blue-600 ">Innovadores</h1>
					<p class="mx-3 justify-center ">En Digital Go buscamos el promover la digitalización de todas las empresas ya sean pequeñas, medianas
					y grandes, esto mediante el uso de nuevas tecnologías de desarrollo web que nos permite brindar una mejor experiencia
					y tener una escalabilidad alta.
					</p>
				<div class="flex justify-center mt-3 md:p-5">
					<img class="w-24 h-24 hover:scale-125" src="/images/solution.svg" alt="">
				</div>
				

			</div>

			<div class="bg-white md:w-1/3 py-5 my-4 md:mx-3 md:h-auto border border-blue-300 rounded-lg shadow-md">

				<h1 class="text-lg mb-5 text-blue-600 ">Nosotros</h1>
				<p class="mx-3 justify-center ">Somos una empresa de Marketing Digital 
					con el fin de apoyar a las pequeñas y medianas empresas en el proceso de tener un
					canal de entrada a sus clientes de forma online según sus necesidades. 
				</p>

				<div class="flex justify-center mt-3 md:p-10 align-bottom">
					<img class="w-24 h-24 hover:scale-125" src="/images/meeting.svg" alt="">
				</div>

			</div>

			<div class="bg-white md:w-1/3 py-5 my-4 md:mx-3 border border-blue-300 rounded-lg shadow-md">

				<h1 class="text-lg mb-5 text-blue-600 ">Metas</h1>

				
				<p class="px-3 justify-center ">
					Nuestra meta es ofrecer valor más que un servicio por lo que nos encantaría ayudarte 
					en el proceso de hacer crecer tu empresa y tu numero de clientes. La manera de lograr 
					lo anterior es haciendo un pequeño analisis del entorno de la organización con el 
					fin de diseñar las estrategias y campañas deacuerdo con ello.
				</p>
				

				<div class="flex justify-center mt-3 align-bottom">
					<img class="w-24 h-24" src="/images/chart.svg" alt="">
				</div>
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
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');
.gradientegris{
  background: rgb(115,115,115);
  background: linear-gradient(180deg, rgba(115,115,115,1) 0%, rgba(203,213,224,1) 100%);
}


.gradienteblanco{
  background: rgb(203,213,224);
  background: linear-gradient(180deg, rgba(203,213,224,1) 0%, rgba(115,115,115,1) 100%);
}

.titulo1{
	font-family: Heebo sans-serif;
	font-size: medium 500;
}

#portafolio{
	background: rgb(255,255,255);
	background: linear-gradient(153deg, rgba(255,255,255,1) 55%, rgba(238,238,238,1) 100%);
}

*{
	font-weight: bold;
	font-family: 'Heebo', sans-serif;
}
</style>