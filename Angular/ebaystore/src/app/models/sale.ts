import { Transaction } from './transaction';

export interface Sale{
    id: string;
    Buyerdetaile: {
        ebayid: string;
        name: string;
    };
    Ebayitemid: string;
    Pdate: Date;
    SalePrice: number;
    Tracking: {
        Carrier: string;
        Id: string;
        Shipped: boolean;
        transaction: Transaction;
    };
}