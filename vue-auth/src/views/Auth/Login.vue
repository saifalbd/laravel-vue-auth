<template>
    <loginRegisterLayout title="Login Form" :loading="loading">
          <template slot="top-right">
                  <v-tooltip right>
               
          <template v-slot:activator="{ on }">
                        <router-link :to="{name:'register'}"
  v-slot="{ href }"
>
                    <v-btn
                      icon
                      large
                      :href="href"
                      v-on="on"
                    >
                      <v-icon>mdi-account-plus-outline</v-icon>
                    </v-btn>
                        </router-link>
                  </template>
                  <span>Register</span>
                </v-tooltip>
                </template>
         <VeeOb  v-slot="{ handleSubmit }">
             <v-card-text>
                <div>
                    <VeeP 
                    name="email" 
                     rules="required|email"
                     v-slot="{ errors,valid }">
                  <v-text-field
                  :error-messages="errors"
                  :valid="valid"
                  v-model="email"
                    label="email"
                    name="login"
                    type="text"
                    prepend-inner-icon="mdi-account-box-outline"
                  />
                    </VeeP>
                    <VeeP 
                    name="password" 
                     rules="required"
                     v-slot="{ errors,valid }">
                  <v-text-field
                  :error-messages="errors"
                  :valid="valid"
                  v-model="password"
                    label="password"
                    name="login"
                    type="password"
                    prepend-inner-icon="mdi-lock-question"
                  />
                    </VeeP>
                </div>
                <v-container fluid>
    <v-checkbox v-model="remember" label="remember login"></v-checkbox>
   
  </v-container>
              </v-card-text>
              <v-card-actions>
                          <router-link :to="{name:'forgotPassword'}" v-slot="{ href }">
                <v-btn text x-small color="success" :href="href"> forgot password</v-btn>
                </router-link>
                <v-spacer />
               
                <v-btn @click="handleSubmit(submitFrom)" color="primary"
                >
                <v-icon left dark>mdi-login</v-icon>
                login
                
                </v-btn>
              </v-card-actions>
        
              
         </VeeOb>
    </loginRegisterLayout>
</template>

<script lang="ts">
// tslint:disable
import {Vue,Component} from 'vue-property-decorator'
import {axiosForAuth} from "@/plugins/helper/lib/axiosForAuth"

import loginRegisterLayout from '@/components/Layout/loginRegisterLayout.vue'
import {axiosErrorDialog} from '@/plugins/helper/lib/axiosErrorWatch'
import {
  
  ValidationObserver as VeeOb,
  ValidationProvider as VeeP,
  extend 
} from "vee-validate";
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('email', {
  ...email,
  message: 'This is not valid email'
});
extend('required', required);

@Component({components:{loginRegisterLayout,VeeP,VeeOb }})
export default class Login  extends Vue{
       $refs!: {
    observer: InstanceType<typeof VeeOb>;
  };
  public loading:boolean = false;
  public email:string = '';
  public password:string = '';
  public remember:boolean = false;

 async submitFrom(){
   try {
     this.loading = true
     let res = await axiosForAuth.login(this.email,this.password,this.remember);
        this.loading = false
        this.$router.push({name:'home'})
//         if(res.data.user.email_verified_at){
//  this.$router.push({name:'home'})
//         }else{
//           this.$router.push({name:'userVerify'})
//         }

   } catch (error) {
     
     this.email = ''
     this.password = ''
     
    // axiosErrorDialog.call(this,error)
     setTimeout(()=>{
       this.loading = false
     },4000)
     return error;
   }



  }

  mounted() {
    
  }

  
    
}
</script>