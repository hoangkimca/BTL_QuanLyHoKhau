package com.example.demo.payloads.response;

import lombok.Data;

@Data
public class CommonResponse<T> {
	private T data;
  private String status;
  private String messsage;
}

//400
//200
//500
//100

//data: đăng nhập: 
  //vd: {

