import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="home" id="home">
    <div class="max-width">
      <div class="home-content">
          <div class="text-1">Hello,my name is</div>
          <div class="text-2">Aditya Gattu</div>
          <div class="text-3">And I'm a <span> Software developer</span> </div>
          <div class="text-4">Currently working as Intern in Presidio Cloud Solutions</div>
      </div>
    </div>
  </section>

  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
