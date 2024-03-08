import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { NvHeaderComponent } from '../nv-header/nv-header.component';
import { NvHomeComponent } from '../nv-home/components/nv-home.component';

@NgModule({
  declarations: [NvHomeComponent, NvHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    NvHeaderComponent,
    NvHomeComponent,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class SharedModule {}
