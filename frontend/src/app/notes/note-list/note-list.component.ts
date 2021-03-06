import { NotesStateService } from '../state/notes-state.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../../../generated/graphql';

@Component({
  selector: 'app-note-list',
  template: `
    <h3 class="border-dark border-bottom">Notes</h3>
    <app-note
      class="mb-2"
      *ngFor="let note of notes$ | async"
      [note]="note"
      (delete)="onDelete($event)"
    >
    </app-note>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteListComponent {
  notes$: Observable<Note[]>;

  constructor(private notesState: NotesStateService) {
    this.notes$ = notesState.notes$;
  }

  onDelete(note: Note) {
    this.notesState.deleteNote(note.id).subscribe();
  }
}
