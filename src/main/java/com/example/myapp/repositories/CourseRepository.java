package com.example.myapp.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.myapp.models.Course;
import com.example.myapp.models.User;

public interface CourseRepository extends CrudRepository<Course,Integer>{
	@Query("SELECT c from Course as c WHERE title=:title")
	Iterable<Course>findCourseByName(@Param("title")String title);
	
}
