import Quadra from "./Quadra";
import { IFutebol } from "./interfaces/IFutebol";
import { IAgenda } from "./interfaces/IAgenda";
import normas from "./normas/normasDeUso";

class QuadraFutebol extends Quadra {
 public futebolData: IFutebol = normas.futebol

 public reservar<IFutebol>(horaDaReserva: Date): IAgenda<IFutebol> {
  const protocolo = (Math.random() + 1).toString(30).substring(3);
  return {
    protocolo,
    data: horaDaReserva,
    regras: this.futebolData as unknown as IFutebol,
  }
 }
 
}

export default QuadraFutebol;