import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Block} from '../../model/block.model';
import {Transaction} from '../../model/transaction.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MonotoringService {
  private userUrl='http://localhost:8080/MonotoringController/'
  constructor(private http:HttpClient) { }
  public getClientVersion(){
    console.log("Services")
    return this.http.get<string>(this.userUrl+"getClientVersion");
  }
  public getNodenumber(){
    return this.http.get(this.userUrl+"Nodenumber");
  }
  public ethAccounts(){
    return this.http.get<any[]>(this.userUrl+"ethAccounts")
  }
  public listBlock(){
    return this.http.get<Block[]>(this.userUrl+"listBlock")
  }
  public listTransaction(){
    return this.http.get<Transaction[]>(this.userUrl+"listTransaction")
  }

}
