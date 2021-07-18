import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private courseLessons = [
    { title: 'YOLOOOO' },
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() {}

  all() {
    return this.courseLessons;
  }

  find(lessonId) {}

  create(lesson) {
    console.log('CREATE lesson', lesson);
  }

  update(lesson) {
    console.log('UDDATE lesson', lesson);
  }

  delete(lessonId) {
    console.log('DLETE lesson', lessonId);
  }
}
