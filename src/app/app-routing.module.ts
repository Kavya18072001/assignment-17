import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{UserdetailsComponent} from './userdetails/userdetails.component';
import{DetailsComponent} from './details/details.component';
import{PagenotfoundComponent} from './pagenotfound/pagenotfound.component'

const approutes: Routes = [
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:'form',component:UserdetailsComponent},
  {path:'displayingFormDetails',component:DetailsComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[UserdetailsComponent,DetailsComponent]// we have same import statements (about components)in both files(app-routing and app module )instead of writing duplicates just configure the components. 
