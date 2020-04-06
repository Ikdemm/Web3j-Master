import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartContractComponent } from './smart-contract.component';
import { SmartContractRoutingModule } from './smart-contract-routing.module';
import {NgbModule,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';;


@NgModule({
  imports: [
    CommonModule,
    SmartContractRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    FlashMessagesModule.forRoot(),
  ],
  declarations: [SmartContractComponent]
})
export class SmartContractModule { }
