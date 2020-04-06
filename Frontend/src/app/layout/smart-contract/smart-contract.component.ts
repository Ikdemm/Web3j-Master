import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SmartContractService, CommunicationService, TransactionService } from '../../shared/services';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Contract } from '../../model/contract.model';
@Component({
  selector: 'app-smart-contract',
  templateUrl: './smart-contract.component.html',
  styleUrls: ['./smart-contract.component.scss'],
  animations: [routerTransition()]

})
export class SmartContractComponent implements OnInit {
  modalRef: NgbModalRef;
  closeResult: string;
  wallets: any[];
  pass:string;
  selectedHash:string;
  passwordvalid:boolean=true;
  info:string[]=[];
  ok:boolean=false;
  errorLogin:string;
  smartContract:Contract;
  counter:any;
  get:boolean=false;




  constructor(private commService:CommunicationService,private smartContractService: SmartContractService,private modalService: NgbModal,private flashMessage:FlashMessagesService,private transactionService:TransactionService) { }

  ngOnInit() {
    this.get_counter
  }
  open(content,hash) {
    this.getAccounts();
this.modalRef = this.modalService.open(content);
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
getAccounts(){
  this.transactionService.ethAccounts().subscribe(data=> {
    this.wallets=data;
  console.log(this.wallets)})
 }

 submit(){
  console.log('connect');
  console.log(this.selectedHash);
  console.log(this.pass)
  this.transactionService.getCreds(this.selectedHash.substring(2),this.pass).subscribe(data=>{console.log(data);
  if (data == null)    {         
    this.passwordvalid=false;
    this.errorLogin="Wrong password ! ";
    console.log("password invalid")
  }
  else {
    console.log("connected");
    this.info.push(this.selectedHash);
    this.info.push(this.pass);
    console.log(this.info)
    this.commService.sendInputs(this.info)
    this.smartContractService.deploy_contract(this.selectedHash.substring(2),this.pass).subscribe(data=>
      {
        console.log(data);
        this.smartContract=data;
          this.modalRef.close();
          console.log("success");
          this.ok=true;
      
      
      },
    error=>{
      this.passwordvalid=false;
      this.errorLogin="Not enough gas";
      console.log("No gas fund")
    })

  }
  })
}

get_counter(){
  this.smartContractService.getcounter(this.smartContract.contractAddress,this.selectedHash.substring(2),this.pass).subscribe(data=>{
    this.counter=data;
    this.get=true;
  })
}
add_counter(){
  this.smartContractService.add_counter(this.smartContract.contractAddress,this.selectedHash.substring(2),this.pass).subscribe(data=>{
    this.counter=data;
    this.get_counter();
  })
}
substract_counter(){
  this.smartContractService.substract_counter(this.smartContract.contractAddress,this.selectedHash.substring(2),this.pass).subscribe(data=>{
    this.counter=data;
    this.get_counter();
  })
}


}
