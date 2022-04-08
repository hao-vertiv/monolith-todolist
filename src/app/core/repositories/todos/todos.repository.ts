import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICreateTodo, ITodo, IUpdateTodo } from './todos';

@Injectable({
  providedIn: 'root',
})
export class TodosRepository {
  private readonly apiUrl = '/api/todos';

  constructor(private readonly http: HttpClient) {}

  public getTodos(querystring?: string) {
    const url = `${this.apiUrl}${querystring || ''}`;
    return this.http.get<ITodo[]>(url);
  }

  public getTodo(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ITodo>(url);
  }

  public createTodo(todo: ICreateTodo) {
    return this.http.post<ITodo>(this.apiUrl, todo);
  }

  public updateTodo(id: string, todo: IUpdateTodo) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<ITodo>(url, todo);
  }

  public deleteTodo(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
