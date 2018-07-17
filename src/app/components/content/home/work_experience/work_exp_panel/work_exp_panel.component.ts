import { Component, Input } from '@angular/core';

@Component({
  selector: 'work-exp-panel',
  templateUrl: './work_exp_panel.component.html',
  styleUrls: ['./work_exp_panel.component.css']
})
export class WorkExpPanelComponent {
  @Input()
  set workRole(workRole: string) { this._workRole = workRole || ''; }
  get workRole() { return this._workRole; }
  private _workRole: string = '';

  @Input()
  set companyName(companyName: string) { this._companyName = companyName || ''; }
  get companyName() { return this._companyName; }
  private _companyName: string = '';

  @Input()
  set location(location: string) { this._location = location || ''; }
  get location() { return this._location; }
  private _location: string = '';


  @Input()
  set fromDate(fromDate: string) { this._fromDate = fromDate || ''; }
  get fromDate() { return this._fromDate; }
  private _fromDate: string = '';


  @Input()
  set toDate(toDate: string) { this._toDate = toDate || ''; }
  get toDate() { return this._toDate; }
  private _toDate: string = '';

  @Input()
  set bodyText(bodyText: string) { this._bodyText = bodyText || ''; }
  get bodyText() { return this._bodyText; }
  private _bodyText: string = '';





}
