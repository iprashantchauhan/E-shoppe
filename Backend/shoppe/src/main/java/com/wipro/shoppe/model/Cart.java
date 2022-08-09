package com.wipro.shoppe.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@Document(collection ="CartDB")
public class Cart {

  @Id
  private String id;
  
  private @NonNull Date purchasedOn;
  
  private @NonNull String userId;
  
  @DBRef
  private @NonNull List<Product> items;
  
  private Long totalAmount;
  
  public Long getTotalAmount() {
	return totalAmount;
}

public void setTotalAmount(Long totalAmount) {
	this.totalAmount = totalAmount;
}

public Date getPurchasedOn() {
	return purchasedOn;
  }

  public void setPurchasedOn(Date purchasedOn) {
	this.purchasedOn = purchasedOn;
  }
  public String getId() {
	return id;
  }

  public void setId(String id) {
	this.id = id;
  }

public String getUserId() {
	return userId;
}

public void setUserId(String userId) {
	this.userId = userId;
}

public List<Product> getItems() {
	return items;
}

public void setItems(List<Product> items) {
	this.items = items;
}



}
