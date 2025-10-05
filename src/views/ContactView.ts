import { Contact } from "../models/Contact";

export class ContactView {

  displayContacts(contacts: Contact[]): void {
    if (contacts.length === 0) {
      console.log("No hay contactos para mostrar.");
      return;
    }

    console.log("- Lista de Contactos -");
    contacts.forEach(contact => {
      console.log(
        `[${contact.id}] ${contact.nombre} - Email: ${contact.email} - Tel: ${contact.telefono}`
      );
    });
    console.log("--------------------------------");
  }


  displayMessage(message: string): void {
    console.log(message);
  }
}
