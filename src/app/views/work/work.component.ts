import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { Project } from '../../services';
import { projectsList } from '../../../data/projects';

const names: string[] = ['blarge', 'blach', 'blase', 'blaze', 'blush', 'blar', 'bla?'];

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})
export class WorkComponent implements OnInit, OnDestroy {
  projects: Project[] = projectsList;

  @ViewChild('container') container : ElementRef;

  parallax: number = 0;
  scrollEl: number = 0;

  animatedText: string = names[0];
  interval: any;

  scrolledBottom: number = 0;

  constructor(private title: Title) { }

  ngOnInit(): void {
    let activeName: number = 1;
    this.title.setTitle( 'Blaz Verhnjak - WORK' );

    this.interval = setInterval(() => {
      this.animatedText = names[activeName];
      activeName++;

      if (activeName === names.length) {
        activeName = 0;
      }
    }, 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  onScroll(event): void {
    this.parallax = event.target.scrollLeft;
  }

  test(e): void {
    if (window.innerWidth <= 1024) {
      return;
    }
    
    const offset: number = 500;

    e.preventDefault();
    e.stopPropagation();
    
    if (
      e.deltaY < 0 && this.scrollEl < -offset || 
      e.deltaY > 0 && this.scrollEl > this.container.nativeElement.offsetWidth + offset) {
      return;
    }
    // - :: down

    // + :: up
    this.parallax += e.deltaY / 2;
    this.scrollEl += e.deltaY;
    
  }
}
