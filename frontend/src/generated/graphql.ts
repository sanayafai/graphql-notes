export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Long type */
  Long: any;
  /** Unrepresentable type */
  UNREPRESENTABLE: any;
};

export type AddNoteInput = {
  noteTitle?: Maybe<Scalars['String']>;
  bookTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type Book = {
  bookTitle?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['Long']>;
};

export type DeleteNoteInput = {
  noteId?: Maybe<Scalars['Long']>;
};

/** Mutation root */
export type Mutation = {
  /** Adds a note with the given title/content to the given book. */
  addNote?: Maybe<Note>;
  /** Deletes a note identified by the given parameter. */
  deleteNote: Scalars['Boolean'];
};

/** Mutation root */
export type MutationAddNoteArgs = {
  param: AddNoteInput;
};

/** Mutation root */
export type MutationDeleteNoteArgs = {
  param: DeleteNoteInput;
};

export type Note = {
  book?: Maybe<Book>;
  createdBy?: Maybe<User>;
  deletable: Scalars['Boolean'];
  id?: Maybe<Scalars['Long']>;
  noteContent?: Maybe<Scalars['String']>;
  noteTitle?: Maybe<Scalars['String']>;
};

export type NotesFilterInput = {
  bookId?: Maybe<Scalars['Long']>;
  userId?: Maybe<Scalars['Long']>;
  searchTerm?: Maybe<Scalars['String']>;
};

export type Notification = {
  content?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Query root */
export type Query = {
  /** Loads the current user. */
  currentUser?: Maybe<User>;
  /** Loads all books. */
  books?: Maybe<Array<Maybe<Book>>>;
  /** Loads notes matching the given parameters. */
  notes?: Maybe<Array<Maybe<Note>>>;
  /** Loads all known application users. */
  users?: Maybe<Array<Maybe<User>>>;
};

/** Query root */
export type QueryNotesArgs = {
  param?: Maybe<NotesFilterInput>;
};

/** Subscription root */
export type Subscription = {
  /** Get notified about creation/deletion of notes. */
  notifications?: Maybe<Notification>;
};

export type User = {
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  lastName?: Maybe<Scalars['String']>;
  /** Loads the amount of notes the given users has. */
  noteCount?: Maybe<Scalars['Long']>;
  userId?: Maybe<Scalars['String']>;
};
export type CurrentUserQueryVariables = {};

export type CurrentUserQuery = { __typename?: 'Query' } & {
  currentUser: Maybe<
    { __typename?: 'User' } & Pick<User, 'firstName' | 'lastName'>
  >;
};

export type NotificationsSubscriptionVariables = {};

export type NotificationsSubscription = { __typename?: 'Subscription' } & {
  notifications: Maybe<
    { __typename?: 'Notification' } & Pick<Notification, 'title' | 'content'>
  >;
};

export type AddNoteMutationVariables = {
  param: AddNoteInput;
};

export type AddNoteMutation = { __typename?: 'Mutation' } & {
  addNote: Maybe<{ __typename?: 'Note' } & Pick<Note, 'id'>>;
};

export type DeleteNoteMutationVariables = {
  param: DeleteNoteInput;
};

export type DeleteNoteMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'deleteNote'
>;

export type NotesQueryVariables = {
  param?: Maybe<NotesFilterInput>;
};

export type NotesQuery = { __typename?: 'Query' } & {
  notes: Maybe<
    Array<
      Maybe<
        { __typename?: 'Note' } & Pick<
          Note,
          'id' | 'noteTitle' | 'noteContent' | 'deletable'
        > & {
            createdBy: Maybe<
              { __typename?: 'User' } & Pick<User, 'firstName' | 'lastName'>
            >;
            book: Maybe<{ __typename?: 'Book' } & Pick<Book, 'bookTitle'>>;
          }
      >
    >
  >;
  books: Maybe<
    Array<Maybe<{ __typename?: 'Book' } & Pick<Book, 'id' | 'bookTitle'>>>
  >;
  users: Maybe<
    Array<
      Maybe<
        { __typename?: 'User' } & Pick<
          User,
          'id' | 'firstName' | 'lastName' | 'noteCount'
        >
      >
    >
  >;
};

import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export const CurrentUserDocument = gql`
  query currentUser {
    currentUser {
      firstName
      lastName
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CurrentUserGQL extends Apollo.Query<
  CurrentUserQuery,
  CurrentUserQueryVariables
> {
  document = CurrentUserDocument;
}
export const NotificationsDocument = gql`
  subscription notifications {
    notifications {
      title
      content
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class NotificationsGQL extends Apollo.Subscription<
  NotificationsSubscription,
  NotificationsSubscriptionVariables
> {
  document = NotificationsDocument;
}
export const AddNoteDocument = gql`
  mutation addNote($param: AddNoteInput!) {
    addNote(param: $param) {
      id
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class AddNoteGQL extends Apollo.Mutation<
  AddNoteMutation,
  AddNoteMutationVariables
> {
  document = AddNoteDocument;
}
export const DeleteNoteDocument = gql`
  mutation deleteNote($param: DeleteNoteInput!) {
    deleteNote(param: $param)
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DeleteNoteGQL extends Apollo.Mutation<
  DeleteNoteMutation,
  DeleteNoteMutationVariables
> {
  document = DeleteNoteDocument;
}
export const NotesDocument = gql`
  query notes($param: NotesFilterInput) {
    notes(param: $param) {
      id
      noteTitle
      noteContent
      deletable
      createdBy {
        firstName
        lastName
      }
      book {
        bookTitle
      }
    }
    books {
      id
      bookTitle
    }
    users {
      id
      firstName
      lastName
      noteCount
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class NotesGQL extends Apollo.Query<NotesQuery, NotesQueryVariables> {
  document = NotesDocument;
}
