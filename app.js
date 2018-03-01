$(document).ready(function () {

  // SET INITIAL UI STATE
  $('#stop-tick-btn').attr('disabled', true)

  $('#dump-config-btn').click(dumpConfigBtnClick)
  $('#clear-btn').click(clearBtnClick)
  $('#one-tick-btn').click(oneTickBtnClick)
  $('#start-tick-btn').click(startTickBtnClick)
  $('#stop-tick-btn').click(stopTickBtnClick)

  // BUTTON EVENT HANDLERS
  function stopTickBtnClick(event) {

    $('#dump-config-btn').removeAttr('disabled');
    $('#clear-btn').removeAttr('disabled');
    $('#one-tick-btn').removeAttr('disabled');
    $('#start-tick-btn').removeAttr('disabled');

    $('#stop-tick-btn').attr('disabled', false)

    event.preventDefault()
    console.log('stopBtnClick()')
  }

  function oneTickBtnClick(event) {
    event.preventDefault()
    console.log('oneTickBtnClick()')
  }

  function startTickBtnClick(event) {
    event.preventDefault()

    $('#start-tick-btn').attr('disabled', true)
    $('#stop-tick-btn').removeAttr('disabled')

    console.log('startTickBtnClick()')
  }

  function clearBtnClick(event) {
    event.preventDefault()
    console.log('clearBtnClick()')
  }

  function dumpConfigBtnClick(event) {
    event.preventDefault()
    console.log('dumpConfigBtnClick()')
  }
})
