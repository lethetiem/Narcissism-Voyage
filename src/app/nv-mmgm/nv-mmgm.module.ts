import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, SharedModule],
})
export class NvMmgmModule {}
