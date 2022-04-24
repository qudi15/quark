import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsComponent } from './models.component';

import { ModelsRoutingModule } from './models-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@NgModule({
  declarations: [ModelsComponent],
  imports: [
    CommonModule,
    ModelsRoutingModule,
    NzTableModule,
    NzFormModule,
    NzDividerModule,
    NzRadioModule,
    NzSwitchModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ModelsModule {}
