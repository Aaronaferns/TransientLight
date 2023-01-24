package com.aaron.springsecurity.config;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.RequestInterceptor;


@Configuration
public class ImageGeneratorConfig {

    private String apiKey="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";

    @Bean
    public RequestInterceptor apiKeyInterceptor() {
        return template -> template.header("Authorization", "Bearer " + apiKey);
    }
}