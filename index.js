
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
   switch (i) {
  case 0:
  document.querySelectorAll("button")[i].addEventListener("click",function (){
    var audio =new Audio( " sounds/crash.mp3");
    audio.play();

    // alert("i am pressed");

  });
    break;

    case 1:
    document.querySelectorAll("button")[i].addEventListener("click",function (){
      var audio =new Audio( " sounds/kick-bass.mp3");
      audio.play();
      // alert("i am pressed");

    });
      break;

      case 2:
      document.querySelectorAll("button")[i].addEventListener("click",function (){
        var audio =new Audio( " sounds/snare.mp3");
        audio.play();
        this.innerHTML.color="white";
        // alert("i am pressed");

      });
        break;

        case 3:
        document.querySelectorAll("button")[i].addEventListener("click",function (){
          var audio =new Audio( " sounds/tom-1.mp3");
          audio.play();
          // alert("i am pressed");

        });
          break;

          case 4:
          document.querySelectorAll("button")[i].addEventListener("click",function (){
            var audio =new Audio( " sounds/tom-2.mp3");
            audio.play();
            // alert("i am pressed");

          });
            break;

            case 5:
            document.querySelectorAll("button")[i].addEventListener("click",function (){
              var audio =new Audio( " sounds/tom-3.mp3");
              audio.play();
              // alert("i am pressed");

            });


              break;

              case 6:
              document.querySelectorAll("button")[i].addEventListener("click",function (){
                var audio =new Audio( " sounds/tom-4.mp3");
                audio.play();
                // alert("i am pressed");

              });
                break;

  default:

}

}
