import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './tansaction-routing.module';
import {NgbModule,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { WalletComponent } from './wallet/wallet.component';




@NgModule({
  imports: [
    CommonModule,
    TransactionRoutingModule,
    NgbModule.forRoot(),
    FlashMessagesModule.forRoot(),
    FormsModule
  ],
  declarations: [TransactionComponent, WalletComponent],
  providers: [FlashMessagesService,NgbActiveModal],

})
export class TransactionModule { }
