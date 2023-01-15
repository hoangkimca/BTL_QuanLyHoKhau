package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.BuoiHop;

public interface BuoiHopRepository extends MongoRepository<BuoiHop, String> {
}