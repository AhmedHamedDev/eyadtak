import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  rowGroupMetadata: any;

  complaints: any[] = [];
  newComplaint: string;

  notes: any[] = [];
  newNote: string;

  allergies: Allergy[] = [];
  selectedAlleries: Allergy[] = [];
  allergiesChips: string[] = [];

  signs: Allergy[] = [];
  selectedSigns: Allergy[] = [];
  signsChips: string[] = [];

  symptoms: Allergy[] = [];
  selectedSymptoms: Allergy[] = [];
  symptomsChips: string[] = [];

  diagnoses: Allergy[] = [];
  selectedDiagnoses: Allergy[] = [];
  diagnosesChips: string[] = [];

  medicinesHistory: Medicine[] = [];
  medicines: Medicine[] = [];
  selectedMedicines: Medicine[] = [];
  medicinesChips: string[] = [];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.complaints.push({ complaint: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 1.", date: "10/5/2010", isNew: false });
    this.complaints.push({ complaint: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 2.", date: "10/6/2010", isNew: false });
    this.complaints.push({ complaint: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 3.", date: "10/7/2010", isNew: false });
    this.complaints.push({ complaint: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 4.", date: "10/8/2010", isNew: false });
    this.complaints.push({ complaint: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 5.", date: "10/9/2010", isNew: false });

    this.notes.push({ note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 1.", date: "10/5/2010", isNew: false });
    this.notes.push({ note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 2.", date: "10/6/2010", isNew: false });
    this.notes.push({ note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 3.", date: "10/7/2010", isNew: false });
    this.notes.push({ note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 4.", date: "10/8/2010", isNew: false });
    this.notes.push({ note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 5.", date: "10/9/2010", isNew: false });

    this.medicinesHistory.push({ name: "Australia", date: "10/5/2010", id: 1 });
    this.medicinesHistory.push({ name: "Brazil", date: "10/5/2010", id: 2 });
    this.medicinesHistory.push({ name: "China", date: "10/6/2010", id: 3});
    this.medicinesHistory.push({ name: "Egypt", date: "10/6/2010", id: 4});
    this.medicinesHistory.push({ name: "France", date: "10/6/2010", id: 5});

    this.allergies = [
      { name: "Australia", id: 1 },
      { name: "Brazil", id: 2 },
      { name: "China", id: 3 },
      { name: "Egypt", id: 4 },
      { name: "France", id: 5 },
      { name: "Germany", id: 6 },
      { name: "India", id: 7 },
      { name: "Japan", id: 8 },
      { name: "Spain", id: 9 },
      { name: "United States", id: 10 }
    ];

    this.selectedAlleries = [
      { name: "Australia", id: 1 },
      { name: "France", id: 5 },
    ]

    this.allergiesChips = ["Australia", "France"]

    this.signs = [
      { name: "Australia", id: 1 },
      { name: "Brazil", id: 2 },
      { name: "China", id: 3 },
      { name: "Egypt", id: 4 },
      { name: "France", id: 5 },
      { name: "Germany", id: 6 },
      { name: "India", id: 7 },
      { name: "Japan", id: 8 },
      { name: "Spain", id: 9 },
      { name: "United States", id: 10 }
    ];

    this.selectedSigns = [
      { name: "Australia", id: 1 },
      { name: "France", id: 5 },
    ]

    this.signsChips = ["Australia", "France"]

    this.symptoms = [
      { name: "Australia", id: 1 },
      { name: "Brazil", id: 2 },
      { name: "China", id: 3 },
      { name: "Egypt", id: 4 },
      { name: "France", id: 5 },
      { name: "Germany", id: 6 },
      { name: "India", id: 7 },
      { name: "Japan", id: 8 },
      { name: "Spain", id: 9 },
      { name: "United States", id: 10 }
    ];

    this.selectedSymptoms = [
      { name: "Australia", id: 1 },
      { name: "France", id: 5 },
    ]

    this.symptomsChips = ["Australia", "France"]

    this.diagnoses = [
      { name: "Australia", id: 1 },
      { name: "Brazil", id: 2 },
      { name: "China", id: 3 },
      { name: "Egypt", id: 4 },
      { name: "France", id: 5 },
      { name: "Germany", id: 6 },
      { name: "India", id: 7 },
      { name: "Japan", id: 8 },
      { name: "Spain", id: 9 },
      { name: "United States", id: 10 }
    ];

    this.selectedDiagnoses = [
      { name: "Australia", id: 1 },
      { name: "France", id: 5 },
    ]

    this.diagnosesChips = ["Australia", "France"]

    this.medicines = [
      { name: "Australia", id: 1, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "Brazil", id: 2, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "China", id: 3, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "Egypt", id: 4, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "France", id: 5, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "Germany", id: 6, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "India", id: 7, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "Japan", id: 8, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "Spain", id: 9, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "United States", id: 10, date: this.formatDate(new Date(), "dd/mm/yyyy") }
    ];

    this.selectedMedicines = [
      { name: "Australia", id: 1, date: this.formatDate(new Date(), "dd/mm/yyyy") },
      { name: "France", id: 5, date: this.formatDate(new Date(), "dd/mm/yyyy") },
    ]

    this.medicinesChips = ["Australia", "France"]

    this.updateRowGroupMetaData();
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

  addChiefComplaint() {
    if (this.newComplaint != "" && this.newComplaint != null) {
      this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.complaints.unshift({ complaint: this.newComplaint, date: this.formatDate(new Date(), "dd/mm/yyyy"), isNew: true })
        },
      });
    }
  }

  deleteComplaint(Complaint) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let matches: any[] = this.complaints.filter(x => x.complaint == Complaint.complaint);
        const index = this.complaints.indexOf(matches[0]);
        if (index > -1) {
          this.complaints.splice(index, 1);
        }
      },
    });
  }
  ////////////////////////////////////////////

  addNote() {
    if (this.newNote != "" && this.newNote != null) {
      this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.notes.unshift({ note: this.newNote, date: this.formatDate(new Date(), "dd/mm/yyyy"), isNew: true })
        },
      });
    }
  }

  deleteNote(Note) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let matches: any[] = this.notes.filter(x => x.note == Note.note);
        const index = this.notes.indexOf(matches[0]);
        if (index > -1) {
          this.notes.splice(index, 1);
        }
      },
    });
  }
  ////////////////////////////////////////////

  addAllergy(allergy) {
    let matches: Allergy[] = this.allergies.filter(x => x.name == allergy);
    if (matches.length < 1) {
      this.allergies.push({ name: allergy, id: 0 });
      this.selectedAlleries.push({ name: allergy, id: 0 });
    }
    else
      this.allergies.push(matches[0]);

    this.allergies = [...this.allergies]
  }

  removeAllergy(allergy) {
    let matches: Allergy[] = this.selectedAlleries.filter(x => x.name == allergy);
    const index = this.selectedAlleries.indexOf(matches[0]);
    if (index > -1) {
      this.selectedAlleries.splice(index, 1);
    }

    this.allergies = [...this.allergies]
  }

  filterAllergies(allergy) {
    console.log(allergy)
  }

  onSelectAllergy(allergysSelected: Allergy[]) {
    this.allergiesChips = [];
    allergysSelected.forEach(element => {
      this.allergiesChips.push(element.name);
    });

    this.allergiesChips = [...this.allergiesChips];
  }

  ////////////////////////////////////////////

  addSign(sign) {
    let matches: Sign[] = this.signs.filter(x => x.name == sign);
    if (matches.length < 1) {
      this.signs.push({ name: sign, id: 0 });
      this.selectedSigns.push({ name: sign, id: 0 });
    }
    else
      this.signs.push(matches[0]);

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
    console.log(sign)
  }

  onSelectSign(signsSelected: Sign[]) {
    this.signsChips = [];
    signsSelected.forEach(element => {
      this.signsChips.push(element.name);
    });

    this.signsChips = [...this.signsChips];
  }

  ////////////////////////////////////////////

  addSymptom(symptom) {
    let matches: Symptom[] = this.symptoms.filter(x => x.name == symptom);
    if (matches.length < 1) {
      this.symptoms.push({ name: symptom, id: 0 });
      this.selectedSymptoms.push({ name: symptom, id: 0 });
    }
    else
      this.symptoms.push(matches[0]);

    this.symptoms = [...this.symptoms]
  }

  removeSymptom(symptom) {
    let matches: Symptom[] = this.selectedSymptoms.filter(x => x.name == symptom);
    const index = this.selectedSymptoms.indexOf(matches[0]);
    if (index > -1) {
      this.selectedSymptoms.splice(index, 1);
    }

    this.symptoms = [...this.symptoms]
  }

  filterSymptoms(symptom) {
    console.log(symptom)
  }

  onSelectSymptom(symptomsSelected: Sign[]) {
    this.symptomsChips = [];
    symptomsSelected.forEach(element => {
      this.symptomsChips.push(element.name);
    });

    this.symptomsChips = [...this.symptomsChips];
  }

  ////////////////////////////////////////////

  addDiagnosis(diagnosis) {
    let matches: Diagnosis[] = this.diagnoses.filter(x => x.name == diagnosis);
    if (matches.length < 1) {
      this.diagnoses.push({ name: diagnosis, id: 0 });
      this.selectedDiagnoses.push({ name: diagnosis, id: 0 });
    }
    else
      this.diagnoses.push(matches[0]);

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
    console.log(diagnosis)
  }

  onSelectDiagnosis(diagnosesSelected: Diagnosis[]) {
    this.diagnosesChips = [];
    diagnosesSelected.forEach(element => {
      this.diagnosesChips.push(element.name);
    });

    this.diagnosesChips = [...this.diagnosesChips];
  }

  ////////////////////////////////////////////

  addMedicine(medicine) {
    let matches: Medicine[] = this.medicines.filter(x => x.name == medicine);
    if (matches.length < 1) {
      this.medicines.push({ name: medicine, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
      this.selectedMedicines.push({ name: medicine, id: 0, date: this.formatDate(new Date(), "dd/mm/yyyy") });
    }
    else
      this.medicines.push(matches[0]);

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

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.medicinesHistory) {
      for (let i = 0; i < this.medicinesHistory.length; i++) {
        let rowData = this.medicinesHistory[i];
        let representativeDate = rowData.date;

        if (i == 0) {
          this.rowGroupMetadata[representativeDate] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.medicinesHistory[i - 1];
          let previousRowGroup = previousRowData.date;
          if (representativeDate === previousRowGroup)
            this.rowGroupMetadata[representativeDate].size++;
          else
            this.rowGroupMetadata[representativeDate] = { index: i, size: 1 };
        }
      }
    }
  }

   ////////////////////////////////////////////

   submit(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
      },
    });
   }

}

interface Allergy {
  name: string,
  id: number
}

interface Sign {
  name: string,
  id: number
}

interface Symptom {
  name: string,
  id: number
}

interface Diagnosis {
  name: string,
  id: number
}

interface Medicine {
  name: string,
  id: number,
  date: string
}