import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts: Array<any>;
  constructor(private postService: PostService) {
    this.posts = this.postService.getAllPost();
   }

  ngOnInit(): void {
  }

}
