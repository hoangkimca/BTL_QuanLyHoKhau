package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "diemdanh")
@Data
public class Diemdanh {
    private String id;

    private String mahokhau;

    private String mabuoihop;

    private String trangthai;
}