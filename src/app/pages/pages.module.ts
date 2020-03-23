import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({

    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
        NopagefoundComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})
export class PagesModule {}