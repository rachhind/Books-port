import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book.component';
import { IonicModule } from '@ionic/angular'; 

@NgModule({
  declarations: [AddBookComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [AddBookComponent]
})
export class AddBookModule {}