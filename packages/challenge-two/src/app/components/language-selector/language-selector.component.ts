import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { nextTick } from 'src/app/utils/next-tick';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  languages = ['NL', 'EN'];
  languageSelected: number;

  constructor(private languageService: LanguageService) {
    const currentLanguage = this.languageService.getCurrentLanguage();
    const languageIndex = this.languages.indexOf(currentLanguage.toUpperCase());
    nextTick(() => {
      this.languageSelected = languageIndex;
    });
  }

  ngOnInit(): void {}

  onLanguageChanged(index: number) {
    this.languageSelected = index;
    const language = this.languages[index].toLowerCase();
    this.languageService.setLanguage(language);
  }
}
