import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';

import {
    ColorsActionTypes,
    LoadColorsSuccess,
    LoadColorsFailure,
    LoadColors
} from './colors.actions';

@Injectable()
export class ColorsEffects {
    constructor(private actions$: Actions, private readonly http: HttpClient) {}

    @Effect()
    loadColors$ = this.actions$.pipe(
        ofType<LoadColors>(ColorsActionTypes.LoadColors),
        switchMap(() => this.getColors())
    );

    getColors() {
        return this.http
            .get<{ colors: any }>('http://www.colr.org/json/colors/random/7')
            .pipe(
                map(response => response.colors.filter(i => !!i.hex).map(i => `#${i.hex}`)),
                map(colors => new LoadColorsSuccess(colors)),
                catchError(err => of(new LoadColorsFailure()))
            );
    }
}
