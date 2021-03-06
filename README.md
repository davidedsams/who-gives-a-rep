# Who Are My Government Representatives?

## Project Description

A website for people who want to find out more about who their government representatives are and what government is doing in their lives. The user enters their location and is presented detailed and easy to understand information regarding their government.

## Wireframes

### Home

![IMG_3182](https://media.git.generalassemb.ly/user/28446/files/794f2f00-d0d7-11ea-9661-d61459914bfe)

### Representatives Details

![IMG_3181](https://user-images.githubusercontent.com/33344527/88694744-f033fa00-d0ce-11ea-84bf-cebf89c1be15.jpg)

## User Stories

#### Bronze Level (MVP) Goals

- As a user who is a concerned citizen of the world, I’d like to know what’s going on around me and be informed accurately who my government representatives are based on my location.

#### Silver Level Goals

- As a user who wants to know the details, I'd like to know exactly what my government representatives are doing, how long they’ve been doing it for and what it means to me.
- As a user who finds government somewhat confusing most of the time, I'd like an explanation of the various information I'm presented on this website so that I have a better understanding of how my world goes 'round.

#### Gold Level Goals

- As a user who wants to know about history and compare the present to the past, I’d like the ability to extend the search to go back to the beginning of recorded history.

#### Pinky & the Brain Goals

- As a genius mouse with some serious issues and a mindless dupe for a sidekick we’d like the ability to do the same thing we do every night and try to take over THE WORLD!!! Narf!!

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Third-Party API

## API

https://developers.google.com/civic-information

(This is the API I'll use for my MVP goals. I'll probably need to use others as well in the future.)

#### Representatives Results
``` json
{
"normalizedInput": {
"line1": "1065 Seaboard Avenue Northeast",
"city": "Atlanta",
"state": "GA",
"zip": "30307"
},
"kind": "civicinfo#representativeInfoResponse",
"divisions": {
"ocd-division/country:us/state:ga/county:fulton": {
"name": "Fulton County",
"officeIndices": [
15,
16,
17,
18,
19,
20
]
},
"ocd-division/country:us/state:ga/sldl:59": {
"name": "Georgia State House district 59",
"officeIndices": [
7
]
},
"ocd-division/country:us/state:ga/cd:5": {
"name": "Georgia's 5th congressional district",
"officeIndices": [
3
]
},
"ocd-division/country:us/state:ga/county:fulton/council_district:5": {
"name": "Fulton County GA Board of Commissioners District 5",
"officeIndices": [
21
]
},
"ocd-division/country:us/state:ga/sldu:36": {
"name": "Georgia State Senate district 36",
"officeIndices": [
6
]
},
"ocd-division/country:us": {
"name": "United States",
"officeIndices": [
0,
1
]
},
"ocd-division/country:us/state:ga/place:atlanta": {
"name": "Atlanta city",
"officeIndices": [
22,
23,
24
]
},
"ocd-division/country:us/state:ga/place:atlanta/council_district:5": {
"name": "Atlanta GA city council district 5",
"officeIndices": [
25
]
},
"ocd-division/country:us/state:ga": {
"name": "Georgia",
"officeIndices": [
2,
4,
5,
8,
9,
10,
11,
12,
13,
14
]
}
},
"offices": [
{
"name": "President of the United States",
"divisionId": "ocd-division/country:us",
"levels": [
"country"
],
"roles": [
"headOfState",
"headOfGovernment"
],
"officialIndices": [
0
]
},
{
"name": "Vice President of the United States",
"divisionId": "ocd-division/country:us",
"levels": [
"country"
],
"roles": [
"deputyHeadOfGovernment"
],
"officialIndices": [
1
]
},
{
"name": "U.S. Senator",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"country"
],
"roles": [
"legislatorUpperBody"
],
"officialIndices": [
2,
3
]
},
{
"name": "U.S. Representative",
"divisionId": "ocd-division/country:us/state:ga/cd:5",
"levels": [
"country"
],
"roles": [
"legislatorLowerBody"
],
"officialIndices": [
4
]
},
{
"name": "Governor of Georgia",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"administrativeArea1"
],
"roles": [
"headOfGovernment"
],
"officialIndices": [
5
]
},
{
"name": "Lieutenant Governor of Georgia",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"administrativeArea1"
],
"roles": [
"deputyHeadOfGovernment"
],
"officialIndices": [
6
]
},
{
"name": "GA State Senator",
"divisionId": "ocd-division/country:us/state:ga/sldu:36",
"levels": [
"administrativeArea1"
],
"roles": [
"legislatorUpperBody"
],
"officialIndices": [
7
]
},
{
"name": "GA State Representative",
"divisionId": "ocd-division/country:us/state:ga/sldl:59",
"levels": [
"administrativeArea1"
],
"roles": [
"legislatorLowerBody"
],
"officialIndices": [
8
]
},
{
"name": "GA Commissioner of Agriculture",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"administrativeArea1"
],
"officialIndices": [
9
]
},
{
"name": "GA State School Superintendent",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"administrativeArea1"
],
"officialIndices": [
10
]
},
{
"name": "GA Attorney General",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"administrativeArea1"
],
"officialIndices": [
11
]
},
{
"name": "GA Commissioner of Labor",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"administrativeArea1"
],
"officialIndices": [
12
]
},
{
"name": "GA Secretary of State",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"administrativeArea1"
],
"officialIndices": [
13
]
},
{
"name": "GA Supreme Court Justice",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"administrativeArea1"
],
"officialIndices": [
14,
15,
16,
17,
18,
19,
20,
21,
22
]
},
{
"name": "GA Commissioner of Insurance",
"divisionId": "ocd-division/country:us/state:ga",
"levels": [
"administrativeArea1"
],
"officialIndices": [
23
]
},
{
"name": "Fulton County Solicitor General",
"divisionId": "ocd-division/country:us/state:ga/county:fulton",
"levels": [
"administrativeArea2"
],
"officialIndices": [
24
]
},
{
"name": "Fulton County Clerk of Courts",
"divisionId": "ocd-division/country:us/state:ga/county:fulton",
"levels": [
"administrativeArea2"
],
"officialIndices": [
25
]
},
{
"name": "Fulton County Tax Commissioner",
"divisionId": "ocd-division/country:us/state:ga/county:fulton",
"levels": [
"administrativeArea2"
],
"officialIndices": [
26
]
},
{
"name": "Fulton County Commission Chairperson",
"divisionId": "ocd-division/country:us/state:ga/county:fulton",
"levels": [
"administrativeArea2"
],
"officialIndices": [
27
]
},
{
"name": "Fulton County Surveyor",
"divisionId": "ocd-division/country:us/state:ga/county:fulton",
"levels": [
"administrativeArea2"
],
"officialIndices": [
28
]
},
{
"name": "Fulton County Sheriff",
"divisionId": "ocd-division/country:us/state:ga/county:fulton",
"levels": [
"administrativeArea2"
],
"officialIndices": [
29
]
},
{
"name": "Fulton County Commissioner",
"divisionId": "ocd-division/country:us/state:ga/county:fulton/council_district:5",
"levels": [
"administrativeArea2"
],
"officialIndices": [
30
]
},
{
"name": "Atlanta City Council President",
"divisionId": "ocd-division/country:us/state:ga/place:atlanta",
"levels": [
"locality"
],
"officialIndices": [
31
]
},
{
"name": "Atlanta Mayor",
"divisionId": "ocd-division/country:us/state:ga/place:atlanta",
"levels": [
"locality"
],
"officialIndices": [
32
]
},
{
"name": "Atlanta City Council Member",
"divisionId": "ocd-division/country:us/state:ga/place:atlanta",
"levels": [
"locality"
],
"officialIndices": [
33,
34,
35
]
},
{
"name": "Atlanta City Council Member",
"divisionId": "ocd-division/country:us/state:ga/place:atlanta/council_district:5",
"levels": [
"locality"
],
"officialIndices": [
36
]
}
],
"officials": [
{
"name": "Donald J. Trump",
"address": [
{
"line1": "1600 Pennsylvania Avenue Northwest",
"city": "Washington",
"state": "DC",
"zip": "20500"
}
],
"party": "Republican Party",
"phones": [
"(202) 456-1111"
],
"urls": [
"https://www.whitehouse.gov/"
],
"photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
"channels": [
{
"type": "Facebook",
"id": "DonaldTrump"
},
{
"type": "Twitter",
"id": "potus"
},
{
"type": "YouTube",
"id": "whitehouse"
}
]
},
{
"name": "Mike Pence",
"address": [
{
"line1": "1600 Pennsylvania Avenue Northwest",
"city": "Washington",
"state": "DC",
"zip": "20500"
}
],
"party": "Republican Party",
"phones": [
"(202) 456-1111"
],
"urls": [
"https://www.whitehouse.gov/"
],
"photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
"channels": [
{
"type": "Facebook",
"id": "mikepence"
},
{
"type": "Twitter",
"id": "VP"
}
]
},
{
"name": "Kelly Loeffler",
"address": [
{
"line1": "131 Russell Senate Office Building",
"city": "Washington",
"state": "DC",
"zip": "20510"
}
],
"party": "Republican Party",
"phones": [
"(202) 224-3643"
],
"urls": [
"https://www.loeffler.senate.gov/"
],
"channels": [
{
"type": "Facebook",
"id": "SenLoeffler"
}
]
},
{
"name": "David Perdue",
"address": [
{
"line1": "455 Russell Senate Office Building",
"city": "Washington",
"state": "DC",
"zip": "20510"
}
],
"party": "Republican Party",
"phones": [
"(202) 224-3521"
],
"urls": [
"https://www.perdue.senate.gov/"
],
"photoUrl": "http://bioguide.congress.gov/bioguide/photo/P/P000612.jpg",
"channels": [
{
"type": "Facebook",
"id": "SenatorDavidPerdue"
},
{
"type": "Twitter",
"id": "sendavidperdue"
},
{
"type": "YouTube",
"id": "UCXHsrkPP4TAm0s0qB1C31Lw"
}
]
},
{
"name": "VACANT",
"address": [
{
"line1": "300 Cannon House Office Building",
"city": "Washington",
"state": "DC",
"zip": "20515"
}
],
"party": "Democratic Party",
"phones": [
"(202) 225-3801"
]
},
{
"name": "Brian Kemp",
"address": [
{
"line1": "206 Washington Street Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Republican Party",
"phones": [
"(404) 656-1776"
],
"urls": [
"https://gov.georgia.gov/"
],
"channels": [
{
"type": "Facebook",
"id": "GovKemp"
},
{
"type": "Twitter",
"id": "GovKemp"
}
]
},
{
"name": "Geoff Duncan",
"address": [
{
"line1": "240 State Capitol",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Republican Party",
"phones": [
"(404) 656-5030"
],
"urls": [
"https://ltgov.georgia.gov/"
],
"channels": [
{
"type": "Twitter",
"id": "GeoffDuncanGA"
}
]
},
{
"name": "Nan Orrock",
"address": [
{
"line1": "206 Washington Street Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Democratic Party",
"phones": [
"(404) 524-5999"
],
"urls": [
"http://www.senate.ga.gov/SENATORS/en-US/member.aspx?Member=33&Session=27"
],
"photoUrl": "http://www.senate.ga.gov/SiteCollectionImages/OrrockNan33.jpg",
"emails": [
"nan.orrock@senate.ga.gov"
],
"channels": [
{
"type": "Facebook",
"id": "senatornanorrock"
},
{
"type": "Twitter",
"id": "SenNanOrrock"
}
]
},
{
"name": "David Dreyer",
"address": [
{
"line1": "604-D Coverdell Legislative Office Building",
"line2": "18 Capitol Square Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Democratic Party",
"phones": [
"(404) 656-0265"
],
"urls": [
"http://www.house.ga.gov/Representatives/en-US/member.aspx?Member=4888&Session=27"
],
"emails": [
"david.dreyer@house.ga.gov"
],
"channels": [
{
"type": "Facebook",
"id": "dreyerforgeorgia"
},
{
"type": "Twitter",
"id": "ddreyer"
}
]
},
{
"name": "Gary W. Black",
"address": [
{
"line1": "19 Martin Luther King Junior Drive Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Republican Party",
"phones": [
"(404) 656-3600"
],
"urls": [
"http://agr.georgia.gov/"
],
"emails": [
"gary.black@agr.georgia.gov"
]
},
{
"name": "Richard Woods",
"address": [
{
"line1": "205 Jesse Hill Junior Drive Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Republican Party",
"phones": [
"(404) 657-1175"
],
"urls": [
"https://www.gadoe.org/Pages/superintendent.aspx"
],
"emails": [
"state.superintendent@doe.k12.ga.us"
],
"channels": [
{
"type": "Facebook",
"id": "georgiadeptofed"
},
{
"type": "Twitter",
"id": "SuptWoods"
}
]
},
{
"name": "Chris Carr",
"address": [
{
"line1": "40 Capitol Square Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Republican Party",
"phones": [
"(404) 656-3300"
],
"urls": [
"https://law.georgia.gov/"
],
"channels": [
{
"type": "Facebook",
"id": "GeorgiaAttorneyGeneral"
},
{
"type": "Twitter",
"id": "Georgia_AG"
}
]
},
{
"name": "Mark Butler",
"address": [
{
"line1": "148 Andrew Young International Boulevard Northeast",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Republican Party",
"phones": [
"(404) 232-7300"
],
"urls": [
"https://dol.georgia.gov/"
],
"emails": [
"commissioner@gdol.ga.gov"
],
"channels": [
{
"type": "Facebook",
"id": "GeorgiaDOL"
},
{
"type": "Twitter",
"id": "GeorgiaDOL"
}
]
},
{
"name": "Brad Raffensperger",
"address": [
{
"line1": "214 State Capitol",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Republican Party",
"phones": [
"(844) 753-7825"
],
"urls": [
"https://sos.ga.gov/"
],
"emails": [
"braffensperger@psc.state.ga.us"
],
"channels": [
{
"type": "Facebook",
"id": "BradForGeorgiaSOS"
}
]
},
{
"name": "Harold D. Melton",
"address": [
{
"line1": "330 Capitol Avenue Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 656-3470"
],
"urls": [
"https://www.gasupreme.us/"
],
"channels": [
{
"type": "Twitter",
"id": "SupremeCourtGA"
}
]
},
{
"name": "David E. Nahmias",
"address": [
{
"line1": "330 Capitol Avenue Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 656-3470"
],
"urls": [
"https://www.gasupreme.us/"
],
"channels": [
{
"type": "Twitter",
"id": "SupremeCourtGA"
}
]
},
{
"name": "Carla Wong McMillian",
"address": [
{
"line1": "330 Capitol Avenue Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 656-3470"
],
"urls": [
"https://www.gasupreme.us/"
],
"channels": [
{
"type": "Twitter",
"id": "SupremeCourtGA"
}
]
},
{
"name": "Sarah H. Warren",
"address": [
{
"line1": "330 Capitol Avenue Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 656-3470"
],
"urls": [
"https://www.gasupreme.us/"
],
"channels": [
{
"type": "Twitter",
"id": "SupremeCourtGA"
}
]
},
{
"name": "Michael P. Boggs",
"address": [
{
"line1": "330 Capitol Avenue Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 656-3470"
],
"urls": [
"https://www.gasupreme.us/"
],
"channels": [
{
"type": "Twitter",
"id": "SupremeCourtGA"
}
]
},
{
"name": "Charles J. Bethel",
"address": [
{
"line1": "330 Capitol Avenue Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 656-3470"
],
"urls": [
"https://www.gasupreme.us/"
],
"channels": [
{
"type": "Twitter",
"id": "SupremeCourtGA"
}
]
},
{
"name": "John J. Ellington",
"address": [
{
"line1": "330 Capitol Avenue Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 656-3470"
],
"urls": [
"https://www.gasupreme.us/"
],
"channels": [
{
"type": "Twitter",
"id": "SupremeCourtGA"
}
]
},
{
"name": "Nels S.D. Peterson",
"address": [
{
"line1": "330 Capitol Avenue Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 656-3470"
],
"urls": [
"https://www.gasupreme.us/"
],
"channels": [
{
"type": "Twitter",
"id": "SupremeCourtGA"
}
]
},
{
"name": "Keith R. Blackwell",
"address": [
{
"line1": "330 Capitol Avenue Southeast",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 656-3470"
],
"urls": [
"https://www.gasupreme.us/"
],
"channels": [
{
"type": "Twitter",
"id": "SupremeCourtGA"
}
]
},
{
"name": "John F. King",
"address": [
{
"line1": "2 Martin Luther King Junior Drive Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30334"
}
],
"party": "Republican Party",
"phones": [
"(404) 656-2070"
],
"urls": [
"https://www.oci.ga.gov/home.aspx"
],
"channels": [
{
"type": "Facebook",
"id": "georgiadoi"
},
{
"type": "Twitter",
"id": "GA_DOI"
}
]
},
{
"name": "Keith E. Gammage",
"address": [
{
"line1": "141 Pryor Street Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Democratic",
"phones": [
"(404) 612-4800"
],
"urls": [
"http://www.fultoncountyga.gov/sg-home"
]
},
{
"name": "Cathelene \"Tina\" Robinson",
"address": [
{
"line1": "136 Pryor Street Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Democratic",
"phones": [
"(404) 613-5314"
],
"urls": [
"http://www.fultonclerk.org/"
],
"emails": [
"Tina.Robinson@fultoncountyga.gov"
]
},
{
"name": "Arthur E. Ferdinand",
"address": [
{
"line1": "141 Pryor Street Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Democratic",
"phones": [
"(404) 613-6100"
]
},
{
"name": "Robb Pitts",
"address": [
{
"line1": "141 Pryor Street Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Democratic",
"phones": [
"(404) 612-8200"
],
"urls": [
"http://www.fultoncountyga.gov/fcbocchair"
],
"emails": [
"robb.pitts@fultoncountyga.gov"
],
"channels": [
{
"type": "Facebook",
"id": "ChairRobbPitts"
},
{
"type": "Twitter",
"id": "ChairRobbPitts"
}
]
},
{
"name": "Arnaud D. Huguet",
"party": "Democratic",
"phones": [
"(404) 631-1678"
],
"emails": [
"arnaud.atlanta@icloud.com"
],
"channels": [
{
"type": "Facebook",
"id": "arnaud.atlanta"
}
]
},
{
"name": "Theodore Jackson",
"address": [
{
"line1": "185 Central Avenue Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Democratic",
"phones": [
"(404) 612-5100"
],
"urls": [
"http://www.fultonsheriff.org/"
],
"channels": [
{
"type": "Facebook",
"id": "fultonsheriff"
},
{
"type": "Twitter",
"id": "fultonsheriff"
}
]
},
{
"name": "Marvin S. Arrington Jr.",
"address": [
{
"line1": "141 Pryor Street Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Democratic",
"phones": [
"(404) 613-0200"
],
"urls": [
"http://www.fultoncountyga.gov/fcbocd5"
],
"emails": [
"Marvin.Arrington@fultoncountyga.gov"
],
"channels": [
{
"type": "Facebook",
"id": "MarvinArringtonJr"
},
{
"type": "Twitter",
"id": "FultonComm5"
}
]
},
{
"name": "Felicia A. Moore",
"address": [
{
"line1": "55 Trinity Avenue Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 330-6052"
],
"urls": [
"http://citycouncil.atlantaga.gov/council-members/council-president-felicia-a-moore"
],
"emails": [
"fmoore@atlantaga.gov"
]
},
{
"name": "Keisha Lance Bottoms",
"address": [
{
"line1": "55 Trinity Avenue Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 330-6100"
],
"urls": [
"http://www.atlantaga.gov/government/mayor-s-office"
]
},
{
"name": "Matt Westmoreland",
"address": [
{
"line1": "55 Trinity Avenue Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 330-6302"
],
"urls": [
"http://citycouncil.atlantaga.gov/council-members/matt-westmoreland"
],
"emails": [
"mwestmoreland@atlantaga.gov"
]
},
{
"name": "Michael Julian Bond",
"address": [
{
"line1": "55 Trinity Avenue Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 330-6770"
],
"urls": [
"http://citycouncil.atlantaga.gov/council-members/michael-julian-bond"
],
"emails": [
"mbond@atlantaga.gov"
],
"channels": [
{
"type": "Facebook",
"id": "michaeljulianbond"
},
{
"type": "Twitter",
"id": "michael_j_bond"
}
]
},
{
"name": "Andre Dickens",
"address": [
{
"line1": "55 Trinity Avenue Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 330-6041"
],
"urls": [
"http://citycouncil.atlantaga.gov/council-members/andre-dickens"
],
"emails": [
"adickens@atlantaga.gov"
],
"channels": [
{
"type": "Facebook",
"id": "Andre4Atlanta"
},
{
"type": "Twitter",
"id": "andre4atlanta"
}
]
},
{
"name": "Natalyn Archibong",
"address": [
{
"line1": "55 Trinity Avenue Southwest",
"city": "Atlanta",
"state": "GA",
"zip": "30303"
}
],
"party": "Nonpartisan",
"phones": [
"(404) 330-6048"
],
"urls": [
"http://citycouncil.atlantaga.gov/council-members/natalyn-archibong"
],
"emails": [
"narchibong@atlantaga.gov"
],
"channels": [
{
"type": "Facebook",
"id": "CouncilwomanArchibong"
},
{
"type": "Twitter",
"id": "NMArchibong"
}
]
}
]
}
```

## Component Hierarchy

![IMG_3180](https://user-images.githubusercontent.com/33344527/88694571-b6fb8a00-d0ce-11ea-8114-ab404649e836.jpg)