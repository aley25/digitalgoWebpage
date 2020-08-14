<template>
  <div id="app" class="mt-0">
    <main>
      <dg-header></dg-header>

      <router-view>
        
      </router-view>

      <dg-footer></dg-footer>
    </main>
  </div>
</template>

<script>
import DgHeader from '@/components/DgHeader.vue'
import DgFooter from '@/components/DgFooter.vue'


export default {
  name: 'App',
  components: {
    DgHeader,
    DgFooter
  },
  data() {
    return {
      links: [
        {
          title: 'Home',
          to: { name: 'home' }
        }
      ]
    }
  },
}
</script>

<style>
#app {
	font-weight: bold;
	font-family: 'Heebo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
