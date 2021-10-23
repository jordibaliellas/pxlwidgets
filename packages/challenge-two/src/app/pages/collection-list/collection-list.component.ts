import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { InputForm } from 'src/app/inferfaces/filter.interface';
import { Column } from 'src/app/inferfaces/table.interface';
import { CollectionService } from 'src/app/services/collection.service';
import { LanguageService } from 'src/app/services/language.service';
import { nextTick } from 'src/app/utils/next-tick';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss'],
})
export class CollectionListComponent implements OnInit {
  columns: Column[] = [
    {
      key: 'objectNumber',
      label: 'Object number',
    },
    {
      key: 'title',
      label: 'Title',
    },
    {
      key: 'principalOrFirstMaker',
      label: 'Principal or first maker',
    },
  ];

  filters: InputForm[] = [
    {
      key: 'objectNumber',
      label: 'Object number:',
      placeholder: 'Object number...',
    },
    {
      key: 'title',
      label: 'Title:',
      placeholder: 'Title...',
    },
    {
      key: 'principalOrFirstMaker',
      label: 'Principal or first maker:',
      placeholder: 'Principal or first maker...',
    },
  ];

  rows$: Observable<Record<string, any>[]>;

  limit = 10;
  page$ = new BehaviorSubject(1);
  total = 0;
  isLoading = false;

  constructor(
    private collectionService: CollectionService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    const languageObservable = this.languageService.getLanguageObservable();
    this.rows$ = combineLatest([languageObservable, this.page$]).pipe(
      tap(() => {
        nextTick(() => {
          this.isLoading = true;
        });
      }),
      mergeMap(([language, page]) => {
        return this.collectionService.getCollection({ language, page });
      }),
      tap((res) => {
        this.total = res.count;
      }),
      map((res) => res.artObjects),
      tap(() => {
        nextTick(() => {
          this.isLoading = false;
        });
      }),
      catchError((err) => {
        console.error('We had some error getting collection');
        console.error(err);
        nextTick(() => {
          this.isLoading = false;
        });
        return of([]);
      })
    );
  }

  onClickRow(event: any) {
    console.log('EVEEENT: ', event);
    // TODO: GO TO DETAIL
  }

  onClickPage(page: number) {
    this.page$.next(page);
  }
}
