import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { ListComponent } from './list.component';
import { NoteStoreService } from '../store/note-store.service';
import { MaterialModule } from 'src/app/material.module';

describe('ListComponent', () => {
    let spectator: Spectator<ListComponent>;
    const createComponent = createComponentFactory({
        component: ListComponent,
        mocks: [Router],
        providers: [
            {
                provide: NoteStoreService,
                useValue: {
                    getList: () => of([]),
                    loadNotes: () => {}
                }
            }
        ],
        imports: [MaterialModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
