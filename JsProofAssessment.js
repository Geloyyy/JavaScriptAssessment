/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const myNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (_name, _age, _eyecolor, _shirttype, _shirtcolor, _chain) {

    const NFT = {
        "Name" : _name,
        "Age" : _age,
        "EyeColor" : _eyecolor,
        "ShirtType" : _shirttype,
        "ShirtColor" : _shirtcolor,
        "Chain" : _chain
    }
    myNFTs.push(NFT);
    console.log("\nYou've Created an NFT named: " + _name );

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
    
    let i = 0;
    while (i < myNFTs.length){
        console.log("\nID: \t\t\t" + (i + 1));
        console.log("Name: \t\t\t" + myNFTs[i]["Name"]);
        console.log("Age: \t\t\t" + myNFTs[i]["Age"]);
        console.log("Eye-Color: \t\t" + myNFTs[i]["EyeColor"]);
        console.log("Shirt-Type: \t" + myNFTs[i]["ShirtType"]);
        console.log("Shirt-Color: \t" + myNFTs[i]["ShirtColor"]);
        console.log("Chain: \t\t\t" + myNFTs[i]["Chain"]);
        i++;
    }

}

// print the total number of NFTs we have minted to the console

function getTotalSupply() {
    console.log("\nMy NFTs count: " + myNFTs.length)
}

// call your functions below this line

mintNFT("Maxx", "14", "Blue", "Polo", "Black", "Silver");
mintNFT("Elona", "26", "Brown", "Hoodie", "Orange", "Gold");
listNFTs();
getTotalSupply();
mintNFT("Brian", "20", "Black", "Shirt", "Lime", "Bronze");
mintNFT("David", "18", "Yellow", "Shirt", "Black", "Gold");
mintNFT("Agatha", "29", "Brown", "Hoodie", "Pink", "Diamond");
listNFTs();
getTotalSupply();
