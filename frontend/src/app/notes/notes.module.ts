import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ListComponent } from './list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { NotesGraphqlFacade } from './graphql/notes.graphql.facade';

@NgModule({
  declarations: [HeaderComponent, FormComponent, ListComponent],
  exports: [HeaderComponent, ListComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [NotesGraphqlFacade]
})
export class NotesModule {}
