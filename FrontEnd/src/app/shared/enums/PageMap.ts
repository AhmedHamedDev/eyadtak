import { Abilities } from './Abilities'

export abstract class PageMap {
    public static pages = [
            { url: "change-password", abilitiesIds: [Abilities.Change_Password] },
            { url: "roles", abilitiesIds: [Abilities.Get_Roles] },
            { url: "patient", abilitiesIds: [Abilities.Get_Patient_Info] },
            { url: "patients", abilitiesIds: [Abilities.Get_Patients] },
        ]
}