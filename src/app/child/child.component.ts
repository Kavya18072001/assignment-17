import { Component, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  addedvalue:string="";
  @Output() inputchild :EventEmitter<string> = new EventEmitter<string>();
  
  addtoValue(){
      this.inputchild.emit(this.addedvalue);    
  }
  

  childForm = new FormGroup({
    dropdown: new FormControl(''),
    childinput: new FormControl('')     
  });

  // setTimeout((x) => {
  // childForm.controls['dropdown'].setValue('Number');
  // });
  
selectedtype="";
numPattern:any = "^[0-9]*$";
stringPattern = "^[a-zA-Z]+$";
boolPattern = "^(True|False|TRUE|FALSE|true|false|0|1)$";
binaryPattern = "^[0*1*]*[1*0*]*"
hexPattern = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{6})$"
selectedOption(datatype:any){
  this.selectedtype=datatype.target.value;
  this.checkdatatype();
}
get childinput(){
  return this.childForm.get('childinput')
}
checkdatatype(){
  if(this.selectedtype == 'Number'){
    this.childinput?.addValidators([Validators.pattern(this.numPattern),Validators.required]);
}
else if(this.selectedtype=='string'){
  this.childinput?.addValidators([Validators.pattern(this.stringPattern),Validators.required]);
}
else if(this.selectedtype=='Boolean'){
  this.childinput?.addValidators([Validators.pattern(this.boolPattern),Validators.required]);
}
else if(this.selectedtype=='hexa decimal'){
  this.childinput?.addValidators([Validators.pattern(this.hexPattern),Validators.required]);
}
else if(this.selectedtype=='Binary'){
  this.childinput?.addValidators([Validators.pattern(this.binaryPattern),Validators.required]);
}

}
  

}
