import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss'],
})
export class MoviecardComponent {
  @Input() movie = {
    id: '99',
    name: 'Vikram',

    poster:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',

    rating: 8.4,

    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
    like: 0,
    dislike: 0,

    toggle: true,

    trailer: 'https://www.youtube.com/embed/OKBMCL-frPU',
  };

  @Output() delete = new EventEmitter<string>();
  constructor(private router: Router) {}

  show = true;
  toggle() {
    this.show = !this.show;
  }

  delMovie(id: string) {
    console.log('Emitting');

    this.delete.emit(id);
  }
  details(id: string) {
    this.router.navigate([`/movies/${id}`]);
  }
  edit(id: string) {
    this.router.navigate([`/edit/${id}`]);
  }
}
