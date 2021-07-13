import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Article by Jeetendra';
  posts : any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPosts().subscribe(
      (response) => {
        console.log(response);
        this.posts = response;
      },
      (error) => { console.log(error); });
  }
}
