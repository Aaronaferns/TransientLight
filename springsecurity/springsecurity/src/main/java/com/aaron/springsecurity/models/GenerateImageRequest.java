package com.aaron.springsecurity.models;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class GenerateImageRequest {

	   @NotBlank
	   private String prompt;
	   private String size;
	   @Min(1)
	   @Max(10)
	   @JsonProperty("num_images")
	   private int numImages;

}
