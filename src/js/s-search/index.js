$(function() {
    $('#s_search').css('display', 'none')
    $('#s_searchCap').css('display', 'none')
    $('#s_search').after(`<div class="s-search__select-item"><div class="s-search__select-placeholder">${$('#s_search').children('option').eq(0).val()}</div><div id="listConstructorElementPay" class="s-search__select-wrapper display-n"></div></div>`)
    let count = $('#s_search').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#s_search').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("s-search__select-element")
        newElementBlock.id = `s-search__select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`#s-search__select-element-${i}`).attr('value', `${arrows}`)
    }
    if ($('.s-search__select-placeholder').text() == '') {
        $('.s-search__select-placeholder').text($('#s_searchCap').text())
    }
    $('#s-search__select-element-0').css('display', 'none')
    $('.s-search__select-item').on('click', function() {
        $('.s-search__select-wrapper').toggleClass('display-n')
        $('.s-search__select-item').toggleClass('s-search__select-item-active')
    })
    $(".s-search__select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.s-search__select-placeholder').html(valueElement)
        $('#s_search option:nth-child(1)').val(valueElement)
        $('#s_search option:nth-child(1)').html(valueElement)
        for (let i = 1; i <= $(".s-search__select-element").length; i++ ) {
            $(`#s-search__select-element-${i}`).removeClass('s-search__select-active')
        }
        $(this).addClass('s-search__select-active')
    })
})
