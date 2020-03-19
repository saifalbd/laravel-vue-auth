<template>
    <loginRegisterLayout title="Forgot password" :loading="loading">
         
         <VeeOb  v-slot="{ handleSubmit }">
             <v-card-text>
             
             <v-text-field 
            
            
             :error-messages="errorMessage"
             v-model="email" outlined label="email address">

             </v-text-field>
                
              </v-card-text>
              <v-card-actions>
                <v-spacer />
               
                <v-btn small @click="handleSubmit(submitFrom)" color="primary"
                >
                <v-icon left dark>mdi-login</v-icon>
                confirm
                
                </v-btn>
                  
              </v-card-actions>
        
              
         </VeeOb>
    </loginRegisterLayout>
</template>

<script lang="ts">
// tslint:disable
import {Vue,Component,Watch} from 'vue-property-decorator'
import {axiosForAuth} from "@/plugins/helper/lib/axiosForAuth";
import {PasswordReset } from "@/plugins/helper/lib/PasswordReset";

import loginRegisterLayout from '@/components/Layout/loginRegisterLayout.vue';

import ConfirmationCodeInput from '../../components/metarials/ConfirmationCodeInput.vue';
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


@Component({components:{loginRegisterLayout,ConfirmationCodeInput,VeeP,VeeOb }})
export default class ForgotPassword  extends Vue{
       $refs!: {
    observer: InstanceType<typeof VeeOb>;
  };
  public loading:boolean = false;
  public email:string = 'sahedksm@gmail.com';
  public errorMessage:string = "";
 
 public async resend(){

 }

 async submitFrom(){
   try {
     this.loading = true
     let res = await PasswordReset.sendPasswordResetLink(this.email);
        this.loading = false;

         this.$router.push({name:'resetPassword',query:{email:this.email}})
    
        
   } catch (error) {
     if(error.response){
       let res = error.response
       if(res.status ===422){
       this.errorMessage =  Object.values(res.data.errors).join('->');
       }
     }
     
     setTimeout(()=>{
       this.loading = false
     },4000)
     return error;
   }



  }

  @Watch('email') public emailOnChanged(val:string){
      this.errorMessage = '';
  }

  mounted() {
    
  }

  
    
}
</script>