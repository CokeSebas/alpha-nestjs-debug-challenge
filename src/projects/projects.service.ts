import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectStatus } from './types/project-status';
import { ProjectValidationService } from './project-validation.service';
import { Project } from './types/project';

@Injectable()
export class ProjectsService {

  constructor(
    private readonly validationService: ProjectValidationService,
  ) {}

  private projects: Project[] = [
    {
      id: '1',
      name: 'Alpha Platform',
      status: ProjectStatus.ACTIVE,
      budget: 50000,
      createdAt: new Date('2024-01-15T10:00:00.000Z').toISOString(),
    },
    {
      id: '2',
      name: 'Beta Integration',
      status: ProjectStatus.PLANNED,
      budget: 25000,
      createdAt: new Date('2024-02-01T14:30:00.000Z').toISOString(),
    },
  ];

  findAll(): Project[] {
    return this.projects;
  }

  findOne(id: string): Project {
    const project = this.projects.find((p) => p.id === id);
    if (!project) {
      throw new NotFoundException(`Projecto con el id ${id} no fue encontrado`);
    }
    return project;
  }

  create(dto: CreateProjectDto): Project {
    this.validationService.validateCreate(dto);
    const project: Project = {
      id: String(this.projects.length + 1),
      name: dto.name,
      status: dto.status.toUpperCase() as ProjectStatus,
      budget: dto.budget,
      createdAt: new Date().toISOString(),
    };

    this.projects.push(project);

    return project;
  }

  update(id: string, dto: UpdateProjectDto): Project {
    const project = this.projects.find((p) => p.id === id);

    if (!project) {
      throw new NotFoundException(`Projecto con el id ${id} no fue encontrado`);
    }

    this.validationService.validateUpdate(dto);

    if (dto.name !== undefined) {
      project.name = dto.name;
    }

    if (dto.status !== undefined) {
      project.status = dto.status.toUpperCase() as ProjectStatus;
    }

    if (dto.budget !== undefined) {
      project.budget = dto.budget;
    }

    return project;
  }

  remove(id: string): void {
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Projecto con el id ${id} no fue encontrado`);
    }
    this.projects.splice(index, 1);
  }
}
