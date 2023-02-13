
     import {AbstractControl} from '@angular/forms';

     export function agevalidation(control:AbstractControl){
        const pattern = /^[a-zA-Z]+/;
        if (control.value !=null){
            if(pattern.test(control.value))
              return {error:true,msg:' age contains only numbers'}
            if ((control.value)<1)
                return {error:true,msg:'age should be greater than 0'};
            if ((control.value)>999)
                return {error:true, msg : 'age should be less than 999'};
            return null;   
        }
        else
            return {error:true,msg:'field should not be empty'}
    }
    
