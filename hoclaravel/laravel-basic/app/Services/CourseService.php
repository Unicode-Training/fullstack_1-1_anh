<?php

namespace App\Services;

use App\Models\Course;

class CourseService
{
    public function getCourses()
    {
        return Course::get();
    }
    public function createCourse($data, $users)
    {
        $course =  Course::create($data);
        $course->users()->attach($users);
    }
}
