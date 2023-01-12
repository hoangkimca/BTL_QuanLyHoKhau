package com.example.demo.service;

import com.example.demo.model.NhanKhau;
import com.example.demo.payloads.request.NhanKhauRequest;
import com.example.demo.payloads.response.CommonResponse;

public interface NhanKhauService {
  CommonResponse<Object> themNhanKhau(NhanKhauRequest request);
}