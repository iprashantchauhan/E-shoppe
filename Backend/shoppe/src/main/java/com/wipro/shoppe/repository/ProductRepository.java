package com.wipro.shoppe.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wipro.shoppe.model.Product;


public interface ProductRepository extends MongoRepository < Product, Long >{
	
}

