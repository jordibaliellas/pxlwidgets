import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickBackButton() {
    this.router.navigate(['/']);
  }
}
