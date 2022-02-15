import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  fade = '';

  constructor() { }

  ngOnInit(): void {
  }

  show: boolean = false;

  public async toggle () {
    this.fade = 'fadeIn'
    this.show = !this.show;
    await new Promise(f => setTimeout(f, 4200));
    this.fade = 'fadeOut'
    await new Promise(f => setTimeout(f, 700));
    this.show = !this.show;

  }

}
