
import {axiosForAuth} from './axiosForAuth';

// tslint:disable




interface RenderObj {
    title:string;
    list:string[];
    close:Function;
  }
export class axiosErrorWatch {

    private component!:Vue;
    private errorResponse!:any;
    private status!:number;
    private statusText!:string
    private errorData!:IData;
    constructor(vue:Vue,e:any){
        
      
        this.component = vue;
        if(e){
            this.errorResponse = e.response;
            this.status = e.status;
            this.statusText = e.statusText;
            this.errorData = e.data;
        }
       


    }


    private deepCollapse(){
        let obj = {"message":"The given data was invalid.","errors":{"paginate":["can't use offset if paginate are exist"],"offset":["offset and paginate both not allow offset or paginate only one"]}};
        Object.values(obj)
    }

    private list(){
        if(this.errorData){
            return  ['network error']
           //return generateIndexArray(this.errorData)
        }else {
          return  ['network error']
        }
    }
    private title(){
        return this.title;
    }

    unauthorized(){
        return async function(this:any){
           
          
        
           this.$router.push({name:'logout'});
        }
    }
    notFound(){ //404
        this.errorData = ['url not found']
        return this.unauthorized()

    }
    unprocessableEntity(){
        return function(this:any){}
    }
    tooManyRequests(){
         return function(this:any){}

    }

    netWorkError(){
        this.errorData = ['server url not found']
        return this.unauthorized()
    }


    public close(){

             if(this.status ===401){
            return this.unauthorized()

        }else if(this.status ===404){
            return this.notFound()
    
        }else if(this.status ===422){
            return this.unprocessableEntity()
        }
        else if(this.status ===429){
            return this.tooManyRequests()
        }else if(this.status ===499){
        return this.netWorkError()
    }
        else {
            return ()=>{}
        }
    }


    public run():RenderObj|any {
     
        
        if(this.errorData){
            let data =  {
                close:this.close(),
                list:this.list(),
                title:this.statusText,
                }
    
            this.component.$store.dispatch('errorData',data);
            return data;
        }else {
            return {}
        }

    }

}

export function axiosErrorDialog(this:Vue,e:any){
    
    (new axiosErrorWatch(this,e.response)).run()
}