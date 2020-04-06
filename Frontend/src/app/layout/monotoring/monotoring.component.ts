import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MonotoringService } from '../../shared/services';
import { routerTransition } from '../../router.animations';
import { Block } from '../../model/block.model';
import { Transaction } from '../../model/transaction.model';
import { MatTableDataSource ,MatPaginator} from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-monotoring',
  templateUrl: './monotoring.component.html',
  styleUrls: ['./monotoring.component.scss'],
  animations: [routerTransition()]
})
export class MonotoringComponent implements OnInit {
  closeResult: string;
  selectedBlock:Block;
  selectedTransaction:Transaction;


  displayedColumns: string[] = ['number', 'hash'];
  dataSource : MatTableDataSource<Block>;
  lengthBlock:number;
  @ViewChild('blockpaginator') paginator: MatPaginator;
  displayedColumns1: string[] = ['nonce', 'hash'];
  dataSource1 : MatTableDataSource<Transaction>;
  lengthTransaction:number;
  @ViewChild('transactionpaginator') paginator1: MatPaginator;

  nbnoeuds: any=0;
  walletnb: number=0;
  wallets: any[]
  listBlock: Block[];
  listTransaction: Transaction[];

  constructor(private monotoringService: MonotoringService,private modalService: NgbModal) { }

  ngOnInit() {
    this.monotoringService.getClientVersion().subscribe(data=> {
        console.log(data.toString);

    })
    this.monotoringService.getNodenumber().subscribe(data => {
      console.log(data);
      this.nbnoeuds = data
    })
    this.monotoringService.ethAccounts().subscribe(data => {
      this.wallets = data;
      this.walletnb = this.wallets.length;
    });
    this.monotoringService.listBlock().subscribe(data => {
      this.listBlock = data.reverse();
      console.log(this.listBlock);
      this.dataSource = new MatTableDataSource<Block>(this.listBlock);
      this.dataSource.paginator = this.paginator;
      this.lengthBlock=this.listBlock.length

    })

    this.monotoringService.listTransaction().subscribe(data => {
      this.listTransaction = data.reverse();
      console.log(this.listTransaction);
      this.dataSource1 = new MatTableDataSource<Transaction>(this.listTransaction);
      this.dataSource1.paginator = this.paginator1;
      this.lengthTransaction=this.listTransaction.length
    })
  }

  open(content,row) {
    this.selectedBlock = row;
    console.log( 'this.selectedBlock');

    console.log( this.selectedBlock);
    this.modalService.open(content,{windowClass:'modaldialog'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

private getDismissReason(reason: any): string {
    this.selectedBlock = null;
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}
open1(content,row) {
  this.selectedTransaction = row;
  console.log( 'this.selectedTransaction');

  console.log( this.selectedTransaction);
  this.modalService.open(content,{windowClass:'modaldialog'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
}

