import { ProjectStatus } from './project-status';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  budget: number;
  createdAt: string;
}
