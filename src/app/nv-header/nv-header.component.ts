import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nv-header',
  templateUrl: './nv-header.component.html',
  styleUrls: ['./nv-header.component.scss'],
})
export class NvHeaderComponent {
  isDrawerOpen = false;
  @Output() isDrawerOpenEvent = new EventEmitter<boolean>();

  onClick() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.isDrawerOpenEvent.emit(this.isDrawerOpen);
  }
}
