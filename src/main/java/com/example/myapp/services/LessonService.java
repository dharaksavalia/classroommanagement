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
import org.springframework.web.bind.annotation.PutMapping;
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
			System.out.println("module"+data.get().getLessons());
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
	@DeleteMapping("/api/lesson/{lId}")
	public ResponseEntity deleteLesson(@PathVariable("lId")int lId){
		Optional<Lesson> data = lessonRepository.findById(lId);
		if(data.isPresent()) {
			return new ResponseEntity(HttpStatus.OK);
		}
		return new ResponseEntity<Lesson>(HttpStatus.NOT_FOUND);
		
	}
	@GetMapping("/api/lesson/{lId}")
	public ResponseEntity<Lesson> getALesson(@PathVariable("lId")int lId){
		Optional<Lesson> data = lessonRepository.findById(lId);
		if(data.isPresent()) {
			return new ResponseEntity<Lesson>(data.get(),HttpStatus.OK);
		}
		return new ResponseEntity (null,HttpStatus.NO_CONTENT);
		
	}
	@PutMapping("/api/lesson/{lId}")
	public ResponseEntity<Lesson> updateLesson(@PathVariable("lId")int lId, @RequestBody Lesson newLesson){
		Optional<Lesson> data = lessonRepository.findById(lId);
		if(data.isPresent()) {
			return new ResponseEntity<Lesson>(lessonRepository.save(myUpdateLesson(data.get(),
					newLesson
					)),HttpStatus.OK);
		}
		return new ResponseEntity (null,HttpStatus.NO_CONTENT);
		
	}
	private Lesson myUpdateLesson(Lesson oldLesson,Lesson newLesson) {
		oldLesson.setTitle(newLesson.getTitle());
		return oldLesson;
	}
	

}
