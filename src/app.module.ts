import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NoteModule } from './note/note.module'
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ConfigModule.forRoot(), NoteModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
