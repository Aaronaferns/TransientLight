package com.aaron.springsecurity.services;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.aaron.springsecurity.config.ImageGeneratorConfig;
import com.aaron.springsecurity.models.GenerateImageRequest;
import com.aaron.springsecurity.models.GenerateImageResponse;

@FeignClient(name = "imageGenerator", url = "https://api.openai.com", configuration = ImageGeneratorConfig.class)
public interface ImageGeneratorClient {

    @PostMapping(value = "/v1/images/generations")
    GenerateImageResponse generateImage(@RequestBody final GenerateImageRequest request);

}