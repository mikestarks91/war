$(document).ready(function() {

	//what does this do? converts higher numbers into face cards
	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do? creates an array of unnamed objects with the properties of each card
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//what does this do? picks randomly-selected cards from an array and places them at the end of the deck 'copy' (shuffles) and deletes from the original array so there will be no repeats
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	};
	
	//Now call the shuffle function and save the result of what shuffle returns into your deck variable
	deck = shuffle(deck);
	var cards_player_1 = [];
	var cards_player_2 = [];
	// write a function called deal that will evently divide the deck up between the two players
	var deal = function(deck) {
		for (var i = 0; i < deck.length; i++) {
			if (i === 0 || i % 2 === 0) {
				cards_player_1.push(deck[i]);
			}
			else {
				cards_player_2.push(deck[i]);
			}
		}
	};
	deal(deck);
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	var war = function(card_1, card_2){
		if (card_1 > card_2) {
			return card_1;
		}
		else if (card_1 < card_2) {
			return card_2;
		}
		else {
			return false;
		}
		
	};
	
	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var play = function(){
		
		//this function (defined below) will continue to the next turn
		advance();
	}
	

	advance();
	
	$(".btn").click(function() {
		play();
	});
});
