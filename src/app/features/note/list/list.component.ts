import { Component, OnInit } from '@angular/core';
import { NoteStoreService } from '../store/note-store.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private noteStoreService: NoteStoreService) {}

  ngOnInit() {
    this.noteStoreService.getList().subscribe(list => {
      console.log('Pepe', list);
    });
  }

  addNote() {
    this.noteStoreService.addNote({
      title: 'Test 1',
      content: 'Test Content',
      id: '1'
    });
  }
}
