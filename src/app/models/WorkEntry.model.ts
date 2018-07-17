export class WorkExperienceEntry {
  private workRole = '';
  private companyName = '';
  private location = '';
  private fromDate = '';
  private toDate = '';
  private bodyText = '';

  constructor(workRole: string = '',
              companyName: string = '',
              location: string = '',
              fromDate: string = '',
              toDate: string = '',
              bodyText: string = '') {
    this.workRole = workRole;
    this.companyName = companyName;
    this.location = location;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.bodyText = bodyText;
  }
}
