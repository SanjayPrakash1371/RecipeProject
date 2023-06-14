import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.scss']
})
export class FormsExampleComponent {

  // newForm= new FormGroup({

  //   username: new FormControl('',Validators.required),
  //   age:new FormControl('',[Validators.required, Validators.min(18),Validators.max(30)])

  // })

  // movieForm = new FormGroup({

  //   movieName : new FormControl('',Validators.required),
  //   poster : new FormControl('',Validators.required),
  //   rating : new FormControl('',[Validators.required, Validators.max(10)]),
  //   summary : new FormControl('',[Validators.required, Validators.minLength(10)])

  // })
  urlregex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  movieForm = this.fb.group({

    movieName : ['',Validators.required],
    poster : ['',[Validators.required,Validators.pattern(this.urlregex)]],
    rating : ['',[Validators.required, Validators.max(10),Validators.min(1)]],
    summary : ['',[Validators.required, Validators.minLength(10)]]

  })

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder) {}

  onSubmit(){

    // console.log(this.newForm.status);

    // console.log(this.newForm.get('username')?.value)
    // console.log(this.newForm.get('age')?.value)
    console.log(this.movieForm.status)

    if(this.movieForm.valid)
    {
      console.log(this.movieForm.value)
    }

    
    
  }
  get movieName(){

    return this.movieForm.get('movieName');
  }
  get poster(){

    return this.movieForm.get('poster');
  }
  get rating(){

    return this.movieForm.get('rating');
  }
  get summary(){

    return this.movieForm.get('summary');
  }

}
