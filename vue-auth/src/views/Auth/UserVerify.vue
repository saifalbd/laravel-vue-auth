<template>
    <loginRegisterLayout title="UserVerify" :loading="loading">
         
         <VeeOb  v-slot="{ handleSubmit }">
             <v-card-text>
             <v-text-field
                 
                  v-model="varification"
                    label="enter varification Code"
                    name="varification"
                    type="text"
                    prepend-inner-icon="mdi-account-box-outline"
                  />
                <div>
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
export default class UserVerify  extends Vue{
       $refs!: {
    observer: InstanceType<typeof VeeOb>;
  };
  public loading:boolean = false;
  public varification:string = '252125'
 
 public async resend(){

 }

 async submitFrom(){
   try {
     this.loading = true
     let res = await axiosForAuth.doVerify(this.varification);
        this.loading = false
      
        if(axiosForAuth.hasVerifiedUser()){
          this.$router.push({path:'/'})
        }
   } catch (error) {
     
     axiosErrorDialog.call(this,error)
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