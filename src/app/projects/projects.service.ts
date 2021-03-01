import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Project } from "./project";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  constructor(private router:Router) {}

  projects: Project[] = [
    {
      name: "React App",
      description: "MERN Stack(MongoDB, ExpressJs, ReactJs, NodeJs)",
      mainImage:'../../assets/1.jpg',
    },
    {
      name: "Angular App",
      description: "MEAN Stack(MongoDB, ExpressJs, Angular, NodeJs)",
      mainImage:'../../assets/1.jpg',
    },
    {
      name: "Vue App",
      description: "Vue with Firebase",
      mainImage:'../../assets/1.jpg',
    },
    {
      name: "Flutter App",
      description: "Flutter with Firebase",
      mainImage:'../../assets/1.jpg',
    },

  ];

  projects$ = new BehaviorSubject<Project[]>(this.projects);

  fetchProjects() {
    this.projects$.next(this.projects);
  }

  findSelectedProject(id: string) {
    return this.projects.find((project) => project.id == id);
  }


}
