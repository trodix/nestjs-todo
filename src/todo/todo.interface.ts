import { v4 as uuid } from 'uuid';

export interface Todo {
  id: uuid
  title: string,
  completed: boolean
}
