package com.wipro.shoppe.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ProductDB")
public class Product {

    @Id
    private long id;

    @Indexed(unique = true)
    private String name;
    private String description;
    private String fulldescription;
    private String category;
    private Long price;
    private String imageUrl;
    private String imageUrl1;
    private String imageUrl2;
    private String imageUrl3;
    private Boolean approved;
    private int quantity=1;
    private long totalPrice;
    
    public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public long getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(long totalPrice) {
		this.totalPrice = totalPrice;
	}
	public String getFulldescription() {
		return fulldescription;
	}
	public void setFulldescription(String fulldescription) {
		this.fulldescription = fulldescription;
	}
	public String getImageUrl1() {
		return imageUrl1;
	}
	public void setImageUrl1(String imageUrl1) {
		this.imageUrl1 = imageUrl1;
	}
	public String getImageUrl2() {
		return imageUrl2;
	}
	public void setImageUrl2(String imageUrl2) {
		this.imageUrl2 = imageUrl2;
	}
	public String getImageUrl3() {
		return imageUrl3;
	}
	public void setImageUrl3(String imageUrl3) {
		this.imageUrl3 = imageUrl3;
	}
	public Boolean getApproved() {
		return approved;
	}
	public void setApproved(Boolean approved) {
		this.approved = approved;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
