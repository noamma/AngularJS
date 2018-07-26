import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sale } from '../models/sale';


@Injectable({
  providedIn: 'root'
})

export class SaleService {
  saleCollection: AngularFirestoreCollection<Sale>  = this.ebs.collection('Sales');
  //itemDoc: AngularFirestoreDocument<Item>;
  sales: Observable<Sale[]>;

  constructor(public ebs: AngularFirestore) {
    //this.items = this.pts.collection('items').valueChanges();
    this.sales = this.ebs.collection('Sales').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data =  a.payload.doc.data() as Sale;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }


   getSales(){
     return this.sales;
   }

   addSale(sale){
    this.saleCollection.add(sale);
   }

   deleteSale(sale){
     this.saleCollection.doc(sale).delete();
   }
}