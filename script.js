console.log("Welcome to spotify")
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"coners/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songss/1.mp3",coverPath:"coners/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"coners/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"coners/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"coners/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"coners/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"coners/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"coners/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"coners/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"coners/1.jpg"}
]
// Handle Play/Pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       
    }
})

myProgressBar.addEventListener('timeupdate',()=>{
    console.log("timeUpdate")
})