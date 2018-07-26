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
    Buyerdetaile : {
                  name:''
                }
                };

  ngOnInit() {
    this.saleService.getSales().subscribe(sales => {
      console.log(sales);
      this.sales = sales;
    });
  }

  constructor(private saleService: SaleService) { }
  

saleSubmit(){
  this.saleService.addSale(this.model);
  this.model.Buyerdetaile.name='';
}

saleDelete(sale){
  this.saleService.deleteSale(sale.id);
}


}
