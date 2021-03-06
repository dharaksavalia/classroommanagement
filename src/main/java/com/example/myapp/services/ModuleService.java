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
import com.example.myapp.models.Module;
import com.example.myapp.repositories.CourseRepository;
import com.example.myapp.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins="*",maxAge=3600)
public class ModuleService {
	@Autowired
	CourseRepository courseRepository;
	@Autowired
	ModuleRepository moduleRepository;
	@PostMapping("/api/course/{courseId}/module")
	public ResponseEntity<Module> createModule(
			@PathVariable("courseId") int courseId,
			@RequestBody Module newModule) {
		Optional<Course> data = courseRepository.findById(courseId);
		if(data.isPresent()) {
			Course course = data.get();
			newModule.setCourse(course);
			return new ResponseEntity<>(moduleRepository.save(newModule),HttpStatus.OK);
		}
		return new ResponseEntity<>(newModule,HttpStatus.BAD_REQUEST);
	}
	@GetMapping("/api/course/{courseId}/module")
	public ResponseEntity<List<Module>> getModules(@PathVariable("courseId") int courseId) {
		Optional<Course> data = courseRepository.findById(courseId);
		if(data.isPresent()) {
			Course course = data.get();
			return new ResponseEntity<>(course.getModules(),HttpStatus.OK);
		}
		return new ResponseEntity<>(null,HttpStatus.BAD_GATEWAY);
	}
	@DeleteMapping("/api/module/{mId}")
	public void deleteModule(@PathVariable("mId")int moduleId)
	{
		moduleRepository.deleteById(moduleId);
	}
	@GetMapping("/api/module/{mId}")
	public ResponseEntity<Module> getModulesById(@PathVariable("mId") int mId) {
		Optional<Module> data = moduleRepository.findById(mId);
		if(data.isPresent()) {
			Module module = data.get();
			return new ResponseEntity<>(module,HttpStatus.OK);
		}
		return new ResponseEntity<>(null,HttpStatus.BAD_GATEWAY);
	}
}
