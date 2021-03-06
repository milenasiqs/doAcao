import { Injectable } from '@angular/core';
import { FichaMedica } from './models/ficha-medica';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class FichasMedicasService {

  private fichaMedicaCollection: AngularFirestoreCollection<any>;

  constructor(private servicoFirebase: AngularFirestore) {
    this.fichaMedicaCollection = this.servicoFirebase.collection('fichas-medicas');
  }

  fichasMedicas: FichaMedica[];

  adicionarFichaMedicaFirebase(fichaMedica: FichaMedica) {
    this.fichaMedicaCollection.add(fichaMedica.toDocument()).then(
      resultado => {
        fichaMedica.id = resultado.id;
      });
  }

  listarTodos(){
    let resultados: any[] = [];
    let fichasMedicas = new Observable<any[]>(observer => {
      this.fichaMedicaCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      }); });

    return fichasMedicas;
  }
  
  filtrarFichasMedicasPorCPF(cpf) {
    return new Observable<FichaMedica[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.fichasMedicas = meuObservable as FichaMedica[]
          let fichasFiltradas: any[] = [];

          for (let i = 0; i < this.fichasMedicas.length; i++) {
            if (this.fichasMedicas[i].cpfDoador == cpf) { 
              fichasFiltradas.push(this.fichasMedicas[i]);
            }
          }
          observer.next(fichasFiltradas);
          observer.complete();
          
          return fichasFiltradas;
        });
    });

  }

  apagarFichaMedicaFirebase(fichaMedica): Promise<void> {
    return this.fichaMedicaCollection.doc(fichaMedica.id).delete();
  }


}