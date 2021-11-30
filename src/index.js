import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Profile from "./profile/profile"


const profiles = [ {

 fullName:"Arnold Schwarzenegger",
 bio: "Born on July 30, 1947, near Graz, Austria. He rose to fame as the world's top bodybuilder, launching a career that would make him a giant Hollywood star via films like Conan the Barbarian, The Terminator and Total Recall. After years of blockbuster movie roles, Schwarzenegger went into politics, becoming governor of California in 2003. He returned to the big screen after leaving office in 2011, finding success with The Expendables franchise and a return to the Terminator series",
 profession: "Actor", 
},

{
  
 fullName:"Michael Jackson",
 bio: "Born on August 29, 1958, in Gary, Indiana , Known as the King of Pop, Michael Jackson was a best-selling American singer, songwriter and dancer. As a child, Jackson became the lead singer of his family's popular Motown group, the Jackson 5. He went on to a solo career of astonishing worldwide success, delivering No. 1 hits from the albums Off the Wall, Thriller and Bad. In his later years, Jackson was dogged by allegations of child molestation. He died in 2009 at age 50 of a drug overdose just before launching a comeback tour.",
 profession : "Singer" ,

},
];



function HandleName() {


 
  return (
  <section className ="handleName">
    {profiles.map((profile, index) => {
      return (
        <Profile key = {index} {...profile}><img src = "https://i.pinimg.com/originals/c7/4a/77/c74a77f0206f2e6af2c99ad5ddb52795.jpg" alt= "inconnue"/></Profile>
      )
    })}
  

  </section>)
};






ReactDom.render(<HandleName />, document.getElementById('root'));

