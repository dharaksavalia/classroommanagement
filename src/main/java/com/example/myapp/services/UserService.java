package com.example.myapp.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.repositories.UserRepository;
/*
 * Error handing not implemented properly for REST API
 */

import com.example.myapp.models.User;
@RestController
public class UserService {
	
	@Autowired
	UserRepository repository;
	@GetMapping("/api/user")
	public ResponseEntity<Iterable<User>> findAllUsers(@RequestParam Map<String, String> customQuery){
		String username=customQuery.getOrDefault("username",null);
		String role=customQuery.getOrDefault("role",null);
		String firstName=customQuery.getOrDefault("firstName",null);
		String lastName=customQuery.getOrDefault("lastName",null);
		if(username!=null)
			return new ResponseEntity(repository.findUserByUsername(username),HttpStatus.OK);
		if(role==null && firstName==null && firstName==null)
			return new ResponseEntity(repository.findAll(),HttpStatus.OK);
		else
			 return new ResponseEntity(repository.findUserByFirstNameOrLastNameOrRole
					(firstName, lastName, role),HttpStatus.OK);
	}
	
	@GetMapping("/api/user/{userId}")
	public ResponseEntity<User> findUserById(@PathVariable("userId") int userId){		
		Optional<User>data=repository.findById(userId);
		if(data.isPresent()) {
			return new ResponseEntity<User>(data.get(),HttpStatus.OK);
		}else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user);
	}
	@PostMapping("/api/register")
	public User register(@RequestBody User user, HttpSession session) {
		return repository.save(user);
	}
	@PostMapping("/api/login")
	public User login(@RequestBody User credentials,HttpSession session) {
			List<User> users =(List<User>)repository.findUserByCredentials(credentials.getUsername(), credentials.getPassword());
			for(User user:users) {
				if( user.getUsername().equals(credentials.getUsername())
						   && user.getPassword().equals(credentials.getPassword())) {
						    session.setAttribute("currentUser", user);
						    System.out.println("user added");
						    return user;
						  }
			}
			System.out.println("user added");
			return null;
	}
	@PostMapping("/api/logout")
	public void logout
	(HttpSession session) {
		session.invalidate();
	}
	@GetMapping("/api/profile")
	public User profile(HttpSession session) {
	User currentUser = (User)session.getAttribute("currentUser");	
	return currentUser;
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
			user=updateUser(user,newuser);
			System.out.print("Printing hello");
			return repository.save(user);
			
		}
		return null;
	}
	@GetMapping("/api/session/invalidate")
		public String invalidateSession(HttpSession session) {
			session.invalidate();
			return "session invalidated";
	}
	
	
	public User updateUser(User user,User updateUser) {
		if(updateUser.getFirstName()!=null)
			user.setUsername(updateUser.getUsername());
		if(updateUser.getFirstName()!=null)
			user.setFirstName(updateUser.getFirstName());
		if(updateUser.getEmail()!=null)
			user.setEmail(updateUser.getEmail());
		if(updateUser.getDateOfBirth()!=null)
			user.setDateOfBirth(updateUser.getDateOfBirth());
		if(updateUser.getLastName()!=null)
			user.setLastName((updateUser.getLastName()));
		if(updateUser.getPhone()!=null)
			user.setPhone(updateUser.getPhone());
		if(updateUser.getRole()!=null)
			user.setRole(updateUser.getRole());
		return user;
	}
}
