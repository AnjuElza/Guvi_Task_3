//JSON Resume
let AnjuResume={
    "basics": {
      "name": "ANJU ELZA ACHENKUNJU",
      "email": "anjuelz@gmail.com",
      "phone": 949763,
      "degree": "MTech",
      "location": {
        "address": "Rose Cottage",
        "city": "Kollam",
        "state": "Kerala",
        "country": "India",
      },
      "profiles": 
        {
          "website": "https://www.linkedin.com/in/xxxxx",
        }
      
    },
    "work": [
      {
        "company": "Vanilla Networks",
        "position": "Web Programmer",
        "startDate": "03 December 2012",
        "endDate": "22 August 2013",
      },
    ],
    "education": [
      {
        "mtech":[
          {
        "institution": "Mount Zion College of Engineering",
        "department": "ECE",
        "batch start year": 2013,
        "batch end year": 2015,
        "cgpa": 7.6,
          },
        ],
        "btech":[
          {
            "institution":"Mount Zion College of Engineering",
            "department": "ECE",
            "batch start year": 2008,
            "batch end year": 2006,
            "percentage": 77,
          },
        ]

      }
    ],
    "languages": [
      {
        "language": "Malayalam,English",
      }
    ],
    "interest": [
      {
        "hobbies": "creative activities,youtuber,",
      }
    ]
  }
  console.log(AnjuResume);

/*
  //output
  Object
basics:
degree: "MTech"
email: "anjuelz@gmail.com"
location:
address: "Rose Cottage"
city: "Kollam"
country: "India"
state: "Kerala"
[[Prototype]]: Object
name: "ANJU ELZA ACHENKUNJU"
phone: 949763
profiles:
website: "https://www.linkedin.com/in/xxxxx"
[[Prototype]]: Object
[[Prototype]]: Object
education: Array(1)
0:
btech: Array(1)
0:
batch end year: 2006
batch start year: 2008
department: "ECE"
institution: "Mount Zion College of Engineering"
percentage: 77
[[Prototype]]: Object
length: 1
[[Prototype]]: Array(0)
mtech: Array(1)
0:
batch end year: 2015
batch start year: 2013
cgpa: 7.6
department: "ECE"
institution: "Mount Zion College of Engineering"
[[Prototype]]: Object
length: 1
[[Prototype]]: Array(0)
[[Prototype]]: Object
length: 1
[[Prototype]]: Array(0)
interest: Array(1)
0: {hobbies: 'creative activities,youtuber,'}
length: 1
[[Prototype]]: Array(0)
languages: Array(1)
0: {language: 'Malayalam,English'}
length: 1
[[Prototype]]: Array(0)
work: Array(1)
0:
company: "Vanilla Networks"
endDate: "22 August 2013"
position: "Web Programmer"
startDate: "03 December 2012"
[[Prototype]]: Object
length: 1
[[Prototype]]: Array(0)
[[Prototype]]: Object
*/
