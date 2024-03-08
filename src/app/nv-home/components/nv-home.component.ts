import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-nv-home',
  templateUrl: './nv-home.component.html',
  styleUrls: ['./nv-home.component.scss'],
})
export class NvHomeComponent implements OnInit {
  @ViewChild(MatDrawer, { static: false }) drawer!: MatDrawer;
  isDrawerOpen: any;

  receiveIsDrawerOpenValue($event: boolean) {
    this.isDrawerOpen = $event;
  }

  ngOnInit() {}
}
