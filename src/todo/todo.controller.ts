import { Body, Controller, Get, Param, Post, ParseUUIDPipe, Put, Res, Delete } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { DeleteResult } from 'typeorm';

@Controller('todo')
export class TodoController {

  constructor(private todoService: TodoService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Todo> {
    return this.todoService.findOneById(id);
  }

  @Post()
  create(@Body() createTodoDto: TodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string, 
    @Body() updateTodoDto: TodoDto
    ) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<DeleteResult> {
    return this.todoService.delete(id);
  }

}
