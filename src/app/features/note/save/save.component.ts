import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { NoteStoreService } from '../store/note-store.service';

@Component({
    selector: 'app-save',
    templateUrl: './save.component.html',
    styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
    form: FormGroup;

    constructor(
        private readonly location: Location,
        private readonly noteStoreService: NoteStoreService
    ) {}

    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl('', Validators.required),
            content: new FormControl('', Validators.required),
            color: new FormControl('')
        });
    }

    cancel(): void {
        this.location.back();
    }

    addNote(): void {
        const id = Math.random().toString();
        const payload = { ...this.form.getRawValue(), id };
        console.log('payload', payload);
        this.noteStoreService.addNote(payload);
        this.cancel();
    }
}
