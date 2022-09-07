import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.loadAllComments();
  }

  title = 'SearchPage';
  APIURL = 'https://jsonplaceholder.typicode.com/comments?q=';
  enteredValue: string = '';
  // searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  comments: { id: number; name: string; email: string; body: string }[] = [];

  loadAllComments() {
    this.http.get(this.APIURL).subscribe((data) => {
      console.log(data);
      this.comments = data as {
        id: number;
        name: string;
        email: string;
        body: string;
      }[];
    });
  }

  loadComments() {
    this.http.get(this.APIURL + this.enteredValue).subscribe((data) => {
      console.log(data);
      this.comments = data as {
        id: number;
        name: string;
        email: string;
        body: string;
      }[];
    });
  }

  logChars() {
    console.log(this.enteredValue);
    console.log(this.enteredValue.length);
  }
}
