package com.wipro.shoppe.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wipro.shoppe.model.Cart;
import com.wipro.shoppe.model.User;

public interface CartRepository extends MongoRepository < Cart, Long >{
	Cart findCartByUserId(String id);
	

}
