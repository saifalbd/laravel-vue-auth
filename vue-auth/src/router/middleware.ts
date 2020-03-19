// tslint:disable
import {Routes} from './index';


import {axiosForAuth} from "@/plugins/helper/lib/axiosForAuth";

export const guest  = (to: Routes, from: Routes, next: (o?: IData) => void): any => {
 
 
  // if(from.path !=to.path){
   
  //   if (axiosForAuth.token) {
  //         return { name: 'login'};
            
  //      }
  //    }
};

export const auth  = (to: Routes, from: Routes, next: (o: IData) => void): any => {
 
  //!from.name for first load
  if(!from.name || from.path !=to.path){
   
 if (!axiosForAuth.token) {
         return { name: 'login'};
        
    }
  }
 
}

// must be verified call before auth 
export const verified  = (to: Routes, from: Routes, next: (o?: IData) => void): any => {
  console.log({from,to})
  if(!from.name || from.path !=to.path){
  if(axiosForAuth.token){
      if(axiosForAuth.user){
          if(!axiosForAuth.hasVerifiedUser()){
         return  { name: 'userVerify'}
           
          }

      }else {
       return { name: 'logout'}
        
      }
  }else {
    return { name: 'login'}
   
  }
}
}

export const applyMiddleware = (to: Routes, from: Routes,  next: (o?: IData) => void) => {

 let hasNext:Object | boolean = false;
  if(to.hasOwnProperty('meta')){

  if(to.meta.hasOwnProperty('middleware')){
  
    let {meta} = to;
    try {
      if(typeof meta.middleware != 'object') throw 'middleware must be object' ;

      let {middleware} = meta;

      for (const key in middleware) {
        if (middleware.hasOwnProperty(key)) {
          if(typeof middleware[key] !='function') throw 'middleware guard must be function';
         let n  =  middleware[key](to, from, next)
         if(n){
           hasNext = n;
           
         }
        }
      }

    } catch (error) {
      throw new Error(error);
    }
  };

}

console.log(hasNext)
if(hasNext instanceof Object){
  next(hasNext)
}else {
next()
}




};




