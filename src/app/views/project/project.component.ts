import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';

import { Link } from '../../components/menu/menu.component';
import { Project, MediaType } from '../../services';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  project: Project;

  mediaType: typeof MediaType = MediaType;

  backLink: Link = {
    title: 'back to work',
    route: '/work',
  }

  constructor(
    private route: ActivatedRoute, 
    private service: ProjectsService, 
    private domSanitizer: DomSanitizer,
    private title: Title) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params.id;

    this.project = this.service.getProject(id);
    this.title.setTitle( 'Blaz Verhnjak - WORK' );
  }

  safeUrl(videoId: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1")
  }
}
