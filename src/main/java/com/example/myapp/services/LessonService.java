package com.example.myapp.services;

import java.util.List;
import java.util.Map;
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

import com.example.myapp.models.Lesson;
import com.example.myapp.models.Module;
import com.example.myapp.repositories.LessonRepository;
import com.example.myapp.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins="*",maxAge=3600)
public class LessonService {
	@Autowired
	LessonRepository lessonRepository;
	@Autowired
	ModuleRepository moduleRepository;
	@GetMapping("/api/module/{mId}/lesson")
	public ResponseEntity<List<Lesson>> getLesson(@PathVariable("mId") int mId){
		Optional<Module> data = moduleRepository.findById(mId);
		if(data.isPresent()) {
			Module module=data.get();
			return new ResponseEntity(module.getLessons(),HttpStatus.OK);
		}
		return new ResponseEntity(null,HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/api/module/{mId}/lesson")
	public ResponseEntity<Lesson> createLesson(@RequestBody Lesson lesson,
			@PathVariable("mId")int mId){
		Optional<Module> data = moduleRepository.findById(mId);
		if(data.isPresent()) {
			lesson.setModule(data.get());
			return new ResponseEntity(lessonRepository.save(lesson),HttpStatus.OK);
		}
		return new ResponseEntity<Lesson>(lesson,HttpStatus.NOT_FOUND);
		
	}
	

}
