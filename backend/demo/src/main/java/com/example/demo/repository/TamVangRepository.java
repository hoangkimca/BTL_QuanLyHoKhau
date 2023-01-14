package com.example.demo.repository;
import java.util.Optional;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.TamVang;

public interface TamVangRepository extends MongoRepository<TamVang, String> {
  Optional<TamVang> findByMahokhauAndHoten(String mahokhau, String hoten);
  
  Optional<TamVang> findByMagiaytamvang(String magiaytamvang);
}