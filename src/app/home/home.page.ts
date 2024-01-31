import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _storage: Storage | null = null;

  constructor(private router:Router, private storage:Storage ) { }

  public goToAbout(): void {
    console.log('Go to intro');
    this.router.navigateByUrl('/intro');
    this.storage.set("mostreLaIntro", true);
  }
}
