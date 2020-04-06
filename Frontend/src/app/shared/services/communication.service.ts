import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private subject = new BehaviorSubject<any[]>([]);

  sendInputs(param:string[]) {
    console.log("Service \n"+param);
    this.subject.next(param);
  }

  receiveInputs():Observable<any[]>{
    return this.subject.asObservable();
  }
  


}
