import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';
import { Response } from 'express';

@Controller('todo')
export class TodoController {

  constructor(private todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: uuid, @Res() response: Response) {
    const result: any = this.todoService.findOneById(id);
    if (result) {
      return result;
    }
    return response.status(404).send();
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    this.todoService.create(createTodoDto);
  }

}
