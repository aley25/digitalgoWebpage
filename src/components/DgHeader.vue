<template>
    <header class="fixed z-50 w-full">
      <nav class="flex items-center justify-between flex-wrap bg-gray-400 px-6 pt-3 pb-3">
        <div class="flex items-center flex-shrink-0 text-white mr-6">

          <div class="flex flex-row items-center mr-4 mb-0 md:mr-10">
            <img src="/images/DigitalGoWhite.svg" alt="" class="w-10 h-10 mr-1">
            <span class="font-semibold text-sm tracking-tight text-black md:text-2xl">
              Digital Go
            </span>
          </div>

          <div class="text-black mr-3 text-xs hover:text-blue-500 md:text-xl md:mr-10">
            <a href="" v-scroll-to="{
              el: '#portafolio',
              duration: 300,
              offset: -50,
            }" class="no-underline">Portafolio</a> 
          </div>
          <div class="text-black mr-3 text-xs hover:text-blue-500 md:text-xl md:mr-10">
            <a href="" v-scroll-to="{
              el: '#nosotros',
              duration: 300,
              offset: -50,
            }" 
            class="no-underline">Acerca de nosotros</a>
          </div>
          <div class="text-black mr-3 text-xs hover:text-blue-500 md:text-xl md:mr-10">
            <a href="" v-scroll-to="{
              el: '#contactenos',
              duration: 300,
              offset: -50,
            }" class="no-underline">Contactenos</a>
          </div>

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