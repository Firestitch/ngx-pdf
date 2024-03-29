
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FsApi } from '@firestitch/api';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {

  public pdf;
  public fields: any[] = [];

  public actions = [
    {
      label: 'Save for later',
      click: () => {
        console.log('Saved for later');
      },
    },
  ];

  constructor(
    private _api: FsApi,
  ) { }

  public ngOnInit(): void {
    this.pdf = this._api.createApiFile('/assets/td1-fill-22e2 (7).pdf');
    this.fields = this.defaultFields()
      .map((field) => {
        return {
          ...field,
        };
      });
  }

  public finish(): void {
    console.log('Finsihed');
  }

  public close(): void {
    console.log('Closed');
  }

  public start(): void {
    console.log('Started');
  }

  public fieldChanged(event): void {
    console.log('Field Changed', event);
  }

  public fieldBlurred(event): void {
    console.log('Field blurred', event);
  }

  public defaultFields() {
    return [
      // { top: 2.09, left: 1, width: 0.25, height: 0.25, type: 'radiobutton', shadowX: 2, shadowY: 2, shadowBlur: 4, shapeBottomLeft: 'round', shapeTopLeft: 'round', shapeTopRight: 'round', shapeBottomRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', index: 0, guid: '2vdcdfrndqqj', keepRatio: true, resizable: false, rotatable: false, scalable: false, shadowOpacity: 100, name: 'djjrag', label: 'Radio Group', required: false, readonly: false, description: 'Description' },
      // { top: 2.45, left: 1, width: 0.25, height: 0.25, type: 'radiobutton', shadowX: 2, shadowY: 2, shadowBlur: 4, shapeBottomLeft: 'round', shapeTopLeft: 'round', shapeTopRight: 'round', shapeBottomRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', index: 1, guid: 'ai5mkvmn9qul', keepRatio: true, resizable: false, rotatable: false, scalable: false, shadowOpacity: 100, name: 'djjrag', label: 'Radio Group', description: 'Description' },
      // { top: 3.22, left: 1, width: 0.25, height: 0.25, type: 'checkbox', shadowX: 2, shadowY: 2, shadowBlur: 4, shapeBottomLeft: 'round', shapeTopLeft: 'round', shapeTopRight: 'round', shapeBottomRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', index: 2, guid: '48hv119ac4ln', keepRatio: true, resizable: false, rotatable: false, scalable: false, shadowOpacity: 100, name: '5ivfjd', description: 'Description', label: 'Checkbox Group' },
      // { top: 3.58, left: 1, width: 0.25, height: 0.25, type: 'checkbox', shadowX: 2, shadowY: 2, shadowBlur: 4, shapeBottomLeft: 'round', shapeTopLeft: 'round', shapeTopRight: 'round', shapeBottomRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', index: 3, guid: '7t6u86o4pm77', keepRatio: true, resizable: false, rotatable: false, scalable: false, shadowOpacity: 100, name: '5ivfjd', description: 'Description', label: 'Checkbox Group' },
      // { top: 2.09, left: 1.36, width: 1.5, height: 0.25, type: 'rectangle', shadowX: 2, shadowY: 2, shadowBlur: 4, shapeBottomLeft: 'round', shapeTopLeft: 'round', shapeTopRight: 'round', shapeBottomRight: 'round', verticalAlign: 'center', horizontalAlign: 'left', index: 4, guid: '3e7wn9bf29w9', keepRatio: false, borderColor: '#cccccc', borderWidth: 0, resizable: true, rotatable: true, scalable: true, shadowOpacity: 100, content: 'Radio A' },
      // { top: 2.45, left: 1.36, width: 1.43, height: 0.25, type: 'rectangle', shadowX: 2, shadowY: 2, shadowBlur: 4, shapeBottomLeft: 'round', shapeTopLeft: 'round', shapeTopRight: 'round', shapeBottomRight: 'round', verticalAlign: 'center', horizontalAlign: 'left', index: 5, guid: 'wlfa2mtwiyh0', keepRatio: false, borderColor: '#cccccc', borderWidth: 0, resizable: true, rotatable: true, scalable: true, shadowOpacity: 100, content: 'Radio B' },
      // { top: 3.22, left: 1.36, width: 1.56, height: 0.25, type: 'rectangle', shadowX: 2, shadowY: 2, shadowBlur: 4, shapeBottomLeft: 'round', shapeTopLeft: 'round', shapeTopRight: 'round', shapeBottomRight: 'round', verticalAlign: 'center', horizontalAlign: 'left', index: 6, guid: 'u3kzb9xvt21r', keepRatio: false, borderColor: '#cccccc', borderWidth: 0, resizable: true, rotatable: true, scalable: true, shadowOpacity: 100, content: 'Checkbox A' },
      // { top: 3.58, left: 1.36, width: 1.48, height: 0.25, type: 'rectangle', shadowX: 2, shadowY: 2, shadowBlur: 4, shapeBottomLeft: 'round', shapeTopLeft: 'round', shapeTopRight: 'round', shapeBottomRight: 'round', verticalAlign: 'center', horizontalAlign: 'left', index: 7, guid: 'prylvqg32eew', keepRatio: false, borderColor: '#cccccc', borderWidth: 0, resizable: true, rotatable: true, scalable: true, shadowOpacity: 100, content: 'Checkbox B' },

      { tabIndex: 1, label: 'Last name', required: true, description: null, pdfPageId: 1, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', imageExtension: null, horizontalAlign: 'left', imageModifyDate: null, shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 1.47, left: 0.31, width: 2.73, height: 0.2, type: 'shorttext', guid: '02nyvtaek72z', name: null, pageNumber: 1 },
      { tabIndex: 2, label: 'First name and initial(s)', required: true, description: null, pdfPageId: 1, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', imageExtension: null, horizontalAlign: 'left', imageModifyDate: null, shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 1.48, left: 3.05, width: 1.33, height: 0.19, type: 'shorttext', guid: 'ymhhpxspu8tb', name: null, pageNumber: 1 },
      { tabIndex: 3, label: 'Date of birth', format: 'yyyy/MM/dd', required: true, description: null, pdfPageId: 1, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', imageExtension: null, horizontalAlign: 'left', imageModifyDate: null, shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 1.48, left: 4.38, width: 1.57, height: 0.18, type: 'date', guid: 'kzdxrtzqz4th', name: null, pageNumber: 1 },
      { tabIndex: 4, label: 'Employee number', description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 1.48, left: 5.96, width: 2.25, height: 0.19, type: 'shorttext', guid: 'hbsb97y3joue', name: null, pageNumber: 1 },
      { tabIndex: 6, label: 'Address', required: true, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 1.83, left: 0.31, width: 3.15, height: 0.27, type: 'shorttext', guid: 'nnx1lnbver4t', name: null, pageNumber: 1 },
      { tabIndex: 7, label: 'Postal code', required: true, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 1.83, left: 3.47, width: 0.97, height: 0.26, type: 'shorttext', guid: 'jkvj6qb37cwz', name: null, pageNumber: 1 },
      { tabIndex: 9, label: 'Country of res', description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 1.91, left: 4.46, width: 2.23, height: 0.18, type: 'shorttext', guid: 'r4zyfwvq5plx', name: null, pageNumber: 1 },
      { tabIndex: 11, label: '', format: 'currency', default: '14398.00', description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 2.43, left: 7.1, width: 1.03, height: 0.4, type: 'shorttext', guid: 'slmvvzt2usny', name: 'basicPersonalAmount', pageNumber: 1 },
      { tabIndex: 12, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 3.03, left: 7.12, width: 1, height: 0.42, type: 'shorttext', guid: 'xbis9fra81cl', name: 'canadaCaregiverAmount', pageNumber: 1 },
      { tabIndex: 13, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 3.57, left: 7.11, width: 1.04, height: 0.4, type: 'shorttext', guid: 'gnr3637pv2xl', name: 'ageAmount', pageNumber: 1 },
      { tabIndex: 14, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 4.07, left: 7.11, width: 1.03, height: 0.43, type: 'shorttext', guid: 'hikvbay45qj0', name: 'pensionIncomeAmount', pageNumber: 1 },
      { tabIndex: 15, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 4.63, left: 7.11, width: 1.04, height: 0.38, type: 'shorttext', guid: '7o39o624n3xt', name: 'tuitionAmount', pageNumber: 1 },
      { tabIndex: 16, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 5.07, left: 7.12, width: 1, height: 0.3, type: 'shorttext', guid: 'bsawkfcuumzs', name: 'disabilityAmount', pageNumber: 1 },
      { tabIndex: 17, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 5.61, left: 7.11, width: 1, height: 0.45, type: 'shorttext', guid: '0l48es3pfuz1', name: 'spouseAmount', pageNumber: 1 },
      { tabIndex: 18, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 6.43, left: 7.12, width: 0.99, height: 0.49, type: 'shorttext', guid: 'e4ps6cd5bms2', name: 'dependentAmount', pageNumber: 1 },
      { tabIndex: 18, formula: '', description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 7.04, left: 7.11, width: 1.01, height: 0.36, type: 'shorttext', guid: 'ffp8q8v25rcf', name: 'canadaCaragiverDependenPartnerAmount', pageNumber: 1 },
      { tabIndex: 19, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 7.85, left: 7.12, width: 1, height: 0.54, type: 'shorttext', guid: '6bmgftma6dca', name: 'canadaCaregiverDependent18Amount', pageNumber: 1 },
      { tabIndex: 20, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 8.47, left: 7.12, width: 1, height: 0.42, type: 'shorttext', guid: 'mb35qtfvg22k', name: 'partnerTransferredAmount', pageNumber: 1 },
      { tabIndex: 21, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 8.99, left: 7.12, width: 0.99, height: 0.4, type: 'shorttext', guid: 'hffyfm9lchxs', name: 'dependentTransferredAmount', pageNumber: 1 },
      { tabIndex: 10, label: 'Social Insurance Number', format: 'number', required: true, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 1.89, left: 6.71, width: 1.49, height: 0.19, type: 'shorttext', guid: 'mxd3g0y3b15q', name: null, pageNumber: 1 },
      { label: 'Total Claim Amount', format: 'currency', formula: 'basicPersonalAmount + canadaCaregiverAmount +ageAmount +pensionIncomeAmount + tuitionAmount + disabilityAmount + spouseAmount + dependentAmount + canadaCaragiverDependenPartnerAmount + canadaCaregiverDependent18Amount + partnerTransferredAmount + dependentTransferredAmount', readonly: true, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 9.57, left: 7.11, width: 1.03, height: 0.26, description: null, type: 'shorttext', guid: 'h8rno0rtolw2', name: null, pageNumber: 1 },
      { tabIndex: 1, default: 'now', description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 9.66, left: 6.62, width: 1.45, height: 0.38, type: 'date', guid: '2w5hxn4j2ifh', name: null, pageNumber: 2 },
      { tabIndex: 2, label: 'More than one employer or payer at the same time', description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', groupDescription: 'If  you have not...', shapeBottomRight: 'round', top: 2.08, left: 0.34, width: 0.16, height: 0.18, type: 'checkbox', guid: 'c5br5chqotbs', name: 'Check1', pageNumber: 2 },
      { tabIndex: 3, label: 'Total income less than total claim amount', description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 2.71, left: 0.35, width: 0.15, height: 0.18, type: 'checkbox', guid: 'yqrzoeke674q', name: 'Check2', pageNumber: 2 },
      { tabIndex: 4, label: 'Yes', keepRatio: false, groupLabel: 'Non - residents', description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', groupDescription: 'As a non-resident of Canada...', shapeBottomRight: 'round', top: 3.32, left: 0.57, width: 0.2, height: 0.2, type: 'radiobutton', guid: 'qmhbwiqhkidi', name: 'Radio1', pageNumber: 2 },
      { tabIndex: 5, label: 'No', groupLabel: 'Non - residents', description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 3.53, left: 0.58, width: 0.2, height: 0.2, type: 'radiobutton', guid: '7y5e6tm8jvir', name: 'Radio1', pageNumber: 2 },
      { tabIndex: 6, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 5.78, left: 6.86, width: 1.25, height: 0.28, type: 'shorttext', guid: 'kazv3byl5mgz', name: null, pageNumber: 2 },
      { tabIndex: 7, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 6.79, left: 6.89, width: 1.2, height: 0.24, type: 'shorttext', guid: '103awgmlryem', name: null, pageNumber: 2 },
      { tabIndex: 8, description: null, shapeTopLeft: 'round', shapeTopRight: 'round', verticalAlign: 'top', horizontalAlign: 'left', shapeBottomLeft: 'round', shapeBottomRight: 'round', top: 9.66, left: 0.99, width: 4.99, height: 0.39, type: 'signature', guid: 'u2x48okzew2e', name: null, pageNumber: 2, required: true },
    ];
  }

}
