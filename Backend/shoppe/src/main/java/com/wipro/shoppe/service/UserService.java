package com.wipro.shoppe.service;

import java.util.List;


import com.wipro.shoppe.model.User;

public interface UserService {
	 User createUser(User user);

	    User updateUser(User user);

	    List < User > getAllUser();

	    User getUserById(Long UserId);
	    User getUserByEmail(String UserId);

	    void deleteUser(long id);

		
	    
	    

}
