import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartContractComponent } from './smart-contract.component';

const routes: Routes = [
    {
        path: '', component: SmartContractComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SmartContractRoutingModule {
}