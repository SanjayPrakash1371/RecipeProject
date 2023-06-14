import { Component } from '@angular/core';

class Task{
  id:number=0;
  text:string='';
  check:boolean=false;
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  task: string=''
  todoList:Task[]=[];
 // id=0;
  check=false;
  add()
  {
    let t:Task={id:this.todoList.length,text:this.task,check:this.check}
    this.todoList.push(t)
   // this.id++;
    console.log(this.todoList)
    // this.todoList.push(id,this.task);

  }
  del(task:Task)
  {
    let ind= this.todoList.indexOf(task);
    this.todoList.splice(ind,1);

  }
  strike(t:Task){
     t.check=!t.check;

    // this.todoList.filter((td)=>td.id===t.id)[0].check=!t.check

    // console.log(this.todoList);

  }
 
  isEdited:boolean=false
  editedId=-1;
  edit(t:Task){
    this.task=t.text;
    this.editedId=t.id
    this.isEdited=true;

  }
  addEdited(){

    this.isEdited=false;
    this.todoList.filter((ts)=>ts.id===this.editedId)[0].text=this.task;
   this.editedId=-1;

  }
  
  
  // edit
  // delete

  // movies 
  // add movies
  // delete movies

}
