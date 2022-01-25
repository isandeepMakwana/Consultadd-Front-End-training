import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FectchDataFromApiComponent } from './fectch-data-from-api/fectch-data-from-api.component';

const routes: Routes = [
{
  path:'data',
  component:FectchDataFromApiComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
