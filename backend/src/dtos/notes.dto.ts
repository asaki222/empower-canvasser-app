import { IsNotEmpty, IsString } from 'class-validator';


export class NoteDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    notes: string;

    @IsNotEmpty()
    @IsString()
    date: Date;

    @IsNotEmpty()
    @IsString()
    email: string;
  }