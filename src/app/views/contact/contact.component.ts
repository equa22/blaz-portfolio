import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle( 'Blaz Verhnjak - CONTACT' );
  }
}
