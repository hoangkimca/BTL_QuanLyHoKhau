package com.example.demo.payloads.request;

import java.util.Date;
import java.util.LinkedHashMap;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class BuoiHopRequest {
  private String id;

  private String chude;

  private String noidung;

  private String diadiem;

  private Date thoigian;

  private String loai;

  private Object dsduocmoi[];

  private int soluong;
}