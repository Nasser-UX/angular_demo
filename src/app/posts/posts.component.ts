import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private Posts: HttpService) { }

  ngOnInit(): void {
    this.Posts.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
