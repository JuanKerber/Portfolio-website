
import { Component } from '@angular/core';
import {Cloudinary} from '@cloudinary/url-gen'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'teleport-project-template-angular';
  ngOnInit() {
    const cld = new Cloudinary({cloud: {cloudName: 'dxmqqhnjc'}});
  }
}

