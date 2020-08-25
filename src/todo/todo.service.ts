import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {

  private readonly todos: Todo[] = [
    {
      id: uuid(),
      title: 'Faire les courses',
      completed: true
    }
  ]

  create(todo: CreateTodoDto) {

    const todoToCreate = {
      id: uuid(),
      ...todo
    };

    this.todos.push(todoToCreate);
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOneById(uuid: uuid): Todo {
    return this.todos.find(todo => todo.id === uuid.id /** uuid.id => convert uuid to string */);
  }


}
