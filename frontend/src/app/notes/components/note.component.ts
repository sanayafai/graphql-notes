import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Note } from '../state/notes.models';

@Component({
  selector: 'app-note-component',
  template: `
    <div class="d-flex justify-content-between border-bottom">
      <span class="m-0 font-weight-bold">
        {{ note.noteTitle }}
      </span>
      <span class="m-0 text-muted">
        {{ note.author.firstName }} {{ note.author.lastName }}
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
}