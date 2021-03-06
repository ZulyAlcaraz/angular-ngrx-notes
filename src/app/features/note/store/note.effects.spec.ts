import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { NoteEffects } from './note.effects';

describe('NoteEffects', () => {
  const actions$: Observable<any> = of([]);
  let effects: NoteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<NoteEffects>(NoteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
