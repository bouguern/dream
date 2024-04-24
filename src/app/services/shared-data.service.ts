import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private isFormValid = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  setBoolean(value: boolean) {
    this.isFormValid.next(value);
  }

  getBoolean() {
    return this.isFormValid.asObservable();
  }
}
