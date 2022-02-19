import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { PaypalComponent } from '../paypal/paypal.component';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  clique=false
  cartItems:any = [];
  cartTotalValue: any;
  prods;
  totalAmount = 0;
  constructor(public panier: PanierService) {
    this.cartItems = this.panier.getItemsFromCart();
    this.prods = this.panier.getCartCount();
    this.cartTotalValue=this.panier.totalAmount;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.prods = this.panier.getCartCount();
    }, 200);
  }
  handelAddToCart = (product: any) => {
    this.panier.addItemsToCart(product);
  }

  handelRemoveItem = (product: any) => {
    if(this.clique==false){
    this.panier.removeFromCart(product);
    this.cartItems = this.panier.getItemsFromCart();
    this.cartTotalValue =  this.panier.getTotalAmount();
    }
  }

  handleIncrement = (product: any) => {
    if(this.clique==false){
    this.panier.addItemsToCart(product);
    this.cartItems = this.panier.getItemsFromCart();
    this.cartTotalValue =  this.panier.getTotalAmount();
    }
  }

  handleDecriment = (product: any) => {
    if(this.clique==false){
    this.panier.decrementFromCart(product);
    this.cartItems = this.panier.getItemsFromCart();
    this.cartTotalValue =  this.panier.getTotalAmount();
  }
  }
  getProductList(){

  }
  getTotalAmount() {
    this.clique=true;
    this.panier.getTotalAmount()

  }
}
