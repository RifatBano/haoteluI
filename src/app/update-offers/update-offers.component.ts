import { Component, OnInit } from '@angular/core';
import { RoomDetailService } from '../room-detail.service';
import { Router } from '@angular/router';
import { Roomdetails } from '../roomdetails';

@Component({
  selector: 'app-update-offers',
  templateUrl: './update-offers.component.html',
  styleUrls: ['./update-offers.component.scss']
})
export class UpdateOffersComponent implements OnInit {

  constructor(private roomdetailservice:RoomDetailService,private router: Router) { }
  roomdetails: Roomdetails = { roomid: 0, numberofpersons: 0,price:0,roomtype:'',
  hoteldetails:{ hotelid:0, hotelname:"",hoteladdress:"",numberofrooms:0,phonenumber:""}};
  ngOnInit() {
  }
updateRoomOffers(roomdetails:Roomdetails)
{
  this.roomdetailservice.updateoffers(roomdetails).subscribe(
    value => {
      console.log('[PUT] update price according to offer successfully', value);
    }, error => {
      console.log('FAIL to update roomdetails!');
    },
    () => {
      console.log('PUT roomdetails- now completed.');
    });
}
}
