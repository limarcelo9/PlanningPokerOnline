import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  show: boolean = false;

  constructor() { }

  async toogle(){
    this.show = !this.show;

    await this.delay(5000);

    this.show = !this.show;
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }



}
