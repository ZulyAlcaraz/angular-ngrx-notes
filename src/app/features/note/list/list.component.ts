import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import * as fromNote from '../store/note.reducer';
import { NoteStoreService } from '../store/note-store.service';

@Component({
    selector: 'app-notes-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject();
    list: fromNote.Note[];

    constructor(
        private readonly noteStoreService: NoteStoreService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.noteStoreService.loadNotes();
        this.noteStoreService
            .getList()
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(list => (this.list = list));
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    addNote(): void {
        this.router.navigate(['create']);
    }

    deleteNote(id: string): void {
        this.noteStoreService.deleteNote(id);
    }

    editNote(id: string): void {
        this.router.navigate(['edit', id]);
    }
}
