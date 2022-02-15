import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  show: boolean = false;

  constructor() { }

  async toogle(){
    this.show = !this.show;
    console.log("antes do delay")
    await this.delay(5000);
    console.log("depois do delay")
    this.show = !this.show;
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }



}
