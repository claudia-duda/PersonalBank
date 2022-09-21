export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: number | string;
  data?: string;
  tipo: string;
  descricao?: string;
}

export interface TransferenciaResolved {
  transferencia: Transferencia;
  error?: any;
}
