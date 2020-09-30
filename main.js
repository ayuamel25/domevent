// membuat fungsi yang akan memunculkan modal

const showModal = () => {

    // kita akan ambil element yang akan di show
    let modal = document.querySelector('.modalmenu')

    // kita atur style  dari aeleement tersebut
    // jadikan dia terkihat 

    modal.style.display = 'flex'
}

const hideModal = () => {

    let modal = document.querySelector('.modalmenu')

    modal.style.display = 'none'
}