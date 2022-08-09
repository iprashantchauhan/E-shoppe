package com.wipro.shoppe.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.shoppe.model.User;
import com.wipro.shoppe.model.changePassword;
import com.wipro.shoppe.repository.UserRepository;
import com.wipro.shoppe.service.UserService;
@RestController
@CrossOrigin(origins="*")
public class UserController {
	    @Autowired
	    private UserService userService;
	    
	    @Autowired
	    private UserRepository repo;
	    
	    @Autowired
	    private BCryptPasswordEncoder bCryptPasswordEncoder;

	    @GetMapping("/users")
	    public ResponseEntity < List < User >> getAllUser() {
	        return ResponseEntity.ok().body(userService.getAllUser());
	    }
	    
	    @GetMapping("/test")
	    public String test() {
	    	return "Welcome to backend api of Shopp-e";
	    }

	    @GetMapping("/users/{id}")
	    public ResponseEntity < User > getUserById(@PathVariable long id) {
	        return ResponseEntity.ok().body(userService.getUserById(id));
	    }
	    @GetMapping("/getuser/{id}")
	    public ResponseEntity < User > getUserById(@PathVariable String id) {
	        return ResponseEntity.ok().body(userService.getUserByEmail(id));
	    }
	    
	    @PostMapping("/login")
	    public ResponseEntity<?> loginUser(@RequestBody User userData){
	    	User user = repo.findByEmail(userData.getEmail());
	    	if((this.bCryptPasswordEncoder.matches(userData.getPassword(), user.getPassword() )) && user.getApproved().equals(true))
	    		return ResponseEntity.ok().body(repo.findByEmail(userData.getEmail()));
	    	return (ResponseEntity<?>) ResponseEntity.internalServerError();
	    }
	    
	    @PostMapping("/users/changepassword")
	    public ResponseEntity<?> changePassword(@RequestBody changePassword changepassword){
	    	User user = repo.findByEmail(changepassword.getUserEmail());
	    	if((this.bCryptPasswordEncoder.matches(changepassword.getOldPassword(), user.getPassword() )) && user.getApproved().equals(true))
	    		return ResponseEntity.ok().body(repo.findByEmail(changepassword.getUserEmail()));
	    	return (ResponseEntity<?>) ResponseEntity.internalServerError();
	    }

	    @PostMapping("/users")
	    public ResponseEntity < User > createUser(@RequestBody User user) {
	    	if(repo.findByEmail(user.getEmail()) != null ) throw new RuntimeException("Email already exiist");
	    	user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
	        return ResponseEntity.ok().body(this.userService.createUser(user));
	    }

	    @PutMapping("/users/{id}")
	    public ResponseEntity < User > updateUser(@PathVariable long id, @RequestBody User user) {
	        user.setId(id);
	        return ResponseEntity.ok().body(this.userService.updateUser(user));
	    }

	    @DeleteMapping("/users/{id}")
	    public HttpStatus deleteUser(@PathVariable long id) {
	        this.userService.deleteUser(id);
	        return HttpStatus.OK;
	    }
//		@PostMapping("/forgot")
//		public void sendOTP(@RequestParam("email") String email) {
//			Random random = new Random(1000);
//			int otp = random.nextInt(999999);
//			return sendEmail(email,"Forgot password OTP from Shoppe","your OTP is"+ otp);
//		}
//		public void sendEmail() {
//			senderService.sendEmail("prashant1999chauhan@gmail.com", "This is Subject","This is body of email");
//		}

}
