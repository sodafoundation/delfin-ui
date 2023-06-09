import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ModifyStorageComponent } from './modify-storage.component';
import { HttpService } from '../../../shared/api';
import { DelfinService } from '../delfin.service';

let routers = [{
  path: '',
  component: ModifyStorageComponent
}]

@NgModule({
  imports: [
    RouterModule.forChild(routers),
    SharedModule
  ],
  declarations: [ ModifyStorageComponent ],
  providers: [
    HttpService,
    DelfinService
  ]
})
export class ModifyStorageModule { }
