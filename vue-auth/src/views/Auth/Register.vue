<template>
    <loginRegisterLayout title="Register Form" :loading="loading">
          <template slot="top-right">
                  <v-tooltip right>  
                  <template v-slot:activator="{ on }">
                        <router-link :to="{name:'login'}"
  v-slot="{ href }"
>
                    <v-btn
                      icon
                      large
                      :href="href"
                      v-on="on"
                    >
                      <v-icon>mdi-login</v-icon>
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
                    name="name" 
                     rules="required|max:25"
                     v-slot="{ errors,valid }">
                  <v-text-field
                  :error-messages="errors"
                  :valid="valid"
                  v-model="firstName"
                    label="first name"
                     prepend-inner-icon="mdi-account-box-outline"
                    type="text"
                  />
                    </VeeP>
                                        <VeeP 
                    name="name" 
                     rules="required|max:25"
                     v-slot="{ errors,valid }">
                  <v-text-field
                  :error-messages="errors"
                  :valid="valid"
                  v-model="middleName"
                    label="middle Name (optional)"
                     prepend-inner-icon="mdi-account-box-outline"
                    type="text"
                  />
                    </VeeP>
                                        <VeeP 
                    name="name" 
                     rules="required|max:25"
                     v-slot="{ errors,valid }">
                  <v-text-field
                  :error-messages="errors"
                  :valid="valid"
                  v-model="lastName"
                    label="last  name"
                     prepend-inner-icon="mdi-account-box-outline"
                    type="text"
                  />
                    </VeeP>
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
                    prepend-inner-icon="mdi-at"
                  />
                    </VeeP>
                    <VeeP 
                    name="password" 
                   
                     rules="required|confirmed:password_confirm"
                     v-slot="{ errors,valid }">
                  <v-text-field
                  :error-messages="errors"
                  :valid="valid"
                  v-model="password"
                    label="password"
                    prepend-inner-icon="mdi-lock-question"
                    type="password"
                  />
                    </VeeP>
                     <VeeP 
                    name="confirmPassword" 
                   vid="password_confirm"
                     v-slot="{ errors,valid }">
                  <v-text-field
                  :error-messages="errors"
                  :valid="valid"
                  v-model="password_confirmation"
                    label="retype Password"
                   prepend-inner-icon="mdi-lock-question"
                    type="password"
                  />
                    </VeeP>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
               
                <v-btn @click="handleSubmit(submitFrom)" color="primary">
                   <v-icon left dark>mdi-target</v-icon>
                Register
                
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
import { required, email,max,confirmed} from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('email', {
  ...email,
  message: 'This is not valid email'
});

extend('max', {
  ...max,
  message: 'maximum value are 10'
});
extend('confirmed', {
  ...confirmed,
  message: 'both password are not same'
});


@Component({components:{loginRegisterLayout,VeeP,VeeOb }})
export default class Register extends Vue{
       $refs!: {
    observer: InstanceType<typeof VeeOb>;
  };
  public loading:boolean = false;
  public firstName:string = '';
  public middleName:string = '';
  public lastName:string = '';
  public email:string = '';
  public password:string = '';
  public password_confirmation = "";

 async submitFrom(){
   try {
     let obj = {
       firstName:this.firstName,
       middleName:this.middleName,
       lastName:this.lastName,
       email:this.email,
       password:this.password,
       password_confirmation:this.password_confirmation
     }
       this.loading = true
     let res = await axiosForAuth.register(obj);
        this.loading = false
this.$router.push({name:'login'})
   } catch (error) {
     axiosErrorDialog.call(this,error);
     return error;
   }
  }   
}
</script>