import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, interval, switchMap, tap, timer} from 'rxjs';

@Component({
  selector: 'app-rxjx-example',
  templateUrl: './rxjx-example.component.html',
  styleUrls: ['./rxjx-example.component.scss']
})
export class RxjxExampleComponent {
  constructor(private http: HttpClient ,private fb : FormBuilder){}

  searchForm = this.fb.group({

    searchField:['']

  })
countries:any=[];
stock:any;

ans:any

  ngOnInit(){
    // this.searchForm.get('searchField')?.valueChanges.pipe(

    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   switchMap((val)=>this.search(val as string))
    // ).subscribe((value:any)=>{
    //   console.log(value)
    //   this.countries=value
    // })

  
    // this.searchForm.get('searchField')?.valueChanges.pipe(

       

    //   debounceTime(500),
    //   distinctUntilChanged(),
      
    //   switchMap((val)=>
    //   this.searchStock(val as string)),
      
      
     



    // ).subscribe((value:any)=>{console.log(value)

    //   this.stock=value['Global Quote'];
      
     
    //   console.log(this.stock['05. price'])

    //   this.ans=this.stock['05. price']

      

      
    
    // })

    // 30 sec
    this.searchForm.get('searchField')?.valueChanges.pipe(


      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val)=> timer(0,3000).pipe(switchMap((x)=>this.searchStock(val as string))))
      // to start the search stock immediatly we use timer
      // or we can use startsWith

       

      
      
     



    ).subscribe((value:any)=>{console.log(value)

      this.stock=value['Global Quote'];
      
     
      console.log(this.stock['05. price'])

      this.ans=this.stock['05. price']

      

      
    
    })

    

  }
  search(region:string){


    return this.http.get(`https://restcountries.com/v3.1/region/${region}`)
  }

 
  searchStock(cname : string){

    return this.http.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${cname}&apikey=WQCZB3XE5EAAC266`)
  }

//  stream2= this.searchForm.get('searchField')?.valueChanges.pipe(

  
//     debounceTime(500),
//     distinctUntilChanged(),
//     switchMap((val)=>this.searchStock(val as string))



//   ).subscribe((value:any)=>{console.log(value)

//     this.stock=value['Global Quote'];
    
   
//     console.log(this.stock['05. price']+" stream2")

//     this.ans=this.stock['05. price']

    
  
//   })


  
  

  
}
