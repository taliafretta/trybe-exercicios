import { IAgenda } from './interfaces/IAgenda';

class abstract Quadra {

  protected abstract reservar<T>(horaDaReserva: Date): IAgenda<T>;


 }

export default Quadra;