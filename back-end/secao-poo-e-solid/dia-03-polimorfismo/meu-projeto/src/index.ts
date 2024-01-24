import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();

clube.adicionarQuadra(quadraFutebol);

const dataReserva = new Date('2022-12-28');

const reservarQuadraFutebol = clube.buscarQuadra<QuadraFutebol>(0).reservar(dataReserva);