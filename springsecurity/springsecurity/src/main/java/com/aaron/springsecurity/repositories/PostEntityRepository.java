package com.aaron.springsecurity.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aaron.springsecurity.models.PostEntity;




public interface PostEntityRepository extends JpaRepository<PostEntity, String>{

	
}
