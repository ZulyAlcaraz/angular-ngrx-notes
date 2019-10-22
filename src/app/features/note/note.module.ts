import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import * as fromNote from './store/note.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from './store/note.effects';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNote.noteFeatureKey, fromNote.reducer),
    EffectsModule.forFeature([NoteEffects])
  ]
})
export class NoteModule {}
