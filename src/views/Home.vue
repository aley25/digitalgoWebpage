<template>
	<div class="font-lora">
		<div
			id="landing"
			class="flex justify-center pt-12 md:mt-26 md:pt-16 h-screen md:h-auto lg:h-screen"
			:style="{
				backgroundImage:
					'url(' + require('@/assets/images/bannerbg.png') + ')',
			}"
		>
			<div class="flex flex-col justify-center md:flex-row py-6">
				<div class="flex flex-col justify-center align-middle md:w-1/2">
					<h1 class="font-black text-3xl text-blue-600 mb-6">
						Digital Go, Su mejor solución
					</h1>
					<p class="font-bold px-10 mb-10">
						Somos una empresa responsable que busca ayudar a sus
						clientes a conseguir mas ventas y poder situarse en el
						mercado de una mejor forma mediante desarrollo de
						paginas web y un trabajo de marketing que va a hacer que
						su empresa sea mucho mas visible para las personas.
					</p>
					<div class="justify-center">
						<button
							x-on:click="isOpen = false"
							href=""
							v-scroll-to="{
								el: '#contactenos',
								duration: 700,
								offset: -100,
							}"
							class="btn bg-blue-700 w-64 text-white text-2xl rounded-full hover:bg-blue-400 hover:text-black"
						>
							Contactenos
						</button>
					</div>
				</div>

				<div class="hidden md:flex md:w-1/2 ml-4 justify-center">
					<img
						class="md:w-9/12 md:h-auto"
						src="@/assets/images/background.svg"
						alt="Background"
					/>
				</div>
			</div>
		</div>

		<!--:style="{ backgroundImage: 'url(' + require('@/assets/images/white-gradient.jpg') + ')' }"  -->
		<div
			class="justify-center py-16 md:pt-16 h-auto bg-cover bg-white"
			id="portafolio"
		>
			<div class="px-6 md:px-32">
				<h1 class="text-4xl font-black mb-5 text-blue-600">
					Servicios
				</h1>
				<h3 class="text-xl">
					Comprometidos con nuestros clientes, se brindan los
					servicios de campañas de marketing y desarrollo de páginas
					web con las últimas tecnologías.
				</h3>
			</div>

			<div class="md:px-20 py-8 md:flex md:align-middle">
				<div class="md:w-1/2 md:h-auto md:mr-6 md:m-auto">
					<img
						class="px-5"
						src="@/assets/images/devbackground.jpg"
						alt=""
					/>
				</div>

				<div
					class="md:justify-center md:align md:w-1/2 md:flex md:flex-col"
				>
					<div class="mb-10 mx-5">
						<h1 class="text-3xl mt-5 text-blue-600 mb-6 font-black">
							Desarrollo Web
						</h1>

						<p class="text-black">
							Desarrollamos tu página web para dar a conocer tu
							empresa a todos tus clientes y gestión de la
							información, con las últimas tecnologías se genera
							una página web para darse a ver a sus clientes de
							una manera profesional.
						</p>
					</div>

					<div class="justify-center">
						<button
							x-on:click="isOpen = false"
							href=""
							v-scroll-to="{
								el: '#contactenos',
								duration: 700,
								offset: -100,
							}"
							class="btn bg-blue-700 w-64 text-white text-2xl rounded-full hover:bg-blue-400 hover:text-black"
						>
							Solicite Servicio
						</button>
					</div>
				</div>
			</div>

			<div class="md:px-20 md:flex md:flex-row-reverse">
				<div class="md:w-1/2 md:flex md:justify-center md:m-auto">
					<img
						class="md:w-128 md:h-auto"
						src="@/assets/images/marketing.png"
						alt=""
					/>
				</div>

				<div
					class="md:justify-center md:align md:w-1/2 md:flex md:flex-col"
				>
					<div class="mb-10 mx-5">
						<h1 class="text-3xl mt-5 text-blue-600 mb-6 font-black">
							Marketing Digital
						</h1>
						<p class="text-black">
							Llegar a mas clientes cada día es una tarea muy
							importante, permitenos ayudarte a crear una campaña
							de marketing excepcional en tus redes sociales.
						</p>
					</div>

					<div class="justify-center">
						<button
							x-on:click="isOpen = false"
							href=""
							v-scroll-to="{
								el: '#contactenos',
								duration: 700,
								offset: -100,
							}"
							class="btn bg-blue-700 w-64 text-white text-2xl rounded-full hover:bg-blue-400 hover:text-black"
						>
							Solicite Servicio
						</button>
					</div>
				</div>
			</div>
		</div>

		<div id="nosotros" class="bg-white pt-20 pb-10 md:py-24 px-6">
			<h1 class="text-5xl mb-10 md:mb-20 text-blue-600 font-black">
				Sobre Nosotros
			</h1>

			<div class="md:flex">
				<DgSkill :skill="skills[0]"></DgSkill>
				
				<DgSkill :skill="skills[1]"></DgSkill>
				
				<DgSkill :skill="skills[2]"></DgSkill>	
			</div>
		</div>

		<dg-contact></dg-contact>
	</div>
</template>

<script>

import DgContact from "@/components/DgContact";
import DgSkill from "@/groups/DgSkill";
import skills from "@/data/skills.js"
export default {
	name: "Home",
	components: {
		DgContact,
		DgSkill
	},
	data: function(){
		return{
			skills: skills
		}
	},
	methods: {},
};
</script>



<style scoped>
	* {
		font-family: "Heebo", sans-serif;
	}
	.gradientegris {
		background: rgb(115, 115, 115);
		background: linear-gradient(
			180deg,
			rgba(115, 115, 115, 1) 0%,
			rgba(203, 213, 224, 1) 100%
		);
	}

	.gradienteblanco {
		background: rgb(203, 213, 224);
		background: linear-gradient(
			180deg,
			rgba(203, 213, 224, 1) 0%,
			rgba(115, 115, 115, 1) 100%
		);
	}

	.titulo1 {
		font-family: Heebo sans-serif;
		font-size: medium 500;
	}

	#portafolio {
		background: rgb(255, 255, 255);
		background: linear-gradient(
			153deg,
			rgba(255, 255, 255, 1) 55%,
			rgba(238, 238, 238, 1) 100%
		);
	}

	#divinfo:hover {
		transform: scale(1.1);
		transition: transform 0.5s; /* Animation */
	}
</style>