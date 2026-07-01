import { BadRequestException, Injectable } from '@nestjs/common';
import { ProjectStatus } from './types/project-status';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectValidationService {

  validateCreate(dto: CreateProjectDto): void {

    if (!dto.name) {
      throw new BadRequestException('Name es requerido');
    }

    if (dto.name.trim().length < 3) {
      throw new BadRequestException('Name debe contener al menos 3 caracteres');
    }

    if (!Object.values(ProjectStatus).includes(dto.status.toUpperCase() as ProjectStatus)) {
      throw new BadRequestException('Status inválido');
    }

    if (typeof dto.budget !== 'number' || dto.budget < 0) {
      throw new BadRequestException('Budget debe ser un número mayor o igual a 0');
    }
  }

  validateUpdate(dto: UpdateProjectDto): void {

    if (dto.name !== undefined && dto.name.trim().length < 3) {
      throw new BadRequestException('Name debe contener al menos 3 caracteres');
    }

    if (
      dto.status !== undefined &&
      !Object.values(ProjectStatus).includes(dto.status.toUpperCase() as ProjectStatus)
    ) {
      throw new BadRequestException('Status inválido');
    }

    if (
      dto.budget !== undefined &&
      (typeof dto.budget !== 'number' || dto.budget < 0)
    ) {
      throw new BadRequestException('Budget debe ser un número mayor o igual a 0');
    }
  }
}