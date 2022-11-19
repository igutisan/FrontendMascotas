import { ModeloUsuario } from './../modelos/usuario.modelo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
  pure: false
})
export class PipesPipe implements PipeTransform {

  transform(usuarios: ModeloUsuario[], filterText: string) {
    console.log('pipe esta llamda');
    if(usuarios.length === 0 || filterText === ''){
      return usuarios;
    }else{
      return usuarios.filter((usuarios)=>
      {
        return usuarios.Nombre?.toLocaleLowerCase() === filterText.toLocaleLowerCase()
      })
    }

  }

}
