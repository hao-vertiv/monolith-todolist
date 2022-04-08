import { Injectable } from '@angular/core';

import { TodosRepository } from '../../core/repositories/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private readonly todosRepository: TodosRepository) { }

  public getTodos(pageNumber: number, limit: number) {
    const query = {
      _limit: limit,
      _start:  (pageNumber - 1) * limit,
    };
    const querystring = Object.entries(query)
      .filter(([key, value]) => !!value)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    return this.todosRepository.getTodos(`${querystring ? '?' : ''}${querystring}`);
  }
}
