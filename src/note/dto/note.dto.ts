import { IsNumber, IsOptional, IsString } from 'class-validator'

export class NoteDto {
  @IsString()
  header: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsNumber()
  categoryId: number
}
