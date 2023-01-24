package com.aaron.springsecurity.services;

import java.util.List;

import com.aaron.springsecurity.models.Post;


public interface PostService {
	Post addPost(Post post) throws Exception;
	List<Post> getPost();
}
