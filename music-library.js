"use strict"

$.ajax({
    url: "http://www.devcodecampmusiclibrary.com/api/music",
    dataType: "json",
    type: "get",
    success: function(response){
        buildTable(response);
    }
});

function buildTable(data){
    var table = $('#my-table');
    var row
    for(var i = 0; i < data.length; i++){
        $(`#my-table`).append(
        `<tr>
            <td class= "table-border" >${data[i].title}</td>
            <td class= "table-border">${data[i].album}</td>
            <td class= "table-border">${data[i].artist}</td>
            <td class= "table-border">${data[i].genre}</td>
            <td class= "table-border">${data[i].releaseDate}</td>
        </tr>`
        );       
    }  
}