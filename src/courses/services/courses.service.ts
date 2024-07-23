import { Injectable } from "@nestjs/common";
import * as fs from 'fs'
import * as path from 'path'
import { Course } from "src/courses/dto/course.dto";

@Injectable()
export class CoursesService {
    readonly #filePath = path.join(__dirname, '../../..', 'tmp', 'courses.json');

     getCourses(): Course[] {
        const courses = fs.readFileSync(this.#filePath, "utf-8");
        return JSON.parse(courses);
    }

    addCourse(course: Course): Course[] {
        const courses = this.getCourses();
        courses.push(course);
        fs.writeFileSync(this.#filePath, JSON.stringify(courses), "utf-8");
        return courses;
    }

}