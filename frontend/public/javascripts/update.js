var updateModal = document.getElementById('updateModal')

var deleteModal = document.getElementById('deleteModal')

updateModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var itemId = button.getAttribute('item-id')
  var itemName = button.getAttribute('item-name')
  var itemPrice = button.getAttribute('item-price')

  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = updateModal.querySelector('.modal-title')
  var idInput = updateModal.querySelector('.modal-body input#itemId')
  var nameInput = updateModal.querySelector('.modal-body input#updateName')
  var priceInput = updateModal.querySelector('.modal-body input#updatePrice')

  modalTitle.textContent = 'Update item-id ' + itemId
  idInput.value = itemId
  nameInput.value = itemName
  priceInput.value = itemPrice
  
})

deleteModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var itemId = button.getAttribute('item-id')

  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = deleteModal.querySelector('.modal-title')
  var idInput = deleteModal.querySelector('.modal-body input#itemId')

  modalTitle.textContent = 'Confirm delete item-id ' + itemId + '?'
  idInput.value = itemId
  
})
