import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { UploadComponent } from './upload/upload.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'qrcode', component: QRCodeComponent },
    { path: 'upload', component: UploadComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
