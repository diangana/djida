import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PanierService } from '../service/panier.service';
import { Output, EventEmitter } from '@angular/core';
import { AdherentService } from '../service/adherent.service';
import { Router } from '@angular/router';
import { Adherent } from 'src/models/Adherent.model';
declare var paypal:any;
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef |any;
  id = localStorage.getItem('loggedUser');
  adherent: Adherent = new Adherent;
  cartItems:any = [];
  prods;
  constructor(private router:Router,private panier: PanierService,private adherentService:AdherentService) {
    this.cartItems = this.panier.getItemsFromCart();
    this.prods = this.panier.getCartCount();
  }  product = {
    price: this.panier.totalAmount,
    description: this.panier.listProduct,
  };
  paidFor = false;
  ngOnInit() {
    console.log(this.panier.totalAmount);

        paypal
      .Buttons({
        createOrder: (data:any, actions:any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data:any, actions:any) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          this.acotiser();
        },
        onError: (err: any) => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
  modifAdherent(adherent:Adherent){
    this.adherentService.update(adherent).subscribe(prod=>{
      console.log(this.adherent)
    },
    error=>{
      console.log(error)
    }
    );
   }
   acotiser(){
    if(this.product.description.indexOf('cotisation annuel')!=-1)
    {
     this.adherentService.get(this.id).subscribe(
       data =>{
         data[0].date_cotisation=new Date().toISOString().split('Z')[0],

          this.modifAdherent(data[0]);

        },
       error =>{
         console.log(error)
       })
   }

   }
}
