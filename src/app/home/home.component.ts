import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
<<<<<<< Updated upstream

=======
  title = 'Hello Workshop';
  currentLesson = null;
>>>>>>> Stashed changes
  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
<<<<<<< Updated upstream
    { title: 'Unit Testing Fundamentals' },
=======
    { title: 'Uni t Testing Fundamentals' },
>>>>>>> Stashed changes
  ];

  constructor() {}

  ngOnInit(): void {}

<<<<<<< Updated upstream
=======
  selectLesson(lesson) {
    this.currentLesson = lesson;
  }
>>>>>>> Stashed changes
}
