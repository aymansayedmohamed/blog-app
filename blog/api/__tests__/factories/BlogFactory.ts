import { Trace } from './../../src/modules/common/models';
import { Blog, BlogId, BlogUUID, BlogData, blogEntity } from "../../src/modules/blog/models/Blog";
import { User } from "../../src/modules/user/models/User";
import { DBIO } from "../../src/libs/IO";
import * as uuid from "uuid"

export class BlogFactory {

	blogData = new BlogData("Blog title 1", "Blog description 1") 
	
	createBlog(trace: Trace): DBIO<Blog> {
		const e = blogEntity
		const blogUUID = new BlogUUID(uuid.v4())
		
		return e.insert(e.uuid.set(blogUUID),
			...e.data.columns(this.blogData),
			...e.trace.columns(trace),
		).map(id => new Blog(new BlogId(id), blogUUID, this.blogData, trace))
	}



}