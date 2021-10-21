import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Collection, CollectionQuery } from '../inferfaces/collection.inteface';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private collectionPath = 'collection';

  constructor(private http: HttpClient) {}

  getCollection({ language, page }: CollectionQuery): Observable<Collection> {
    const url = `${environment.rijksmuseumApi}/${language}/${this.collectionPath}`;
    const params = new HttpParams().set('p', page);
    return this.http.get<Collection>(url, { params });
  }
}
