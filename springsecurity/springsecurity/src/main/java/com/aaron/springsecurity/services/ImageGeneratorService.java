package com.aaron.springsecurity.services;

import com.aaron.springsecurity.models.GenerateImageRequest;
import com.aaron.springsecurity.models.GenerateImageResponse;

public interface ImageGeneratorService {

    GenerateImageResponse generateImage(GenerateImageRequest generateImageRequest);

}