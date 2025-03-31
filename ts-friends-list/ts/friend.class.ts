export class Friend {
  id: number;
  name: string;
  age: number;
  email: string;
  bff: boolean;

  constructor(
    id: number = 0,
    name: string = "",
    age: number = 0,
    email: string = "",
    bff: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.bff = bff;
  }
  details(): string {
    return `${this.name}\t${this.age}\t${this.email}\t${this.bff}`;
  }
}
