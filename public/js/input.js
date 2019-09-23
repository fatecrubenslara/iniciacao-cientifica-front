$('.input-primary > input').focus((el) => {
    $(el.target).parent().addClass('focusInput')
})
$('.input-primary > input').blur((el) => {
    console.log(el.target.value)
    if(el.target.value.trim() == '')
        $(el.target).parent().removeClass('focusInput')
})

