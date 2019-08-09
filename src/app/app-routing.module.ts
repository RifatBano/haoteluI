import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { DeleteDetailsComponent } from './delete-details/delete-details.component';
import { UpdateOffersComponent } from './update-offers/update-offers.component';
import { UpdatePriceComponent } from './update-price/update-price.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '/addroomdetail', pathMatch: 'full' },
  { path:  'addroomdetail', component:  AddDetailsComponent},
  { path:  'deleteroomdetail', component:  DeleteDetailsComponent},
  { path:  'updateroomwithoffers', component: UpdateOffersComponent},
  { path:  'updateroomdetail', component:  UpdatePriceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
