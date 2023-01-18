package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.payloads.request.NhanKhauRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.service.HoKhauService;
import com.example.demo.service.NhanKhauService;

@RestController
@EnableAutoConfiguration
@RequestMapping("/api")
@CrossOrigin
public class NhanKhauController {
  private static final Logger log = LogManager.getLogger(NhanKhauController.class);

  @Autowired
  HoKhauService hoKhauService;

  @Autowired
  NhanKhauService nhanKhauService;

  @PostMapping(value = "/addnhankhau")
  public CommonResponse<Object> addHoKhau(@RequestBody NhanKhauRequest request) {
    // TODO: process POST request
    CommonResponse<Object> response = new CommonResponse<Object>();
    try {
      response = nhanKhauService.themNhanKhau(request);
    } catch (Exception e) {
      // TODO: handle exception
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }
    return response;
  }

  @PutMapping(value = "/addnhankhau")
  public CommonResponse<Object> putHoKhau(@RequestBody NhanKhauRequest request) {
    // TODO: process POST request
    CommonResponse<Object> response = new CommonResponse<Object>();
    try {
      response = nhanKhauService.themNhanKhau(request);
    } catch (Exception e) {
      // TODO: handle exception
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }
    return response;
  }
}