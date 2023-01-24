package com.aaron.springsecurity.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aaron.springsecurity.models.GenerateImageRequest;
import com.aaron.springsecurity.models.GenerateImageResponse;
import com.aaron.springsecurity.services.ImageGeneratorService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/images")
@AllArgsConstructor
public class ImageGeneratorController {


    private final ImageGeneratorService imageGeneratorService;

    @PostMapping("generate")
    public ResponseEntity<GenerateImageResponse> generateImage( @RequestBody final GenerateImageRequest request) {
        final GenerateImageResponse response = imageGeneratorService.generateImage(request);
        return ResponseEntity.ok(response);
    }

}