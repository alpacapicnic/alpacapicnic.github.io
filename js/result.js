
//pull values from 'key' and store into variables
var selectedSize = localStorage.getItem('size');
var selectedFloor = localStorage.getItem('floor');
var selectedCute = localStorage.getItem('cute');

//constructor for Dog object
function Dog (image, breed, bio) {
    this.image = image;
    this.breed = breed;
    this.bio = bio;
}

//all dog objects
var golden = new Dog ('breeds/golden.jpg', 'Golden Retriever', 'The temperament of the Golden Retriever is a hallmark of the breed, and is described in the standard as "kindly, friendly and confident".');
var german = new Dog ('breeds/gshepherd.jpg', 'German Shepherd', 'German Shepherds are highly intelligent and obedient, as well as being protective of their owners.');
var rott = new Dog ('breeds/rottweiler.jpg', 'Rottweiler', 'The Rottweiler is good-natured, placid in basic disposition, very devoted, obedient, biddable and eager to work.');
var lab = new Dog ('breeds/labrador.jpg', 'Labrador Retriever', 'Labradors have a reputation as a very even-tempered breed and an excellent family dog.');
var doberman = new Dog ('breeds/doberman.jpg', 'Doberman Pinscher', 'The Doberman Pinscher has ranked amongst the most intelligent of dog breeds in experimental studies and expert evaluations.');
var mastiff = new Dog ('breeds/bullmastiff.jpeg', 'Bullmastiff', 'Bullmastiffs are strong, powerful, but sensitive dogs.');

var australian = new Dog ('breeds/austshepherd.jpeg', 'Australian Shepherd', 'Enjoys working, whether it is learning and practicing tricks, competing in dog agility, or engaging in any other physically and mentally involving activity.');
var corgi = new Dog ('breeds/corgi.jpg', 'Corgi', 'They are of the type of herding dog referred to as "heelers", meaning that they would nip at the heels of the larger animals to keep them on the move.');
var chow = new Dog ('breeds/chow.jpg', 'Chow Chow', 'This breed of dog has many strong loyal bonds with friends and family, but the Chow Chow dog is usually overly protective of one or two main family member.');
var harrier = new Dog ('breeds/harrier.jpeg', 'Harrier', 'The Harrier is cheerful, sweet-tempered, tolerant of people, and it is excellent with children.');
var basenji = new Dog ('breeds/basenji.jpg', 'Basenji', 'The Basenji tends to become emotionally attached to a single human.');
var bulldog = new Dog ('breeds/bulldog.jpg', 'English Bulldog', 'Bulldogs are recognized as excellent family pets because of their tendency to form strong bonds with children.');

var russell = new Dog ('breeds/jackrussell.jpg', 'Jack Russell', 'Jack Russells tend to be extremely intelligent, athletic, fearless, and vocal dogs.');
var pom = new Dog ('breeds/pomeranian.jpg', 'Pomeranian', 'Pomeranians are typically friendly, playful and lively; but they can be aggressive with other dogs to try to prove themselves.');
var shih = new Dog ('breeds/shih.jpg', 'Shih Tzu', 'Because of its friendly nature, the Shih Tzu tends to interact well with other dogs and with children and adults.');
var dachshund = new Dog ('breeds/dachshund.jpg', 'Dachshund', 'Dachshunds are playful, but as hunting dogs can be quite stubborn.');
var klee = new Dog ('breeds/klee.png', 'Alaskan Klee Kai', 'The Alaskan Klee Kai is a highly intelligent, playful, curious and high energy breed.');
var frenchie = new Dog ('breeds/frenchie.jpg', 'French Bulldog', 'The French Bulldog, like many other companion dog breeds, requires close contact with humans.');

//iternate through each size, floor & cute to access predetermined dog object to be called through SetFinalVariables
if (selectedSize === 'large'){
    if (selectedFloor === 'shaggy'){
        if (selectedCute === 'lion'){
            SetFinalVariables(golden);
        }
        else if(selectedCute === 'fox'){
            SetFinalVariables(german);
        }
        else SetFinalVariables(rott);
    }
    else if (true){
        if (selectedCute === 'lion'){
            SetFinalVariables(lab);
        }
        else if(selectedCute === 'fox'){
            SetFinalVariables(doberman);
        }
        else SetFinalVariables(mastiff);
    }
}
else if (selectedSize === 'small'){
    if (selectedFloor === 'shaggy'){
        if (selectedCute === 'lion'){
            SetFinalVariables(australian);
        }
        else if(selectedCute === 'fox'){
            SetFinalVariables(corgi);
        }
        else SetFinalVariables(chow);
    }
    else if (true){
        if (selectedCute === 'lion'){
            SetFinalVariables(harrier);
        }
        else if(selectedCute === 'fox'){
            SetFinalVariables(basenji);
        }
        else SetFinalVariables(bulldog);
    }
}    
else if (selectedSize === 'closet'){
    if (selectedFloor === 'shaggy'){
        if (selectedCute === 'lion'){
            SetFinalVariables(russell);
        }
        else if(selectedCute === 'fox'){
            SetFinalVariables(pom);
        }
        else SetFinalVariables(shih);
    }
    else if (true){
        if (selectedCute === 'lion'){
            SetFinalVariables(dachshund);
        }
        else if(selectedCute === 'fox'){
            SetFinalVariables(klee);
        }
        else SetFinalVariables(frenchie);
    }
}  

//call dog object & write into result.html elements
function SetFinalVariables(dog) {
    document.getElementById("resultBreed").innerHTML = dog.breed;
    document.getElementById("resultBio").innerHTML = dog.bio;

    var img = new Image();
            var div = document.getElementById('resultImage');

            img.onload = function() {
            div.appendChild(img);   
            };

        img.src = dog.image;
}
