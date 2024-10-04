import { Component } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  itemsInCart: ProductModel[] = [];

  addItem(product: ProductModel) {
    product.quantity++;
    if (!this.itemsInCart.includes(product)) {
      this.itemsInCart.push(product);
    }
  }

  deleteItem(id: number) {
    this.itemsInCart = this.itemsInCart.filter((item) => item.id !== id);
  }

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Big Mac',
      picture_url: 'images/bigmac.jpg',
      price: 1620,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Sajtos McRoyal',
      picture_url: 'images/sajtosmcroyal.jpg',
      price: 1400,
      quantity: 0,
    },
    {
      id: 3,
      name: 'Sajtburger fresh',
      picture_url: 'images/SajtburgerFresh.jpg',
      price: 890,
      quantity: 0,
    },
    {
      id: 4,
      name: 'Sajtburger',
      picture_url: 'images/Sajtburger.jpg',
      price: 680,
      quantity: 0,
    },
    {
      id: 5,
      name: 'Hamburger',
      picture_url: 'images/hamburger.jpg',
      price: 590,
      quantity: 0,
    },
    {
      id: 6,
      name: 'Dupla sajtburger',
      picture_url: 'images/duplasajtburger.jpg',
      price: 1240,
      quantity: 0,
    },
    {
      id: 7,
      name: 'McWrap',
      picture_url: 'images/CrispyWrapBundas.jpg',
      price: 1990,
      quantity: 0,
    },
    {
      id: 8,
      name: 'McChicken',
      picture_url: 'images/mcchicken.jpg',
      price: 1400,
      quantity: 0,
    },
    {
      id: 9,
      name: 'Chicken McNuggets',
      picture_url: 'images/chicken_mcnugget.jpg',
      price: 1330,
      quantity: 0,
    },
    {
      id: 10,
      name: 'Erős Pistás sajtfalatok',
      picture_url: 'images/ep_sajtfalatok.jpg',
      price: 1290,
      quantity: 0,
    },
    {
      id: 11,
      name: "McFlurry M&M's",
      picture_url: 'images/flurry_m-m.jpg',
      price: 960,
      quantity: 0,
    },
    {
      id: 12,
      name: 'Pistachio dream',
      picture_url: 'images/PistachioDream.jpg',
      price: 1290,
      quantity: 0,
    },
    {
      id: 13,
      name: 'McFreeze csokoládéízű öntettel',
      picture_url: 'images/mcfreeze_csokis.jpg',
      price: 650,
      quantity: 0,
    },
    {
      id: 14,
      name: 'McFreeze meggyes öntettel',
      picture_url: 'images/McFreeze_meggyes.jpg',
      price: 650,
      quantity: 0,
    },
    {
      id: 15,
      name: 'McFreeze karamellás öntettel',
      picture_url: 'images/McFreeze_Karamell.jpg',
      price: 650,
      quantity: 0,
    },
    {
      id: 16,
      name: 'Forró almás pite',
      picture_url: 'images/almaspite.jpg',
      price: 540,
      quantity: 0,
    },
    {
      id: 17,
      name: 'Vaníliaízű shake',
      picture_url: 'images/shake_vanilias.jpg',
      price: 630,
      quantity: 0,
    },
    {
      id: 18,
      name: 'Csokoládéízű shake',
      picture_url: 'images/shake_csokis.jpg',
      price: 630,
      quantity: 0,
    },
    {
      id: 19,
      name: 'Coca Cola',
      picture_url: 'images/cocacolanagy.jpg',
      price: 680,
      quantity: 0,
    },
    {
      id: 20,
      name: 'Fanta',
      picture_url: 'images/fanta_zero.jpg',
      price: 670,
      quantity: 0,
    },
    {
      id: 21,
      name: 'Közepes burgonya',
      picture_url: 'images/kozepesburgonya.jpg',
      price: 890,
      quantity: 0,
    },
    {
      id: 22,
      name: 'Kis burgonya',
      picture_url: 'images/KBurgonya.jpg',
      price: 710,
      quantity: 0,
    },
  ];
}
