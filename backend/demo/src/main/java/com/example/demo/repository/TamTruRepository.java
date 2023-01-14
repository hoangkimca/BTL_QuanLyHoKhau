package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.TamTru;

public interface TamTruRepository extends MongoRepository<TamTru, String> {
  Optional<TamTru> findByMagiaytamtru(String magiaytamtru);

}