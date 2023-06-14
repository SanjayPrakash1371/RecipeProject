import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent {

  @Input() movie={
    "name": "Vikram",
  
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",

    "rating": 8.4,

    "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
    "like":0,
    "dislike":0,

    "toggle":true
  }

  show=true;
  toggle(){
    this.show=!this.show
    
  }

}
