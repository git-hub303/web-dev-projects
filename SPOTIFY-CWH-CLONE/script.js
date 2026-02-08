console.log("start of java script ")

let currentsong = new Audio();

function formatTime(seconds) {
  // Ignore anything after the decimal
  seconds = Math.floor(seconds);

  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;

  let formattedMinutes = String(minutes).padStart(2, '0');
  let formattedSeconds = String(secs).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

// Examples:
console.log(formatTime(56.8));   // Output: 00:56
console.log(formatTime(125.4));  // Output: 02:05
console.log(formatTime(3600.9)); // Output: 60:00



async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")

    let response = await a.text();



    let div = document.createElement("div");

    div.innerHTML = response;

    let as = div.getElementsByTagName("a");

    let songs_display = [];

    let songs_link = [];



    for (let index = 0; index < as.length; index++) {
        const element = as[index];

        if (element.href.endsWith(".mp3")) {
            console.log(element)
            songs_display.push(element.href.split("%5Csongs%5C")[1].replaceAll("%20", " "))
        }
        songs_link.push(element.href.split("%5Csongs%5C")[1]);


    }


    return songs_display;

}

const PlaySong = (track , pause = false) => {
    // let audio = new Audio( "/songs/" + track);
    // audio.play();/



    currentsong.src = "/songs/" + track;
if(!pause){
 currentsong.play();

    pause_and_play.src = "pause-stroke-rounded.svg"
}
   

    document.querySelector(".songinfo").innerHTML = track

    

    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"

}

async function main() {
    let songs = await getsongs();
    console.log(songs);

    PlaySong(songs[0],true)

    let songUL = document.querySelector(".SONGSLIST").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `          <li class="flex rounded">
              
                <img class="invert" src="music-note-01-stroke-rounded.svg">
                <div class="info">
                  <div>${song}</div>
                  <div>Song Authur<==>shaura </div>
                </div>
                <div class="playsong  flex">
                  <div>playsong</div>
                  <img class="invert play_button" src="play-circle-stroke-rounded.svg">
                </div>

             
            </li>` ;

    }

    //Attach an event listener to each song 
    Array.from(document.querySelector(".SONGSLIST").getElementsByTagName("li")).forEach(e => {

        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            PlaySong(e.querySelector(".info").firstElementChild.innerHTML);



        })


    });

    //Attach an event listener to each button
    pause_and_play.addEventListener("click", () => {

        if (currentsong.paused) {
            currentsong.play();
            pause_and_play.src = "pause-stroke-rounded.svg"
        }

        else {
            currentsong.pause();
            pause_and_play.src = "play-circle-stroke-rounded.svg"

        }

    })


    // Attach timeupdate for songtime 

    currentsong.addEventListener("timeupdate" , ()=>{
        // console.log(currentsong.currentTime , currentsong.duration);
        document.querySelector(".songtime").innerHTML = `${formatTime(currentsong.currentTime)}/ ${formatTime(currentsong.duration)}`

        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration)*100 + "%"

        
    })
}

main();


//  // Extract song name only (after last "/")
//         let songName = song.split("/").pop();

//         // Add list item with clickable link
//         songUL.innerHTML += `<li><a href="${song}" target="_blank">${songName}</a></li>`;
