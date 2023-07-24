<template>
  <v-app app>
    <Topbar> </Topbar>

    <v-main class="grey lighten-3" >
       <About></About>

    </v-main>


    <Tooters></Tooters>
  </v-app>
</template>
<script>
import Topbar from '../components/Topbar.vue'
import Tooters from '../components/Footer.vue'
import About from '../components/About.vue'

export default {

  components: { Topbar, Tooters, About}
};

</script>