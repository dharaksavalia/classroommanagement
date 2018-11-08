package com.example.myapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.models.Course;
import com.example.myapp.models.User;
import com.example.myapp.repositories.CourseRepository;
@CrossOrigin(origins="*",maxAge=3600)
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
	@DeleteMapping("/api/course/{courseId}")
	public ResponseEntity<Course> deleteCourse(@PathVariable("courseId") int courseId){
		Optional<Course> data=courseRepository.findById(courseId);
		System.out.println(data);
		if(data.isPresent()) {
			System.out.println(data);
			courseRepository.delete(data.get());
			return new ResponseEntity(data.get(),HttpStatus.OK);
		}
		return new ResponseEntity(null,HttpStatus.NO_CONTENT);
	}
	@GetMapping("/api/course/{courseId}")
	public Optional<Course> getCourse(@PathVariable("courseId") int courseId) {
		return courseRepository.findById(courseId);
	}

}
