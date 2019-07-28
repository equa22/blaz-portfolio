import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/services';

@Component({
  selector: 'app-project-teaser',
  templateUrl: './project-teaser.component.html',
  styleUrls: ['./project-teaser.component.less']
})
export class ProjectTeaserComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
