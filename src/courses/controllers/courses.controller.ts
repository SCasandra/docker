import { Controller, Get } from "@nestjs/common";
import { findAllCourses } from "src/db-data";

@Controller()
export class CoursesController {
    @Get('/api/courses')
    async findAllCourses(): Promise<unknown> {
        return findAllCourses();
    }
}