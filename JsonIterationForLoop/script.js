let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},    
    ]

    //for loop
    console.log("using for loop");
for(let i = 0; i < object.length; i++) {
    var obj = object[i];
    console.log(`
    Person:${obj.person}
    Age:${obj.age}
    Company:${obj.company}
    `);
}

//for Each
console.log("using for each loop");
object.forEach(function(obj) { 
    
    console.log(`
    Person:${obj.person}
    Age:${obj.age}
    Company:${obj.company}
    `);

});

//for In
console.log("using for in loop");
for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`
      Person:${object[key].person}
      Age:${object[key].age}
      Company:${object[key].company}
    `)
    
}
}

//for Of
console.log("using for of loop");
for (let data of object) {
      console.log(`
      Person:${data.person}
      Age:${data.age}
      Company:${data.company}
      `);
}


/*//Output in console
script.js:10 using for loop
script.js:13 
    Person:John
    Age:30
    Company:Google
    
script.js:13 
    Person:Mohn
    Age:37
    Company:Flipkart
    
script.js:13 
    Person:Kohn
    Age:38
    Company:Amazon
    
script.js:13 
    Person:Sohan
    Age:40
    Company:Myntra
    
script.js:13 
    Person:Jenny
    Age:70
    Company:Apple
    
script.js:21 using for each loop
script.js:24 
    Person:John
    Age:30
    Company:Google
    
script.js:24 
    Person:Mohn
    Age:37
    Company:Flipkart
    
script.js:24 
    Person:Kohn
    Age:38
    Company:Amazon
    
script.js:24 
    Person:Sohan
    Age:40
    Company:Myntra
    
script.js:24 
    Person:Jenny
    Age:70
    Company:Apple
    
script.js:33 using for in loop
script.js:36 
      Person:John
      Age:30
      Company:Google
    
script.js:36 
      Person:Mohn
      Age:37
      Company:Flipkart
    
script.js:36 
      Person:Kohn
      Age:38
      Company:Amazon
    
script.js:36 
      Person:Sohan
      Age:40
      Company:Myntra
    
script.js:36 
      Person:Jenny
      Age:70
      Company:Apple
    
script.js:46 using for of loop
script.js:48 
      Person:John
      Age:30
      Company:Google
      
script.js:48 
      Person:Mohn
      Age:37
      Company:Flipkart
      
script.js:48 
      Person:Kohn
      Age:38
      Company:Amazon
      
script.js:48 
      Person:Sohan
      Age:40
      Company:Myntra
      
script.js:48 
      Person:Jenny
      Age:70
      Company:Apple
      */
      