import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WordOptionsComponent } from './word-options/word-options.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    WordOptionsComponent,
  ],
  exports: [
    WordOptionsComponent
  ]
})
export class SharedModule { }
