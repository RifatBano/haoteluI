import { Component, OnInit } from '@angular/core';
import { RoomDetailService } from '../room-detail.service';
import { Router } from '@angular/router';
import { Roomdetails } from '../roomdetails';

@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.scss']
})
export class UpdatePriceComponent implements OnInit {

  constructor(private roomdetailservice:RoomDetailService,private router: Router) { }
  roomdetails: Roomdetails = { roomid: 0, numberofpersons: 0,price:0,roomtype:'',
  hoteldetails:{ hotelid:0, hotelname:"",hoteladdress:"",numberofrooms:0,phonenumber:""}};
  ngOnInit() {
  }
updateRoomPrice(roomdetails:Roomdetails)
{
  this.roomdetailservice.updateprice(roomdetails).subscribe(
    value => {
      console.log('[PUT] update price successfully', value);
    }, error => {
      console.log('FAIL to update roomdetails!');
    },
    () => {
      console.log('PUT roomdetails- now completed.');
    });
}
}
