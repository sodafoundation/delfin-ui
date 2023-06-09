import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelfinResolver } from './business/delfin/delfin-resolver.service';
import { DelfinService } from './business/delfin/delfin.service';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'help', loadChildren: './business/help/help.module#HelpModule'},
    {path: 'resource-monitor', loadChildren: './business/delfin/delfin.module#DelfinModule',
        resolve: {
            storages: DelfinResolver
        }
    },
    {path: 'performance-monitor', loadChildren: './business/delfin/performance-monitor/performance-monitor.module#PerformanceMonitorModule'},
    {path: 'registerStorage', loadChildren: './business/delfin/register-storage/register-storage.module#RegisterStorageModule'},
    {path: 'storageDetails/:storageId', loadChildren: './business/delfin/storage-details/storage-details.module#StorageDetailsModule'},
    {path: 'modifyStorage/:storageId', loadChildren: './business/delfin/modify-storage/modify-storage.module#ModifyStorageModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        DelfinService,
        DelfinResolver
    ]
})
export class AppRoutingModule {}
