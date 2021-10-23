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

  getCollection({ language, query }: CollectionQuery): Observable<Collection> {
    const url = `${environment.rijksmuseumApi}/${language}/${this.collectionPath}`;

    let params = new HttpParams();

    Object.entries(query).forEach(([key, value]) => {
      params = params.set(key, value);
    });

    return this.http.get<Collection>(url, { params });
  }

  getCollectionById(id: string, language: string) {
    const url = `${environment.rijksmuseumApi}/${language}/${this.collectionPath}/${id}`;

    return this.http.get<Collection>(url);
  }
}
