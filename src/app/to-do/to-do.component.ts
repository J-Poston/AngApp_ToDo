import { Component, Input } from '@angular/core';
import { Todo } from './interfaces/Todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  @Input() taskName = "";
  
  ToDoList : Todo[] = [
      {task:"Finish project!", completed:false},
      {task:"Go grocery shopping", completed:true},
      {task:"Do laundry", completed:false},
      {task:"Make dinner", completed:true},
      {task:"Walk the dogs", completed:true},
      {task:"Vacuum the house", completed:false},
      {task:"Fix broken thing", completed:false},
    ];

    AddTask():void{
        this.ToDoList.push({task: this.taskName, completed:false});
    }

    CompleteTask():void{
      
    }
  }
