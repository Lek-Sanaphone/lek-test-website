let dailyLike = 0;
let dailyShare = 0;
let currentImageIndex = 0;
let chooseImageIndex = 0;

let charNameImage = [ 
    { name: "Main",
        "CharImage" : [
            "https://media.zenfs.com/en/comingsoon_net_477/98315769884ac04087e36d9c3b6eb4e1",
            "https://cdn.mos.cms.futurecdn.net/WHxenruSEWvrNTndakZwkP-1200-80.jpg",
            "https://miro.medium.com/v2/resize:fit:1400/0*9EVksz5JoXsBqHER.jpg",
            "https://wegotthiscovered.com/wp-content/uploads/2022/04/attack-on-titan-eren-and-zeke.jpg",
            "https://hips.hearstapps.com/vidthumb/4ff0a5f1-5e27-4761-8f36-b22669e700f1/thumb_1920x1080_00002_1698684270_22857.jpg"
        ],
        text : "The action is some of the best action in any show. Mystery aspects make even moments that could come off as bland feel so much more impactful. This is perhaps one of the best stories ever written. The Music makes this epic world feel vast and important, while also sounding phenomenal."
        },
    { name: "Eren",
        "CharImage" : [
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/attack-on-titan-sad-eren.jpg",
        "https://img.anime2you.de/2021/03/aot1.jpg",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Eren-in-Attack-on-Titan.jpg",
        "https://the-artifice.com/wp-content/uploads/2017/12/eren-ill-kill-you-1.jpg"
        ],
     text : "Eren was a young man of average height and muscular build. He had a fairly long, yet rounded face, and sizable, expressive, teal-green eyes. His eyebrows were sparse and often furrowed, making him seem troubled or annoyed. Eren's hair was short and dark brown, with his bangs falling naturally into a middle-parted, curtain-type style. His complexion also seemed somewhat tan. After his training and during his time as a soldier, he became very physically fit and muscular."
        },
    { name : "Mikasa",
        "CharImage" : [
        "https://image.myanimelist.net/ui/rbg11kQv5iO30Ecq8--MTMjYd_rWV6rlBvai4r0BVmdgQ-n3NljplF_7J9plAlIGJayptXITNvB71VWqYhDHVjD-ALFinoLEEbhNXwte0obJ6oryPLRSTYcgGc2GFI_j",
        "https://i.redd.it/tpmzuwnvgfc61.jpg",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/img_8108.jpeg",
        "https://www.themarysue.com/wp-content/uploads/2024/03/Mikasa-Ackerman-from-the-last-episode-from-the-last-season-of-Attack-on-Titan-MAPPA.jpg"
        ],
     text : "Mikasa Ackerman is a fictional character from Hajime Isayama's manga series Attack on Titan. Mikasa is introduced as a citizen of Paradis Island living with the protagonist, Eren Yeager, and his family, who took her in following the deaths of her parents in an attempted kidnapping."
       },
    { name: "Armin",
        "CharImage" : [
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/Attack-on-Titan-Armin-Season-4-New-Haircut-Feature-Image.jpg",
        "https://staticg.sportskeeda.com/editor/2022/03/85f50-16473663883692-1920.jpg",
        "https://staticg.sportskeeda.com/editor/2023/11/d2a00-16996028942814-1920.jpg",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Armin-Colossal-Titan-in-Attack-on-Titan.jpg"
        ],
     text : "Armin has a boyish face, with large hazel eyes and a small pointed nose which is always distinctly a bit red. His blond hair is styled in a long undercut with bangs over his entire forehead. Armin has noticeable defined eyebrows and sideburns, indicating his age. His frame is, as it has always been, relatively small and lacking in muscle but not the definition."
     }
]




const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

const MainButton = document.querySelector("#MainButton");
const Erenbutton = document.querySelector("#ErenButton");
const Mikasabutton = document.querySelector("#MikasaButton");
const Arminbutton = document.querySelector("#ArminButton");

const text = document.querySelector("#text");
const dailyLikeText = document.querySelector("#dailyLike");
const dailyShareText = document.querySelector("#dailyShare");


button1.onclick = likeFunction;
button2.onclick = shareFunction;
button5.onclick = nextFunction;
button4.onclick = backFunction;

MainButton.onclick = mainButtonFunction;
Erenbutton.onclick = erenFunction;
Mikasabutton.onclick = mikasaFunction;
Arminbutton.onclick = arminFunction;

function updateImage(charNameImage) {
    DisplayImage = charNameImage["CharImage"][0];
    image.src = DisplayImage;
    text.innerText = charNameImage.text;

    currentImageIndex = 0;

}

function mainButtonFunction() {
    chooseImageIndex = 0;
    updateImage(charNameImage[0]);
    
}

function erenFunction() {
    chooseImageIndex = 1;
    updateImage(charNameImage[1]);
    
}

function mikasaFunction() {
    chooseImageIndex = 2;
    updateImage(charNameImage[2]);
    
}

function arminFunction() {
    chooseImageIndex = 3;
    updateImage(charNameImage[3]);
    
}


function likeFunction() {
    dailyLike += 1;
    dailyLikeText.innerText = dailyLike;
}

function shareFunction() {
    dailyShare += 1;
    dailyShareText.innerText = dailyShare;
}

function nextFunction() {
    const ArrayImage = charNameImage[chooseImageIndex].CharImage;
    currentImageIndex = (currentImageIndex + 1) % ArrayImage.length;
    image.src = ArrayImage[currentImageIndex];
    
}

function backFunction() {
    const ArrayImage = charNameImage[chooseImageIndex].CharImage;
    currentImageIndex = (currentImageIndex - 1 + ArrayImage.length) % ArrayImage.length;
    const previousImage = ArrayImage[currentImageIndex];
    image.src = previousImage;
    
}




// function nextFunction() {
    
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     nextImage = images[currentImageIndex]
//     image.src = nextImage
    
// }

// function backFunction() {
//     if (currentImageIndex>0) {
//         currentImageIndex = (currentImageIndex - 1) % images.length;
//         nextImage = images[currentImageIndex]
//         image.src = nextImage
//     } else {
//         currentImageIndex = images.length
//     }
    
// }