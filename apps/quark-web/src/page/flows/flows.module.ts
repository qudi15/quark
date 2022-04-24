import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowsRoutingModule } from './flows-routing.module';

import { FormsModule } from '@angular/forms';

import { FlowsComponent } from './flows.component';

@NgModule({
  declarations: [FlowsComponent],
  imports: [CommonModule, FlowsRoutingModule, FormsModule],
})
export class FlowsModule {}
