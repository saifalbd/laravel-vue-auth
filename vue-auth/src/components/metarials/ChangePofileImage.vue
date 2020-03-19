<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
     

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          change Profile Image
        </v-card-title>

        <v-card-text>
 <v-container>
           <v-file-input
    label="File input"
    filled
    prepend-icon="mdi-camera"
     v-on:change="handleFileUpload"
  ></v-file-input>
     </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn
            color="primary"
            text
            @click="submit"
          >
           submit
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
// tslint:disable
import {Vue,Component,Prop} from 'vue-property-decorator';
import  {FileUpload} from '../../plugins/helper/lib/fileUpload';

// profileImageUpload
@Component

export default class ChangePofileImage extends Vue {

    @Prop({required: true,default:false}) public value!: boolean;

    public file: File|string = '';
    
    public set dialog(val:boolean) {
        this.$emit('input',val)
    }
    public get dialog(){
        return this.value;
    }

    handleFileUpload(event:any) {
      this.file = event;
    }

    public async submit() {
      if(this.file){
   const data = new FormData();
        data.append('image',this.file);
      await  FileUpload.profileImageUpload(data);

      this.dialog =  false;
      }else{
        alert('file are  missing')
      }

    

    }

}
</script>