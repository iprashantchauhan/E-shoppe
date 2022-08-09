import { Product } from "./product";
import { User } from "./user";


export class Cart {
    public id!: string;
    public purchasedOn!: String;
    public userId!: User['id'];
    public items: Product[] = new Array<Product>();
    public totalCount: number=0;
    public totalAmount: number=0;
}