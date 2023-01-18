package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.NhanKhau;

public interface NhanKhauRepository extends MongoRepository<NhanKhau, String> {

    Optional<NhanKhau> findByMahokhau(String mahokhau);
}