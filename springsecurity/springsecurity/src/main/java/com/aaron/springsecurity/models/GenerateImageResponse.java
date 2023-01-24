package com.aaron.springsecurity.models;

import java.util.List;

import lombok.Data;

@Data
public class GenerateImageResponse {

    private List<GeneratedImage> data;

}