import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-movie-items',
  templateUrl: './movie-items.component.html',
  styleUrls: ['./movie-items.component.scss']
})
export class MovieItemsComponent {

  movies=[];

  constructor(private http:HttpClient){}

  movies$:any;

  ngOnInit(){

    // this.http.get('https://648a951717f1536d65e94e9e.mockapi.io/movies').subscribe((val:any)=>{

    // this.movies=val;
    //   console.log(val);
    // })
    this.movies$=this.getMovies();

   
  }

  getMovies(){

    return  this.http.get('https://648a951717f1536d65e94e9e.mockapi.io/movies').pipe(

    catchError((err)=>{
      console.log(err)

      return []
    })
    )
  }

  deleteMovie(){
    
  }

}
