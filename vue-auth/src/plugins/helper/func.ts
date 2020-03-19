import {Vue} from "vue-property-decorator";
// tslint:disable

interface metaType {
    current_page: number,
    from: number,
    last_page: number,
    path:string,
    per_page: number,
    to:  number,
    total:  number,
    }

export function configPagination(resource:metaType ) {
   
    if(resource.hasOwnProperty('current_page') && resource.current_page ){
        
   const {current_page,from,last_page,path,per_page,to,total}=resource;
   return {current_page,from,last_page,path,per_page,to,total};
    }
    return {};
};

export function float(num:number){
    return Math.round(num*10)/10;
}


export function totalCollection(headers:Array<IData>,items:Array<IData>):Array<{value:any,before:string,after:string}>{

    return headers
    .filter((item:Object)=> item.hasOwnProperty('total'))
    .map((th:IData)=>{
    //start map
    
    let value = 0;
    let total = th.total;
    let collection = items.map(i=>{return parseFloat( String(isDot(i,th.value)))}).filter(x => x > 0)  
    if(collection.length){ value = collection.reduce((x, y) => x + y)}
    
    let before = ''
    let after = ''
    if(total.hasOwnProperty('before')){
      before = total.before as string;
    }
    if(total.hasOwnProperty('after')){
      after = total.after as string;
    }
    
    
    
    return {value,before,after};
    // end amp
    })
    
      
    }

function isDot(item:IData,prop:string){
    try {
        if(prop.includes('.')){
            if(prop.charAt(0)==='.') throw `dot notation first dot not allowed allow only center`
            if(prop.charAt(prop.length-1)==='.') throw `dot notation last dot not allowed allow only center`
            return prop.split('.').reduce((o,i)=>o[i], item)
        }else {
            if(typeof item[prop] ==='function' ){
               return item[prop]()
            }else{ return item[prop] }
        }

    } catch (error) {
        throw new Error(error)
    }
 }

export function HasDot():Function {
 
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor):void {
        target[propertyKey] = function(item:IData,prop:string){
          return isDot(item,prop)
        }
    }
}

//must be function call pageTitle.call(this)
export function pageTitle(this:any){
  
    try {
        if(!(this instanceof Vue)) throw `this must be instanceof Vue run function like breadcrumbs.call(this) in vue instance`
        let meta = this.$route.meta;
        if(meta.hasOwnProperty('pageTitle')){
           
            if(typeof meta.pageTitle !=='string') throw 'pageTitle must be allow String';
            let title =  meta.pageTitle;
            //first letter UpperCase
           return  title.charAt(0).toUpperCase() + title.slice(1)
           
        }
    } catch (error) {
        throw new Error(error)
    }
    console.log('route pageTitle are empty in router page')
    return 'Application'
}

//must be function call breadcrumbs.call(this)
export function breadcrumbs(this:any):any {
    try {
        if(!(this instanceof Vue)) throw `this must be instanceof Vue run function like breadcrumbs.call(this) in vue instance`
                let meta = this.$route.meta;
             
                    if(meta.hasOwnProperty('breadcrumbs')){
                        /**start codding  */
                        if(!Array.isArray(meta.breadcrumbs)) throw `meta.breadcrumbs must be allow array`
                        if(!this.$route.hasOwnProperty('name')) throw 'route name not found please mention route unique name in route directory'
                        if(this.$route.name===null) throw "route name can't be empty";
                        let {breadcrumbs} = meta;
                      let breads=  breadcrumbs.map((item:{name:string,title:string},key:number) => {
                            if(typeof item !=='object') throw 'breadcrumbs item must be an object allow';
                            if(!item.hasOwnProperty('name')) throw `breadcrumbs index ${key} object name are missing`;
                            if(!item.hasOwnProperty('title')) throw `breadcrumbs index ${key} object title are missing`;
                           
                            let name:string = item.name
                            let title:string = item.title
                            let disabled:boolean = this.$route.name === item.name;
                            return {name,title,disabled};
                        });
            
                        
                        return breads;
                    }else{
                        console.log('this.$route.meta.breadcrumbs not found')
                    }
            
                
          

        } catch (error) {
            throw new Error(error)
        }

        return []
        
        
    }


    export function offsetDate(t:{
        second:number,
       minute: number,
       hour: number,
       day: number,
       month: number,
       year: number,
       timeZone:string},parse: boolean = false): Date | number {
        
        let d = new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second)
        let nowMin = d.getMinutes();
        let offset = d.getTimezoneOffset();
        let min = nowMin-offset;
        d.setMinutes(min);
        
        if(parse){
            let  p = d.toUTCString()
            return Date.parse(p)
        }
        
        return  d;
    }


 
 



