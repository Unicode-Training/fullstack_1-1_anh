<?php

namespace App\Http\Controllers;

use App\Services\CourseService;
use App\Services\UserService;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    private $courseService = null;
    private $userService = null;
    public function __construct(CourseService $courseService, UserService $userService)
    {
        $this->courseService = $courseService;
        $this->userService = $userService;
    }
    public function index()
    {
        $courses = $this->courseService->getCourses();

        return view('courses.index', compact('courses'));
    }

    public function create()
    {
        $users = $this->userService->getAllUsers();
        return view('courses.create', compact('users'));
    }

    public function store(Request $request)
    {
        $users = $request->users;
        $request->validate([
            'name' => 'required',
            'price' => 'required|integer'
        ]);
        $this->courseService->createCourse($request->all(), $users);
        return redirect('/courses');
    }
}
