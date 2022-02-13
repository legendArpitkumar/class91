function add_user() {
    player_1=document.getElementById('input_1').value;
    player_2=document.getElementById('input_2').value;

    localStorage.setItem("player_1",player_1);
    localStorage.setItem("player_2",player_2);

    window.location.replace("game_page.html");
}