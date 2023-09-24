$(function(){
    AOS.init();
    new VenoBox({
        selector: ".portfolio",
        spinner: 'swing',
        share: "true",
        shareStyle: 'bar',
        navSpeed: 400,
    });
    new TypeIt("#typing", {}) .delete("") .type("SUCCESS").go();

    mixitup('.wrapper');
    
});
 