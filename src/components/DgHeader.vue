<template>
	<header class="fixed z-50 w-full">
		<nav v-bind:class="{'bg-transparent' : viewOfTopPage, 'bg-white' : !viewOfTopPage}"
			class="flex items-center justify-between flex-wrap p-3 fixed w-full z-10 top-0 lg:px-16"
			x-data="{ isOpen: false }"
			x-on:keydown.escape="isOpen = false"
			x-bind:class="{ 'shadow-lg bg-gray-400' : isOpen}">


			<div class="flex flex-row items-center pl-3 mr-4 mb-0 md:mr-10 align-top justify-start cursor-pointer"> 
				<img src="/images/DigitalGoWhite.svg" alt="" class="w-10 h-10 mr-1">
				<span class="font-semibold text-sm tracking-tight text-black md:text-2xl">
				<a x-on:click="isOpen = false" href="" 
					v-scroll-to="{
						el: '#landing',
						duration: 300,
						offset: -100,
					}" class="no-underline">
					Digital Go</a> 
				
				</span>
			</div>

			<button
			x-on:click="isOpen = !isOpen"
			type="button"
			class="block md:hidden px-2 text-black hover:text-blue-500 focus:outline-none "
			x-bind:class="{ 'transition transform-180': isOpen }"
			>Menú</button>

			<div
				class="w-full flex-grow md:flex md:justify-end md:w-auto "
				x-bind:class="{ 'block shadow-3xl': isOpen, 'hidden': !isOpen }"
				x-on:click.away="isOpen = false"
				x-show.transition="true"
			>


				<ul
				class="pt-6 md:pt-0 list-reset md:flex justify-end  float-left"
				>
					<li class="md:p-3 sm:flex ">
					<a x-on:click="isOpen = false" href="" 
					v-scroll-to="{
						el: '#landing',
						duration: 300,
						offset: -100,
					}" class="btn inline-block sm:justify-start px-2 text-black no-underline hover:bg-gray-500 hover:border-black">
					Inicio</a> 
					</li>


					<li class="md:p-3 sm:flex ">
					<a x-on:click="isOpen = false" href="" 
					v-scroll-to="{
						el: '#portafolio',
						duration: 300,
						offset: -100,
					}" 
					class="btn inline-block sm:justify-start px-2 text-black no-underline hover:bg-gray-500 hover:border-black">
					Servicios</a> 
					</li>

					<li class="md:p-3 sm:flex">
					<a x-on:click="isOpen = false" href="" 
					v-scroll-to="{
						el: '#nosotros',
						duration: 300,
						offset: -50,
					}"
					class="btn inline-block sm:float-left px-2 text-black no-underline hover:bg-gray-500 hover:border-black">
					Acerca de nosotros</a>
					</li>

					<li class="md:p-3 sm:flex">
					<a x-on:click="isOpen = false" href="" v-scroll-to="{
						el: '#contactenos',
						duration: 300,
						offset: -100,
					}" class="btn inline-block sm:float-left px-2 text-black no-underline hover:bg-gray-500 hover:border-black">
					Contactenos</a>
					</li>

				</ul>
			</div>
        


		</nav>
	</header>
</template>

<script>

export default {
	name: "DgHeader",
	data: function(){
		return {
			viewOfTopPage : true
		}
	},

	props: {
			links: {
			type: Array,
			default: () => []
		},

	},

	mounted : function() {
		window.addEventListener('scroll', this.handleScroll)
		this.viewOfTopPage = true
	},
	beforeDestroy : function () {
		window.removeEventListener('scroll', this.handleScroll)
	},
	
	methods: {
		handleScroll(){
			// when the user scrolls, check the pageYOffset
			if(window.pageYOffset>0){
				// user is scrolled
				this.viewOfTopPage = false
			}else{
				// user is at top of page
				this.viewOfTopPage = true
			}
		}
	}
	
}
</script>


<style scoped>

</style>