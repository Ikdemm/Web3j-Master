import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TransactionService, CommunicationService } from '../../shared/services';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  animations: [routerTransition()]
})
export class TransactionComponent implements OnInit {
 info:string[]=[];
  modalRef: NgbModalRef;
  closeResult: string;
  wallets: any[]
  balance:any
  selectedHash:string;
  pass:string;
  passwordvalid:boolean=true;
  passw:string;
  constructor(private commService:CommunicationService,private router:Router,private transactionService: TransactionService,private modalService: NgbModal,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
this.getAccounts();
     
  }
  open(content,hash) {
this.modalRef = this.modalService.open(content);
    this.selectedHash=hash;
    console.log(this.selectedHash)
        this.modalRef.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

open1(content) {
    this.modalRef = this.modalService.open(content);
            console.log(this.selectedHash)
            this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    

private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}
submit(){
  console.log('connect');
  console.log(this.selectedHash);
  console.log(this.pass)
  this.transactionService.getCreds(this.selectedHash.substring(2),this.pass).subscribe(data=>{console.log(data);
  if (data == null)    {         
    this.passwordvalid=false;
    console.log("password invalid")
  }
  else {
    console.log("connected");
    this.info.push(this.selectedHash);
    this.info.push(this.pass);
    console.log(this.info)
    this.commService.sendInputs(this.info)
    this.modalRef.close();
    this.router.navigate(['transaction/wallet'])
  }
  })
}
newaccount(){
    console.log(this.passw)
    this.transactionService.Newwallet(this.passw).subscribe(data=>{
      console.log(data);
      this.getAccounts(); });
   }
   getAccounts(){
        this.transactionService.ethAccounts().subscribe(data=> {
          this.wallets=data;
        console.log(this.wallets)})
       }
   }

