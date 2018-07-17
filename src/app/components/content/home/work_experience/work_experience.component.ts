// Modules
import { Component, OnInit } from '@angular/core';

// Services
import { WorkExperienceService } from '../../../../services/components/work_experience.service';

// Models
import { WorkExperienceEntry } from '../../../../models/WorkEntry.model';

@Component({
  selector: 'work-exp-cmp',
  templateUrl: './work_experience.component.html',
  styleUrls: ['./work_experience.component.css']
})

export class WorkExperienceComponent implements OnInit {
  private workExperiences: WorkExperienceEntry[] = [];

  constructor(private workExperienceService: WorkExperienceService) {}

  ngOnInit() {
    this.workExperiences = this.workExperienceService.fetchWorkExperienceEntries();

  }
}
