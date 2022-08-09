package com.wipro.shoppe.repositoryimpl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.wipro.shoppe.exceptions.ResourceNotFoundException;
import com.wipro.shoppe.model.Cart;
import com.wipro.shoppe.repository.CartRepository;
import com.wipro.shoppe.service.CartService;


@Service
public class CartServiceImpl implements CartService {

	@Autowired
    private CartRepository cartRepository;
    

    @Override
    public synchronized Cart saveOrUpdate(Cart cart) {
    	Date date = new Date();
    	Cart cartObj = new Cart();
        cartObj.setId(cart.getId());
        cartObj.setPurchasedOn(date);
        cartObj.setUserId(cart.getUserId());
        cartObj.setItems(cart.getItems());
        cartObj.setTotalAmount(cart.getTotalAmount());
        return cartRepository.save(cartObj);
    }

    @Override
    public synchronized Cart findCartByCustomerId(String id) {
        return cartRepository.findCartByUserId(id);
    }

    @Override
    public List<Cart> findAllCarts() {
        return cartRepository.findAll();
    }
}


