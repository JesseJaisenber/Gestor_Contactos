import { ContactList } from "../models/ContactList";
import { ContactView } from "../views/ContactView";

export class ContactController {
  constructor(
    private model: ContactList,
    private view: ContactView
  ) {}


  add(nombre: string, email: string, telefono: string): void {
    const nuevoContacto = this.model.addContact(nombre, email, telefono);
    this.view.displayMessage(`Contacto "${nuevoContacto.nombre}" agregado.`);
  }


  remove(id: string): void {
    const exito = this.model.deleteContact(id);
    if (exito) {
      this.view.displayMessage(`Contacto con ID "${id}" eliminado.`);
    } else {
      this.view.displayMessage(`No se encontró un contacto con ID "${id}".`);
    }
  }


  showContacts(): void {
    const contactos = this.model.getContacts();
    this.view.displayContacts(contactos);
  }
}
