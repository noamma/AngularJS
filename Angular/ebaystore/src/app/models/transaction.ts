export interface Transaction{
 Order: {
     Cost: number;
     Itemid: string;
     Supplier: string;
     number: string;
 };
 Shippingaddress:{
     City: string;
     Contactnumber: string;
     State: string;
     ZipCode: string;
     address: string;
     shipto: string;
 };   
}