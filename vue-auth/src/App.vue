<template>

       
    <router-view 
  
         style="width:100%" @breadcrumbs="backLinks =$event"
          @pageTitle="pageTitle=$event">
          </router-view>
        
    
</template>


<script lang="ts">
// tslint:disable
import Vue from 'vue';



export default Vue.extend({
  name: 'App',
  computed:{
   isOnline(){return window.navigator.onLine;}
  }
  });
</script>

<!-- Classroom.vue -->
<style lang="scss">

// @import './assets/sass/app.scss'


</style>


