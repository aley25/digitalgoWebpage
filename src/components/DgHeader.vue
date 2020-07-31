<template>
    <header class="fixed z-50 w-full">
      <nav class="flex items-center justify-between flex-wrap p-3 fixed w-full z-10 top-0 md:bg-gray-500"
      x-data="{ isOpen: false }"
      x-on:keydown.escape="isOpen = false"
      x-bind:class="{ 'shadow-lg bg-gray-600' : isOpen , 'bg-gray-500' : !isOpen}">


          <div class="flex flex-row items-center pl-3 mr-4 mb-0 md:mr-10 align-top justify-start"> 
            <img src="/images/DigitalGoWhite.svg" alt="" class="w-10 h-10 mr-1">
            <span class="font-semibold text-sm tracking-tight text-black md:text-2xl">
              Digital Go
            </span>
          </div>

        <button
        x-on:click="isOpen = !isOpen"
        type="button"
        class="block md:hidden px-2 text-black hover:text-white focus:outline-none focus:text-white"
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

            <li class="md:p-3">
              <a x-on:click="isOpen = false" href="" 
              v-scroll-to="{
                el: '#portafolio',
                duration: 300,
                offset: -100,
              }" class="inline-block py-2 px-4 text-black no-underline">Portafolio</a> 
            </li>

            <li class="md:p-3">
              <a x-on:click="isOpen = false" href="" 
              v-scroll-to="{
                el: '#nosotros',
                duration: 300,
                offset: -100,
              }" 
              class="inline-block py-2 px-4 text-black no-underline">Acerca de nosotros</a>
           </li>

            <li class="md:p-3">
              <a x-on:click="isOpen = false" href="" v-scroll-to="{
                el: '#contactenos',
                duration: 300,
                offset: -100,
              }" class="inline-block py-2 px-4 text-black no-underline">Contactenos</a>
            </li>
        

          </ul>
      </div>
        


      </nav>
    </header>
</template>

<script>

export default {
    name: "DgHeader",
    props: {
        links: {
          type: Array,
          default: () => []
      },
  }
}
</script>


<style scoped>

</style>