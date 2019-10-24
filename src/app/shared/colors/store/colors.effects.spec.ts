import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { ColorsEffects } from './colors.effects';

describe('ColorsEffects', () => {
  const actions$: Observable<any> = of([]);
  let effects: ColorsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ColorsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ColorsEffects>(ColorsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
