package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.NhanKhau;

public interface NhanKhauRepository extends MongoRepository<NhanKhau, String> {
  
    
}