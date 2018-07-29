import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../services/sale.service';
import { Sale } from '../../models/sale';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Sale[];
  model = {
    Ebay:{
      Buyerdetaile: {
        name:'',
        ebayid:''
                    },
      Itemdetaile: {
        Itemid:'',
        Pprice:''
                    }
                  },
    Paypal:{
      Dname:'',
      Pdate:'',
      Paymentdetaile:{
       Paidby:'',
       TransactionNum:''             
      }
                    },
    Amazon:{
      Asin:'',
      Price:'',
      Supplier:'',
      OrderNum:'',
      OrderDate:''
    },
    Shipping:{
      ShipeTo:'',
      ShippingAddress:{
        Address1:'',
        Address2:'',
        City:'',
        State:'',
        ZipCode:'',
        Country:''
      },
      ContactNumber:'',
      Trackingdetailes:{
        TrackingNum:'',
        TrackingCarrier:''
      },
      MarkedShipped:''
    }};

  ngOnInit() {
    this.saleService.getSales().subscribe(sales => {
      console.log(sales);
      this.sales = sales;
    });
  }

  constructor(private saleService: SaleService) { }
  

saleSubmit(){
  this.saleService.addSale(this.model);
  this.model=null;
}

saleDelete(sale){
  this.saleService.deleteSale(sale.id);
}


}
