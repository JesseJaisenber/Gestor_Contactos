import { Contact } from "./Contact";

export class ContactList {
  private contacts: Contact[] = [];


  getContacts(): Contact[] {
    return this.contacts;
  }

  
  addContact(nombre: string, email: string, telefono: string): Contact {
    const nuevoContacto: Contact = {
      id: crypto.randomUUID(), 
      nombre,
      email,
      telefono,
    };

    this.contacts.push(nuevoContacto);
    return nuevoContacto;
  }

 
  deleteContact(id: string): boolean {
    const index = this.contacts.findIndex(contact => contact.id === id);

    if (index === -1) {
      return false;
    }

    this.contacts.splice(index, 1);
    return true;
  }
}
