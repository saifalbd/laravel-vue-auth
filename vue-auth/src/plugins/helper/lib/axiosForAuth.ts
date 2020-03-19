// tslint:disable
import axios from 'axios';
var vueConfig  = require('../../../../vue.config.js');

import {offsetDate} from '../func';

export class axiosForAuth {
private static tokenName = window.location.hostname  + 'passportAuth';
private static userStoreName = window.location.hostname + 'auth-user';

static get proxy(){
return vueConfig.devServer.proxy;
}

static set auth(val: any){
   
    localStorage.setItem(this.tokenName, JSON.stringify(val) );
   
}
static get auth (){

    let a =  localStorage.getItem(this.tokenName);
  return  JSON.parse( a as  string )
}

static hasExpiresToken(expires_at : any){
    let exAt = offsetDate(expires_at,true) as any;
    let d  = Date.now();
    return d - exAt > 0 ? true : false;
    
}
static set token(val: any) {
    localStorage.setItem(this.tokenName, val );
}


static get token(): any {
    if(this.auth){
        if(this.auth.access_token){
            let exAt = this.hasExpiresToken(this.auth.expires_at);
            
            if(!exAt){
                return this.auth.access_token;
            }
          
            console.error('login session expires')
                
            
            
           
        }
    }
    return null;

}
static removeToken(){
    if(this.token)
    localStorage.removeItem(this.tokenName)
}


static set user(user:any){
    localStorage.setItem(this.userStoreName,JSON.stringify(user));
}

static get user(){
    return JSON.parse(localStorage.getItem(this.userStoreName) as string);
}
static hasVerifiedUser(){
  return this.user && this.user.email_verified_at;
}
static removeUser(){
    if(this.user)
    localStorage.removeItem(this.userStoreName)
}

public static removeVuexCache(){
    if(localStorage.getItem('vuex'))
    localStorage.removeItem('vuex');
}
public static removeAuth(){
    this.auth = '';
    this.removeUser()
    this.removeVuexCache();
   
}


static get axios(){
     return axios.create({
        baseURL: this.proxy,
        headers: { 
            Accept:"application/json",
            'Cache-Control': null,
            'X-Requested-With': null,
            'Access-Control-Allow-Origin': '*',
        }
      });
}
static get axiosAuth(){
    return axios.create({
        baseURL: this.proxy,
        headers: { 
            Accept:"application/json",
            'Authorization': 'Bearer ' + this.token
        }
      });
}

   static async login(email:string,password:string,remember: boolean){
        let res = await this.axios.post('/login', {
            email,password,remember
             
              
        },
      
        )
        
      
        this.auth = res.data.auth;
        this.user = res.data.user;
        return res;
    }

    static async register(obj:{email:string,
        firstName:string,
        lastName:string,
        middleName:string,
        password:string,password_confirmation:string}){
        let res = await this.axios.post('/register', obj)
         
         this.token = res.data.auth;
         this.user = res.data.user;
         return res; 
    }

    static async doVerify(token:any){
        let res = await this.axiosAuth.post('/verification-verify',{token})
        this.user = res.data;
       
        return res;
    }
    static async resendVerificationCode(){
        let res = await this.axiosAuth.post('/verification-resend')
       
        return res;
    }

   

    static async logOut(){
      
        
        
            let res = await this.axiosAuth.post('/logout')
           
           
            return res;
       
       
       
        
        
    }
    
}