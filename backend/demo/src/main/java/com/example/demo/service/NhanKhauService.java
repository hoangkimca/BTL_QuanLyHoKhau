package com.example.demo.service;

import com.example.demo.payloads.request.NhanKhauRequest;
import com.example.demo.payloads.response.CommonResponse;

public interface NhanKhauService {
  CommonResponse<Object> themNhanKhau(NhanKhauRequest request);

  CommonResponse<Object> suaNhanKhau(NhanKhauRequest request);
}