package com.aaron.springsecurity.services;






import org.springframework.stereotype.Service;

import com.aaron.springsecurity.models.GenerateImageRequest;
import com.aaron.springsecurity.models.GenerateImageResponse;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ImageGeneratorServiceImpl implements ImageGeneratorService {

    private final ImageGeneratorClient imageGeneratorClient;

    public GenerateImageResponse generateImage(final GenerateImageRequest request) {
        final GenerateImageResponse response = imageGeneratorClient.generateImage(request);
        // if necessary, the response can be further processed here

        return response;
    }

}