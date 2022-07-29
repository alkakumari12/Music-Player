let audioElement = new Audio('./songs/3.mp3');
// audioElement.play();
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let songs = [
    {
        songName: "Dokha ", filePath:"./songs/1.mp3", coverPath:"./covers/1.jpg", singer: "Arijit Singh", tag: "party"
    },
    {
        songName: "Kesariya tera", filePath:"./songs/2.mp3", coverPath:"./covers/2.jpg", singer: "Arijit Singh", tag: "party"
    },
    {
        songName: "Kitni Hasi Hogi", filePath:"./songs/3.mp3", coverPath:"./covers/3.jpg", singer: "Arijit Singh", tag: "favourite"
    },
    {
        songName: "Kabhi jo Badal", filePath:"./songs/4.mp3", coverPath:"./covers/4.jpg", singer: "Arijit Singh", tag: "favourite"
    },
    {
        songName: "Phir na aisi raat", filePath:"./songs/5.mp3", coverPath:"./covers/5.jpg", singer: "Arijit Singh", tag: "favourite"
    },
    {
        songName: "Fitoor", filePath:"./songs/6.mp3", coverPath:"./covers/6.jpg", singer: "Arijit Singh", tag: "party"
    },
    {
        songName: "Aami je tommar", filePath:"./songs/7.mp3", coverPath:"./covers/7.jpg", singer: "Arijit Singh", tag: "sad"
    },
    {
        songName: "Hum Nashe main to nahi ", filePath:"./songs/8.mp3", coverPath:"./covers/8.jpg", singer: "Arijit Singh", tag:"party"
    },
    {
        songName: "Mann le", filePath:"./songs/9.mp3", coverPath:"./covers/9.jpg", singer: "Arijit Singh", tag:"sad"
    },
    {
        songName: "Mitra re", filePath:"./songs/10.mp3", coverPath:"./covers/10.jpg", singer: "Arijit Singh", tag:"sad"
    },
    {
        songName: "Unknown", filePath:"./songs/11.mp3", coverPath:"./covers/11.jpg", singer: "Arijit Singh", tag: "party"
    },
    {
        songName: "Aashique Aa Gayi", filePath:"./songs/12.mp3", coverPath:"./covers/12.jpg", singer: "Arijit Singh", tag:"favourite"
    },
    {
        songName: "Tera Hua", filePath:"./songs/13.mp3", coverPath:"./covers/13.jpg", singer: "Arijit Singh", tag:"party"
    },
    {
        songName: "Tadap", filePath:"./songs/14.mp3", coverPath:"./covers/14.jpg", singer: "Arijit Singh", tag:"sad"
    },
    {
        songName: "Tera Hua", filePath:"./songs/15.mp3", coverPath:"./covers/15.jpg", singer: "Arijit Singh", tag:"sad"
    },
    {
        songName: "Luv UU", filePath:"./songs/16.mp3", coverPath:"./covers/16.jpg", singer: "Arijit Singh", tag:"party"
    },
    {
        songName: "Mere Yara", filePath:"./songs/17.mp3", coverPath:"./covers/17.jpg", singer: "Arijit Singh", tag:"favourite"
    },
    {
        songName: "Hamari Adhuri Kahani", filePath:"./songs/18.mp3", coverPath:"./covers/18.jpg", singer: "Arijit Singh", tag:"favourite"
    },
    {
        songName: "Kyunki Tum hi ho", filePath:"./songs/19.mp3", coverPath:"./covers/19.jpg", singer: "Arijit Singh", tag:"sad"
    },
    {
        songName: "Unknown", filePath:"./songs/20.mp3", coverPath:"./covers/20.jpg", singer: "Arijit Singh", tag:"sad"
    },
];

// ------------Populating the songs----------------------------.

    let songCard1 = document.getElementById('favSongs');
    let songCard2 = document.getElementById('sadSongs');
    let songCard3 = document.getElementById('partySongs');

    let songItems1 = " ";
    let songItems2 = " ";
    let songItems3 = " ";

    let count = 0;
    songs.forEach((element)=>{
        console.log(element);
        let song = 
                `<div class="">
                    <div class="card" style="width: 12rem; background-color: black; border-radius: 20px;">
                        <img src=${element.coverPath} class="card-img-top cardImage" alt="..."  style="height: 10rem;"/>
                        <div class="card-body" style="height: 8rem;">
                            <h5 class="card-title">${element.songName.substring(0, 11)}..</h5>
                            <p class="card-text">${element.singer}</p>
                            <i class="fa-solid fa-2x fa-circle-play songItemPlay" index = ${count} id= "songItemPlayId" style="cursor: pointer; " ></i>
                        </div> 
                    </div>
                </div>`

        if(element.tag === "favourite"){
            songItems1 += song;

        }
        else if(element.tag === "sad"){
            songItems2 += song;
        }
        else{
        songItems3 += song;
        }
        count++;
    })

    songCard1.innerHTML = songItems1;
    songCard2.innerHTML = songItems2;
    songCard3.innerHTML = songItems3;


//---------------- handle play/pause on clicking ----------------

masterPlay.addEventListener('click', ()=>{

    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});

// timeUpdate events
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    // set progress to the vlaue of progressBar
    myProgressBar.value = progress;    
})

// On changing progress bar

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})


//-------------playing a particular song on clicking on it----------------.

const makeAllPlays = ()=>{
    // Making all the icons as play
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      
        // element.addEventListener('click', (e)=>{
        //     let currentSongIndex = parseInt(e.target.getAttribute("index"));
        //     let currentSongCard = Array.from(document.getElementsByClassName('cardImage'))[currentSongIndex];

        //     currentSongCard.setAttribute("src", `${songs[currentSongIndex].coverPath}`);
        // })
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        return;
    });
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{

        makeAllPlays();
        songIndex  = parseInt(e.target.getAttribute("index"));
        console.log(songIndex);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        // adding src to audioElement
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        // Changing songInfo in bottom section

        let currentSong = songs[songIndex];
        document.getElementById('songInfoCover').setAttribute("src", `${currentSong.coverPath}`);
        document.getElementById('songInfoMainTitle').innerHTML = currentSong.songName;
        document.getElementById('songInfoMainSinger').innerHTML= currentSong.singer;


        // // changing the cover image of the currentSong.
        // let currentSongCard = Array.from(document.getElementsByClassName('cardImage'))[songIndex];
        // currentSongCard.setAttribute("src", "my.gif");

    })
})

//--------------Handling next and previous buttons-----------------------

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex<= 0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})


//-------------SongCard work-------------------.

document.getElementById("songItemPlayId").style.position = absolute;