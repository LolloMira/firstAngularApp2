import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ComService } from 'src/app/services/com.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  public drawerOpen = false;

  constructor(public comS: ComService) { }

  ngOnInit(): void {
    this.comS.isDrawerOpen.subscribe(isOpen => {
      this.drawerOpen = isOpen;
    });

  }

}
