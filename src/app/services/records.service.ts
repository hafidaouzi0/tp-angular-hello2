import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1 : string[]=["ALAOUI", "Mohammed","22"]
  info2 : string[]=["Amrani", "Ahmed","40"]
  info3 : string[]=["Abbou", "Samir","34"]
  getInfo1():string[] {
    return this.info1
  }
  getInfo2():string[] {
    return this.info2
  }
  getInfo3():string[] {
    return this.info3
  }
  constructor() { }
}
