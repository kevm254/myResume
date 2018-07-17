import { Injectable } from '@angular/core';
import { WorkExperienceEntries } from '../../mock_data/work_entries.mock';

@Injectable()
export class WorkExperienceService {
  public fetchWorkExperienceEntries() {
    return WorkExperienceEntries;
  }
}


