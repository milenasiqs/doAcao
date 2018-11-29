import { Usuario } from "./usuario";
import { Observable } from "../../../node_modules/rxjs";

export interface RequisicaoDeExames{

    idDoador: String;
    id?:String;
    
    numeroDocumentoDoador: String;
    tipoDocumentoDoador: String;
    orgaoExpeditorDoador: String;
    nomePaiDoador: String;
    nomeMaeDoador: String;

    tecnicoResponsavel: String;
    etiquetaDaAmostra: String;

} 
