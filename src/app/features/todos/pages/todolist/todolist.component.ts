import { Component, OnInit } from '@angular/core';

import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor(private readonly todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos(2, 50).subscribe({
      next: (todos) => {
        console.log(todos);
      },
    });
  }

}
