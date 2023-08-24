import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-line',
  templateUrl: 'line.component.html',
  styleUrls: ['line.component.css'],
})
export class Line {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
