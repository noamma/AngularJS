import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { SalesComponent } from './components/sales/sales.component';

import { SaleService } from './services/sale.service';


@NgModule({
  declarations: [
    AppComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'ebaystore'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
