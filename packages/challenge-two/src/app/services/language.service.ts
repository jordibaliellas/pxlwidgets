import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private language: BehaviorSubject<string> = new BehaviorSubject(
    environment.defaultLanguage
  );

  constructor() {}

  getLanguageObservable() {
    return this.language;
  }

  getCurrentLanguage() {
    return this.language.value;
  }

  setLanguage(language: string) {
    this.language.next(language);
  }
}
