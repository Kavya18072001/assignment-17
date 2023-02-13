import { AbstractControl } from "@angular/forms";


var  titleerrormsg:string; 
export function firstnamevalidation(titlecontrol:AbstractControl){
    const pattern = /^[a-zA-Z]+$/;
    if (titlecontrol.value!=null && titlecontrol.value != ''){

        if(! pattern.test(titlecontrol.value))
        return {error:true,msg:' name contains only alphabets'}

        if(titlecontrol.value.length<3)
            return {error:true,msg:'minimum length of name should be atleast 3 character'}
        
        if (titlecontrol.value>256)
            return {error:true,msg:'maximum length of name should be atmost 256 characters'}
 
        
        return null;   
    }
    else{
        return {error:true,msg:'filed should not be empty'};
        }

}