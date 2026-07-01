import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { ProjectValidationService } from './project-validation.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectValidationService],
})
export class ProjectsModule {}
