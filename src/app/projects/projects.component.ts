import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService:ProjectsService,
    private router:Router
    ) { }

  projects:Project[] = []

  ngOnInit(): void {
    this.projectService.projects$.subscribe(projects=>{
      console.log(projects);

      this.projects = projects
    })
  }

  navigateToProject(id:string){
    this.router.navigate(['/project', id])

  }

}
