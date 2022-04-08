export interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export type ICreateTodo = Omit<ITodo, 'id'>;
export type IUpdateTodo = Partial<Pick<ITodo, 'title'|'completed'>>;
