import { Component, OnInit } from '@angular/core';
import { RoomDetailService } from '../room-detail.service';
import { Router } from '@angular/router';
import { Roomdetails } from '../roomdetails';

@Component({
  selector: 'app-delete-details',
  templateUrl: './delete-details.component.html',
  styleUrls: ['./delete-details.component.scss']
})
export class DeleteDetailsComponent implements OnInit {

  constructor(private roomdetailservice:RoomDetailService,private router: Router) { }
  // roomdetails: Roomdetails = { roomid: 0, numberofpersons: 0,price:0,roomtype:'',
  // hoteldetails:{ hotelid:0, hotelname:"",hoteladdress:"",numberofrooms:0,phonenumber:""}};

  roomdetails: Roomdetails = { roomid:0, numberofpersons: 0,price:0,roomtype:'',hoteldetails:null};

  ngOnInit() {
  };
deleteRoomDetails(roomdetails:Roomdetails)
{
  this.roomdetailservice.deletedetails(roomdetails).subscribe(
    value => {
      console.log('[DELETE] deleted result successfully', value);
    }, error => {
      console.log('FAIL to delete roomdetails!');
    },
    () => {
      console.log('DELETE roomdetails- now completed.');
    });
}
}
