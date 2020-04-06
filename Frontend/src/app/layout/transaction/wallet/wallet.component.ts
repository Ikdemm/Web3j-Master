import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { TransactionService, CommunicationService } from '../../../shared/services';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  animations: [routerTransition()]

})
export class WalletComponent implements OnInit {
  wallets: any[];
  info:string[]=[];
  hash:any;
  etat=0;
  balance:any;
  constructor(private commService:CommunicationService,private transactionService: TransactionService) { }

  ngOnInit() {
    this.commService.receiveInputs().subscribe(data=>{
      console.log("wallet");
      this.info=data;
      console.log(this.info);
      this.getBalance();
  
    })
    this.transactionService.ethAccounts().subscribe(data => {
      this.wallets = data;
      })
      this.transactionService.ethAccounts()
  }
  submitTransaction(form){
    console.log("submit transaction")
    console.log(this.info)
    console.log(form.value.to)
    console.log(form.value.value)
    this.transactionService.getTransactionHash(this.info[0].substring(2),form.value.to,this.info[1],form.value.value).subscribe(
      data=>{
        console.log(data);
       this.hash=data.transactionHash;
        this.etat=1;
        this.getBalance();
      },
      error=>{
        console.log("error");
        console.log(error);
        this.etat=2;
      }
    )
  }
  getBalance(){
    this.transactionService.ethBalance(this.info[0]).subscribe(data=>{this.balance=data})

  }

}
