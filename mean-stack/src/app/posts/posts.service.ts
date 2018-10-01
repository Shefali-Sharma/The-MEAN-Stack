import { Post } from './post.model';

export class PostsService {
  private posts: Post[] = [];
  getPosts() {
    return [...this.posts];
  }
}
