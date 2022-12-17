import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatButtonModule,
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
