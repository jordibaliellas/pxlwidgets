import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, debounceTime, map, mergeMap, tap } from 'rxjs/operators';
import { InputForm } from 'src/app/inferfaces/filter.interface';
import { Column } from 'src/app/inferfaces/table.interface';
import { GeneralObject } from 'src/app/inferfaces/util.interface';
import { CollectionService } from 'src/app/services/collection.service';
import { FiltersService } from 'src/app/services/filters.service';
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

  filtersInfo: InputForm[] = [
    {
      key: 'q',
      label: 'Title:',
      placeholder: 'Title...',
    },
    {
      key: 'involvedMaker',
      label: 'Principal or first maker:',
      placeholder: 'Principal or first maker...',
    },
  ];

  rows$: Observable<Record<string, any>[]>;
  page$: Observable<number>;

  limit = 10;
  total = 0;
  isLoading = false;

  constructor(
    private collectionService: CollectionService,
    private languageService: LanguageService,
    private filtersService: FiltersService,
    private router: Router
  ) {}

  ngOnInit() {
    const languageObservable$ = this.languageService.getLanguageObservable();
    const filtersObservable$ = this.filtersService.getFiltersObservable();
    this.page$ = filtersObservable$.pipe(map((filters) => filters.p));
    this.rows$ = combineLatest([languageObservable$, filtersObservable$]).pipe(
      debounceTime(1000),
      tap(() => {
        nextTick(() => {
          this.isLoading = true;
        });
      }),
      mergeMap(([language, query]) => {
        return this.collectionService.getCollection({
          language,
          query,
        });
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

  onClickRow(row: GeneralObject) {
    const objectNumber = row.objectNumber;
    this.router.navigate([`/${objectNumber}`]);
  }

  onClickPage(page: number) {
    const currentFilters = this.filtersService.getCurrentFilters();
    currentFilters['p'] = page;
    this.filtersService.setFilters(currentFilters);
  }
}
