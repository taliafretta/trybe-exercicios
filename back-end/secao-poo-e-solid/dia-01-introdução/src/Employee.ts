export default interface Employee {
  registratio: string;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string;
}