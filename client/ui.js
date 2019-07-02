$(document).ready(function () {

  // Sidebar button click event
  $('#sidebar .list-group button').click(toggleTabs);

  // Show/Hide new payment page
  $('#new-payment-btn').click(toggleCreatePaymentPage);
  $('#cancel-newpayment-btn').click(toggleCreatePaymentPage);

  // User search
  // $('#person-search-inp').keypress(findPeopleFromSearch);

  // Sidebar toggle
  $('#sidebar-toggle').click(() => $('#sidebar').toggleClass('hide'));

  $('#payment-next-btn').click(() => $('#payment-create-page').toggleClass('hidden'));
  $('#cancel-payment-btn').click(() => $('#payment-create-page').toggleClass('hidden'));

  $('#send-btn').click(handleTransaction);

});

function toggleTabs() {
  // Hide all tabs:
  $('#main-content').children().hide();

  // Display selected tab:
  const pageID = $(this).attr('id').slice(0, -4); // Removes '-btn' from the button id
  $(`#${pageID}`).show();

  // Hide sidebar:
  $('#sidebar').toggleClass('hide');
}

function toggleCreatePaymentPage() {
  $('.from-bottom').toggleClass('hidden');
}

function handleTransaction() {
  const recipientAddress = $('#recieving-wallet-address').val();
  const amountSending = $('#num-ddollars').val();

  contract.transfer(recipientAddress, amountSending).then(() => {
    alert('Transfer completed.');
  }).catch(alert);

}