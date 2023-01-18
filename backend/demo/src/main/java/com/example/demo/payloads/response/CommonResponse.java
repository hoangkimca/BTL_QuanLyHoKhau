package com.example.demo.payloads.response;

import lombok.Data;

@Data
public class CommonResponse<T> {
  private T data;
  private String status;
  private String messsage;

  public void remove(CommonResponse<Object> danhsachHokhau) {
  }
}

// 400
// 200
// 500
// 100