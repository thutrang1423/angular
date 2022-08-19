import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  public detailArr: any ={};

  constructor(private route: ActivatedRoute, private detail: PostService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParams.get('id'));

    this.detailArr = this.detail.getAllPost().find(detail => detail.id === postIdFromRoute)
  }

}
