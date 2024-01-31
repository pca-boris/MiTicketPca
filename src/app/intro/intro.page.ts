import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(public router:Router, private storage:Storage) { }

  public slides = [
    {
      title: "Arboles Noches",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/uno.jpeg",
      subtitle: "Lorem ipsum dolor sit amet"
    },
    {
      title: "Arboles secos",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/dos.jpeg",
      subtitle: "Lorem ipsum dolor sit amet"
    },
    {
      title: "Montoñas rocosas",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/tres.jpeg",
      subtitle: "Lorem ipsum dolor sit amet"
    },
    {
      title: "Nieve en pleno",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/cuatro.jpeg",
      subtitle: "Lorem ipsum dolor sit amet"
    },
    {
      title: "Agua viva",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/cinco.jpeg",
      subtitle: "Lorem ipsum dolor sit amet"
    }
  ];

  public goToHome(): void {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("Ya entre y vi la intro");
    this.storage.set("verIntro", true);
  }

}
