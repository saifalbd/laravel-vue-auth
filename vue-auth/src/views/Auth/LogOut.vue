<template>
   <v-app>
    <v-content>
      
      <v-container
        class="fill-height"
        fluid
      >
  
 <v-card
      class="d-flex justify-center align-center"
      color="#FFEB3B"
      flat
      tile
      width="100%"
      height="100%"
    >
   <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>
 </v-card>

  

  

 
   </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
// tslint:disable
import {Vue,Component} from 'vue-property-decorator'
import {axiosForAuth} from "@/plugins/helper/lib/axiosForAuth"

import loginRegisterLayout from '@/components/Layout/loginRegisterLayout.vue'
import {axiosErrorDialog} from '@/plugins/helper/lib/axiosErrorWatch'


@Component({components:{loginRegisterLayout }})
export default class LogOut  extends Vue{
    public loading:boolean = true;
   public interval:any = {};
      public  value:number = 0;
beforeDestroy () {
      clearInterval(this.interval)
    }

 
 async submitFrom(){

   try {
   if(axiosForAuth.token){
await axiosForAuth.logOut();
}
axiosForAuth.removeAuth()
this.$router.push({name:'login'})
    
     
   } catch (error) {
      axiosForAuth.removeAuth()
       this.$router.push({name:'login'})
    
   }



  }

      mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)

      this.submitFrom()
    }

  
    
}
</script>