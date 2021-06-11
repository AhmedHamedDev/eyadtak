import { Abilities } from './Abilities'

export abstract class PageMap {
    public static pages = [
            { url: "change-password", abilitiesIds: [Abilities.Change_Password] },
            { url: "roles", abilitiesIds: [Abilities.Get_Roles] },
            { url: "patient", abilitiesIds: [Abilities.Get_Patient_Info] },
            { url: "patients", abilitiesIds: [Abilities.Patients_Page] },
            { url: "sessions", abilitiesIds: [Abilities.Get_Patient_Sessions] },
            { url: "session-details", abilitiesIds: [Abilities.Get_Session_Details] },
        ]
}