package com.wipro.shoppe.service;

import java.util.List;

import com.wipro.shoppe.model.Cart;

public interface CartService {
	Cart saveOrUpdate(Cart cart);

    Cart findCartByCustomerId(String id);

    List<Cart> findAllCarts();
	}

