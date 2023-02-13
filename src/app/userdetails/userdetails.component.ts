import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {agevalidation} from '../vadilations/age.validation';
import {uservalidation} from '../vadilations/username.validation';
import{firstnamevalidation} from '../vadilations/fristname.validators';
import{mailvalidations} from '../vadilations/email.validation';
import{phnnovalidation} from '../vadilations/phno.validation';
import { Router } from '@angular/router';

import{HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import{studentdetails} from '../model/alldetails';
import{userdetailsserivice} from '../services/userinformation.service'


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  addtoparent="";
  labeldata:string="";
  allUserDetails:studentdetails[]=[];
  
  
  registerForm=new FormGroup({
    firstname:new FormControl('',firstnamevalidation),
    lastname:new FormControl('',firstnamevalidation),
    // Dateofbirth:new FormControl(''),
    age:new FormControl('',agevalidation),
    Username:new FormControl('',uservalidation),
    email:new FormControl('',mailvalidations),
    phnno:new FormControl('',phnnovalidation),
    additionaldata:new FormControl(''),
  })
  constructor(private routes:Router ,private http:HttpClient,private fromdata:userdetailsserivice){}
  
  studentdetails;
  // ngOnInit(){//to display the details whenever  the page loads 
  //   this.fetchuserdetails();
  // }
  // OnFetchUserdetails(){//public method
  //   this.fetchuserdetails();
  // }
  onsubmit(){
   this.studentdetails= this.registerForm.value
    this.routes.navigateByUrl('displayingFormDetails')
     this.fromdata.create(this.studentdetails)
    //  this.fromdata.fetchdetails().subscribe((details)=>{
    //   this.allUserDetails=details
    //   console.log(this.allUserDetails);
      
    //  })
    //console.log( this.studentdetails)
    // console.log(this.registerForm.get('additionaldata'))
     //customheaders
     //const headers= new HttpHeaders({'myheader':'kavya'})
     //post request
    // this.http.post<{name:string}>('https://angularbyproacademy-73de4-default-rtdb.firebaseio.com/studentdetails.json',this.studentdetails/*(body)*/).subscribe((postres)=>{
    //   console.log(postres)
    // })//it return an observable 
  }
  // private fetchuserdetails(){
  //   this.http.get<{[key:string]:studentdetails}>('https://angularbyproacademy-73de4-default-rtdb.firebaseio.com/studentdetails.json').pipe((map((res)=>{
  //     const details=[];
  //     for(const key in res){
  //       if(res.hasOwnProperty(key)){
  //         details.push({...res[key],id:key})
  //       }
  //     }
  //     return details
  //   }))).subscribe((res)=>{
  //     console.log(res)
  //     this.allUserDetails=res
  //   })
   
  // }
  
  
   
  addtolabel(eventdata:Event){
    this.labeldata=(<HTMLInputElement>eventdata.target).value
  }
   datafromchild:string="";
   toaddvalue(data:string){
     this.datafromchild=data;
    // console.log(this.datafromchild)
     this.addtoparent=this.datafromchild
   }
  addonemorecomponent=[0];
  addComponent(event){
    event.preventDefault();
    this.addonemorecomponent.push(0);
  }
  
  
/*
ngonit(){
  this.fetchproduct();
}
onfetch(){
  this.fetchproduct();
}
private fetchproduct(){
  this.http.get <{[key :string]:studentdetails}>('https://angularbyproacademy-73de4-default-rtdb.firebaseio.com/studentdetails.json')
  .pipe(map((getres)=> {
    const Products=[]
for (const key in getres){
  if(getres.hasOwnProperty(key)){
    Products.push({...getres[key],id:key})
  }
}
return details;
  }))
  .subscribe(( details)=>{
    console.log( details)
    this.alldetails= details;
  })
}


for displaying the details
alldetails:studentdetails[]=[]
fetching:boolean=false;

deleting http data
 1.button>delete>
 pass the id to the method 
 <button click=deletemethod(prod.id)>
 deletemethod(id:string){
this.http.delete('url/+id+.json').subscribe();
 }
 deleteallmethod(id:string){
this.http.delete('url.json').subscribe();
 }
 //////////using services for http requests
 
 */

}
