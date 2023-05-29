import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../services/app.service';
import { NotesModule } from './notes.module';
import { DatabaseModule } from '../database/database.module';


@Module({
  imports: [DatabaseModule, NotesModule],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
