package com.wipro.shoppe.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wipro.shoppe.model.User;

public interface UserRepository extends MongoRepository < User, Long > {

	

	public User findByEmail(String email);

	

}
