export interface Usuario {
  id: number;
  username: string;
  senha?: string;
  tipo_usuario: string;
  nivel_acesso?: string;
  status: string;
}
