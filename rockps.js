var uc;

// rock
$("#r").click(function(){
  uc = "rock";
  calculate();
});

// paper
$("#p").click(function(){
  uc = "paper";
  calculate();
});

// scissors
$("#s").click(function(){
  uc = "scissors";
  calculate();
});

// spock
$("#k").click(function(){  
  uc = "spock";
  calculate(); 
});

// lizard
$("#l").click(function(){  
  uc = "lizard";
  calculate();  
});

// calculate function for comparing user choice with
// computer choice and printing out the results
function calculate(){ 
  var cc = Math.random() * 99 + 1;
  if (cc < 20.0) {
    cc = "rock";
  } else if(cc <= 40.0) {
    cc = "paper";
  } else if(cc <= 60.0){
    cc = "scissors";
  } else if(cc <= 80.0){
    cc = "spock";
  } else {
    cc = "lizard";
  }
  
  // rock
  if(uc === "rock"){
    if(cc === "paper"){
      $("#ap").html("CPU Wins!!");
    } else if(uc === "rock"){
      if(cc === "scissors"){
        $("#ap").html("You Wins.");
      } else if(uc === "rock"){
        if(cc === "lizard"){
          $("#ap").html("You Win.");
        } else if(uc === "rock"){
          if(cc === "spock"){
            $("#ap").html("CPU Wins!!");
          } else if(uc === "rock"){
            if(cc === "rock"){
              $("#ap").html("It's a Tie.");
            }
          }
        }
      }
    }
  }
  
  // paper
  if(uc === "paper"){
    if(cc === "rock"){
      $("#ap").html("You Win.");
    } else if(uc === "paper"){
      if(cc === "scissors"){
        $("#ap").html("CPU Wins!!");
      } else if(uc === "paper"){
        if(cc === "lizard"){
          $("#ap").html("CPU Wins!!");
        } else if(uc === "paper"){
          if(cc === "spock"){
            $("#ap").html("You Win.");
          } else if(uc === "paper"){
            if(cc === "paper"){
              $("#ap").html("It's a Tie.");
            }
          }
        }
      }
    }
  }
  
  // scissors
  if(uc === "scissors"){
    if(cc === "paper"){
      $("#ap").html("You Win.");
    } else if(uc === "scissors"){
      if(cc === "rock"){
        $("#ap").html("CPU Wins!!");
      } else if(uc === "scissors"){
        if(cc === "lizard"){
          $("#ap").html("You Win.");
        } else if(uc === "scissors"){
          if(cc === "spock"){
            $("#ap").html("CPU Wins!!");
          } else if(uc === "scissors"){
            if(cc === "scissors"){
              $("#ap").html("It's a Tie.");
            }
          }
        }
      }
    }
  }
  
  // spock
  if(uc === "spock"){
    if(cc === "paper"){
      $("#ap").html("CPU Wins!!");
    } else if(uc === "spock"){
      if(cc === "scissors"){
        $("#ap").html("CPU Wins!!");
      } else if(uc === "spock"){
        if(cc === "lizard"){
          $("#ap").html("CPU Wins!!");
        } else if(uc === "spock"){
          if(cc === "rock"){
            $("#ap").html("You Win.");
          } else if(uc === "spock"){
            if(cc === "spock"){
              $("#ap").html("It's a Tie.");
            }
          }
        }
      }
    }
  }
  
  // lizard
  if(uc === "lizard"){
    if(cc === "scissors"){
      $("#ap").html("CPU Wins!!");
    } else if(uc === "lizard"){
      if(cc === "paper"){
        $("#ap").html("You Win.");
      } else if(uc === "lizard"){
        if(cc === "spock"){
          $("#ap").html("You Win.");
        } else if(uc === "lizard"){
          if(cc === "rock"){
            $("#ap").html("CPU Wins!!");
          } else if(uc === "lizard"){
            if(cc === "lizard"){
              $("#ap").html("It's a Tie.");
            }
          }
        }
      }
    }
  }
  
  $("#g").html("Your Choice: " + uc);
  $("#app").html("Computer Choice: " + cc); 
}



