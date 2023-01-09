function makeContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 123 456 789'

    const address = document.createElement('p');
    address.textContent = '🏠 6 Ordon Village, Southern Hyrule, Hyrule';

    const restLocation = document.createElement('img');
    restLocation.src = 'img/location.png';
    restLocation.alt = 'SSB Ultimate location';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restLocation);

    return contact;
}

function loadContact() {
    const main = document.createElement('main');
    main.textContent = '';
    main.appendChild(makeContact());
}

export default loadContact;