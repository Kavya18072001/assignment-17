import { Component, OnInit } from '@angular/core';
import{studentdetails} from '../model/alldetails';
import{additionaldata} from '../model/alldetails';
import { userdetailsserivice } from '../services/userinformation.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  allUserDetails:studentdetails[]=[];
  additionalData:additionaldata[]=[];
  labeldata:string="";
  constructor(private userService : userdetailsserivice){}
  ngOnInit():void{
    this.userService.fetchdetails().subscribe((res)=>this.allUserDetails = res)
    this.userService.fetchdetails().subscribe((res)=>this.additionalData = res)
  }
  }
