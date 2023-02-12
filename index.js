function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
$("#no").mouseenter(function() {
    $(this).animate(
        {
            left: `${getRandomInt(500) + 10}`,
            top: `${getRandomInt(500) + 10}`,
        },
        "fast"
    );
});