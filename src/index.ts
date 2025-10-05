import { ContactList } from "./models/ContactList";
import { ContactView } from "./views/ContactView";
import { ContactController } from "./controllers/ContactController";

const contactList = new ContactList();
const contactView = new ContactView();
const contactController = new ContactController(contactList, contactView);

console.log("- Lista Inicial -");
contactController.showContacts();

console.log("- Agregando Contactos -");
contactController.add("Lisandro Cantarero", "lisandro@gmail.com", "98716895");
contactController.add("Juana Cubana", "juana@gmail.com", "98631578");

console.log("- Lista Actualizada -");
contactController.showContacts();

console.log("- Eliminando Contacto -");
const contactos = contactList.getContacts();
if (contactos.length > 0) {
  const idAEliminar = contactos[0].id;
  contactController.remove(idAEliminar);
}

console.log("- Intentando eliminar contacto inexistente -");
contactController.remove("ID_INEXISTENTE");

console.log("- Lista Final de Contactos -");
contactController.showContacts();
