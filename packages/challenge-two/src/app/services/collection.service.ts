import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GeneralObject } from '../inferfaces/util.interface';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private collectionPath = 'collection';

  constructor(private http: HttpClient) {}

  getCollection(language: string): Observable<GeneralObject> {
    const url = `${environment.rijksmuseumApi}/${language}/${this.collectionPath}`;
    return this.http.get<GeneralObject>(url);
  }
}
