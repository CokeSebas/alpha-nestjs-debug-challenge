import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectStatus } from './types/project-status';
import { Project } from './types/project';

@Injectable()
export class ProjectsService {
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

  findOne(id: string): Project | undefined {
    const project = this.projects.find((p) => p.id === id);
    return project;
  }

  create(dto: CreateProjectDto): Project {
    const project: Project = {
      id: String(this.projects.length + 1),
      name: dto.name,
      status: dto.status as ProjectStatus,
      budget: dto.budget,
      createdAt: new Date().toISOString(),
    };

    this.projects.push(project);
    return project;
  }

  update(id: string, dto: UpdateProjectDto): Project | undefined {
    const project = this.projects.find((p) => p.id === id);
    if (!project) {
      return undefined;
    }

    project.name = dto.name;
    project.status = dto.status as ProjectStatus;
    project.budget = dto.budget;

    return project;
  }

  remove(id: string): void {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
