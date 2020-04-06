import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contract } from '../../model/contract.model'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SmartContractService {

  private userUrl='http://localhost:8080/SmartContractController/'
  constructor(private http:HttpClient) { }
  deploy_contract(address,pass){
    return this.http.get<Contract>(this.userUrl+'deploy/'+address+'/'+pass)
  }
  getcounter(hash,address,pass){
    return this.http.get(this.userUrl+'getcounter/'+hash+"/"+address+"/"+pass)
  }
  add_counter(hash,address,pass){
    return this.http.get(this.userUrl+"addcounter/"+hash+"/"+address+"/"+pass)
  }
  substract_counter(hash,address,pass){
    return this.http.get(this.userUrl+"substractcounter/"+hash+"/"+address+"/"+pass)

  }
}
