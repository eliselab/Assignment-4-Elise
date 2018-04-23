console.log ('connected')

$('.readmore').click(function(event) {
    event.preventDefault()
    $('#show-this-on-click').slideDown()
    $('.readmore').hide()
    $('.readless').show()
    // $('.readless.hide').removeClass('hide')
})

$('.readless.hide').click(function(event) {
    event.preventDefault()
    $('#show-this-on-click').slideUp()
    $('.readmore').show()
    $('.readless').hide()
})

$('.learnmore').click(function(event) {
    event.preventDefault()
    $('#learnmoretext').show()
    $('.learnmore').hide()
})


