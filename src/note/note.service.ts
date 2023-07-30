import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { NoteDto } from './dto/note.dto'

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.note.findMany()
  }

  async createNote(dto: NoteDto) {
    const note = await this.prisma.note.create({
      data: {
        header: dto.header,
        description: dto.description,
        dateCreate: new Date(),
        userId: 1,
        categoryId: dto.categoryId,
      },
    })

    return note
  }

  async updateNote(dto: NoteDto) {}

  async deleteNote(id: number) {
    return await this.prisma.note.delete({ where: { id } })
  }
}
