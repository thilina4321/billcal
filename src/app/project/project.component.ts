import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project } from "../projects/project";
import { ProjectsService } from "../projects/projects.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  constructor(
    private projectService: ProjectsService,
    private route: ActivatedRoute
  ) {}
  project: Project;

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has("id")) {
        const id = paramMap.get("id");
        this.project = this.projectService.findSelectedProject(id)
        console.log(this.project);

      }
    });
  }
}
