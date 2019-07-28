import { Injectable } from '@angular/core';
import { projectsList } from '../../data/projects';
import { Project } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getProject(id: string): Project {
    return projectsList.find((project: Project) => project.id === Number(id));
  }
}
