import { Injectable } from "@angular/core";
import{HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import{map} from 'rxjs';
import{studentdetails} from '../model/alldetails';


@Injectable({
    providedIn:'root'
})
export class userdetailsserivice{
    additionaldata :any[] =[]
    constructor(private http : HttpClient){}
    //dataurl:string='https://angularbyproacademy-73de4-default-rtdb.firebaseio.com/studentdetails.json'
    create(data){
        this.http.post('https://angularbyproacademy-73de4-default-rtdb.firebaseio.com/studentdetails.json',data)
        .subscribe((postres)=>{
            console.log(postres)
        });
    }
    fetchdetails(){
        
       return  this.http.get <{[key :string]:studentdetails}>('https://angularbyproacademy-73de4-default-rtdb.firebaseio.com/studentdetails.json')
        .pipe(map((getres)=> {
          const details=[]
      for (const key in getres){
        if(getres.hasOwnProperty(key)){
            details.push({...getres[key],id:key})
        }
      }
      return details;
        }))
       }
       forAdditionalData(data:any){
        this.additionaldata.push(data)
       }


}