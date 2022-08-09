package com.wipro.shoppe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.shoppe.model.Cart;
import com.wipro.shoppe.repository.CartRepository;
import com.wipro.shoppe.service.CartService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;
    

    @PostMapping(value = "/create")
    private ResponseEntity create(@RequestBody Cart cart) {
       
            Cart cartObj = cartService.saveOrUpdate(cart);
            return new ResponseEntity<>(cartObj, HttpStatus.CREATED);
        } 
  

    @GetMapping(value = "/{id}")
    private ResponseEntity getCartByCustomerId(@PathVariable String id) {
        
            Cart cartObj = cartService.findCartByCustomerId(id);
            return new ResponseEntity<>(cartObj, HttpStatus.OK);
        
    }

    @GetMapping(value = "/carts")
    private ResponseEntity getCarts() {
     
            List<Cart> carts = cartService.findAllCarts();
            return new ResponseEntity<>(carts, HttpStatus.OK);
        } 
    
}
