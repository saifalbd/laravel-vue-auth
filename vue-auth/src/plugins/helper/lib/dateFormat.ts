// tslint:disable
export class dateFormat {

    private dateString:string = '2019-10-16T21:26:38.000000Z'


    private  static get dayList():string[]{
      return ["Sunday","Monday","Tuesday",
      "Wednesday","Thursday","Friday","Saturday"];
    }

  private static  get  monthList():string[]{return ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
];}
private static  get  monthListSort():string[]{
  return ["Jan", "Feb", "Mar", "April", "May", "June","July", "Aug", "Sep",
   "Oct", "Nov", "Dec"
];}

 static getFormattedDate(
   date:Date,
    prefomattedDate:string|boolean = false,
     hideYear = false){
   const day:number|string = date.getDate();
   const month:number|string = this.monthListSort[date.getMonth()];
   const year:number|string = date.getFullYear();
   const hours:number|string = date.getHours();
   let minutes:number|string = date.getMinutes();
 
   if (minutes < 10) {
     // Adding leading zero to minutes
     minutes = `0${ minutes }`;
   }
 
   if (prefomattedDate) {
     // Today at 10:20
     // Yesterday at 10:20
     return `${ prefomattedDate } at ${ hours }:${ minutes }`;
   }
 
   if (hideYear) {
     // 10. January at 10:20
    //   at ${ hours }:${ minutes }
     return `${ day } . ${ month }`;
   }
 
   // 10. January 2017. at 10:20
  //   `${ day } . ${ month } ${ year }. at ${ hours }:${ minutes }`;
   return `${ day } . ${ month } ${ year }`;
 }

static timeAgo(dateParam:string|Date):string|Date |null{
    if (!dateParam) {
      return null;
    }
  
    const date:any = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS:number = 86400000; // 24 * 60 * 60 * 1000
    const today:any = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();
  
  
    if (seconds < 5) {
      return 'now';
    } else if (seconds < 60) {
      return `${ seconds } seconds ago`;
    } else if (seconds < 90) {
      return 'about a minute ago';
    } else if (minutes < 60) {
      return `${ minutes } minutes ago`;
    } else if (isToday) {
      return this.getFormattedDate(date, ''); // Today at 10:20
    } else if (isYesterday) {
      return this.getFormattedDate(date, 'Yest'); // Yesterday at 10:20
    } else if (isThisYear) {
      return this.getFormattedDate(date,false, true); // 10. January at 10:20
    }
  
    return this.getFormattedDate(date); // 10. January 2017. at 10:20
  }
}