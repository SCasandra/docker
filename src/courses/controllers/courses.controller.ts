import { Controller, Get, UseGuards } from "@nestjs/common";
import { findAllCourses } from "src/db-data";
import { AuthGuard } from "src/guards/auth.guard";

@Controller()
@UseGuards(AuthGuard)
export class CoursesController {
    @Get('/api/courses')
    async findAllCourses(): Promise<unknown> {
        return findAllCourses();
    }
}