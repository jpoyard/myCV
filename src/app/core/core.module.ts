import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguageSelectComponent } from './components/language-select/language-select.component';



@NgModule({
  declarations: [
    LanguageSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LanguageSelectComponent
  ]
})
export class CoreModule { }
