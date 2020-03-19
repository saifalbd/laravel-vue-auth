<template>
  
       <v-app  id="inspire"> 
      <v-navigation-drawer
         v-model="drawer"
         app
         width="200px"
         >
         
      </v-navigation-drawer>
    
      <v-app-bar
         app
         color="indigo"
         dark
         dense
         :extension-height="8"
         >
         <!-- <template v-slot:extension v-if="appProgress">
            <v-progress-linear
               height="8"
               indeterminate
               color="yellow darken-2"
               ></v-progress-linear>
         </template> -->
         <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
         <v-toolbar-title>{{pageTitle}}</v-toolbar-title>
         <v-spacer>
         </v-spacer>
         <top-menu :list="[]"></top-menu>
         
      </v-app-bar>
      <v-content>
     
       
         
         <slot></slot>
     
      
      </v-content>
      <v-footer
      class="d-none d-md-block"
         color="indigo"
         app
         >
         <span class="white--text">&copy; 2020</span>
      </v-footer>
   
   </v-app>
</template>
<script lang="ts">
// tslint:disable
import {Vue,Component, Prop,Inject,ProvideReactive,Provide} from 'vue-property-decorator'
import TopMenu from "@/components/metarials/topMenu.vue";

@Component({components: {TopMenu}})
export default class AuthLayout extends Vue{
 
   @Prop({type:String,default:'Application'}) public  pageTitle!:string
   @Prop({type:Array,default: function () { return [] }}) public  backLinks!:Array<IData>
   public drawer:boolean =true;
   
  



  

  scrollDown(){
     if(window.screenY){
        window.scroll(0,0)
     }
  }
  
 

}
</script>