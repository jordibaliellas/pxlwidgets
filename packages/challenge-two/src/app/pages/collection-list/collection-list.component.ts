import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Column } from 'src/app/inferfaces/table.interface';
import { CollectionService } from 'src/app/services/collection.service';
import { LanguageService } from 'src/app/services/language.service';

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

  rows$: Observable<Record<string, any>[]>;

  limit = 10;
  page$ = new BehaviorSubject(0);
  total = 0;

  constructor(
    private collectionService: CollectionService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    const languageObservable = this.languageService.getLanguageObservable();
    this.rows$ = combineLatest([languageObservable, this.page$]).pipe(
      mergeMap(([language, page]) => {
        return this.collectionService.getCollection({ language, page });
      }),
      tap((res) => {
        this.total = res.count;
      }),
      map((res) => res.artObjects)
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
