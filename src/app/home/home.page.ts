import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public slides = [
    {
      title: "Arboles Noches",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/uno.jpeg"
    },
    {
      title: "Arboles secos",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/dos.jpeg"
    },
    {
      title: "Montoñas rocosas",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/tres.jpeg"
    },
    {
      title: "Nieve en pleno",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/cuatro.jpeg"
    },
    {
      title: "Agua viva",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint.",
      img: "../../assets/img/cinco.jpeg"
    }
  ]

  constructor() {}

}
