// Test.js
import { db } from ".../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function salvarUsuario() { // agora está exportando
  try {
    await setDoc(doc(db, "usuarios", "teste123"), {
      nome: "Gabriel",
      email: "teste@email.com",
    });
    console.log("Usuário salvo!");
  } catch (error) {
    console.log("Erro ao salvar:", error);
  }
}
