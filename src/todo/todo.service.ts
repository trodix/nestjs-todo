import { Injectable } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './todo.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {

  constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {}

  create(todo: TodoDto): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  update(id: string, todo: TodoDto): Promise<UpdateResult> {
    return this.todoRepository.update(id, todo);
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOneById(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.todoRepository.delete(id);
  }

}
