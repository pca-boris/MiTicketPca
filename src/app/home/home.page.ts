import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _storage: Storage | null = null;

  event_list:any[] = [];

  constructor(
    private router:Router, 
    private storage:Storage,
    private eventsService:EventsService
  ) { }

  ionViewDidEnter() {
    this.eventsService.getEvents().then((res:any) => {
      this.event_list = res;
      console.log(this.event_list);
    })
    
  }

  public goToAbout(): void {
    console.log('Go to intro');
    this.router.navigateByUrl('/intro');
    this.storage.set("mostreLaIntro", true);
  }
}
