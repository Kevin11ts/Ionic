import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.page.html',
  styleUrls: ['./toolbars.page.scss'],
  standalone: false,
})
export class ToolbarsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
