const DONATION_OPTIONS = [
    {amount: 2000, description: 'Equivale a la plantación de 1 árbol nativo.'},
    {amount: 6500, description: 'Equivale a 1 módulo de restauración plantado (1 m2 - 5 plantas).'},
    {amount: 13000, description: 'Equivale a 2 módulos de restauración plantados (2 m2 - 10 plantas)..'},
    {amount: 32500, description: 'Equivale a 5 m2 restaurados (25 plantas).'},
] 

function renderDonationItem({amount, description}){
    return `<div class="row">
    <div class="col-xs-12 col-sm-2"><div class="light-green-labels">${amount}</div></div>
    <div class="col-xs-12 col-md-10 d-flex align-items-center"><h4 class="text-white">${description}</h4></div>
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