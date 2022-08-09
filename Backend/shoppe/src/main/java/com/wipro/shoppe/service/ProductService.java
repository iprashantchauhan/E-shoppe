package com.wipro.shoppe.service;

import java.util.List;

import com.wipro.shoppe.model.Product;



public interface ProductService 
{
    Product createProduct(Product product);

    Product updateProduct(Product product);

    List < Product > getAllProduct();

    Product getProductById(long productId);

    void deleteProduct(long id);
}
