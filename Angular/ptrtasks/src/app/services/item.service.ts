import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})

export class ItemService {
  itemCollection: AngularFirestoreCollection<Item>;
  //itemDoc: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;

  constructor(public pts: AngularFirestore) {
    //this.items = this.pts.collection('items').valueChanges();
    this.items = this.pts.collection('items').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data =  a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getItems(){
     return this.items;
   }
}
