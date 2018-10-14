package com.example.myapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.repositories.UserRepository;


import com.example.myapp.models.User;
@RestController
public class UserService {
	@Autowired
	UserRepository repository;
	@GetMapping("/api/user")
	public List<User> findAllUsers(){
		return (List<User>)repository.findAll(); 
	}
	@GetMapping("/api/user/{userId}")
	public Optional<User> findAUser(@PathVariable("userId") int userId){
		return repository.findById(userId); 
	}
	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user);
	}
	@PostMapping("/api/login")
	public List<User> login(@RequestBody User user) {
			return (List<User>) repository.findUserByCredentials(user.getUsername(), user.getPassword());
	}
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int userId) {
		repository.deleteById(userId);
	}
	@PutMapping("api/user/{userId}")
	public User updateUser(@PathVariable("userId")int userId
			,@RequestBody User newuser) {		
		Optional<User>data=repository.findById(userId);
		if(data.isPresent()) {
			User user = data.get();
			if(newuser.getFirstName()!=null)
				user.setFirstName(newuser.getFirstName());
			if(newuser.getLastName()!=null)
				user.setLastName(newuser.getLastName());
			if(newuser.getPassword()!=null)
					user.setPassword(newuser.getPassword());
			return repository.save(user);
			
		}
		
		return null;
		
	}
	
}
