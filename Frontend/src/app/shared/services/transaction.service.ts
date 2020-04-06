import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../../model/transaction.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private userUrl='http://localhost:8080/TransactionController/'
  constructor(private http:HttpClient) { }
  public ethAccounts(){
    return this.http.get<any[]>(this.userUrl+"ethAccounts")
  }
  public Newwallet(pass:String){
    return this.http.get(this.userUrl+"Newwallet/"+pass);
  }
  public ethBalance(hash:String){
    return this.http.get<any>(this.userUrl+"ethBalance/"+hash)
  }
  public getCreds(adress,pass){
    console.log(adress)
    return this.http.get(this.userUrl+"getCreds/"+adress+"/"+pass);
  }
  public getTransactionHash(from,to,pass,value){
    return this.http.get<any>(this.userUrl+'sendtransaction/'+from+"/"+to+"/"+pass+"/"+value,httpOptions);
  }

}
