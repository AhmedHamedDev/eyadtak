import { Allergy } from "./Allergy";
import { Diagnosis } from "./Diagnosis";
import { Medicine } from "./Medicine";
import { Sign } from "./Sign";
import { Symptom } from "./Symptom";

export class BasicData{
    public signs: Sign[];
    public allergies: Allergy[];
    public diagnoses: Diagnosis[];
    public symptoms: Symptom[];
    public medicines: Medicine[];
}