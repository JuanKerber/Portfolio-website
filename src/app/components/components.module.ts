import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Line } from './line/line.component'

@NgModule({
  declarations: [Line],
  imports: [CommonModule, RouterModule],
  exports: [Line],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
