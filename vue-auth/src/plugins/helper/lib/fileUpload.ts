import {axiosForAuth} from './axiosForAuth';
// tslint:disable
export  class FileUpload extends  axiosForAuth {

    public static async profileImageUpload(formData: FormData){
      try {
        let {data} = await this.axiosAuth.post('/change-user-avatar',formData);
       let user =  axiosForAuth.user
    
       user.profile.avatar  = data.avatar;
       axiosForAuth.user = user;
       return Promise.resolve({data})

      } catch (error) {
          throw  new Error(error)
      }
    }
}