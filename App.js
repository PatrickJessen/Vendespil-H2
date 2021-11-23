let imagePaths = ["2h.png", "2s.png", "3c.png", "3d.png", "4h.png", "4s.png", "5c.png", "5d.png", "6h.png", "6s.png", "7c.png", "7d.png", "2h.png", "2s.png", "3c.png", "3d.png", "4h.png", "4s.png", "5c.png", "5d.png", "6h.png", "6s.png", "7c.png", "7d.png"];
let usedCards = [];
let imgArray = [];

let clickCount = 0;

let img1;
let img2;

window.onload = Start()
{
}

function Start()
{
    for (var i = 0; i < 24; i++)
    {
        imgArray[i] = new Image();
        imgArray[i].src = "back.jpg";
        imgArray[i].style.width = "200px";
        imgArray[i].style.height = "230px";
        imgArray[i].style.cursor = "pointer";
        imgArray[i].style.marginRight = "100px";
        imgArray[i].id = i;
        imgArray[i].setAttribute('onclick', 'OnClick(this)');
    }
    const imgs = imgArray.map(img => img.outerHTML).join('');
    document.getElementById("gallery").innerHTML = imgs;

    Shuffle(imagePaths);
}

function Shuffle(array) {
    let currentIndex = array.length
    let randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


function OnClick(event)
{
    if (document.getElementById(event.id).src == "http://127.0.0.1:5500/back.jpg")
    {
        clickCount++;
        if (clickCount == 1)
        {
            img1 = document.getElementById(event.id);
            img1.src = imagePaths[event.id];
            document.getElementById(event.id).src = img1.src;
        }
        else if (clickCount == 2)
        {
            img2 = document.getElementById(event.id);
            img2.src = imagePaths[event.id];
            document.getElementById(event.id).src = img2.src;
        }
        else if (clickCount > 2)
        {
            if (document.getElementById(img1.id).src != document.getElementById(img2.id).src)
            {
                document.getElementById(img1.id).src = "back.jpg";
                document.getElementById(img2.id).src = "back.jpg";
            }
            clickCount = 0;
        }
    }
}