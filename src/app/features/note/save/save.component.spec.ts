import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { SaveComponent } from './save.component';
import { NoteStoreService } from '../store/note-store.service';
import { MaterialModule } from 'src/app/material.module';
import { ColorsComponent } from 'src/app/shared/colors/colors.component';
import { MockComponent} from 'ng-mocks';

describe('SaveComponent', () => {
    let spectator: Spectator<SaveComponent>;
    const createComponent = createComponentFactory({
        component: SaveComponent,
        mocks: [NoteStoreService],
        providers: [
            Location,
            {
                provide: ActivatedRoute,
                useValue: {
                    params: of([])
                }
            },
            {
                provide: NoteStoreService,
                useValue: {
                    getNote: (id: string) => of({ id })
                }
            }
        ],
        declarations: [MockComponent(ColorsComponent)],
        imports: [MaterialModule, ReactiveFormsModule, RouterTestingModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
