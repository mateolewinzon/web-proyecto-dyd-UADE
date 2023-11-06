const DONATION_OPTIONS = [
    {amount: 2000, description: 'Equivale a la plantación de 1 árbol nativo.', url: 'https://mpago.la/2f4xXLb'},
    {amount: 6500, description: 'Equivale a 1 módulo de restauración plantado (1 m2 - 5 plantas).', url: 'https://mpago.la/2BBn5Fj'},
    {amount: 13000, description: 'Equivale a 2 módulos de restauración plantados (2 m2 - 10 plantas).', url: 'https://mpago.la/1KNw8g8' },
    {amount: 32500, description: 'Equivale a 5 m2 restaurados (25 plantas).', url: 'https://mpago.la/2kejRZi'},
] 

function renderDonationItem({amount, description, url}){
    return `<div class="row">
    <div class="col-xs-12 col-sm-2"><a href="${url}" target="_blank" class="light-green-labels text-decoration-none">${amount}</a></div>
    <div class="col-xs-12 col-md-10 d-flex align-items-center"><a class="text-decoration-none" href="${url}" target="_blank" ><h3 class="text-white">${description}</h3></a></div>
  </div>`
}

function loadDonationOptions(){
    let donationOptions = document.getElementById('donation-options')
    for (let i = 0; i < DONATION_OPTIONS.length; i++) {
        const option = DONATION_OPTIONS[i]
        donationOptions.innerHTML += renderDonationItem(option)
    }
}

document.addEventListener('DOMContentLoaded', loadDonationOptions)