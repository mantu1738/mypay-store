import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Product } from '@app/data/interfaces/products.interface';

@Component({
  selector: 'app-payement-modal',
  templateUrl: './payement-modal.component.html',
  styleUrls: ['./payement-modal.component.scss']
})
export class PayementModalComponent {
  @Output() onClose = new EventEmitter<void>();
  @Output() onPayement = new EventEmitter<void>();
  @Input() total: number = 0;
  @Input() cartItems: Product[] = [];

  handleModal() {
    this.onClose.emit();
  }

  closeModal() {
    this.onClose.emit();
  }

  pay() {
    this.onPayement.emit();
  }
}
