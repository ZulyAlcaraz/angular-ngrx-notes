import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home.component';
import { MainMenuModule } from 'src/app/shared/main-menu/main-menu.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        MainMenuModule
    ]
})
export class HomeModule { }
