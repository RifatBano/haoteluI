import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Roomdetails, Hoteldetails } from './roomdetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomDetailService {
  
  private static baseUrl="http://ec2-3-83-52-210.compute-1.amazonaws.com:8081/";
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient) { }
  
  addDetails(roomdetails:Roomdetails,hotelId:Hoteldetails): Observable<Roomdetails> {
    console.log(roomdetails)
    return this.http.post<Roomdetails>("http://ec2-3-83-52-210.compute-1.amazonaws.com:8081/addroomdetail/"+hotelId.hotelid+"",{headers:this.headers});

  }

  deletedetails(roomdetails:Roomdetails): Observable<any> {
    return this.http.delete("http://ec2-3-83-52-210.compute-1.amazonaws.com:8081/deleteroomdetail");
  }
  updateoffers(roomdetails:Roomdetails): Observable<Roomdetails> {
    return this.http.put<Roomdetails>("http://ec2-3-83-52-210.compute-1.amazonaws.com:8081/updateroomdetail",roomdetails,{headers:this.headers});
  }
  updateprice(roomdetails:Roomdetails): Observable<Roomdetails> {
    return this.http.put<Roomdetails>("http://ec2-3-83-52-210.compute-1.amazonaws.com:8081/updateroomwithoffers",roomdetails,{headers:this.headers});
  }

}
