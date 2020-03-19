<template>
    <loginRegisterLayout title="password Reset" :loading="loading">
         
         <VeeOb  v-slot="{ handleSubmit }">
             <v-card-text>
               <h4> password Reset code</h4>
               <small v-if="errorMassage">{{errorMassage}}</small>
             <ConfirmationCodeInput @input="varification=$event"/>
                <div class="mt-3">
                Verify Your Email Address
Before proceeding, please check your email for a verification link. If you did not receive the email,
click on resend code
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
               
                <v-btn small @click="handleSubmit(submitFrom)" color="primary"
                >
                <v-icon left dark>mdi-login</v-icon>
                confirm
                
                </v-btn>
                   <v-spacer />
                  <v-btn small @click="resend" color="error"
                >
                <v-icon left dark>mdi-login</v-icon>
                resend code
                
                </v-btn>
              </v-card-actions>
        
              
         </VeeOb>
    </loginRegisterLayout>
</template>

<script lang="ts">
// tslint:disable
import {Vue,Component} from 'vue-property-decorator'
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
export default class ResetPassword  extends Vue{
       $refs!: {
    observer: InstanceType<typeof VeeOb>;
  };
  public prevRoute:any  = null
  public loading:boolean = false;
  public varification:string = '';
    public errorMassage:string = "";

    public get email() :string{
      return this.$route.query.email as string;
    }
 
 public async resend(){

   if(this.email){
     try {
     this.loading = true
     let res = await PasswordReset.sendPasswordResetLink(this.email);
        this.loading = false;

         this.$router.push({name:'resetPassword',query:{email:this.email}})
    
        
   } catch (error) {
     if(error.response){
       let res = error.response
       if(res.status ===422){
       this.errorMassage =  Object.values(res.data.errors).join('->');
       }
     }
     
     setTimeout(()=>{
       this.loading = false
     },4000)
     return error;
   }
   }else {
     this.errorMassage = 'email not exist';
   }
    
 }

 async submitFrom(){
   try {
    this.loading = true;
    let token = this.varification;
    let userName = this.email;
     let res = await PasswordReset.matchToken(userName, token)
        this.loading = false;

     this.$router.push({name:'changePassword',query:{
       userName,
       token
       
     }})

   } catch (error) {
     
     if(error.response){
       let res = error.response
       if(res.status ===422){
       this.errorMassage =  Object.values(res.data.errors).join('->');
       }else{

          axiosErrorDialog.call(this,error)
       }
     }
     
    
     setTimeout(()=>{
       this.loading = false
     },4000)
     return error;
   }



  }

  
 

  mounted() {
    alert(22)
  }

  
    
}
</script>