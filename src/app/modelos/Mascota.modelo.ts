import { ModeloUsuario } from './usuario.modelo';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
export class ModeloMascota
{
    Id?: string;
    Especie?: string;
    Raza?: string;
    Edad?: number;
    Peso?: number;
    Tamano ?: number;
    Sexo ?: string;
    Foto?: string;
    Nombre?:string;
    Color?: string;
    Detalle?:string;
    Estado?:string;
    planId?:string;
    usuarioId?:string;
    plan?: ModeloPlanes;
    usuario?:ModeloUsuario;
}