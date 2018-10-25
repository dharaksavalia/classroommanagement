package com.example.myapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.models.Module;
import com.example.myapp.repositories.CourseRepository;
import com.example.myapp.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins="*",maxAge=3600)
public class ModuleService {
	@Autowired
	CourseRepository courseRepository;
//	@Autowired
////	ModuleRepository moduleRepository;
////	public Module createModule(
////			@PathVariable("courseId") int courseId,
////			@RequestBody Module newModule) {
////		Optional<Course> data = courseRepository.findById(courseId);
////		if(data.isPresent()) {
////			Course course = data.get();
////			newModule.setCourse(course);
////			return moduleRepository.save(newModule);
////		}
////		return null;
//	}


}
