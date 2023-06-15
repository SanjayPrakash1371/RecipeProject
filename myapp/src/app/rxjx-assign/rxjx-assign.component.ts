import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { combineLatest, debounceTime, distinctUntilChanged, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-rxjx-assign',
  templateUrl: './rxjx-assign.component.html',
  styleUrls: ['./rxjx-assign.component.scss']
})
export class RxjxAssignComponent {

  

 searchForm =this.fb.group({

    searchField1:['',[Validators.required]],

    searchField2:['',[Validators.required]]

  });

  ans=[];

  

  constructor(private http:HttpClient,private fb:FormBuilder){}

  ngOnInit(){

   const countryLatest= this.searchForm.get('searchField1')?.valueChanges

   const topic = this.searchForm.get('searchField2')?.valueChanges
    
    
    if(countryLatest && topic)
    {
      combineLatest({countryLatest,topic}).pipe(switchMap((val1:any,val2:any)=>this.search(val1 as string,val2 as string))).subscribe(
        (val : any)=>{this.ans=val

        console.log(val)
        }
      )
    }
  }

  

  

  

  

  search(region:string,topic:string){

    // return this.http.get(`https://restcountries.com/v3.1/region/${region}`)

    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${region}&category=${topic}&apiKey=57045ba4215141b985c7bb31e2557adc`)

  }

 

}
