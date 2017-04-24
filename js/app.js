document.addEventListener("DOMContentLoaded", function() {

    var dropdownList = document.querySelector(".dropdown");
    var subList = document.querySelector(".dropdownmenucontent");

    function showList() {
        dropdownList.addEventListener("mouseover", function() {
            subList.style.display = "block";
        });

        dropdownList.addEventListener("mouseout", function() {
            subList.style.display = "none";
        });
    }
    showList();



    var margarita = document.getElementById('margarita');
    var clair = document.getElementById('clair');
    var imageTitle = document.querySelectorAll(".sectionTwoImageTitle");

    function noTitle() {
        clair.addEventListener("mouseover", function() {
            imageTitle[0].style.display = "none";
        });
        clair.addEventListener("mouseout", function() {
            imageTitle[0].style.display = "block";
        });

        margarita.addEventListener("mouseover", function() {
            imageTitle[1].style.display = "none";
        });
        margarita.addEventListener("mouseout", function() {
            imageTitle[1].style.display = "block";
        });
    }
    noTitle();


});
