import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material.module';
import { MainMenuModule } from 'src/app/shared/main-menu/main-menu.module';

describe('HomeComponent', () => {
    let spectator: Spectator<HomeComponent>;
    const createComponent = createComponentFactory({
        component: HomeComponent,
        imports: [
            RouterTestingModule,
            MaterialModule,
            MainMenuModule
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
