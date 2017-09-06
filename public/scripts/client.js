console.log( 'js' );

$(document).ready(onReady);

function onReady(){
    // $('#requestButton').on('click', clickButton);

    // function clickButton(){
        $.ajax({
            type: 'GET',
            url: '/served',
            success: function(response){
                console.log('In success', response);
            }
        });
    // };
}