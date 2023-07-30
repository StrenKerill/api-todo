import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { NoteDto } from './dto/note.dto'
import { NoteService } from './note.service'

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get('')
  async getAll() {
    return this.noteService.getAll()
  }

  @Post('')
  async createNote(@Body() dto: NoteDto) {
    return this.noteService.createNote(dto)
  }

  @Delete('/:id')
  async deleteNote(@Param('id') id: string) {
    return this.noteService.deleteNote(+id)
  }
}
