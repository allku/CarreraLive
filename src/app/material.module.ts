import { NgModule } from "@angular/core"
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatInputModule, 
  MatTableModule,
  MatSortModule,
  MatButtonModule
]

@NgModule({
  imports: modules,
  exports: modules
})

export class MaterialModule {}