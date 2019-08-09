export interface Roomdetails {
    roomid : number;
    numberofpersons:number;
    price:number;
    roomtype:string;
    hoteldetails:Hoteldetails;
}
export interface Hoteldetails
{
hotelid:number;
hotelname:string;
hoteladdress:string;
numberofrooms:number;
phonenumber:string;
}