export class Navbar{
    public message: NavbarMessage;
    public errorHappen: boolean;
}

export class NavbarMessage {
    public level0: NavbarElement[];
    public level1: NavbarElement[];
}

export class NavbarElement{
    public id: number;
    public Name: string;
    public Icon: string;
    public parentId: number;
    public levelInMenu: number;
    public link: string;
    public abilityId: number;
}