package com.example.demo.service;

import com.example.demo.payloads.request.TamVangRequest;
import com.example.demo.payloads.response.CommonResponse;

public interface TamVangService {
  CommonResponse<Object> themTamVang(TamVangRequest request);
}