/**
 * Sabari
 * 
 * File read by line
  and Write into text file
 * 
 *
 */


import fs from 'fs';
const unfollowers: string = fs.readFileSync('./data/Unfollowers.txt', 'utf-8');

function readFileLineByLine(): void  {
   // read line by line from text file
   let unfollowing: string = ''
    unfollowers.split(/\r?\n/).forEach(line =>  {
        console.log(`<a href='${line}'> ${line} </a> <br/>`);
        unfollowing += `<a href='${line}'> ${line} </a> <br/>`;
      });

      fs.writeFile('./data/unfollow.html',unfollowing, err => {
        if(err)
            console.log(err);
        else
        console.log("sucess");
    })
}
