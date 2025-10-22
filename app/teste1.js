import { Button } from 'react-native';
import React from 'react';

export default function teste1() {
  return (
    <Button
      title="Salvar Usuário"
      onPress={salvarUsuario} // chama a função quando o botão for pressionado
    />
  );
}
