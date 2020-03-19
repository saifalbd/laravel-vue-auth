<template>
    <loginRegisterLayout title="create new password" :loading="loading">
        
         <VeeOb  v-slot="{ handleSubmit }">
             <v-card-text>
                 {{errorMessage}}
                <div>
                
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
                change
                
                  </v-btn>
              </v-card-actions>
        
              
         </VeeOb>
    </loginRegisterLayout>
</template>

<script lang="ts">
// tslint:disable
import {Vue,Component} from 'vue-property-decorator'
import {axiosForAuth} from "@/plugins/helper/lib/axiosForAuth"
import {PasswordReset } from "@/plugins/helper/lib/PasswordReset";

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
export default class changePassword extends Vue{
       $refs!: {
    observer: InstanceType<typeof VeeOb>;
  };
  public loading:boolean = false;
  public userName:string = '';
  public password:string = '';
  public password_confirmation = "";
  public token:string = ''
  public errorMessage:string = "";

  public userTokenIsValid(){
     let {query} = this.$route as any;
     
      try {
          if(!query)  throw 'route query missing';
          if(!query.hasOwnProperty('userName')) `route query userName  missing`;
          if(!query.hasOwnProperty('token')) `route query token  missing`;
          this.userName = query.userName;
          this.token = query.token;
          return true;
      } catch (error) {
          this.errorMessage = error;
          return false;
      }
  }

 async submitFrom(){
     if(this.userTokenIsValid()){
            try {
     let obj = {
         token:this.token,
       email:this.userName,
       password:this.password,

       password_confirmation:this.password_confirmation
     }
       this.loading = false
     let res = await PasswordReset.generatePassword(obj);
        this.loading = false
this.$router.push({name:'login'})
   } catch (error) {
if(error.response){
       let res = error.response
       if(res.status ===422){
       this.errorMessage =  Object.values(res.data.errors).join('->');
       }
     }

     axiosErrorDialog.call(this,error);
     return error;
   }
     }
  } 


}
</script>