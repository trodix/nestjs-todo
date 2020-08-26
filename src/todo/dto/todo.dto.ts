import { IsBoolean, IsNotEmpty } from 'class-validator';

export class TodoDto {

  @IsNotEmpty()
  title: string;

  @IsBoolean()
  completed: boolean;
}