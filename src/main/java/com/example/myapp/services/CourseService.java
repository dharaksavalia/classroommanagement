package com.example.myapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.models.Course;
import com.example.myapp.models.User;
import com.example.myapp.repositories.CourseRepository;

@RestController
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	@GetMapping("/api/course")
	public Iterable<Course>findAllCourse(){
		return courseRepository.findAll();
	}
	
	@PostMapping("/api/course")
	public ResponseEntity<Course> createACourse(@RequestBody Course course){
	
		Iterable<Course>listOfCourse=
				courseRepository.findCourseByName(course.getTitle());
		for(Course c:listOfCourse)
			return new ResponseEntity<Course>(course,HttpStatus.BAD_REQUEST);
		
		return new ResponseEntity(courseRepository.save(course)
				,HttpStatus.OK);
	}

}
