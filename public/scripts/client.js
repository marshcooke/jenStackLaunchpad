console.log( 'js' );

$(document).ready(onReady);

function onReady(){
    // $('#requestButton').on('click', clickButton);
    $('#hotbutton').on('click', howHot);
    // function clickButton(){
        $.ajax({
            type: 'GET',
            url: '/served',
            success: function(response){
                $('main').append($('<p>').text(response.count));
            }
        });
    // };

    function howHot(){
        $.ajax({
            type: 'POST',
            url: '/served',
            data: $(':selected').val(),
            success: function(response){
                console.log('Turn on the AC', response);
            }
        });
    }
}