<template>
       <v-row no-gutters>
           <v-col cols="2" >
<v-card class="pa-1" outlined tile >
            <v-text-field class="centered-input"  dense hide-details v-model="modelOne" 
            
             label=""/> 
            </v-card>
           </v-col>

                      <v-col cols="2">
<v-card class="pa-1" outlined tile >
            <v-text-field dense class="centered-input" hide-details v-model="modelTwo" label="" 
      
             /> 
            </v-card>
           </v-col>

                      <v-col cols="2">
<v-card class="pa-1" outlined tile >
            <v-text-field class="centered-input"  dense hide-details v-model="modelThree" label=""  
           /> 
            </v-card>
           </v-col>

                      <v-col cols="2">
<v-card class="pa-1" outlined tile >
            <v-text-field class="centered-input"  dense hide-details v-model="modelFour" label="" 
            /> 
            </v-card>
           </v-col>
                                 <v-col cols="2">
<v-card class="pa-1" outlined tile >
            <v-text-field class="centered-input"  dense hide-details v-model="modelFive" label="" 
            /> 
            </v-card>
           </v-col>
 <v-col cols="2">
<v-card class="pa-1" outlined tile >
            <v-text-field class="centered-input"  dense hide-details v-model="modelSix" label="" 
           />  
            </v-card>
           </v-col>

           
       </v-row>
</template>

<script lang="ts">
// tslint:disable
import {Vue,Component,Watch} from 'vue-property-decorator';

type Model = 'modelOne'|'modelTwo'|'modelThree'|'modelFour'|'modelFive'|'modelSix';

@Component
export default class ConfirmationCodeInput extends Vue {

public modelOne: string = "";
public modelTwo: string = "";
public modelThree: string ="";
public modelFour: string = "";
public modelFive: string = "";
public modelSix: string = "";
public modelGroup: String[] = ['modelOne','modelTwo','modelThree','modelFour','modelFive','modelSix'];


public isEmpty(key: Model) {
    return !this[key] || this[key] === " ";
}

public emitValue(){
  let val =   this.modelGroup.map((i: any)=>{
      let key = i as Model;
      return this[key];
  }).join('');
this.$emit('input',val)
}

@Watch('modelOne') public modelOneChanged(val: string) {
this.emitValue()
}
@Watch('modelTwo') public modelTwoChanged(val: string) {
if(val.trim()){
     
    if(this.isEmpty('modelOne')){
        this.modelOne = val;
this.modelTwo = " ";
    }
this.emitValue()
}
}
@Watch('modelThree') public modelThreeChanged(val:string) {
if(val.trim()){
  
    if(this.isEmpty('modelOne')){
        this.modelOne = val.trim();
        this.modelThree = " ";
        }else if(this.isEmpty('modelTwo')){
            this.modelTwo = val.trim();
            this.modelThree = " ";
        }
this.emitValue()
}
}
@Watch('modelFour') public modelFourChanged(val: string) {
    if(val.trim()){
       
    if(this.isEmpty('modelOne')){
        this.modelOne = val.trim();
        this.modelFour = " ";
        }else if(this.isEmpty('modelTwo')){
            this.modelTwo = val.trim();
            this.modelFour = " ";
        }else if(this.isEmpty('modelThree')){
            this.modelThree = val.trim();
            this.modelFour = " ";
        }
        this.emitValue()
}
}

@Watch('modelFive') public modelFiveChanged(val: string) {
          if(val.trim()){
      
    if(this.isEmpty('modelOne')){
        this.modelOne = val.trim();
        this.modelFive = " ";
        }else if(this.isEmpty('modelTwo')){
            this.modelTwo = val.trim();
            this.modelFive = " ";
        }else if(this.isEmpty('modelThree')){
            this.modelThree = val.trim();
            this.modelFive = " ";
        }else if(this.isEmpty('modelFour')){
            this.modelFour = val.trim();
            this.modelFive = " ";
        }

        this.emitValue()
        
}
}

@Watch('modelSix') public modelSixChanged(val: string) {
       if(val.trim()){
          
    if(this.isEmpty('modelOne')){
        this.modelOne = val.trim();
        this.modelSix = " ";
        }else if(this.isEmpty('modelTwo')){
            this.modelTwo = val.trim();
            this.modelSix = " ";
        }else if(this.isEmpty('modelThree')){
            this.modelThree = val.trim();
            this.modelSix = " ";
        }else if(this.isEmpty('modelFour')){
            this.modelFour = val.trim();
            this.modelSix = " ";
        }else if(this.isEmpty('modelFive')){
            this.modelFive = val.trim();
            this.modelSix = " ";
        }
        this.emitValue()
}
}
public async modelGroupOnChanged(val: any,model: Model ) {


this[model] = " "



}


}
</script>

<style scoped>
    .centered-input >>> input {
      text-align: center
    }
</style>