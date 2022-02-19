import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cagnotte } from 'src/models/cagnotte.model';
import { CagnottesService } from './cagnottes.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  cartItems :any = [
  ];
  totalAmount=0;
  listProduct?:any;
  constructor(private router: Router , private cagnotteService:CagnottesService) { }

  addItemsToCart = (cagnottes:Cagnotte) => {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id_cagnotte === cagnottes.id_cagnotte) {
        this.cartItems[i].quantity++;
        productExists = true;
        this.getTotalAmount();
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        url:cagnottes.image,
        id_cagnotte: cagnottes.id_cagnotte,
        nom: cagnottes.nom_cagnotte,
        prix: cagnottes.don_min,
        description: cagnottes.description,
        derniere_maj: cagnottes.date_cloture,
        quantity: 1,
      });
    }
    this.getTotalAmount();
  }

  getTotalAmount() {
    if (this.cartItems) {
      this.totalAmount = 0;
      this.cartItems.forEach((item: { quantity: number; prix: number; }) => {
        this.totalAmount += (item.quantity * item.prix );
      });
      return {
        totalAmount: this.totalAmount
      };
    }
    else{
      return {
        totalAmount: this.totalAmount
      };

    }
  }

  getItemsFromCart = () => {
    return this.cartItems;
  }
  getCartCount = () => {
    if (this.cartItems) {
      let cartCount = 0;
      this.cartItems.forEach((item: { quantity: number; }) => {
        cartCount += item.quantity;
      });
      return cartCount;
    }
    else{
      return 0;
    }
  }

  clearCart = () => {
    this.cartItems = [];
    this.router.navigate(['']);
  }

  removeFromCart = (cangottes:Cagnotte) => {
    this.cartItems = this.cartItems.filter((item: { id_cagnotte: any; }) => item.id_cagnotte !==cangottes.id_cagnotte);
    if (this.cartItems.length === 0) {
      this.router.navigate(['']);
    }
    this.getTotalAmount();
  }

  decrementFromCart = (cangottes:Cagnotte) => {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id_cagnotte === cangottes.id_cagnotte) {
        if (this.cartItems[i].quantity === 0) {
          this.removeFromCart(cangottes);
        } else {
          this.cartItems[i].quantity--;
        }
        this.getTotalAmount();
        break;
      }
    }
    this.getTotalAmount();
  }

  getProductList = () => {
    if (this.cartItems) {
      this.listProduct='';
    for (let i = 0; i < this.cartItems.length; i++) {

    this.listProduct+=" ".concat(this.cartItems[i].nom,this.cartItems[i].prix,'€X',this.cartItems[i].quantity);
    }
  }else{
    this.listProduct='';
  }
  console.log(this.listProduct)
    return this.listProduct

  }

}
