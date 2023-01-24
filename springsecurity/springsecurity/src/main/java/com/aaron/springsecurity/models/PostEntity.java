package com.aaron.springsecurity.models;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostEntity {
	   @Id
	   @GeneratedValue(generator = "uuid")
	   @GenericGenerator(name="uuid" ,strategy="uuid2")
	   private String id;
	   private String post;
	   private String name;
	   private String email;
	   private String image;
	   private String file;
	   @Column(name="profile_pic")
	   private String profilePic;
	   @Column(name = "time_stamp")
	   private String timeStamp;
	   @Column(name="image_name")
	   private String imageName;
}