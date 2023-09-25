import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor() { }
   items  = [
    {
      "title":"Learn Indepth Concepts",
       "description":"Learn in-depth concepts from basics to advance. You will learn to analyse the stock market and trade independently.",
       "imageUrl":"https://tusharghone.com/assets/images/section-img/service/1.png",
    },
    {
      "title":"Live Weekly Sessions",
       "description":"As a course student or member of our gold-silver plan you will get live sessions with an expert trader and learn new trading concepts.",
       "imageUrl":"https://tusharghone.com/assets/images/section-img/service/2.png",
    },
    {
      "title":"Free Scanners",
       "description":"Scanner are a boon for traders. You get scanners with our course which will help you to trade even in your busy schedule.",
       "imageUrl":"https://tusharghone.com/assets/images/section-img/service/3.png",
    },
    {
      "title":"Quiz After Every Chapter",
       "description":"You get a quiz after every chapter to know your capacity of understanding.nWe help you revise what you have learn so far",
       "imageUrl":"https://tusharghone.com/assets/images/section-img/service/4.png",
    },
    {
      "title":"Study Material",
       "description":"You will get a study material through which you can revise what you have learnt anytime anywhere without any net connection.",
       "imageUrl":"https://tusharghone.com/assets/images/section-img/service/5.png",
    },
    {
      "title":"Trade Analysis",
       "description":"We also provide trade analysis for educational purpose on our telegram channel you can watch it and understand our basis of trade",
       "imageUrl":"https://tusharghone.com/assets/images/section-img/service/6.png",
    },
   ]
  ngOnInit(): void {
  }
}
