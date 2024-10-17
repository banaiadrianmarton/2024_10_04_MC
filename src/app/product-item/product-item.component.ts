import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() product!: ProductModel;
  @Output() productDeleted = new EventEmitter<number>();
  @Output() quantityChange = new EventEmitter<void>();

  increase() {
    this.product.quantity++;
    this.quantityChange.emit();
  }

  decrease(){
    this.product.quantity--;
    if(this.product.quantity == 0){
      this.productDeleted.emit(this.product.id)
      this.quantityChange.emit();
    }
  }
}

