import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Note } from '../../../generated/graphql';

@Component({
  selector: 'app-note-component',
  template: `
    <div class="d-flex justify-content-between border-bottom">
      <div>
        <span class="m-0 font-weight-bold">
          {{ note.noteTitle }}
        </span>
        <span class="m-0 text-muted">
          - {{ note.createdBy.firstName }} {{ note.createdBy.lastName }}
        </span>
        <span class="m-0 text-muted"> - {{ note.book.bookTitle }}</span>
      </div>
      <span class="m-0" style="cursor:pointer;" (click)="delete.emit(note)">
        Delete
      </span>
    </div>
    <div>
      <span class="font-weight-light">{{ note.noteContent }}</span>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent {
  @Input() note: Note;
  @Output() delete = new EventEmitter<Note>();
}