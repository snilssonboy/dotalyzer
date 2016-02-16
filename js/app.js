
var accountID = ""
var matchId = ""
var players;
var selectedPlayer;

function GetDeaths(){
	for(var i = 0; i < players.length; i++){
		if(players[i].account_id == accountID){
			selectedPlayer = players[i];
			console.log(selectedPlayer + " This player died " + selectedPlayer.deaths + " times");
			if(selectedPlayer.deaths >= 10){
				$('#container').html("<h4>YOU ARE LE NOOB, U DIED " + selectedPlayer.deaths + " TIMES IN YOUR LAST MATCH :D");
				$("body").removeClass("normal-d");
				$("body").removeClass("good-d");
				$("body").removeClass("bad-d");
				$("body").addClass("bad-d");
			}else if(selectedPlayer.deaths <= 2){
				$('#container').html("<h4>YOU ARE LE OPE PLAYER, U DIED ONLI " + selectedPlayer.deaths + " TIMES IN YOUR LAST MATCH :D");
				$("body").removeClass("normal-d");
				$("body").removeClass("good-d");
				$("body").removeClass("bad-d");
				$("body").addClass("good-d");
			}else{
				$('#container').html("<h4>NEITHER YAY OR NEI, U DIED " + selectedPlayer.deaths + " TIMES IN YOUR LAST MATCH :D");
				$("body").removeClass("normal-d");
				$("body").removeClass("good-d");
				$("body").removeClass("bad-d");
				$("body").addClass("normal-d");
			}
		}
	}
}

function FindPlayer(){

		var url2 = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=' + matchId + '&key=0BB4221B2151CB106D2462F1ED49A973';

		$.getJSON(url2, function(data) {
		    // Get the element with id summary and set the inner text to the result.
		    players = data.result.players;
		    console.log("Got players");
		});


		setTimeout(function () {
    		GetDeaths();
		}, 1500);
}

function GetData(){
	accountID = $('#idinput').val();
	matchId = 'undefinded';
	players = 'undefinded';
	selectedPlayer = 'undefinded';

	var url = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v001/?key=0BB4221B2151CB106D2462F1ED49A973&account_id=' + accountID;

	$.getJSON(url, function(data) {
    	// Get the element with id summary and set the inner text to the result.
    	matchId = data.result.matches[0].match_id.toString();
    	console.log("Got match id");
	});

	setTimeout(function () {
    		FindPlayer();
		}, 1500);

	
}