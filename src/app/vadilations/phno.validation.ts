import { AbstractControl } from "@angular/forms";


export function phnnovalidation(control: AbstractControl) {
    if (control.value!=null && control.value != ''){
        const  pattern = /^\d+$/;
        const isallNumbers:boolean =pattern.test(control.value);
        if (control.value.length!=10)
            return {error:true,msg:"mobile number should be 10 digits"};
        if ( ! isallNumbers)
            return {error: true, msg:"only numbers allowed"}
        else
            return null;
    }
    else
        return {error:true,msg:'Field should not be empty'};

}