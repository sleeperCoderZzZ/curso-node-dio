import {createItem} from "./services/item.service.js";
import * as cartService from "./services/cart.service.js";
import * as wishListService from "./services/wishList.service.js";

const cart1 = [];
const myWishlist = [];

console.log("Bem-vindo ao carrinho de compras!\n");


const item1 = await createItem("Camiseta", 29.99, 2);
const item2 = await createItem("Calça", 49.99, 1);
const item3 = await createItem("Tênis", 89.99, 1);


await cartService.addItem(cart1, item1);
await cartService.addItem(cart1, item2);
await cartService.addItem(cart1, item3);

await cartService.deleteItem(cart1, item2.name);

await cartService.removeItem(cart1, item1);

await cartService.displayCart(cart1);


await wishListService.addItem(myWishlist, item1);
await wishListService.addItem(myWishlist, item3);

await wishListService.displayWishlist(myWishlist);