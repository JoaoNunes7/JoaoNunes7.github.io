(function($) {
  var data =  [
    {
        id: -1,
        text:'Ciencias',
        children:
        [
            {id:0, text:'Quimica'},
            {id:1, text:'Fisica'},
            {id:2, text:'Engenharia'},
            {id:3, text:'Matematica'},
            {id:4, text:'Informatica'}
        ]
    },
    {
        id: -1,
        text:'Linguas e Humanidade',
        children:
        [
          {id:9, text:'Portugues'},
          {id:5, text:'Direito'},
          {id:6, text:'Historia'},
          {id:7, text:'Francês'},
          {id:8, text:'Sociologia'}
        ]
    }
];



  if ($(".js-example-basic-multiple").length) {
    $(".js-example-basic-multiple").select2({
  data: data
});
  }
})(jQuery);


$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(button.data('pnome') +' ' + button.data('snome'))
  modal.find('.modal-body #pnome').val(button.data('pnome'))
  modal.find('.modal-body #snome').val(button.data('snome'))
  modal.find('.modal-body #email').val(button.data('email'))
  modal.find('.modal-body #nmec').val(button.data('nmec'))
  $('.js-example-basic-multiple').val(button.data('cadeiras'));
  $('.js-example-basic-multiple').trigger('change');
  modal.find('.modal-body #codigoID').text(button.data('codigoid'))


})