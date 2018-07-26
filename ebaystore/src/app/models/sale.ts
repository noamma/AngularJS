import { Transaction } from './transaction';

export class Sale{
    id:string;
    Buyerdetaile: {
    ebayid: string,
    name: string};
    Ebayitemid: string;
    Pdate: string;
    SalePrice: number;
    Tracking: {
        Carrier: string;
        Id: string;
        Shipped: boolean;
        transaction: Transaction;
    }

    constructor(){}
    }


    
    
