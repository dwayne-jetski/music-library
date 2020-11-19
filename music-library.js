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
    for(var i = 0; i < data.length; i++){

         if(i%2==0){     
            $(`#my-table`).append(
            `<tr>
                <td class= "table-border even-row-styles">${data[i].title}</td>
                <td class= "table-border even-row-styles">${data[i].album}</td>
                <td class= "table-border even-row-styles">${data[i].artist}</td>
                <td class= "table-border even-row-styles">${data[i].genre}</td>
                <td class= "table-border even-row-styles">${data[i].releaseDate}</td>
            </tr>`
            );
         }
        else{
            $(`#my-table`).append(
                `<tr>
                    <td class= "table-border odd-row-styles">${data[i].title}</td>
                    <td class= "table-border odd-row-styles">${data[i].album}</td>
                    <td class= "table-border odd-row-styles">${data[i].artist}</td>
                    <td class= "table-border odd-row-styles">${data[i].genre}</td>
                    <td class= "table-border odd-row-styles">${data[i].releaseDate}</td>
                </tr>`);
        }       
    }  
}