import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private collectionPath = 'collection';

  constructor(private http: HttpClient) {}

  getCollection(language: string) {
    const url = `${environment.rijksmuseumApi}/${language}/${this.collectionPath}`;
    return this.http.get(url);
  }
}
