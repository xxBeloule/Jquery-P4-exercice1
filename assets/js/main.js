// $(document).ready(function () {
//   var pierre = $('#pierre').val();
//   var feuille = $('#feuille').val();
//   var ciseaux = $('#ciseaux').val();
// var form = [$('#pierre').val()];
// alert(form);
//   var choixOrdi = Math.random();
//   if (choixOrdi < 0.34) {
//     choixOrdi = "pierre";}
//     else if(choixOrdi <= 0.67) {
//       choixOrdi = "feuille";}
//       else {
//         choixOrdi = "ciseaux";}
//         console.log("Ordinateur : " + choixOrdi);
//         $('button').click(function () {
//           if (choixOrdi == "ciseaux" && form.val(ciseaux)) {
//             alert('BELAL');
//           }
//         });
//
//       })
// $(document).ready(function() {
//   var form = [$('#pierre').val(),$('#feuille').val(),$('#ciseaux').val()];
//   var choixOrdi = form[Math.floor(Math.random() * form.length)];
//   console.log(choixOrdi);
//   $('#button').click(function () {
//   if (choixOrdi == $('#form').val()) {
//     alert('Vous avez choisi : '+ $('#form').val() + '\nL\'ordi a choisit : '+ choixOrdi + '\nEgalité');
//   } else  if (choixOrdi == ){
//     alert('Vous avez choisi : '+ $('#form').val() + '\nL\'ordi a choisit : '+ choixOrdi + '\nPERDU');
//   }
// })
// })

$(document).ready(function() {
  var form = [$('#pierre').val(),$('#feuille').val(),$('#ciseaux').val()];
  var choixOrdi = form[Math.floor(Math.random() * form.length)];
  console.log(choixOrdi);
  $('#button').click(function () {
    choixUser = $('#form').val();
    switch (choixUser) {
      case 'pierre':
      if ( choixOrdi =="pierre" ){
        alert('Egalité');
      }else{
        if ( choixOrdi =="ciseaux" ){
        alert('Gagner');
        }else {
          alert('Perdu');
        }
      }
      break;
        case 'feuille':
        if ( choixOrdi =="pierre" ){
          alert('Gagner');
        }else{
          if ( choixOrdi =="ciseaux" ){
          alert('Perdu');
          }else {
            alert('Egalité');
          }
        }
        break;
        case 'ciseaux':
        if ( choixOrdi =="pierre" ){
          alert('Perdu');
        }else{
          if ( choixOrdi =="ciseaux" ){
          alert('Egalité');
          }else {
            alert('Gagner');
          }
        }
        break;
}
choixOrdi = form[Math.floor(Math.random() * form.length)];
console.log(choixOrdi);
  })
})
