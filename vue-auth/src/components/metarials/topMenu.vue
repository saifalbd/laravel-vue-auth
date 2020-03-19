<template>
    <div>
        <v-btn-toggle

                dense
             class="top-menus"
               :dark="false"
                multiple
        >
        
      
            
            <v-btn v-for="(item ,index) in list" :key="index" :href="item.link">
<!--                <v-icon>mdi-format-bold</v-icon>-->
                {{item.txt}}

            </v-btn>
             <div class="d-flex align-center justify-center ml-3">
              <v-tooltip bottom>
      <template v-slot:activator="{ on }">
          <v-btn small   v-on="on" @click="logout">
                <v-icon>mdi-account-lock-outline</v-icon>
                </v-btn>
      </template>
      <span>logout</span>
    </v-tooltip>
             </div>
                      <div class="d-flex align-center justify-center ml-3" @click="dialog= true">
              <v-tooltip bottom>
      <template v-slot:activator="{ on }">
          <v-avatar color="indigo" size="36" v-on="on">
       <img
        :src="user.profile.avatar"
        alt="John"
      >
    </v-avatar>
      </template>
      <span>click then change Profile</span>
    </v-tooltip>
             </div>
     

 
            


        </v-btn-toggle>
        <ChangePofileImage v-model="dialog"/>
    </div>
</template>


<script lang="ts">
// tslint:disable
import {Vue,Component,Watch,Prop} from 'vue-property-decorator';
import {axiosForAuth} from "@/plugins/helper/lib/axiosForAuth";
import ChangePofileImage from '../metarials/ChangePofileImage.vue';

@Component({components:{ChangePofileImage}})
export default class topMenu extends Vue {
    @Prop({type:Array,required:true}) public list!: Array<any>;
    public dialog:boolean = false;
    get user(){
        return axiosForAuth.user;
    }
     logout(){
            this.$router.push({name:'logout'})
            }
}


</script>

<style scoped>
.top-menus{
    background-color: rgba(30, 30, 30, 0)!important;
}
</style>