
var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

// XHR =====================================================
var XHRbtn = document.querySelector("#xhr");
var display = document.querySelector("#quote");

XHRbtn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200) {
            var quote = JSON.parse(XHR.responseText)[0];
            console.log(quote);
            display.innerText = quote;
        }
    }
    XHR.open("GET", url);
    XHR.send();
});

// FETCH =====================================================

// has issues with InternetExplorer
var fetchbtn = document.querySelector("#fetch");

fetchbtn.addEventListener("click", function(){
    fetch(url)
    .then(function(req){
        console.log(req);
        req.json().then(function(data){
            console.log(data[0]);
            display.innerText = data[0];
        })
    })
    .catch(function(){
        alert("ERROR");
    })
});

// JQUERY=====================================================
var jquerybtn = document.querySelector("#jquery");

$('#jquery').click(function(){
    $.getJSON(url)
    .done(function(data){
        console.log(data[0]);
        $("#quote").text(data[0]);
    });
});

// AXIOS =====================================================
var axiosbtn = document.querySelector("#axios");

axiosbtn.addEventListener("click", function(){
    axios.get(url)
    .then(function(res){
        console.log(res.data[0]);
        display.innerText = res.data[0];
    })
    .catch(function(){
        alert("ERROR!");
    })
});