<template>
  <v-app  id="inspire">
    <v-content>
       <v-overlay  :absolute="true" :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
      <v-container
        class="fill-height"
        fluid
      >
    
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
               
                dark
                flat
              >
                <v-toolbar-title>{{title}}</v-toolbar-title>
                <v-spacer />
                <slot name="top-right"></slot>
                
              </v-toolbar>
             
              <slot></slot>
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
// tslint:disable
import {Vue,Component,Prop} from 'vue-property-decorator';

@Component({components:{}})
  export default class loginRegisterLayout extends Vue {
    public source:string= 'sk'
    @Prop({type:String,required:true}) public title!:string;
    @Prop({type:Boolean,default:false}) public loading!:boolean;

    

  }
</script>