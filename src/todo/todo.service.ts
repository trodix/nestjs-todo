import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {

  constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {}

  create(todo: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.save(todo)
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOneById(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

}
