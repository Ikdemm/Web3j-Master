import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
    {
        path: '', component: TransactionComponent,
    },
    {
        path: 'wallet', component:WalletComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TransactionRoutingModule {
}
