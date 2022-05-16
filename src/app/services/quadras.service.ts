import { Injectable } from '@angular/core';
import { Quadra } from '../model/quadra.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import id from 'date-fns/locale/id';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuadrasService {

  constructor(private firestore: AngularFirestore) { }

  public getAll(): Observable<any>{
    return this.firestore.collection('quadras').snapshotChanges();
  }

 

  public get(id: string) {
    return this.firestore.collection('quadras')
      .doc(id).ref.get().then((quadraDocumento) => {
        if (quadraDocumento.exists) {
          const quadra = quadraDocumento.data();

          return {
            id: quadraDocumento.id,
            nome: quadra['nome'],
            logradouro: quadra['logradouro'],
            bairro: quadra['bairro'],
            cidade: quadra['cidade'],
            esporte: quadra['esporte'],
            valorHora: quadra['valorHora'],
            telefone: quadra['telefone'],
            descricao: quadra['descricao']
          };
        }

        return new Quadra();
      });
  }

  public add(quadra: Quadra) {
    delete quadra.id;
    return this.firestore.collection('quadras').add({
      ...quadra
    });
  }

  public edit(quadra: Quadra, id: String) {
    return this.firestore.doc('quadras/' + id).update({
      ...quadra
    });
  }

  public delete(id: string) {
    return this.firestore.doc('quadras/' + id).delete();
  }
}