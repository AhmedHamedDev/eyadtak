import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Abilities } from 'src/app/shared/enums/Abilities';
import { AuthSubjectService } from 'src/app/shared/services/auth-subject/auth-subject.service';
import { Allergy } from '../../models/Allergy';
import { Diagnosis } from '../../models/Diagnosis';
import { Medicine } from '../../models/Medicine';
import { Sign } from '../../models/Sign';
import { Symptom } from '../../models/Symptom';
import { AllergiesService } from '../../services/allergies-service/allergies.service';
import { AllergiesSubjectService } from '../../services/basic-data-subjects/allergies-subject.service';
import { DiagnosesSubjectService } from '../../services/basic-data-subjects/diagnoses-subject.service';
import { MedicinesSubjectService } from '../../services/basic-data-subjects/medicines-subject.service';
import { SignsSubjectService } from '../../services/basic-data-subjects/signs-subject.service';
import { SymptomsSubjectService } from '../../services/basic-data-subjects/symptoms-subject.service';
import { DiagnosesService } from '../../services/diagnoses-service/diagnoses.service';
import { EmrService } from '../../services/emr-service/emr.service';
import { MedicinesService } from '../../services/medicines-service/medicines.service';
import { SignsService } from '../../services/signs-service/signs.service';
import { SymptomsService } from '../../services/symptoms-service/symptoms.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit, OnDestroy {

  abilities: number[];
  Abilities = Abilities;

  // rowGroupMetadataMedicine: any;
  // rowGroupMetadataSymptom: any;
  // rowGroupMetadataAllergy: any;
  // rowGroupMetadataSign: any;
  // rowGroupMetadataDiagnosis: any;

  userInfo: any;
  patientId: number;

  complaints: any[] = [];
  newComplaint: string;
  disableChiefComplaint: boolean = false;

  notes: any[] = [];
  newNote: string;
  disableNote: boolean = false;

  allergiesHistory: Allergy[] = [];
  allergies: Allergy[] = [];
  selectedAlleries: Allergy[] = [];
  allergiesChips: string[] = [];

  signsHistory: Sign[] = [];
  signs: Sign[] = [];
  selectedSigns: Sign[] = [];
  signsChips: string[] = [];

  symptomsHistory: Symptom[] = [];
  symptoms: Symptom[] = [];
  selectedSymptoms: Symptom[] = [];
  symptomsChips: string[];

  diagnosesHistory: Diagnosis[] = [];
  diagnoses: Diagnosis[] = [];
  selectedDiagnoses: Diagnosis[] = [];
  diagnosesChips: string[] = [];

  medicinesHistory: Medicine[] = [];
  medicines: Medicine[] = [];
  selectedMedicines: Medicine[] = [];
  medicinesChips: string[] = [];

  timeout: any = null;

  private subscripe1: Subscription;
  private subscripe2: Subscription;
  private subscripe3: Subscription;
  private subscripe4: Subscription;
  private subscripe5: Subscription;
  private subscripe6: Subscription;
  private subscripe7: Subscription;
  private subscripe8: Subscription;
  private subscripe9: Subscription;
  private subscripe10: Subscription;
  private subscripe11: Subscription;
  private subscripe12: Subscription;
  private subscripe13: Subscription;
  private subscripe14: Subscription;
  private subscripe15: Subscription;

  constructor(
    private confirmationService: ConfirmationService,
    private emrService: EmrService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private symptomsService: SymptomsService,
    private symptomsSubject: SymptomsSubjectService,
    private allergiesService: AllergiesService,
    private allergiesSubject: AllergiesSubjectService,
    private signsService: SignsService,
    private signsSubject: SignsSubjectService,
    private diagnosesService: DiagnosesService,
    private diagnosesSubject: DiagnosesSubjectService,
    private medicinesService: MedicinesService,
    private medicinesSubject: MedicinesSubjectService,
    private authSubjectService: AuthSubjectService, 
  ) { }

  ngOnDestroy() {
    this.subscripe1?.unsubscribe();
    this.subscripe2?.unsubscribe();
    this.subscripe3?.unsubscribe();
    this.subscripe4?.unsubscribe();
    this.subscripe5?.unsubscribe();
    this.subscripe6?.unsubscribe();
    this.subscripe7?.unsubscribe();
    this.subscripe8?.unsubscribe();
    this.subscripe9?.unsubscribe();
    this.subscripe10?.unsubscribe();
    this.subscripe11?.unsubscribe();
    this.subscripe12?.unsubscribe();
    this.subscripe13?.unsubscribe();
    this.subscripe14?.unsubscribe();
    this.subscripe15?.unsubscribe();
  }

  ngOnInit(): void {

    this.authSubjectService.getSubject().subscribe(res => {
      this.abilities = res.abilitiesIds;
    })

    this.subscripe1 = this.route.params.subscribe(params => {
      this.patientId = params['id'];

      this.subscripe2 = this.emrService.GetPatientInfo(params['id']).subscribe(resp => {
        if (resp.errorHappen == true)
          this.toastr.error(resp.message, "Sorry :(")
        else if (resp.errorHappen == false)
          this.userInfo = resp.message;
      })

      // this.subscripe3 = this.emrService.GetPatientHistoryNotes(params['id']).subscribe(resp => {
      //   if (resp.errorHappen == true)
      //     this.toastr.error(resp.message, "Sorry :(")
      //   else if (resp.errorHappen == false)
      //     this.notes = resp.message;
      // })

      // this.subscripe4 = this.emrService.GetPatientHistoryChiefComplaints(params['id']).subscribe(resp => {
      //   if (resp.errorHappen == true)
      //     this.toastr.error(resp.message, "Sorry :(")
      //   else if (resp.errorHappen == false)
      //     this.complaints = resp.message;
      // })

      // this.subscripe5 = this.symptomsService.GetPatientSymptoms(params['id']).subscribe(resp => {
      //   if (resp.errorHappen == true)
      //     this.toastr.error(resp.message, "Sorry :(")
      //   else if (resp.errorHappen == false) {
      //     this.symptomsHistory = resp.message;

          this.subscripe6 = this.symptomsSubject.getSubject().subscribe(data => {
              this.symptoms = data;
          })
      //   }
      // })

      // this.subscripe7 = this.allergiesService.GetPatientAllergies(params['id']).subscribe(resp => {
      //   if (resp.errorHappen == true)
      //     this.toastr.error(resp.message, "Sorry :(")
      //   else if (resp.errorHappen == false) {
      //     this.allergiesHistory = resp.message;

          this.subscripe8 = this.allergiesSubject.getSubject().subscribe(data => {
            this.allergies = data;
          })
      //   }
      // })

      // this.subscripe9 = this.signsService.GetPatientSigns(params['id']).subscribe(resp => {
      //   if (resp.errorHappen == true)
      //     this.toastr.error(resp.message, "Sorry :(")
      //   else if (resp.errorHappen == false) {
      //     this.signsHistory = resp.message;

          this.subscripe10 = this.signsSubject.getSubject().subscribe(data => {
            this.signs = data;
          })
      //   }
      // })

      // this.subscripe11 = this.diagnosesService.GetPatientDiagnoses(params['id']).subscribe(resp => {
      //   if (resp.errorHappen == true)
      //     this.toastr.error(resp.message, "Sorry :(")
      //   else if (resp.errorHappen == false) {
      //     this.diagnosesHistory = resp.message;

          this.subscripe12 = this.diagnosesSubject.getSubject().subscribe(data => {
            this.diagnoses = data;
          })
      //   }
      // })

      // this.subscripe13 = this.medicinesService.GetPatientMedicines(params['id']).subscribe(resp => {
      //   if (resp.errorHappen == true)
      //     this.toastr.error(resp.message, "Sorry :(")
      //   else if (resp.errorHappen == false) {
      //     this.medicinesHistory = resp.message;

          this.subscripe14 = this.medicinesSubject.getSubject().subscribe(data => {
            this.medicines = data;
          })
      //   }
      // })

    });

    // this.updateRowGroupMetaDataMedicine();
    // this.updateRowGroupMetaDataAllergy();
    // this.updateRowGroupMetaDataSymptom();
    // this.updateRowGroupMetaDataDiagnosis();
    // this.updateRowGroupMetaDataSign();
  }

  formatDate(date, format) {
    const map = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear()
    }

    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
  }

  ////////////////////////////////////////////

  // addChiefComplaint() {
  //   if (this.newComplaint != "" && this.newComplaint != null) {
  //     this.confirmationService.confirm({
  //       message: 'Are you sure that you want to proceed?',
  //       header: 'Confirmation',
  //       icon: 'pi pi-exclamation-triangle',
  //       accept: () => {
  //         this.complaints.unshift({ complaint: this.newComplaint, date: this.formatDate(new Date(), "dd/mm/yyyy"), isNew: true })
  //         this.disableChiefComplaint = true;
  //       },
  //     });
  //   }
  // }

  // deleteComplaint(Complaint) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to proceed?',
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       let matches: any[] = this.complaints.filter(x => x.complaint == Complaint.complaint);
  //       const index = this.complaints.indexOf(matches[0]);
  //       if (index > -1) {
  //         this.complaints.splice(index, 1);
  //         this.disableChiefComplaint = false;
  //       }
  //     },
  //   });
  // }
  ////////////////////////////////////////////

  // addNote() {
  //   if (this.newNote != "" && this.newNote != null) {
  //     this.confirmationService.confirm({
  //       message: 'Are you sure that you want to proceed?',
  //       header: 'Confirmation',
  //       icon: 'pi pi-exclamation-triangle',
  //       accept: () => {
  //         this.notes.unshift({ note: this.newNote, date: this.formatDate(new Date(), "dd/mm/yyyy"), isNew: true })
  //         this.disableNote = true;
  //       },
  //     });
  //   }
  // }

  // deleteNote(Note) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to proceed?',
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       let matches: any[] = this.notes.filter(x => x.note == Note.note);
  //       const index = this.notes.indexOf(matches[0]);
  //       if (index > -1) {
  //         this.notes.splice(index, 1);
  //         this.disableNote = false;
  //       }
  //     },
  //   });
  // }
  ////////////////////////////////////////////

  addAllergy(allergy) {
    let chipsMatch = this.allergiesChips.filter(x => x.toLowerCase() == allergy.toLowerCase())
    if (chipsMatch.length > 1) {
      this.allergiesChips.splice(this.selectedAlleries.indexOf(allergy));
      return;
    }

    let matches: Allergy[] = this.allergies.filter(x => x.name.toLowerCase() == allergy.toLowerCase());
    if (matches.length < 1) {
      this.allergies.push({ name: allergy, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.selectedAlleries.push({ name: allergy, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.allergiesSubject.next(this.allergies);
    }
    else
      this.selectedAlleries.push(matches[0]);

    this.allergies = [...this.allergies]
  }

  removeAllergy(allergy) {
    let matches: Allergy[] = this.selectedAlleries.filter(x => x.name.toLowerCase() == allergy.toLowerCase());
    const index = this.selectedAlleries.indexOf(matches[0]);
    if (index > -1)
      this.selectedAlleries.splice(index, 1);

    this.allergies = [...this.allergies]
  }

  filterAllergies(allergy) {
  }

  onSelectAllergy(allergysSelected: Allergy[]) {
    this.allergiesChips = [];
    allergysSelected.forEach(element => {
      this.allergiesChips.push(element.name);
    });

    this.allergiesChips = [...this.allergiesChips];
  }


  // onSortAllergy() {
  //   this.updateRowGroupMetaDataAllergy();
  // }

  // updateRowGroupMetaDataAllergy() {
  //   this.rowGroupMetadataAllergy = {};

  //   if (this.allergiesHistory) {
  //     for (let i = 0; i < this.allergiesHistory.length; i++) {
  //       let rowData = this.allergiesHistory[i];
  //       let representativeDate = rowData.date;

  //       if (i == 0) {
  //         this.rowGroupMetadataAllergy[representativeDate] = { index: 0, size: 1 };
  //       }
  //       else {
  //         let previousRowData = this.allergiesHistory[i - 1];
  //         let previousRowGroup = previousRowData.date;
  //         if (representativeDate === previousRowGroup)
  //           this.rowGroupMetadataAllergy[representativeDate].size++;
  //         else
  //           this.rowGroupMetadataAllergy[representativeDate] = { index: i, size: 1 };
  //       }
  //     }
  //   }
  // }

  ////////////////////////////////////////////

  addSign(sign) {
    let chipsMatch = this.signsChips.filter(x => x.toLowerCase() == sign.toLowerCase())
    if (chipsMatch.length > 1) {
      this.signsChips.splice(this.selectedSigns.indexOf(sign));
      return;
    }

    let matches: Sign[] = this.signs.filter(x => x.name.toLowerCase() == sign.toLowerCase());
    if (matches.length < 1) {
      this.signs.push({ name: sign, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.selectedSigns.push({ name: sign, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.signsSubject.next(this.signs);
    }
    else
      this.selectedSigns.push(matches[0]);

    this.signs = [...this.signs]
  }

  removeSign(sign) {
    let matches: Sign[] = this.selectedSigns.filter(x => x.name == sign);
    const index = this.selectedSigns.indexOf(matches[0]);
    if (index > -1) {
      this.selectedSigns.splice(index, 1);
    }

    this.signs = [...this.signs]
  }

  filterSigns(sign) {
  }

  onSelectSign(signsSelected: Sign[]) {
    this.signsChips = [];
    signsSelected.forEach(element => {
      this.signsChips.push(element.name);
    });

    this.signsChips = [...this.signsChips];
  }

  // onSortSign() {
  //   this.updateRowGroupMetaDataSign();
  // }

  // updateRowGroupMetaDataSign() {
  //   this.rowGroupMetadataSign = {};

  //   if (this.signsHistory) {
  //     for (let i = 0; i < this.signsHistory.length; i++) {
  //       let rowData = this.signsHistory[i];
  //       let representativeDate = rowData.date;

  //       if (i == 0) {
  //         this.rowGroupMetadataSign[representativeDate] = { index: 0, size: 1 };
  //       }
  //       else {
  //         let previousRowData = this.signsHistory[i - 1];
  //         let previousRowGroup = previousRowData.date;
  //         if (representativeDate === previousRowGroup)
  //           this.rowGroupMetadataSign[representativeDate].size++;
  //         else
  //           this.rowGroupMetadataSign[representativeDate] = { index: i, size: 1 };
  //       }
  //     }
  //   }
  // }

  ////////////////////////////////////////////

  addSymptom(symptom) {
    let chipsMatch = this.symptomsChips.filter(x => x.toLowerCase() == symptom.toLowerCase())
    if (chipsMatch.length > 1) {
      this.symptomsChips.splice(this.selectedSymptoms.indexOf(symptom));
      return;
    }

    let matches: Symptom[] = this.symptoms.filter(x => x.name.toLowerCase() == symptom.toLowerCase());
    if (matches.length < 1) {
      this.symptoms.push({ name: symptom, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.selectedSymptoms.push({ name: symptom, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.symptomsSubject.next(this.symptoms);
    }
    else
      this.selectedSymptoms.push(matches[0]);

    this.symptoms = [...this.symptoms]
  }

  removeSymptom(symptom) {
    let matches: Symptom[] = this.selectedSymptoms.filter(x => x.name.toLowerCase() == symptom.toLowerCase());
    const index = this.selectedSymptoms.indexOf(matches[0]);
    if (index > -1) {
      this.selectedSymptoms.splice(index, 1);
    }

    this.symptoms = [...this.symptoms]
  }

  filterSymptoms(symptom) {
  }

  onSelectSymptom(symptomsSelected: Sign[]) {
    this.symptomsChips = [];
    symptomsSelected.forEach(element => {
      this.symptomsChips.push(element.name);
    });

    this.symptomsChips = [...this.symptomsChips];
  }

  // onSortSymptom() {
  //   this.updateRowGroupMetaDataSymptom();
  // }

  // updateRowGroupMetaDataSymptom() {
  //   this.rowGroupMetadataSymptom = {};

  //   if (this.symptomsHistory) {
  //     for (let i = 0; i < this.symptomsHistory.length; i++) {
  //       let rowData = this.symptomsHistory[i];
  //       let representativeDate = rowData.date;

  //       if (i == 0) {
  //         this.rowGroupMetadataSymptom[representativeDate] = { index: 0, size: 1 };
  //       }
  //       else {
  //         let previousRowData = this.symptomsHistory[i - 1];
  //         let previousRowGroup = previousRowData.date;
  //         if (representativeDate === previousRowGroup)
  //           this.rowGroupMetadataSymptom[representativeDate].size++;
  //         else
  //           this.rowGroupMetadataSymptom[representativeDate] = { index: i, size: 1 };
  //       }
  //     }
  //   }
  // }

  ////////////////////////////////////////////

  addDiagnosis(diagnosis) {
    let chipsMatch = this.diagnosesChips.filter(x => x.toLowerCase() == diagnosis.toLowerCase())
    if (chipsMatch.length > 1) {
      this.diagnosesChips.splice(this.selectedDiagnoses.indexOf(diagnosis));
      return;
    }

    let matches: Diagnosis[] = this.diagnoses.filter(x => x.name.toLowerCase() == diagnosis.toLowerCase());
    if (matches.length < 1) {
      this.diagnoses.push({ name: diagnosis, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.selectedDiagnoses.push({ name: diagnosis, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.diagnosesSubject.next(this.diagnoses);
    }
    else
      this.selectedDiagnoses.push(matches[0]);

    this.diagnoses = [...this.diagnoses]
  }

  removeDiagnosis(diagnosis) {
    let matches: Diagnosis[] = this.selectedDiagnoses.filter(x => x.name == diagnosis);
    const index = this.selectedDiagnoses.indexOf(matches[0]);
    if (index > -1) {
      this.selectedDiagnoses.splice(index, 1);
    }

    this.diagnoses = [...this.diagnoses]
  }

  filterDiagnoses(diagnosis) {
  }

  onSelectDiagnosis(diagnosesSelected: Diagnosis[]) {
    this.diagnosesChips = [];
    diagnosesSelected.forEach(element => {
      this.diagnosesChips.push(element.name);
    });

    this.diagnosesChips = [...this.diagnosesChips];
  }

  // onSortDiagnosis() {
  //   this.updateRowGroupMetaDataDiagnosis();
  // }

  // updateRowGroupMetaDataDiagnosis() {
  //   this.rowGroupMetadataDiagnosis = {};

  //   if (this.diagnosesHistory) {
  //     for (let i = 0; i < this.diagnosesHistory.length; i++) {
  //       let rowData = this.diagnosesHistory[i];
  //       let representativeDate = rowData.date;

  //       if (i == 0) {
  //         this.rowGroupMetadataDiagnosis[representativeDate] = { index: 0, size: 1 };
  //       }
  //       else {
  //         let previousRowData = this.diagnosesHistory[i - 1];
  //         let previousRowGroup = previousRowData.date;
  //         if (representativeDate === previousRowGroup)
  //           this.rowGroupMetadataDiagnosis[representativeDate].size++;
  //         else
  //           this.rowGroupMetadataDiagnosis[representativeDate] = { index: i, size: 1 };
  //       }
  //     }
  //   }
  // }

  ////////////////////////////////////////////

  addMedicine(medicine) {
    let chipsMatch = this.medicinesChips.filter(x => x.toLowerCase() == medicine.toLowerCase())
    if (chipsMatch.length > 1) {
      this.medicinesChips.splice(this.selectedMedicines.indexOf(medicine));
      return;
    }

    let matches: Medicine[] = this.medicines.filter(x => x.name.toLowerCase() == medicine.toLowerCase());
    if (matches.length < 1) {
      this.medicines.push({ name: medicine, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.selectedMedicines.push({ name: medicine, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.medicinesSubject.next(this.medicines);
    }
    else
      this.selectedMedicines.push(matches[0]);

    this.medicines = [...this.medicines]
  }

  removeMedicine(medicine) {
    let matches: Medicine[] = this.selectedMedicines.filter(x => x.name == medicine);
    const index = this.selectedMedicines.indexOf(matches[0]);
    if (index > -1) {
      this.selectedMedicines.splice(index, 1);
    }

    this.medicines = [...this.medicines]
  }

  filterMedicines(medicine) {
    console.log(medicine)
  }

  onSelectMedicine(medicinesSelected: Diagnosis[]) {
    this.medicinesChips = [];
    medicinesSelected.forEach(element => {
      this.medicinesChips.push(element.name);
    });

    this.medicinesChips = [...this.medicinesChips];
  }

  // onSortMedicine() {
  //   this.updateRowGroupMetaDataMedicine();
  // }

  // updateRowGroupMetaDataMedicine() {
  //   this.rowGroupMetadataMedicine = {};

  //   if (this.medicinesHistory) {
  //     for (let i = 0; i < this.medicinesHistory.length; i++) {
  //       let rowData = this.medicinesHistory[i];
  //       let representativeDate = rowData.date;

  //       if (i == 0) {
  //         this.rowGroupMetadataMedicine[representativeDate] = { index: 0, size: 1 };
  //       }
  //       else {
  //         let previousRowData = this.medicinesHistory[i - 1];
  //         let previousRowGroup = previousRowData.date;
  //         if (representativeDate === previousRowGroup)
  //           this.rowGroupMetadataMedicine[representativeDate].size++;
  //         else
  //           this.rowGroupMetadataMedicine[representativeDate] = { index: i, size: 1 };
  //       }
  //     }
  //   }
  // }

  ////////////////////////////////////////////

  submit() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        var data = {
          PatientId: +this.patientId,
          Complaint: this.disableChiefComplaint == false ? this.newComplaint : null,
          Note: this.disableNote == false ? this.newNote : null,
          Signs: this.selectedSigns,
          Allergies: this.selectedAlleries,
          Diagnoses: this.selectedDiagnoses,
          Medicines: this.selectedMedicines,
          Symptoms: this.selectedSymptoms
        }

        this.subscripe15 = this.emrService.SavePatientHistory(data).subscribe(resp => {
          if (resp.errorHappen == true)
            this.toastr.error(resp.message, "Sorry :(")
          else if (resp.errorHappen == false)
            this.toastr.success(resp.message, "Done")
        })

      },
    });
  }

}