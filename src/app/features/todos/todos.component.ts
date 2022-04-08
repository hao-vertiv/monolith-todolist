import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private readonly todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos(2, 50).subscribe({
      next: (todos) => {
        console.log(todos);
      },
    });
  }

}
