// membuat fungsi yang akan memunculkan modal

const showModal = () => {

    // kita akan ambil element yang akan di show
    let modal = document.querySelector('.modalmenu')

    // kita atur style  dari aeleement tersebut
    // jadikan dia terkihat 

    modal.style.display = 'flex'
}
//kita buat fungsi yang akan di hide element modal 
const hideModal = () => {
    //kita ambil element yang akan di hide 
    let modal = document.querySelector('.modalmenu')

    //kita atur style dari element tersebut
    //jadikan dia element tersembunyi
    modal.style.display = 'none'
}

//kita buat sebuah fungsi yang akan hide about alert
const hideaboutalert = () => {
    //kita ambil element yang akan di hide
    let AboutAlert = document.querySelector('.aboutAlert')

    //kita atur element dari element tersebut jadikan tersembunyi
    AboutAlert.style.display = 'none'
}