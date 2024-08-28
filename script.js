let contacts = [
    { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
    { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" }
];

const displayContacts = () => {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.textContent = `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`;
        contactList.appendChild(contactItem);
    });
};

const addContact = () => {
    const name = prompt('Enter the contact\'s name:');
    const phone = prompt('Enter the contact\'s phone:');
    const email = prompt('Enter the contact\'s email:');
    if (name && phone && email) {
        contacts.push({ name, phone, email });
    }
};

const findContact = (name) => {
    return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
};

const displayContact = (contact) => {
    if (contact) {
        alert(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    } else {
        alert('Contact not found.');
    }
};

const searchContact = (name, callback) => {
    const contact = findContact(name);
    callback(contact);
};

setInterval(() => {
    console.log(`Total contacts: ${contacts.length}`);
}, 5000);

const changeBackgroundColor = () => {
    const colors = ['#FFFFFF', '#C0C0C0', '#808080', '#000000', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'];
    let index = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 5000);
};

const manageContacts = () => {
    let keepGoing;
    do {
        const action = prompt('Enter "add" "find" "quit"').toLowerCase();
        if (action === 'add') {
            addContact();
            setTimeout(displayContacts, 1000); 
        } else if (action === 'find') {
            const name = prompt('Enter the name of the contact to find:');
            searchContact(name, displayContact);
        } else if (action === 'quit') {
            keepGoing = false;
        } else {
            alert('Invalid action.');
        }
    } while (keepGoing !== false);
};

window.onload = () => {
    displayContacts();
    changeBackgroundColor();
};
