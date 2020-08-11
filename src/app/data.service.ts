import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  public currentCustomer: BehaviorSubject<string>;

  constructor() {
    this.currentCustomer = new BehaviorSubject<string>("");
  }

  addCustomer(newCustomer: string) {
    this.currentCustomer.next(newCustomer);
  }
}
