package com.example.demo.service;

import com.example.demo.payloads.request.TamTruRequest;
import com.example.demo.payloads.response.CommonResponse;

public interface TamTruService {
  CommonResponse<Object> themTamTru(TamTruRequest request);
}