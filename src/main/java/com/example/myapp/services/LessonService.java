package com.example.myapp.services;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.models.User;

@RestController
@CrossOrigin(origins="*",maxAge=3600)
public class LessonService {
	
	@GetMapping("/api/module/{mId}/lesson")
	public ResponseEntity<Iterable<User>> getLesson(@RequestParam Map<String, String> customQuery){
		return null;
	}
	

}
