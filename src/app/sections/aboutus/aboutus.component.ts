import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  items = [
    {
      "title":"More affordable cost",
      "hidden":"We challenge you to find a course with all these benefits at such a reasonable price. We bet you can't."
    },
    {
      "title":"Experienced mentor",
      "hidden":"Our Mentors have an experience of more than 10 years in the Stock Market. Learn from the experts to be an expert."
    },
    {
      "title":"More advanced class",
      "hidden":"Get live sessions, recorded videos, as well as trade analysis during market hours all this is our flagship courses at a reasonable cost."
    },
    {
      "title":"Free extra class",
      "hidden":"Extra live classes absolutely free with our flagship courses for 3 months."
    },
  ]


}
