console.log("Server On (Now)");

let socket = io("http://localhost:8080");



$('#push').on('click', function(event){
    event.preventDefault();
    let number = Number($("#value").text());
    number++;
    socket.emit('count', number);
});

$('#reset').on('click', function(event){
    event.preventDefault();
    let number = 0;
    socket.emit('count', number);
});

socket.on('display', function(number){
    $('#value').html(number)
});

