import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
   items = [
    {
      "imageUrl":"https://tushar-ghone-2.s3.ap-south-1.amazonaws.com/WhatsApp%20Image%202023-07-14%20at%2012.03.12%20PM.jpeg",
      "level":"All Levels",
      "price":"4999",
      "title":"Money Making Trading Course",
      "joined":"23353",
      "noOfVideos":"99",
    },
    {
      "imageUrl":"https://tushar-ghone-2.s3.ap-south-1.amazonaws.com/oc.jpg",
      "level":"Experts",
      "price":"10999",
      "title":"Money Making Option Course",
      "joined":"2199",
      "noOfVideos":"40",
    },
    {
      "imageUrl":"https://tushar-ghone-2.s3.ap-south-1.amazonaws.com/EQUITY%202.jpg",
      "level":"All Levels",
      "price":"499",
      "title":"Equity Dealer Course",
      "joined":"1973",
      "noOfVideos":"73",
    }
   ]
}
