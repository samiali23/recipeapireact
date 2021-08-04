document.querySelector('#show-me-button').addEventListener('click', showHoroscope)


//check users birthday with zodiac calendar
//output users zodiac to the document

//if 03/21 - 04/19 === Aries
//if 04/20 - 05/20 === Taurus
//if 05/21 - 6/20 === Gemini
//if 6/21 - 7/22 === Cancer
//if 7/23 - 8/22 === Leo
//if 8/23 - 9/22 === Virgo
//if 9/23 - 10/22 === Libra
//if 10/23 - 11/21 === Scorpio
//if 11/22 - 12/21 === Sagittarius
//if 12/22 - 01/19 === Capricorn
//if 01/20 - 02/18 === Aquarius
//if 02/19 - 03/20 === Pisces
// let userMonth = document.querySelector('#month').value
// let userDay = document.querySelector('#day').value

function showHoroscope(){
    let month = document.querySelector('#month').value;
    // console.log(typeof month);
    let day = parseInt(document.querySelector('#day').value);
    // console.log(typeof day);

   if (month === 'March' && day >= 21){
       console.log('Aries')
       document.querySelector('#quote').innerText = 'Resists the urge to flip over the table when the wrong dish arrives'
       document.querySelector('#sign-signature').innerText = '- ARIES'
   } else if (month === 'April' && day <= 19){
       console.log('Aries')
       document.querySelector('#quote').innerText = 'Resists the urge to flip over the table when the wrong dish arrives'
       document.querySelector('#sign-signature').innerText = '- ARIES'

   } else if (month === 'April' && day >= 20){
       console.log('Taurus')
       document.querySelector('#quote').innerText = '"I\'ll have my usual"'
       document.querySelector('#sign-signature').innerText = '- TAURUS'
   } else if (month === 'May' && day <= 20){
       console.log('Taurus')
       document.querySelector('#quote').innerText = '"I\'ll have my usual"'
       document.querySelector('#sign-signature').innerText = '- TAURUS'

   } else if (month === 'May' && day >= 21){
       console.log('Gemini')
       document.querySelector('#quote').innerText = 'Can\'t decide what to order so asks the waiter to "surprise me!"'
       document.querySelector('#sign-signature').innerText = '- GEMINI'
   } else if (month === 'June' && day <= 20){
       console.log('Gemini')
       document.querySelector('#quote').innerText = 'Can\'t decide what to order so asks the waiter to "surprise me!"'
       document.querySelector('#sign-signature').innerText = '- GEMINI'

   } else if (month === 'June' && day >= 21){
       console.log('Cancer')
       document.querySelector('#quote').innerText = 'Gathers up everyone\'s dirty plates and silverware for the waiter'
       document.querySelector('#sign-signature').innerText = '- CANCER'
   } else if (month === 'July' && day <= 22){
       console.log('Cancer')
       document.querySelector('#quote').innerText = 'Gathers up everyone\'s dirty plates and silverware for the waiter'
       document.querySelector('#sign-signature').innerText = '- CANCER'

   } else if (month === 'July' && day >= 23){
    console.log('Leo')
    document.querySelector('#quote').innerText = 'Tries to sit at the head of a circular table'
    document.querySelector('#sign-signature').innerText = '- LEO'
   } else if (month === 'August' && day <= 22 ){
    console.log('Leo')
    document.querySelector('#quote').innerText = 'Tries to sit at the head of a circular table'
    document.querySelector('#sign-signature').innerText = '- LEO'
    
   } else if (month === 'August' && day >= 23){
    console.log('Virgo')
    document.querySelector('#quote').innerText = '"Could\'ve done with a tad less rosemary."'
    document.querySelector('#sign-signature').innerText = '- VIRGO'
   } else if (month === 'September' && day <= 22){
    console.log('Virgo')
    document.querySelector('#quote').innerText = '"Could\'ve done with a tad less rosemary."'
    document.querySelector('#sign-signature').innerText = '- VIRGO'

   } else if (month === 'September' && day >= 23 ){
    console.log('Libra')
    document.querySelector('#quote').innerText = '*waiter introduces himself* "Guys, I think the waiter is flirting with me."'
    document.querySelector('#sign-signature').innerText = '- LIBRA'
   } else if (month === 'October' && day <= 22){
    console.log('Libra')
    document.querySelector('#quote').innerText = '*waiter introduces himself* "Guys, I think the waiter is flirting with me."'
    document.querySelector('#sign-signature').innerText = '- LIBRA'

   } else if (month === 'October' && day >= 23 ){
    console.log('Scorpio')
    document.querySelector('#quote').innerText = '*gazes into the romantic candlelight and imagines who they\'d burn*'
    document.querySelector('#sign-signature').innerText = '- SCORPIO'
   } else if (month === 'November' && day <= 21){
    console.log('Scorpio')
    document.querySelector('#quote').innerText = '*gazes into the romantic candlelight and imagines who they\'d burn*'
    document.querySelector('#sign-signature').innerText = '- SCORPIO'

   } else if (month === 'November' && day >= 22 ){
    console.log('Sagittarius')
    document.querySelector('#quote').innerText = '"I had cacio e pepe like this when I lived in Rome for 3 weeks"'
    document.querySelector('#sign-signature').innerText = '- SAGITTARIUS'
   } else if (month === 'December' && day <= 21){
    console.log('Sagittarius')
    document.querySelector('#quote').innerText = '"I had cacio e pepe like this when I lived in Rome for 3 weeks"'
    document.querySelector('#sign-signature').innerText = '- SAGITTARIUS'

   } else if (month === 'December' && day >= 22 ){
    console.log('Capricorn')
    document.querySelector('#quote').innerText = 'Configures a way to split the bill 14 ways'
    document.querySelector('#sign-signature').innerText = '- CAPRICORN'
   } else if (month === 'January' && day <= 19){
    console.log('Capricorn')
    document.querySelector('#quote').innerText = 'Configures a way to split the bill 14 ways'
    document.querySelector('#sign-signature').innerText = '- CAPRICORN'

   } else if (month === 'January' && day >= 20){
    console.log('Aquarius')
    document.querySelector('#quote').innerText = 'Overhears waiter being mistreated by another table and leaps to their defense'
    document.querySelector('#sign-signature').innerText = '- AQUARIUS'
   } else if (month === 'February' && day <= 18){
    console.log('Aquarius')
    document.querySelector('#quote').innerText = 'Overhears waiter being mistreated by another table and leaps to their defense'
    document.querySelector('#sign-signature').innerText = '- AQUARIUS'

   } else if (month === 'February' && day >= 19){
    console.log('Pisces')
    document.querySelector('#quote').innerText = '"I looove the vibes in here" *forgets to look at the menu*'
    document.querySelector('#sign-signature').innerText = '- PISCES'
   } else if (month === 'March' && day <= 20 ){
    console.log('Pisces')
    document.querySelector('#quote').innerText = '"I looove the vibes in here" *forgets to look at the menu*'
    document.querySelector('#sign-signature').innerText = '- PISCES'
   }
}
