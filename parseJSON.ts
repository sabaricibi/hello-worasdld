/**
 * 
 * JSON Parsing
 * File read and Write JSON
 * 
 *
 */

import fs from 'fs';
const jsonString: string = fs.readFileSync('./data/test.json', 'utf-8');
const unfollowers: string = fs.readFileSync('./data/Unfollowers.txt', 'utf-8');


type userInput = {
  
    url: string,
};

let arry: userInput [] = [];


let followers: string


function parseJSONAndWrite(): void {
   // parse JSON
    let userData = JSON.parse(jsonString);
    for(var user of userData ){
       // console.log(user.string_list_data[0].href)
        const userDetail : userInput  = {
           
            url: user.string_list_data[0].href
        };
        followers += '<a href="'+user.string_list_data[0].href + '"/> '+ user.string_list_data[0].href+' </a><br>';
        arry.push(userDetail);
       
    }

   // Strinfy and create a new json from array of objects
    let jsonFileData = JSON.stringify(arry);
    fs.writeFile('./data/TestFollowers.json',jsonFileData, err => {
        if(err)
            console.log(err);
        else
        console.log("sucess");
    })

}
