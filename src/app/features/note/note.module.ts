import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import * as fromNote from './store/note.reducer';
import { NoteEffects } from './store/note.effects';
import { NoteRoutingModule } from './note-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SaveComponent } from './save/save.component';
import { ColorsModule } from 'src/app/shared/colors/colors.module';


@NgModule({
    declarations: [ListComponent, SaveComponent],
    imports: [
        CommonModule,
        NoteRoutingModule,
        MaterialModule,
        StoreModule.forFeature(fromNote.noteFeatureKey, fromNote.reducer),
        EffectsModule.forFeature([NoteEffects]),
        ReactiveFormsModule,
        ColorsModule
    ]
})
export class NoteModule {}
