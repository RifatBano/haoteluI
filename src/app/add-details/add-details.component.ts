import { Component, OnInit } from '@angular/core';
import {Roomdetails} from 'src/app/roomdetails';
import{Hoteldetails} from 'src/app/roomdetails';
import { from } from 'rxjs';
import { RoomDetailService } from '../room-detail.service';
import { Router } from '@angular/router';
@Component({
  selector: 'add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

   roomdetails: Roomdetails = { roomid: 0, numberofpersons: 0,price:0,roomtype:'',
   hoteldetails:{ hotelid:0, hotelname:"",hoteladdress:"",numberofrooms:0,phonenumber:""}};
 
  constructor(private roomdetailservice:RoomDetailService,private router: Router) { }

  ngOnInit() {
  }
  addRoomDetails(roomdetails:Roomdetails) {
   console.log(roomdetails);
    this.roomdetailservice.addDetails(roomdetails,roomdetails.hoteldetails).subscribe(
      value => {
        console.log('[POST] create Customer successfully', value);
      }, error => {
        console.log('FAIL to add roomdetails!');
      },
      () => {
        console.log('POST roomdetails- now completed.');

      });
     
     
  }
}
