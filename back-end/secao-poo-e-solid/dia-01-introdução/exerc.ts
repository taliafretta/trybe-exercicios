class escola {
  private _matrícula: string;
  private _nome: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];
}

constructor(matrícula: string, nome: string) {
  this._matrícula = matrícula;
  this._nome = nome;
  this._notasProvas = [];
  this._notasTrabalhos = [];
}

get matricula(): string {
  return this._matrícula;
}

set matricula(matrícula: string) {
  this._matrícula = value;
}

get nome(): string {
  return this._nome;
} 

