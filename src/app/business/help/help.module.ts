import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { HelpComponent } from './help.component';
import { HttpService } from './../../shared/service/Http.service';
import { HelpHomeComponent } from './home/home-section.component';
import { HelpMonitorComponent } from './monitor/monitor-section.component';
import { HelpFaqComponent } from './faq/faq-section.component';

let routers = [
{
  path: '',
  component: HelpComponent
}]

@NgModule({
  declarations: [
    HelpComponent,
    HelpHomeComponent,
    HelpMonitorComponent,
    HelpFaqComponent,
  ],
  imports: [
    RouterModule.forChild(routers),
    SharedModule
  ],
  providers: [HttpService,]
})
export class HelpModule { }
