import { Controller, Get, Post, UseGuards, Body, Res, HttpStatus } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";
import { Course } from "../dto/course.dto";
import { CoursesService } from "../services/courses.service";

@Controller()
@UseGuards(AuthGuard)
export class CoursesController {
    constructor(private readonly courseService: CoursesService) {}
    @Get('/api/courses')
    async findAllCourses(): Promise<unknown> {
        return this.courseService.getCourses();
    }

    @Post('/api/course')
    async saveCourse(@Body() course: Course) {
        if(!course.description) return;
        return this.courseService.addCourse(course);
    }
}