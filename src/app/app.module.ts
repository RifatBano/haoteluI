import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { DeleteDetailsComponent } from './delete-details/delete-details.component';
import { UpdatePriceComponent } from './update-price/update-price.component';
import { UpdateOffersComponent } from './update-offers/update-offers.component';
import { RoomDetailService } from './room-detail.service';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import{FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    DeleteDetailsComponent,
    UpdatePriceComponent,
    UpdateOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RoomDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
