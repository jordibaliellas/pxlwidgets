import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { GeneralObject } from 'src/app/inferfaces/util.interface';
import { CollectionService } from 'src/app/services/collection.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss'],
})
export class CollectionDetailComponent implements OnInit {
  collectionInfo$: Observable<GeneralObject>;

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    const collectionId = this.route.snapshot.params.id;
    const languageObservable$ = this.languageService.getLanguageObservable();
    this.collectionInfo$ = languageObservable$.pipe(
      mergeMap((language: string) =>
        this.collectionService.getCollectionById(collectionId, language)
      ),
      catchError((err) => {
        console.error('We had some error getting collection');
        console.error(err);
        return of({});
      })
    );
  }
}
