import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  products: any[] = [];

  allergies: Allergy[] = [];
  selectedAlleries: Allergy[] = [];
  allergiesChips: string[] = [];

  signs: Allergy[] = [];
  selectedSigns: Allergy[] = [];
  signsChips: string[] = [];

  symptoms: Allergy[] = [];
  selectedSymptoms: Allergy[] = [];
  symptomsChips: string[] = [];

  diagnoses : Allergy[] = [];
  selectedDiagnoses: Allergy[] = [];
  diagnosesChips: string[] = [];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.products.push({ Complain: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 1.", Date: "10/5/2010" });
    this.products.push({ Complain: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 2.", Date: "10/6/2010" });
    this.products.push({ Complain: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 3.", Date: "10/7/2010" });
    this.products.push({ Complain: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 4.", Date: "10/8/2010" });
    this.products.push({ Complain: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries 5.", Date: "10/9/2010" });

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
  }

  ////////////////////////////////////////////

  addChiefComplain() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }

  deleteComplain(Complain){

  }
  ////////////////////////////////////////////

  addNote() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
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

  onSelectAllergy(allergysSelected: Allergy[]){
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

  onSelectSign(signsSelected: Sign[]){
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
  
    onSelectSymptom(symptomsSelected: Sign[]){
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
      
        onSelectDiagnosis(diagnosesSelected: Diagnosis[]){
          this.diagnosesChips = [];
          diagnosesSelected.forEach(element => {
            this.diagnosesChips.push(element.name);
          });
      
          this.diagnosesChips = [...this.diagnosesChips];
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

interface Symptom{
  name: string,
  id: number
}

interface Diagnosis{
  name: string,
  id: number
}