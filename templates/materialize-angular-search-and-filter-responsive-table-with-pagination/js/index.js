
$(document).ready(function() {
    $('select').material_select();
});


// angular js codes will be here
 var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);
app.controller('volunteersCtrl', function($scope, $http) {
    // more angular JS codes will be here
      $scope.currencyVal;
    $scope.filters = { };
$scope.predicate = "unix";
$scope.reverse = true;

  $scope.fieldTable = [{
    field: "",
    title: "ALL"
  }, {
    field: "African",
    title: "African"
  }, {
  	field: "African-American",
    title: "African-American"
  }, {
    field: "Albanian",
    title: "Albanian"
  },  {
    field: "Arab",
    title: "Arab"
  }, {
    field: "Bangladeshi",
    title: "Bangladeshi"
  },
  {
    field: "Brazilian",
    title: "Brazilian"
  }, {
    field: "Caribbean",
    title: "Caribbean"
  }, {
    field: "Chinese",
    title: "Chinese"
  },  {
    field: "Community",
    title: "Community"
  }, {
    field: "Estonian",
    title: "Estonian"
  },
  {
    field: "Filipino",
    title: "Filipino"
  }, {
  	field: "French",
    title: "French"
  }, {
    field: "Greek",
    title: "Greek"
  },  {
    field: "Haitian",
    title: "Haitian"
  }, {
    field: "Indian",
    title: "Indian"
  },
  {
    field: "Irish",
    title: "Irish"
  }, {
    field: "Israeli",
    title: "Israeli"
  }, {
    field: "Japanese",
    title: "Japanese"
  },  {
    field: "Jewish",
    title: "Jewish"
  }, {
    field: "Jewish Russian",
    title: "Jewish Russian"
  },

  {
    field: "Korean",
    title: "Korean"
  }, {
    field: "Latino",
    title: "Latino"
  }, {
    field: "Multi-Ethnic",
    title: "Multi-Ethnic"
  },  {
    field: "Native American",
    title: "Native American"
  }, {
    field: "Nepali",
    title: "Nepali"
  },
  {
    field: "Pakistani",
    title: "Pakistani"
  }, {
  	field: "Polish",
    title: "Polish"
  }, {
    field: "Romanian",
    title: "Romanian"
  },  {
    field: "Russian",
    title: "Russian"
  }, {
    field: "Serbian",
    title: "Serbian"
  },
  {
    field: "South Asian",
    title: "South Asian"
  }, {
    field: "Sri Lankan",
    title: "Sri Lankan"
  }, {
    field: "Swedish",
    title: "Swedish"
  },  {
    field: "Thai",
    title: "Thai"
  }, {
    field: "Turkish",
    title: "Turkish"
  },
  {
   field: "Youth",
   title: "Youth"
 }
];

   $scope.selected = $scope.fieldTable[0];

  $scope.hasChanged = function() {
$scope.filters = $scope.selected.field;
  }



    $scope.showCreateForm = function(){
    // clear form
    $scope.clearForm();
        //Setting default
       $scope.language = "ALL";
     $scope.unix = Math.floor(Date.now());
    // change modal title
    $('#modal-volunteer-title').text("Create New Volunteer");

    // hide update volunteer button
    $('#btn-update-volunteer').hide();

/*
    // show create volunteer button
    $('#btn-create-volunteer').show();
*/

} // END SHOW CREATE FORM

// clear variable / form values
$scope.clearForm = function(){
    $scope.id = "";
    $scope.community = "";
    $scope.language = "";
    $scope.borough = "";
    $scope.name = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.website = "";
    $scope.editor = "";
    $scope.address = "";
    $scope.zip = "";
    $scope.circulation = "";
    $scope.geographic = "";
    $scope.frequency = "";
} // END CLEAR FORM

// create new volunteer
$scope.createVolunteer = function(){

    // fields in key-value pairs
    $http.post('create_volunteer.php', {
            'name' : $scope.name,
            'community' : $scope.community,
            'language' : $scope.language,
            'borough' : $scope.borough,
            'email' : $scope.email,
            'phone' : $scope.phone,
            'website' : $scope.website,
            'editor' : $scope.editor,
            'address' : $scope.address,
            'zip' : $scope.zip,
            'circulation' : $scope.circulation,
            'geographic' : $scope.geographic,
            'frequency' : $scope.frequency,
        }
    ).success(function (data, community, headers, config) {
        console.log(data);
        // tell the user new volunteer was created
        Materialize.toast(data, 4000);

        // close modal
        $('#modal-volunteer-form').closeModal();

        // clear modal content
        $scope.clearForm();

        // refresh the list
        $scope.getAll();
    });
} //END CREATE VOLUNTEER

// read volunteers

        $scope.names = [
  {
    "id": 1,
    "community": "African",
    "language": "French & English",
    "borough": "Manhattan",
    "name": "African-American Observer",
    "email": "blacknewswatch@aol.com",
    "phone": "(212) 586-4141",
    "website": "aaobserveronline.com",
    "editor": "Steve Mallory",
    "address": "500 West 37th St.Suite 325New York, NY 10018",
    "zip": 10018,
    "circulation": "55,000 (audited)",
    "geographic": "New York City; Long Island; New Jersey",
    "frequency": "Weekly"
  },
  {
    "id": 2,
    "community": "African",
    "language": "French & English",
    "borough": "Manhattan",
    "name": "Afrikanspot",
    "email": "isseu@afrikanspot.com",
    "phone": "(917) 204-1582",
    "website": "Not shown (blocked)",
    "editor": "Isseu Diouf Campbell",
    "address": "2214 Frederick Douglass Blvd., Suite 284, New York, NY 10026",
    "zip": 10026,
    "circulation": "5,000 - 9,999",
    "geographic": "New York City metropolitan area",
    "frequency": "Monthly"
  },
  {
    "id": 3,
    "community": "African",
    "language": "French & English",
    "borough": "Manhattan",
    "name": "NextMedia.tv",
    "email": "mn@nextmedia.tv",
    "phone": "(212) 541-4316",
    "website": "http://nextmedia.tv/",
    "editor": "Mamadou Niang",
    "address": "236 West 27th St., New York, NY 10001",
    "zip": 10001,
    "circulation": "15 million",
    "geographic": "North America",
    "frequency": "TV"
  },
  {
    "id": 4,
    "community": "African",
    "language": "French & English",
    "borough": "Manhattan",
    "name": "African Sun Times",
    "email": "aonyeani@africansuntimes.com",
    "phone": "(917) 279-4038",
    "website": "http://africansuntimes.com/",
    "editor": "Abba Onyeani",
    "address": "236 West 27th St., New York, NY 10001",
    "zip": "",
    "circulation": 45000,
    "geographic": "Northeast",
    "frequency": "Weekly"
  },
  {
    "id": 5,
    "community": "African",
    "language": "French & English",
    "borough": "Manhattan",
    "name": "Amandla",
    "email": "kwabena.opong@hotmail.com",
    "phone": "(973) 419-0073",
    "website": "Not availbale",
    "editor": "Kwabena Opong",
    "address": "P.O. Box 7030WOB, West Orange, NJ 07052",
    "zip": "",
    "circulation": "10,000-20,000",
    "geographic": "New York City metropolitan area",
    "frequency": "Monthly"
  },
  {
    "id": 6,
    "community": "African",
    "language": "French & English",
    "borough": "Manhattan",
    "name": "Afric Vision Network TV",
    "email": "avntv.net@gmail.com",
    "phone": "(646) 234-0609",
    "website": "http://www.avntv.net/",
    "editor": "Dosso Inza",
    "address": "",
    "zip": "",
    "circulation": "",
    "geographic": "New York City metropolitan area",
    "frequency": "TV"
  },
  {
    "id": 7,
    "community": "African",
    "language": "French & English",
    "borough": "Bronx",
    "name": "US Africa News",
    "email": "franckguten@hotmail.com",
    "phone": "(646) 796-8159",
    "website": "http://usafricanews.org/",
    "editor": "Franck Gutenburg",
    "address": "133 W 113th Street Suite 36, New York, NY 10026",
    "zip": 10462,
    "circulation": "NYC Metropolitan Area; North America; Africa; Europe",
    "geographic": "English; French",
    "frequency": "online"
  },
  {
    "id": 8,
    "community": "African",
    "language": "French & English",
    "borough": "Brooklyn",
    "name": "African Spotlight LLC",
    "email": "aeoladele@hotmail.com",
    "phone": "(347) 932-4911",
    "website": "http://africanspotlight.com/",
    "editor": "Adeola Fayehun",
    "address": "2412 Avenue D, Box 10, Brooklyn, NY 11226",
    "zip": 11226,
    "circulation": "Africa; Europe; North America",
    "geographic": "africanspotlight.com",
    "frequency": "Website"
  },
  {
    "id": 9,
    "community": "African",
    "language": "French & English",
    "borough": "Brooklyn",
    "name": "AfrobeatRadio",
    "email": "wuyi@afrobeatradio.com",
    "phone": "(347) 578-1940",
    "website": "http://www.afrobeatradio.com/",
    "editor": "Wuyi Jacobs",
    "address": "P.O. Box 170284, Brooklyn, NY 11217",
    "zip": 11217,
    "circulation": "NYC Metropolitan Area",
    "geographic": "afrobeatradio.net",
    "frequency": "Radio, Website"
  },
  {
    "id": 10,
    "community": "African-American",
    "language": "English",
    "borough": "Manhattan",
    "name": "Harlem World Magazine",
    "email": "hwcontact@yahoo.com",
    "phone": "(646) 216-8698",
    "website": "http://harlemworldmag.com/",
    "editor": "Daniel Tisdale",
    "address": "P. O. Box #1405 New York, NY 10027",
    "zip": 10027,
    "circulation": "30,000-40,000",
    "geographic": "International",
    "frequency": "Weekly"
  },
  {
    "id": 11,
    "community": "African-American",
    "language": "English",
    "borough": "Manhattan",
    "name": "New York Amsterdam News",
    "email": "elinor.tatum@amsterdamnews.com",
    "phone": "(212) 932-7465",
    "website": "http://amsterdamnews.com/",
    "editor": "Elinor Tatum",
    "address": "2340 Frederick Douglass Blvd. New York, NY 10027",
    "zip": 10027,
    "circulation": "20,000-50,000 (audited)",
    "geographic": "New York City metropolitan area, Africa, Europe, Southeast, Midwest",
    "frequency": "Weekly"
  },
  {
    "id": 12,
    "community": "African-American",
    "language": "English",
    "borough": "Manhattan",
    "name": "New York Beacon",
    "email": "newyorkbeacon@yahoo.com",
    "phone": "(212) 213-8585",
    "website": "http://newyorkbeacon.net/",
    "editor": "William Egyir",
    "address": "237 West 37th St., New York, NY 10018",
    "zip": 10018,
    "circulation": "20,000-50,000 (audited)",
    "geographic": "New York City metropolitan area",
    "frequency": "Weekly"
  },
  {
    "id": 13,
    "community": "African-American",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Black Star News",
    "email": "milton@blackstarnews.com",
    "phone": "(646) 261-7566",
    "website": "http://www.blackstarnews.com/",
    "editor": "Milton Allimadi",
    "address": "2429 Southern Blvd. Suite 2, Bronx, New York 10458",
    "zip": 10458,
    "circulation": "10,000-20,000",
    "geographic": "New York City metropolitan area; international",
    "frequency": "Weekly"
  },
  {
    "id": 14,
    "community": "African-American",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Network Journal",
    "email": "rmclymont@tnj.com",
    "phone": "(212) 962-3791",
    "website": "http://www.tnj.com/",
    "editor": "Rosalind McLymont",
    "address": "39 Broadway, Suite 2430, New York, NY 10006",
    "zip": 10006,
    "circulation": 25000,
    "geographic": "New York City metropolitan area",
    "frequency": "Bi-monthly"
  },
  {
    "id": 15,
    "community": "African-American",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Black Reign News",
    "email": "blackreignnews@yahoo.com",
    "phone": "(718) 207-1158",
    "website": "not shown (blocked)",
    "editor": "Jon Gibbs",
    "address": "3601 Avenue J, Rm5A, Brooklyn, NY 11210",
    "zip": 11210,
    "circulation": "Brooklyn; Staten Island",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 16,
    "community": "African-American",
    "language": "English",
    "borough": "Brooklyn",
    "name": "BlackandBrownNews.com",
    "email": "stoomer@blackandbrownnews.com",
    "phone": "(917) 721-3150",
    "website": "blackandbrownnews.com",
    "editor": "Sharon Toomer",
    "address": "201 Spencer St., Rm 8A, Brooklyn, NY 11205",
    "zip": 11205,
    "circulation": "NYC Metropolitan Area",
    "geographic": "blackandbrownnews.com",
    "frequency": "Website"
  },
  {
    "id": 17,
    "community": "African-American",
    "language": "English",
    "borough": "Brooklyn",
    "name": "New York Daily Challenge",
    "email": "challengegroup@yahoo.com",
    "phone": "(718) 636-9500",
    "website": "http://www.nydailychallengenews.com/",
    "editor": "Gareth Brown",
    "address": "1195 Atlantic Ave., Brooklyn, NY 11216",
    "zip": 11216,
    "circulation": "NYC Metropolitan Area",
    "geographic": "",
    "frequency": "Daily"
  },
  {
    "id": 18,
    "community": "African-American",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Diaspora Radio",
    "email": "cariaweekly@aol.com",
    "phone": "(718) 771-0988",
    "website": "http://www.ethiodiasporaradio.com/",
    "editor": "Pearl Phillip",
    "address": "26 Court St., Suite 701, Brooklyn, NY 11242",
    "zip": 11242,
    "circulation": "NYC Metropolitan Area",
    "geographic": "thenegroworldinc.com",
    "frequency": "Radio"
  },
  {
    "id": 19,
    "community": "African-American",
    "language": "English",
    "borough": "Brooklyn",
    "name": "New American of New York",
    "email": "Challengegroup@yahoo.com",
    "phone": "(718) 636-9500",
    "website": "https://www.newamerica.org/nyc/",
    "editor": "Causewell Vaughn",
    "address": "1195 Atlantic Ave., Brooklyn, NY 11216",
    "zip": 11216,
    "circulation": "NYC Metropolitan Area",
    "geographic": "",
    "frequency": "Daily"
  },
  {
    "id": 20,
    "community": "African-American",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Our Time Press",
    "email": "dgreaves@ourtimepress.com",
    "phone": "(718) 599-6828",
    "website": "http://www.ourtimepress.com/",
    "editor": "David Greaves",
    "address": "358 Classon Ave., Brooklyn, NY 11238",
    "zip": 11238,
    "circulation": "Brooklyn",
    "geographic": "ourtimepress.com",
    "frequency": "Monthly"
  },
  {
    "id": 21,
    "community": "Albanian",
    "language": "Albanian",
    "borough": "Manhattan",
    "name": "Illyria",
    "email": "ruben@illyriapress.com",
    "phone": "(212) 868-2224",
    "website": "http://illyriapress.com/",
    "editor": "Ruben Avxhiu",
    "address": "481 8th Ave.Suite 536 New York, NY 10001",
    "zip": 10001,
    "circulation": "",
    "geographic": "US",
    "frequency": "Twice Weekly"
  },
  {
    "id": 22,
    "community": "Arab",
    "language": "Arabic",
    "borough": "Staten Island",
    "name": "Aramica",
    "email": "aramicanews.com",
    "phone": "(718) 921-4788",
    "website": "4222 Hylan Blvd., Staten Island, NY 10308",
    "editor": "Antoine Faisel",
    "address": 10308,
    "zip": "20,000 - 50,000",
    "circulation": "aramica.com",
    "geographic": "Arabic, English",
    "frequency": ""
  },
  {
    "id": 23,
    "community": "Arab",
    "language": "Arabic",
    "borough": "Queens",
    "name": "Allewaa Alarabi",
    "email": "angie_damlakhi@yahoo.com",
    "phone": "(646) 707-2012",
    "website": "allewaaalarabi.com",
    "editor": "Angie Damlaki",
    "address": "75-15 188th St., Queens, NY 11366",
    "zip": 11366,
    "circulation": "North America",
    "geographic": "allewaaalarabi.wordpress.com",
    "frequency": "Weekly"
  },
  {
    "id": 24,
    "community": "Arab",
    "language": "Arabic",
    "borough": "Queens",
    "name": "Arab Astoria",
    "email": "arabastoria@yahoo.com",
    "phone": "(646) 775-1531",
    "website": "not available",
    "editor": "Abdul Azmal",
    "address": "34-23 Steinway St. , Suite 129, Astoria, NY 11101",
    "zip": 11101,
    "circulation": "NYC",
    "geographic": "",
    "frequency": "Monthly"
  },
  {
    "id": 25,
    "community": "Arab",
    "language": "Arabic",
    "borough": "Queens",
    "name": "Attawassul",
    "email": "attawassul@mail.com",
    "phone": "(718) 552-6315",
    "website": "attawassul.com",
    "editor": "Bouchaib Essaheb",
    "address": "105-51 Ditmars Blvd., East Elmhurst, NY 11369",
    "zip": 11369,
    "circulation": "Northeast",
    "geographic": "attawassul.net",
    "frequency": "Monthly"
  },
  {
    "id": 26,
    "community": "Arab",
    "language": "Arabic",
    "borough": "Brooklyn",
    "name": "Ghorba News",
    "email": "ghorbanews1@yahoo.com",
    "phone": "(646) 294-1237",
    "website": "http://ghorbanews.com/",
    "editor": "Adal Kassim",
    "address": "6825 5th Ave.Brooklyn, NY 11220",
    "zip": 11220,
    "circulation": "NYC Metropolitan Area",
    "geographic": "ghorbanews.com",
    "frequency": "Bi-Weekly"
  },
  {
    "id": 27,
    "community": "Bangladeshi",
    "language": "Bengali",
    "borough": "Queens",
    "name": "Akhon Samoy",
    "email": "newsbangla@gmail.com",
    "phone": "(718) 565-9099",
    "website": "akhonsamoy.com",
    "editor": "Shamsul Kazi",
    "address": "72-28 Roosevelt Ave., Jackson Heights, NY 11372",
    "zip": 11372,
    "circulation": "US",
    "geographic": "akhonsamoy.com",
    "frequency": "Bi-Weekly"
  },
  {
    "id": 28,
    "community": "Bangladeshi",
    "language": "Bengali",
    "borough": "Queens",
    "name": "Bangla Patrika",
    "email": "abutaher@gmail.com",
    "phone": "(718) 753-0086",
    "website": "http://www.banglapatrikausa.com/",
    "editor": "Abu Taher",
    "address": "38-06 31st St., 2nd Fl., Long Island City, NY 11101",
    "zip": 11101,
    "circulation": "North America",
    "geographic": "banglapatrika.com",
    "frequency": "Weekly"
  },
  {
    "id": 29,
    "community": "Bangladeshi",
    "language": "Bengali",
    "borough": "Queens",
    "name": "Thikana",
    "email": "wthikana@aol.com",
    "phone": "(718) 472-2428",
    "website": "https://www.facebook.com/Thikana-Newspaper-381909871889424/",
    "editor": "Fazlur Rahman",
    "address": "11-35 45th Ave., Long Island City, NY 11101",
    "zip": 11101,
    "circulation": "North America",
    "geographic": "thikana.net",
    "frequency": "Weekly"
  },
  {
    "id": 30,
    "community": "Bangladeshi",
    "language": "Bengali",
    "borough": "Queens",
    "name": "Weekly Bangalee",
    "email": "weeklybangalee@gmail.com",
    "phone": "(718) 639-1177",
    "website": "weeklybangalee.com",
    "editor": "Kowshik Ahmed",
    "address": "86-16 Queens Blvd., Suite 202, Elmhurst, NY 11373",
    "zip": 11373,
    "circulation": "US",
    "geographic": "weeklybangalee.com",
    "frequency": "Weekly"
  },
  {
    "id": 31,
    "community": "Bangladeshi",
    "language": "Bengali",
    "borough": "Queens",
    "name": "Weekly Bornomala",
    "email": "bornomalabd@gmail.com",
    "phone": "(347) 753-2355",
    "website": "bornomalanews.com",
    "editor": "Mahfuzur Rahman",
    "address": "153-15 111 Ave., Jamaica, NY 11433",
    "zip": 11433,
    "circulation": "US",
    "geographic": "bornomalanews.com",
    "frequency": "Weekly"
  },
  {
    "id": 32,
    "community": "Bangladeshi",
    "language": "Bengali",
    "borough": "Queens",
    "name": "Weekly Parichoy",
    "email": "parichoyny@gmail.com",
    "phone": "(917) 749-1179",
    "website": "parichoy.com",
    "editor": "Najmul Ahsan",
    "address": "37-21 76 St., Jackson Heights, NY 11372",
    "zip": 11372,
    "circulation": "NYC Metropolitan Area",
    "geographic": "parichoy.com",
    "frequency": "Weekly"
  },
  {
    "id": 33,
    "community": "Bangladeshi",
    "language": "Bengali",
    "borough": "Queens",
    "name": "Ajkal Newspaper",
    "email": "ajkalnews@gmail.com",
    "phone": "(646) 318-4617",
    "website": "http://www.aajkaal.in/",
    "editor": "Zaharia Masud",
    "address": "37-07 74th Street, Suite: 8 Jackson Heights, NY 11372",
    "zip": 11372,
    "circulation": "NYC Metropolitan Area",
    "geographic": "newyorkbanglanews.com",
    "frequency": "Weekly"
  },
  {
    "id": 34,
    "community": "Bangladeshi",
    "language": "Bengali",
    "borough": "Brooklyn",
    "name": "US Bangla News",
    "email": "usbanglanews24@gmail.com",
    "phone": "(347) 845-4971",
    "website": "http://usbanglanews.com/",
    "editor": "Abu Sayeed",
    "address": "1710 West 4th St.Apt. D6, Brooklyn, NY 11223",
    "zip": 11223,
    "circulation": "NYC Metropolitan Area",
    "geographic": "usbanglanews.com",
    "frequency": "Website"
  },
  {
    "id": 35,
    "community": "Brazilian",
    "language": "Portuguese",
    "borough": "Manhattan",
    "name": "Brasilians",
    "email": "tthebrasil@aol.com",
    "phone": "(212) 382-1630 x3500",
    "website": "Not shown (blocked)",
    "editor": "Eddie Mendez",
    "address": "21 W. 46th St., Suite 203, New York, NY 10036",
    "zip": 10036,
    "circulation": 60000,
    "geographic": "New York City metropolitan area",
    "frequency": "Monthly"
  },
  {
    "id": 36,
    "community": "Brazilian",
    "language": "Portuguese",
    "borough": "Manhattan",
    "name": "U.S. Portugal Brasil",
    "email": "fred@columbusny.net",
    "phone": "(212) 956-3043",
    "website": "not available",
    "editor": "Fred Ziotto",
    "address": "334 West 85th street, suite 4D, New York, NY 10024",
    "zip": 10024,
    "circulation": "",
    "geographic": "New York City metropolitan area",
    "frequency": "Monthly"
  },
  {
    "id": 37,
    "community": "Brazilian",
    "language": "Portuguese",
    "borough": "Manhattan",
    "name": "The Brasilians Newspaper",
    "email": "edilbertomendes@gmail.com",
    "phone": "(212) 382-1630",
    "website": "Not shown (blocked)",
    "editor": "Edilberto Mendes",
    "address": "16 West 46th St Suite 302 New York, NY 10036",
    "zip": 10036,
    "circulation": "50,000+",
    "geographic": "US",
    "frequency": "Monthly"
  },
  {
    "id": 38,
    "community": "Caribbean",
    "language": "English French Creole",
    "borough": "Manhattan",
    "name": "The New York Carib News",
    "email": "caribdesk@gmail.com; carolibru@aol.com",
    "phone": "(212) 944-1991",
    "website": "http://nycaribnews.com/",
    "editor": "Karl Rodney",
    "address": "35 West 35th St. Suite 705 New York, NY 10001",
    "zip": 10001,
    "circulation": "20,000-50,000",
    "geographic": "Northeast; Southeast",
    "frequency": "Weekly"
  },
  {
    "id": 39,
    "community": "Caribbean",
    "language": "English French Creole",
    "borough": "Bronx",
    "name": "Street Hype Newspaper",
    "email": "editor@streethypenewspaper.com",
    "phone": "(914) 663-4973",
    "website": "http://www.streethypenewspaper.com/",
    "editor": "Patrick Maitland",
    "address": "711 South Columbus Ave., Mount Vernon, NY 10550",
    "zip": "",
    "circulation": "NYC Metropolitan Area",
    "geographic": "English",
    "frequency": "Bi-weekly"
  },
  {
    "id": 40,
    "community": "Caribbean",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Caribbean Life",
    "email": "VDiMiceli@CNGLocal.com",
    "phone": "(718) 260-2500",
    "website": "http://www.hgtv.com/shows/caribbean-life",
    "editor": "Vince DiMiceli",
    "address": "One Metrotech Center, Suite 1001, Brooklyn, NY 11201",
    "zip": 11201,
    "circulation": "NYC",
    "geographic": "caribbeanlifenews.com",
    "frequency": "Weekly"
  },
  {
    "id": 41,
    "community": "Caribbean",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Everybody's",
    "email": "editor@everybodysmag.com",
    "phone": "(718) 941-1879",
    "website": "http://everybodysmag.com/",
    "editor": "Herman Hall",
    "address": "1630 Nostrand Ave, Brooklyn, NY 11226",
    "zip": 11226,
    "circulation": "Caribbean",
    "geographic": "everybodysmag.com",
    "frequency": "Monthly"
  },
  {
    "id": 42,
    "community": "Caribbean",
    "language": "English",
    "borough": "Brooklyn",
    "name": "TSO PRODUCTIONS",
    "email": "carlylemcketty@tsoproductions.com",
    "phone": "(718) 421-6927",
    "website": "https://www.facebook.com/TSO-Productions-546038162266826/",
    "editor": "Carlyle McKetty",
    "address": "1199 Ocean Avenue, Suite 407, Brooklyn, NY 11230",
    "zip": 11230,
    "circulation": "Caribbean",
    "geographic": "tsoproductions.com",
    "frequency": "Website"
  },
  {
    "id": 43,
    "community": "Caribbean",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Caribbean American Weekly",
    "email": "cariaweekly@aol.com",
    "phone": "(718) 771-0988",
    "website": "caribbeanamericanweekly.com",
    "editor": "Pearl Phillip",
    "address": "26 Court St., Suite 701, Brooklyn, NY 11242",
    "zip": 11242,
    "circulation": "NYC Metropolitan Area",
    "geographic": "caribbeanamericanweekly.com",
    "frequency": "Weekly"
  },
  {
    "id": 44,
    "community": "Caribbean",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Caribbean People",
    "email": "cpnewspaper@aol.com",
    "phone": "(347) 221-0607",
    "website": "not available",
    "editor": "Howard Hughes",
    "address": "Multi Business Services Inc., 32 Rutland Road, Suite 02, Brooklyn, NY 11225",
    "zip": 11225,
    "circulation": "NYC Metropolitan Area",
    "geographic": "",
    "frequency": ""
  },
  {
    "id": 45,
    "community": "Caribbean",
    "language": "English",
    "borough": "Queens",
    "name": "Caribbean New Yorker",
    "email": "nala999@aol.com",
    "phone": "(718) 812-5000",
    "website": "caribbeanewyorker.com",
    "editor": "Nala Singham",
    "address": "116-06 132nd St., South Ozone Park, NY 11420",
    "zip": 11420,
    "circulation": "NYC Metropolitan Area; South America",
    "geographic": "caribbeanewyorker.com",
    "frequency": "Weekly"
  },
  {
    "id": 46,
    "community": "Caribbean",
    "language": "English",
    "borough": "Queens",
    "name": "The Weekly Star (The Gleaner Company)",
    "email": "paget.defreitas@gleanerjm.com",
    "phone": "(800) 233-9540",
    "website": "http://www.starweekly.com.au/",
    "editor": "Paget DeFreitas",
    "address": "92-05 172nd St., Jamaica, NY 11433",
    "zip": 11433,
    "circulation": "US",
    "geographic": "gleanerextra.com",
    "frequency": "Weekly"
  },
  {
    "id": 47,
    "community": "Caribbean",
    "language": "English",
    "borough": "Queens",
    "name": "WhereItzAt",
    "email": "clive@whereitzatlive.com",
    "phone": "(347) 351-0676",
    "website": "gowhereitzat.com",
    "editor": "Chris Williams",
    "address": "219-10 South Conduit Ave., Springfield Gardens, NY 11413",
    "zip": 11413,
    "circulation": "US",
    "geographic": "gowhereitzat.com",
    "frequency": "Monthly"
  },
  {
    "id": 48,
    "community": "Caribbean",
    "language": "English",
    "borough": "Queens",
    "name": "Jamaica Gleaner",
    "email": "paget.defreitas@gleanerjm.com",
    "phone": "(800) 233-9540",
    "website": "gleanerextra.com",
    "editor": "Paget DeFreitas",
    "address": "92-05 172nd St., Jamaica, NY 11433",
    "zip": 11433,
    "circulation": "US, Caribbean",
    "geographic": "gleanerextra.com",
    "frequency": "Weekly"
  },
  {
    "id": 49,
    "community": "Caribbean",
    "language": "English",
    "borough": "Staten Island",
    "name": "Caribbean Media Zone, Inc.",
    "email": "not available",
    "phone": "(404) 461-9527",
    "website": "P.O. Box 140567, Staten Island, NY 10314",
    "editor": "Aubry Padmore",
    "address": 10314,
    "zip": 1000,
    "circulation": "caribvoiceradio.org",
    "geographic": "English",
    "frequency": ""
  },
  {
    "id": 50,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "WZRC 1480 AM",
    "email": "brandonw@mrbi.net",
    "phone": "(212) 431-1430",
    "website": "not available",
    "editor": "Brandon Wong",
    "address": "449 Broadway 5th floor New York, NY 10013",
    "zip": 10013,
    "circulation": "Radio",
    "geographic": "New York City metropolitan area",
    "frequency": "Radio"
  },
  {
    "id": 51,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "M-Weekly",
    "email": "jennyl@mrbi.net",
    "phone": "(212) 219-6489",
    "website": "not available",
    "editor": "Jenny Lacsmana",
    "address": "449 Broadway 5th floor New York, NY 10013",
    "zip": 10013,
    "circulation": "",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 52,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "Chinesenewsnet.com",
    "email": "ccw88@yahoo.com",
    "phone": "(212) 219-3892",
    "website": "not available",
    "editor": "Eric Yuen",
    "address": "Chinese Media Net, Inc, 6 East 46th St., Suite 302, New York, NY 10017",
    "zip": 10017,
    "circulation": "450,000 visitors/month",
    "geographic": "",
    "frequency": ""
  },
  {
    "id": 53,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "Global Chinese Times",
    "email": "chiweekly@yahoo.com",
    "phone": "(732) 650-9888",
    "website": "not available",
    "editor": "Dai-Fan Gu",
    "address": "1945 Route 27, Suite 5 Edison, NJ 08817",
    "zip": "",
    "circulation": "20,000-50,000",
    "geographic": "New York City metropolitan area",
    "frequency": "Weekly"
  },
  {
    "id": 54,
    "community": "Chinese",
    "language": "English",
    "borough": "Manhattan",
    "name": "China Daily USA",
    "email": "readers@chinadailyusa.com",
    "phone": "(212) 537-8905",
    "website": "http://usa.chinadaily.com.cn/",
    "editor": "Yuwei Zhang",
    "address": "1500 Broadway Suite 2800 New York, NY 10036",
    "zip": 10036,
    "circulation": 50000,
    "geographic": "North America",
    "frequency": "Daily"
  },
  {
    "id": 55,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "China Press",
    "email": "news@chinapress.net",
    "phone": "(212) 683-8282",
    "website": "http://ny.uschinapress.com/",
    "editor": "I-Der Jeng",
    "address": "15 East 40th St. New York, NY 10016",
    "zip": 10016,
    "circulation": 50000,
    "geographic": "US; Asia",
    "frequency": "Daily"
  },
  {
    "id": 56,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "DWNews.com/CMN",
    "email": "newsdesk@dwnews.com",
    "phone": "(212) 219-3892",
    "website": "http://www.dwnews.com/",
    "editor": "Bettina Yang",
    "address": "6 East 46th St., Suite 302, New York, NY 10017",
    "zip": 10017,
    "circulation": 50000,
    "geographic": "Asia; Europe; North America",
    "frequency": "Website"
  },
  {
    "id": 57,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "ICN TV/Chinese American Voice Radio",
    "email": "foreveredward0819@gmail.com",
    "phone": "(646) 215-1743",
    "website": "Not availbale",
    "editor": "Lei Yu",
    "address": "144 East 44th St. New York, NY 10017",
    "zip": 10017,
    "circulation": 100000,
    "geographic": "North America; Asia",
    "frequency": "TV: Radio"
  },
  {
    "id": 58,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "Sing Tao Daily, New York",
    "email": "lotuschau@nysingtao.com; ceciliali@nysingtao.com",
    "phone": "(212) 699-3800",
    "website": "http://std.stheadline.com/",
    "editor": "Lotus Chau/Cecilia Li",
    "address": "188 Lafayette St. New York New York, NY 10013",
    "zip": 10013,
    "circulation": 50000,
    "geographic": "New York City metropolitan area",
    "frequency": "Daily"
  },
  {
    "id": 59,
    "community": "Chinese",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Epoch Times",
    "email": "ny@epochtimes.com; linda.lin@epochtimes.com",
    "phone": "(212) 244-3395",
    "website": "http://www.theepochtimes.com/",
    "editor": "Jing Shi/Linda Lin",
    "address": "34 West 27th St. 5th fl. New York, NY 10001",
    "zip": 10001,
    "circulation": 20000,
    "geographic": "Asia; Europe; North America",
    "frequency": "Daily"
  },
  {
    "id": 60,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "New Tang Dynasty Televison",
    "email": "zhihua.hu@ntdtv.com",
    "phone": "(917) 588-2500",
    "website": "http://www.ntd.tv/",
    "editor": "Richard Zhihua Hu",
    "address": "229 West 28th Street,Fl 7, New York, New York 10001",
    "zip": 10001,
    "circulation": "",
    "geographic": "Asia; Europe; North America",
    "frequency": "TV"
  },
  {
    "id": 61,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Manhattan",
    "name": "CCTV",
    "email": "wenjia.li@cctv.com; wjli33@gmail.com",
    "phone": "(646) 508 7753",
    "website": "",
    "editor": "Li Wenjia",
    "address": "",
    "zip": "",
    "circulation": "",
    "geographic": "Asia; Europe; North America",
    "frequency": "TV"
  },
  {
    "id": 62,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Brooklyn",
    "name": "SinoVision",
    "email": "yiyiwang@sinovision.net",
    "phone": "(718) 567-3380",
    "website": "http://www.sinovision.net/",
    "editor": "Yiyi Wang",
    "address": "64-02 8th Ave., Unit 601, Brooklyn, NY 11220",
    "zip": 11220,
    "circulation": "NYC Metro Area",
    "geographic": "sinovision.net",
    "frequency": "TV, Website"
  },
  {
    "id": 63,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Brooklyn",
    "name": "Sino Network Television",
    "email": "viviennes@mrbi.net; zhenpingd@mrbi.net",
    "phone": "(212) 219-7386",
    "website": "http://www.sinovision.net/live.php",
    "editor": "Vivienne Shao/Zhen Ping Dai",
    "address": "",
    "zip": "",
    "circulation": "NYC Metro Area",
    "geographic": "",
    "frequency": "TV"
  },
  {
    "id": 64,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Brooklyn",
    "name": "WGBB 1240 AM",
    "email": "crn@chineseradionetwork.com",
    "phone": "(718) 661-3933",
    "website": "http://am1240wgbb.com/",
    "editor": "Josephine Chang",
    "address": "133-11 4 1st Rd, Rm1A, Flushing, NY 11355",
    "zip": 11355,
    "circulation": "NYC Metro Area",
    "geographic": "chineseradionetwork.com",
    "frequency": "Radio"
  },
  {
    "id": 65,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Queens",
    "name": "Asian-American Times",
    "email": "chuasian@aol.com",
    "phone": "(718) 358-6413",
    "website": "not available",
    "editor": "Michael Chu",
    "address": "135-25A 40 Road, Rm 3F, Flushing, NY 11354",
    "zip": 11354,
    "circulation": "US",
    "geographic": "asianamericantimes.us",
    "frequency": "Weekly"
  },
  {
    "id": 66,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Queens",
    "name": "Chinese Radio Network",
    "email": "crn@chineseradionetwork.com",
    "phone": "(917) 567-8516",
    "website": "http://www.chineseradionetwork.com/",
    "editor": "Josephine Chain",
    "address": "133-11 41st Rd., Suite 1A, Flushing, NY 11355",
    "zip": 11355,
    "circulation": "NYC Metropolitan Area",
    "geographic": "chineseradionetwork.com",
    "frequency": "Radio"
  },
  {
    "id": 67,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Queens",
    "name": "Ming Pao Daily News",
    "email": "xbai@mingpaousa.com",
    "phone": "(718) 786-2888",
    "website": "http://www.mingpaousa.com/",
    "editor": "Bai",
    "address": "43-31 33rd St., 2nd Fl., Long Island City, NY 11101",
    "zip": 11101,
    "circulation": "NYC Metropolitan Area",
    "geographic": "mingpaony.com",
    "frequency": "Daily"
  },
  {
    "id": 68,
    "community": "Chinese",
    "language": "Chinese",
    "borough": "Queens",
    "name": "World Journal",
    "email": "marcoliu@worldjournal.com; peterchu@worldjournal.com",
    "phone": "(718) 746-8889",
    "website": "http://www.worldjournal.com/",
    "editor": "TaiSheng Won/Peter Chu",
    "address": "141-07 20th Ave., Whitestone, NY 11357",
    "zip": 11357,
    "circulation": "North America",
    "geographic": "worldjournal.com",
    "frequency": "Daily"
  },
  {
    "id": 69,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Chelsea Now",
    "email": "scott@chelseanow.com",
    "phone": "(212) 229-1890",
    "website": "http://chelseanow.com/",
    "editor": "Scott Stiffler",
    "address": "515 Canal St. New York, NY 10013",
    "zip": 10013,
    "circulation": "20,000-50,000",
    "geographic": "Manhattan",
    "frequency": "Weekly"
  },
  {
    "id": 70,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Downtown Express",
    "email": "areynolds@downtownexpress.com",
    "phone": "(212) 229-1890",
    "website": "http://www.downtownexpress.com/",
    "editor": "Aline Reynolds",
    "address": "515 Canal St. New York, NY 10013",
    "zip": 10013,
    "circulation": "20,000-50,000",
    "geographic": "Manhattan",
    "frequency": "Weekly"
  },
  {
    "id": 71,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Harlem News Group, Inc.",
    "email": "harlemnewsinc@aol.com",
    "phone": "(212) 996-6006",
    "website": "http://harlemnewsgroup.com/",
    "editor": "Pat Stevenson",
    "address": "55 West 116th St. Suite 171 New York, NY 10026",
    "zip": 10026,
    "circulation": 50000,
    "geographic": "New York City metropolitan area",
    "frequency": "Weekly"
  },
  {
    "id": 72,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "MNN Public Access TV",
    "email": "Dan@mnn.org",
    "phone": "(212) 757-2670",
    "website": "http://www.mnn.org/",
    "editor": "Dan Coughlin",
    "address": "537 West 59th St. New York, NY 10019",
    "zip": 10019,
    "circulation": "620,000 (audited)",
    "geographic": "New York City metropolitan area",
    "frequency": "TV; Website"
  },
  {
    "id": 73,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Manhattan Times",
    "email": "santos.debralee@gmail.com",
    "phone": "(212) 569-5800",
    "website": "http://www.manhattantimesnews.com/",
    "editor": "Debra Lee Santos",
    "address": "5030 Broadway Suite 801 New York, NY 10034",
    "zip": 10034,
    "circulation": "24,000 (audited)",
    "geographic": "New York City metropolitan area",
    "frequency": "Weekly"
  },
  {
    "id": 74,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Our Town",
    "email": "ahouston@manhattanmedia.com",
    "phone": "(212) 268-8600",
    "website": "http://www.nypress.com/ourtown",
    "editor": "Allen Houston",
    "address": "79 Madison Ave New York, NY 10016",
    "zip": 10016,
    "circulation": "20,000-50,000",
    "geographic": "Manhattan",
    "frequency": "Weekly"
  },
  {
    "id": 75,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "OurChinatown",
    "email": "kma@aaww.org",
    "phone": "(212) 494-0061",
    "website": "http://aaww.org/",
    "editor": "Kai Ma",
    "address": "110-112 W. 27th St. 6th fl. New York, NY 10001",
    "zip": 10001,
    "circulation": "<500",
    "geographic": "New York City; Long Island, Asia",
    "frequency": "Website"
  },
  {
    "id": 76,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Harlem Times",
    "email": "johnjmeo@gmail.com",
    "phone": "(732) 616-4066",
    "website": "http://theharlemtimes.com/",
    "editor": "John Meo",
    "address": "515 Madison Ave. New York, NY 10022",
    "zip": 10022,
    "circulation": "20,000-50,000",
    "geographic": "Manhattan",
    "frequency": "Monthly"
  },
  {
    "id": 77,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Lo-Down",
    "email": "ed@thelodownny.com",
    "phone": "(646) 861-1805",
    "website": "http://thelodownny.com/",
    "editor": "Ed Litvak",
    "address": "268 E. Broadway, Suite A303, New York, NY 10002",
    "zip": 10002,
    "circulation": "10,000-20,000",
    "geographic": "New York City metropolitan area; some national",
    "frequency": "Monthly"
  },
  {
    "id": 78,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Tribeca Trib",
    "email": "carlg@tribecatrib.com",
    "phone": "(212) 219-9709",
    "website": "http://tribecatrib.com/",
    "editor": "Carl Glassman",
    "address": "401 Broadway New York, NY 10013",
    "zip": 10013,
    "circulation": "10,000-20,000",
    "geographic": "NYC",
    "frequency": "Monthly"
  },
  {
    "id": 79,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Villager",
    "email": "lincoln@thevillager.com",
    "phone": "(212) 229-1890",
    "website": "http://thevillager.com/",
    "editor": "Lincoln Anderson",
    "address": "515 Canal St.New York, NY 10013",
    "zip": 10013,
    "circulation": "10,000-20,000",
    "geographic": "Manhattan",
    "frequency": "Weekly"
  },
  {
    "id": 80,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Uptown Collective",
    "email": "ledblack@me.com",
    "phone": "(646) 457-1101",
    "website": "http://uptowncollective.com/",
    "editor": "Led Black",
    "address": "421 Farnham Ave.Lodi, NJ 7644",
    "zip": "",
    "circulation": "500-1000",
    "geographic": "Manhattan",
    "frequency": "Website"
  },
  {
    "id": 81,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "West Side Spirit",
    "email": "ahouston@manhattanmedia.com",
    "phone": "(212) 268-8600",
    "website": "http://www.nypress.com/west-side-spirit",
    "editor": "Allen Houston",
    "address": "79 Madison Ave. New York, NY 10016",
    "zip": 10016,
    "circulation": "20,000-50,000",
    "geographic": "Manhattan",
    "frequency": "Weekly"
  },
  {
    "id": 82,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Feet in 2 Worlds",
    "email": "john@feetin2worlds.org",
    "phone": "(603) 498-5480",
    "website": "http://fi2w.org/",
    "editor": "John Rudolph",
    "address": "72 Fifth Ave c/o Center for NYC Affairs The New School, 6th Floor New York, NY 10011",
    "zip": 10011,
    "circulation": "4,000-5,000",
    "geographic": "New York City metropolitan area; some national",
    "frequency": "Website"
  },
  {
    "id": 83,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Open City",
    "email": "kma@aaww.org",
    "phone": "(212) 494-0061",
    "website": "http://opencitymag.com/",
    "editor": "Kai Ma",
    "address": "110-112 West 27th St. 6th fl. New York, NY 10001",
    "zip": 10001,
    "circulation": "(daily visitors) <500",
    "geographic": "New York City metropolitan area; US; Asia",
    "frequency": "Website"
  },
  {
    "id": 84,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "City & State",
    "email": "gborrero@cityandstateny.com",
    "phone": "(212) 894-5417",
    "website": "http://cityandstateny.com/",
    "editor": "Morgan Pehme",
    "address": "79 Madison Ave.16th fl. New York, NY 10016",
    "zip": 10016,
    "circulation": "10,000-20,000",
    "geographic": "New York City; New York State",
    "frequency": "Bi-monthly"
  },
  {
    "id": 85,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Gotham Gazette",
    "email": "bmax@gothamgazette.com",
    "phone": "(212) 227-0342",
    "website": "http://www.gothamgazette.com/",
    "editor": "Cristian Salazar",
    "address": "299 Broadway New York, NY 10007",
    "zip": 10007,
    "circulation": "2,000-3,000",
    "geographic": "New York City",
    "frequency": "Website"
  },
  {
    "id": 86,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Gay City News",
    "email": "editor@gaycitynews.com",
    "phone": "(646) 452-2503",
    "website": "http://gaycitynews.nyc/",
    "editor": "Paul Schindler",
    "address": "515 Canal St. 1C New York, NY 10013",
    "zip": 10013,
    "circulation": "20,000-40,000",
    "geographic": "New York City; New York State",
    "frequency": "Bi-monthly"
  },
  {
    "id": 87,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "City Limits",
    "email": "jarrett@citylimits.org",
    "phone": "(212) 614-5385",
    "website": "http://citylimits.org/",
    "editor": "Jarrett Murphy",
    "address": "394 Broadway, 5th floor, New York, NY 10013",
    "zip": 10013,
    "circulation": "2,000-3,000",
    "geographic": "New York City metropolitan area",
    "frequency": "Website"
  },
  {
    "id": 88,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Colorlines.com",
    "email": "media@colorlines.com",
    "phone": "(212) 513-7925",
    "website": "http://www.colorlines.com/",
    "editor": "Kai Wright",
    "address": "32 Broadway Suite 1801 New York, NY 10004",
    "zip": 10004,
    "circulation": "(daily visitors) 2,000-3,000",
    "geographic": "US",
    "frequency": "Website"
  },
  {
    "id": 89,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Deep Dish TV",
    "email": "deepdish@igc.org",
    "phone": "(212) 473-8933",
    "website": "http://www.deepdishtv.org/",
    "editor": "Brian Drolet",
    "address": "339 Lafayette St. 3rd fl. New York, NY 10012",
    "zip": 10012,
    "circulation": "(daily visitors) 2,000-3,001",
    "geographic": "US; International",
    "frequency": "TV; Website"
  },
  {
    "id": 90,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Dissent Magazine",
    "email": "phillips@dissentmagazine.org",
    "phone": "(212) 316-3120",
    "website": "https://www.dissentmagazine.org/",
    "editor": "Maxine Phillips",
    "address": "310 Riverside Drive Suite 2008 New York, NY 10025",
    "zip": 10025,
    "circulation": "(daily visitors) 2,000-3,002",
    "geographic": "US; International",
    "frequency": "Quarterly"
  },
  {
    "id": 91,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Irish Central",
    "email": "sheila@irishcentral.com",
    "phone": "(212) 871-0111",
    "website": "http://www.irishcentral.com/",
    "editor": "Sheila Langan",
    "address": "875 Avenue of the Americas, Suite #201, New York, NY 10001",
    "zip": 10001,
    "circulation": "",
    "geographic": "US; International",
    "frequency": "Website"
  },
  {
    "id": 92,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Indypendent",
    "email": "john@indypendent.org",
    "phone": "(212) 904-1282",
    "website": "https://indypendent.org/",
    "editor": "John Tarleton",
    "address": "666 Broadway Suite 500 New York, NY 10012",
    "zip": 10012,
    "circulation": "10,000-20,000",
    "geographic": "US; International",
    "frequency": "Monthly"
  },
  {
    "id": 93,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "WBAI Pacifica Radio",
    "email": "jeannie@wbai.org",
    "phone": "(212) 209-2950",
    "website": "http://wbai.org/",
    "editor": "Jeannie Hopper",
    "address": "120 Wall St. 10th fl. New York, NY 10005",
    "zip": 10005,
    "circulation": 200000,
    "geographic": "New York City metropolitan area",
    "frequency": "Radio"
  },
  {
    "id": 94,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Women's eNews",
    "email": "editor@womensenews.org",
    "phone": "(212) 244-1747",
    "website": "http://womensenews.org/",
    "editor": "Juhie Bhatia",
    "address": "6 Barclay St. 6th fl New York, NY 10007",
    "zip": 10007,
    "circulation": "2,000-3,000",
    "geographic": "New York City metropolitan area",
    "frequency": "Website"
  },
  {
    "id": 95,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "MNN Youth Channel",
    "email": "info@mnn.org",
    "phone": "(212) 757-2670",
    "website": "http://www.mnn.org/YOUTH",
    "editor": "Zanaider Mendez",
    "address": "(El Barrio Firehouse Community Media Center) 175 East 104th St., New York, NY 10029",
    "zip": 10029,
    "circulation": 620000,
    "geographic": "New York City metropolitan area",
    "frequency": "TV; Website"
  },
  {
    "id": 96,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Represent Magazine",
    "email": "vvitzthum@youthcomm.org",
    "phone": "(212) 279-0708",
    "website": "http://representmag.org/",
    "editor": "Virginia Vitzthum",
    "address": "224 W. 29th St. 2nd fl. New York, NY 10001",
    "zip": 10001,
    "circulation": "5,000-10,000",
    "geographic": "New York City metropolitan area",
    "frequency": "Quarterly"
  },
  {
    "id": 97,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "YCteen",
    "email": "aspanne@youthcomm.org",
    "phone": "(212) 279-0708",
    "website": "http://www.ycteenmag.org/",
    "editor": "Autumn Spanne",
    "address": "224 W. 29th St., 2nd Fl., New York, NY 10001",
    "zip": 10001,
    "circulation": "50,000 (audited)",
    "geographic": "New York City metropolitan area",
    "frequency": "Quarterly"
  },
  {
    "id": 98,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "DNAinfo NYC",
    "email": "jness@dnainfo.com",
    "phone": "(646) 435-9100",
    "website": "https://www.dnainfo.com/new-york/",
    "editor": "John Ness",
    "address": "810 Seventh Ave, Suite 800, New York, NY 10019",
    "zip": 10019,
    "circulation": "",
    "geographic": "International",
    "frequency": "Website"
  },
  {
    "id": 99,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "The New York World",
    "email": "benjamin.lesser@thenewyorkworld.com",
    "phone": "(212) 854-7356",
    "website": "http://www.thenewyorkworld.com/",
    "editor": "Benjamin Lesser",
    "address": "c/o Columbia U. Graduate School of Journalism, 2950 Broadway, New York, NY 10027",
    "zip": 10027,
    "circulation": "500-999 (daily unique visitors)",
    "geographic": "International",
    "frequency": "Website"
  },
  {
    "id": 100,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "People's Weekly World",
    "email": "pww@pww.org",
    "phone": "(212) 924-2523",
    "website": "http://www.peoplesworld.org/",
    "editor": "Teresa Albano",
    "address": "235 West 23rd Street, New York, NY 10011",
    "zip": 10011,
    "circulation": "",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 101,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Town and Village",
    "email": "editor@townvillage.net",
    "phone": "(212) 777-6611",
    "website": "https://town-village.com/",
    "editor": "Sabina Mollor",
    "address": "20 W. 22nd St, Suite 1503, New York, NY 10010",
    "zip": 10010,
    "circulation": 5000,
    "geographic": "Manhattan",
    "frequency": "Weekly"
  },
  {
    "id": 102,
    "community": "Community",
    "language": "English",
    "borough": "Manhattan",
    "name": "Voices of NY",
    "email": "karen.pennar@journalism.cuny.edu",
    "phone": "(646) 758-7776",
    "website": "https://voicesofny.org/",
    "editor": "Karen Penna",
    "address": "219 West 40th Street, Room 446, New York, NY 10018",
    "zip": 10018,
    "circulation": "",
    "geographic": "New York City metropolitan area",
    "frequency": "Website"
  },
  {
    "id": 103,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "BronxNet",
    "email": "max@bronxnet.org",
    "phone": "(718) 960-7158",
    "website": "http://bronxnet.org/",
    "editor": "Michael Knobbe",
    "address": "250 Bedford Park Blvd., Lehman College, Carman Hall Room C4, Bronx, NY 10468",
    "zip": 10468,
    "circulation": "Bronx",
    "geographic": "English; Spanish",
    "frequency": "TV"
  },
  {
    "id": 104,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "Co-op City Times",
    "email": "cctimes@riverbaycorp.com",
    "phone": "(718) 320-3300",
    "website": "https://issuu.com/cctimes",
    "editor": "Rozaan Boone",
    "address": "204 Bartow Ave. Rm 21, Bronx, NY 10475",
    "zip": 10475,
    "circulation": "Co-Op City in the Bronx",
    "geographic": "English",
    "frequency": "Weekly"
  },
  {
    "id": 105,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "Mott Haven Herald",
    "email": "news@motthavenherald.com",
    "phone": "(917) 280-4085",
    "website": "http://www.motthavenherald.com/",
    "editor": "Joe Hirsch",
    "address": "350 W. 246th St., c/o Bernard L. Stein, Bronx, NY 10471",
    "zip": 10471,
    "circulation": "Bronx",
    "geographic": "English",
    "frequency": "Monthly"
  },
  {
    "id": 106,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "Nordwood News",
    "email": "dcruz@norwoodnews.org",
    "phone": "(718) 324-4998",
    "website": "http://www.norwoodnews.org/",
    "editor": "David Cruz",
    "address": "3400 Reservoir Oval East, Bronx, NY 10467",
    "zip": 10467,
    "circulation": "Bronx",
    "geographic": "English",
    "frequency": "Bi-weekly"
  },
  {
    "id": 107,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "The Bronx Free Press",
    "email": "santos.debralee@gmail.com",
    "phone": "(212) 569-5800",
    "website": "http://thebronxfreepress.com/",
    "editor": "Debra Lee Santos",
    "address": "5030 Broadway Suite 801, New York, NY 10034",
    "zip": 10034,
    "circulation": "Bronx",
    "geographic": "English; Spanish",
    "frequency": "Weekly"
  },
  {
    "id": 108,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "The Hunts Point Express",
    "email": "editor@huntspointexpress.com",
    "phone": "(718) 549-2398",
    "website": "http://huntspointexpress.com/",
    "editor": "Bernard Stein",
    "address": "940 Garrison Ave., Bronx, NY 10474",
    "zip": 10474,
    "circulation": "Bronx",
    "geographic": "English",
    "frequency": "Monthly"
  },
  {
    "id": 109,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "The Riverdale Press",
    "email": "sshah@riverdalepress.com",
    "phone": "(718) 543-6065",
    "website": "http://riverdalepress.com/",
    "editor": "S. Shah",
    "address": "6155 Broadway, Bronx, NY 10471",
    "zip": 10471,
    "circulation": "Bronx",
    "geographic": "English",
    "frequency": "Weekly"
  },
  {
    "id": 110,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "Bronx Times/Bronx Times Reporter",
    "email": "acusano@cnglocal.com",
    "phone": "(845) 531-8287",
    "website": "http://www.bxtimes.com/sections/bronx-times-reporter/",
    "editor": "Arthur Cusano",
    "address": "1111 Calhoun Avenue, Bronx, NY 10455",
    "zip": 10455,
    "circulation": "Bronx",
    "geographic": "English",
    "frequency": "Weekly"
  },
  {
    "id": 111,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "Muslim Community Report",
    "email": "editormcreport@gmail.com",
    "phone": "(347) 649-4253",
    "website": "http://muslimcommunityreport.com/",
    "editor": "Kausar Mumin",
    "address": "2006 Westchester Avenue, Bronx, New York 10462",
    "zip": 10462,
    "circulation": "NYC Metropolitan Area / International",
    "geographic": "English",
    "frequency": "Weekly"
  },
  {
    "id": 112,
    "community": "Community",
    "language": "English",
    "borough": "Bronx",
    "name": "theBLOX TV",
    "email": "info@roundseven.com",
    "phone": "",
    "website": "https://www.roundseven.com/thebloxtv",
    "editor": "Marco Shalma / Gillian Todd",
    "address": "",
    "zip": "",
    "circulation": "",
    "geographic": "",
    "frequency": ""
  },
  {
    "id": 113,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Bensonhurst Bean",
    "email": "editor@bensonhurstbean.com",
    "phone": "(917) 685-3579",
    "website": "https://www.facebook.com/BensonhurstBean/",
    "editor": "Rachel Silberstein",
    "address": "2567 E 14th St., Brooklyn, NY 11235",
    "zip": 11235,
    "circulation": "Brooklyn",
    "geographic": "bensonhurstbean.com",
    "frequency": "Website"
  },
  {
    "id": 114,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "BRIC",
    "email": "jlief@bricartsmedia.org",
    "phone": "(718) 683-6660",
    "website": "http://www.bricartsmedia.org/",
    "editor": "Jonathan Lief",
    "address": "647 Fulton St., Brooklyn, NY 11217",
    "zip": 11217,
    "circulation": "Brooklyn",
    "geographic": "bricartsmedia.org",
    "frequency": "TV"
  },
  {
    "id": 115,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Corner Media Group",
    "email": "liena@cornermediagroup.com",
    "phone": "(917) 496-5888",
    "website": "http://cornermediagroup.com/",
    "editor": "Liena Zagare",
    "address": "773 Coney Island Ave, Brooklyn, NY 11218",
    "zip": 11218,
    "circulation": "Brooklyn",
    "geographic": "cornermediagroup.com",
    "frequency": "Website"
  },
  {
    "id": 116,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Brooklyn Daily Eagle",
    "email": "raanan@brooklyneagle.com",
    "phone": "(718) 422-7421",
    "website": "https://bklyn.newspapers.com/",
    "editor": "Raanan Geberer",
    "address": "16 Court St., Suite 1208, Brooklyn, NY 11241",
    "zip": 11241,
    "circulation": "Brooklyn",
    "geographic": "brooklyneagle.com",
    "frequency": "Daily"
  },
  {
    "id": 117,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Brooklyn Spectator Magazine",
    "email": "editorial@homereporter.com",
    "phone": "(718) 238-6600",
    "website": "http://brooklynreporter.com/",
    "editor": "Heather Chin",
    "address": "8723 Third Ave., Brooklyn, NY 11209",
    "zip": 11209,
    "circulation": "NYC",
    "geographic": "brooklynspectator.com",
    "frequency": "Monthly"
  },
  {
    "id": 118,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Bushwick Daily",
    "email": "katarina@bushwickdaily.com",
    "phone": "(646) 270-2149",
    "website": "http://bushwickdaily.com/",
    "editor": "Katarina Hybenova",
    "address": "662 Onderdonk Ave., Ridgewood, NY 11385",
    "zip": 11385,
    "circulation": "Brooklyn; Manattan; Queens",
    "geographic": "bushwickdaily.com",
    "frequency": "Website"
  },
  {
    "id": 119,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Canarsie Courier",
    "email": "canarsiec@aol.com",
    "phone": "(718) 257-0600",
    "website": "http://www.canarsiecourier.com/",
    "editor": "Charles Rogers",
    "address": "1142 E 92nd St., Brooklyn, NY 11236",
    "zip": 11236,
    "circulation": "Brooklyn",
    "geographic": "canarsiecourier.com",
    "frequency": "Weekly"
  },
  {
    "id": 120,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Home Reporter",
    "email": "hklein@homereporter.com",
    "phone": "(718) 238-6600",
    "website": "homereporter.com",
    "editor": "Helen Klein",
    "address": "8723 Third Ave., Brooklyn, NY 11209",
    "zip": 11209,
    "circulation": "brooklyn",
    "geographic": "homereporternews.com",
    "frequency": "Weekly"
  },
  {
    "id": 121,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Sheepshead Bites",
    "email": "editor@sheepsheadbites.com",
    "phone": "(347) 985-0633",
    "website": "http://bklyner.com/",
    "editor": "Sean Egan",
    "address": "2567 East 14th St., Brooklyn, NY 11235",
    "zip": 11235,
    "circulation": "Brooklyn",
    "geographic": "sheepsheadbites.com",
    "frequency": "Website"
  },
  {
    "id": 122,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "The Brooklyn Rail",
    "email": "hq@brooklynrail.org",
    "phone": "(917) 916-7215",
    "website": "http://brooklynrail.org/",
    "editor": "Phong Bui",
    "address": "99 Commercial St., Rm32, Brooklyn, NY 11222",
    "zip": 11222,
    "circulation": "NYC",
    "geographic": "brooklynrail.org",
    "frequency": "Monthly"
  },
  {
    "id": 123,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "The Bushwick Today",
    "email": "joseph@jalreign.com",
    "phone": "(347) 327-6720",
    "website": "http://thebushwicktoday.com/",
    "editor": "Joseph Angel L.",
    "address": "269 Stanhope St., Brooklyn, NY 11237",
    "zip": 11237,
    "circulation": "Brooklyn",
    "geographic": "thebushwicktoday.com",
    "frequency": "Monthly"
  },
  {
    "id": 124,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "The Local",
    "email": "mitchell.trinka@gmail.com",
    "phone": "(914) 456-6451",
    "website": "fort-greene.thelocal.nytimes.com",
    "editor": "Mitchell Trinka",
    "address": "219 West 40th St., New York, NY 10018",
    "zip": 10018,
    "circulation": "Brooklyn",
    "geographic": "fort-greene.thelocal.nytimes.com",
    "frequency": "Website"
  },
  {
    "id": 125,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "The Immigrant's Journal",
    "email": "cariaweekly@aol.com",
    "phone": "(718) 771-0988",
    "website": "https://www.facebook.com/IJLEF",
    "editor": "Pearl Phillip",
    "address": "26 Court St., Suite 701, Brooklyn, NY 11242",
    "zip": 11242,
    "circulation": "NYC",
    "geographic": "theimmigrantsjournal.com",
    "frequency": "Bi-Weekly"
  },
  {
    "id": 126,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "The Brooklyn Paper",
    "email": "rbrown@cnglocal.com",
    "phone": "(718) 260-8309",
    "website": "http://www.brooklynpaper.com/",
    "editor": "Ruth Brown",
    "address": "One Metrotech Center, Suite 1001, Brooklyn, NY 11201",
    "zip": 11201,
    "circulation": "Brooklyn",
    "geographic": "brooklynpaper.com",
    "frequency": "Weekly"
  },
  {
    "id": 127,
    "community": "Community",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Brooklyn Reader",
    "email": "czm@BKReader.com",
    "phone": "(646) 664-7081",
    "website": "http://www.bkreader.com/",
    "editor": "C. Zawadi Morris",
    "address": "31 Kosciuszko St, Brooklyn, NY 11205",
    "zip": 11205,
    "circulation": "Brooklyn",
    "geographic": "bkreader.com",
    "frequency": "Website"
  },
  {
    "id": 128,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "The Queens Gazette",
    "email": "qgazette@aol.com",
    "phone": "(718) 361-6161",
    "website": "http://www.qgazette.com/",
    "editor": "Jason Antos",
    "address": "42-16 34th Avenue, Queens, NY 11101",
    "zip": 11101,
    "circulation": "Queens",
    "geographic": "qgazette.com",
    "frequency": "Weekly"
  },
  {
    "id": 129,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Queens Courier",
    "email": "editorial@queenscourier.com",
    "phone": "(718) 224-5863 x204",
    "website": "http://qns.com",
    "editor": "Tom Topousis",
    "address": "38-15 Bell Blvd., Bayside, NY 11361",
    "zip": 11361,
    "circulation": "Queens; Brooklyn",
    "geographic": "queenscourier.com",
    "frequency": "Weekly"
  },
  {
    "id": 130,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "The Wave of Long Island",
    "email": "editor@rockawave.com",
    "phone": "(718) 634-4000",
    "website": "http://www.rockawave.com/",
    "editor": "Mark C. Healey",
    "address": "88-08 Rockaway Beach Blvd, Rockaway Beach, NY 11693",
    "zip": 11693,
    "circulation": "Queens, Long Island",
    "geographic": "rockawave.com",
    "frequency": "Weekly"
  },
  {
    "id": 131,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Press of Southeast Queens",
    "email": "editor@queenspress.com",
    "phone": "(718) 357-7400",
    "website": "queenspress.com",
    "editor": "Steven Ferrari",
    "address": "150-50 14th Rd., Whitestone, NY 11357",
    "zip": 11357,
    "circulation": "Queens",
    "geographic": "queenspress.com",
    "frequency": "Weekly"
  },
  {
    "id": 132,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Queens Chronicle",
    "email": "peterm@qchron.com",
    "phone": "(718) 205-8000",
    "website": "qchron.com",
    "editor": "Peter C. Mastrosimone",
    "address": "62-33 Woodhaven Blvd., Rego Park, NY 11374",
    "zip": 11374,
    "circulation": "Queens",
    "geographic": "qchron.com",
    "frequency": "Weekly"
  },
  {
    "id": 133,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Queens Public Television",
    "email": "cliff@qptv.org",
    "phone": "(718) 886-8160",
    "website": "qptv.org",
    "editor": "Cliff Jacobs",
    "address": "41-61 Kissena Blvd., Suite 2077, Flushing, NY 11355",
    "zip": 11355,
    "circulation": "Queens",
    "geographic": "qptv.org",
    "frequency": "TV"
  },
  {
    "id": 134,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Queens Tribune",
    "email": "editor@queenspress.com",
    "phone": "(718) 357-7400",
    "website": "queenstribune.com",
    "editor": "Steven Ferrari",
    "address": "150-50 14th Rd., Whitestone, NY 11357",
    "zip": 11357,
    "circulation": "Queens",
    "geographic": "queenstribune.com",
    "frequency": "Weekly"
  },
  {
    "id": 135,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Queens West Villager",
    "email": "holly@queenswestvillager.com",
    "phone": "(917) 723-4208",
    "website": "queenswestvillager.com",
    "editor": "Christian Murray",
    "address": "4-74 48th Ave., Long Island City, NY 11109",
    "zip": 11109,
    "circulation": "Queens; Manhattan",
    "geographic": "queenswestvillager.com",
    "frequency": "Website"
  },
  {
    "id": 136,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Astoria Post",
    "email": "christian.murray@queenspost.com",
    "phone": "(516) 242-0633",
    "website": "http://astoriapost.com/",
    "editor": "Christian Murray",
    "address": "45-06 Queens Blvd #160, Sunnyside, NY 11104",
    "zip": 11104,
    "circulation": "Queens",
    "geographic": "astoriapost.com",
    "frequency": "Website"
  },
  {
    "id": 137,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "LIC Post",
    "email": "christian.murray@queenspost.com",
    "phone": "(516) 242-0633",
    "website": "http://licpost.com/",
    "editor": "Christian Murray",
    "address": "45-06 Queens Blvd #160, Sunnyside, NY 11104",
    "zip": 11104,
    "circulation": "Queens",
    "geographic": "licpost.com",
    "frequency": "Website"
  },
  {
    "id": 138,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Jacksonheights Post",
    "email": "christian.murray@queenspost.com",
    "phone": "(516) 242-0633",
    "website": "http://jacksonheightspost.com/",
    "editor": "Christian Murray",
    "address": "45-06 Queens Blvd #160, Sunnyside, NY 11104",
    "zip": 11104,
    "circulation": "Queens",
    "geographic": "jacksonheightspost.com",
    "frequency": "Website"
  },
  {
    "id": 139,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Sunnyside Post",
    "email": "christian.murray@queenspost.com",
    "phone": "(516) 242-0633",
    "website": "http://sunnysidepost.com/",
    "editor": "Christian Murray",
    "address": "45-06 Queens Blvd #160, Sunnyside, NY 11104",
    "zip": 11104,
    "circulation": "Queens",
    "geographic": "sunnysidepost.com",
    "frequency": "Website"
  },
  {
    "id": 140,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Wave Publishing",
    "email": "editor@rockawave.com",
    "phone": "(718) 634-4747",
    "website": "rockawave.com",
    "editor": "Howard Schwach",
    "address": "88-08 Rockaway Beach Blvd., Queens, NY 11693",
    "zip": 11693,
    "circulation": "Queens",
    "geographic": "rockawave.com",
    "frequency": "Weekly"
  },
  {
    "id": 141,
    "community": "Community",
    "language": "English",
    "borough": "Queens",
    "name": "Woodside Herald",
    "email": "ssabba@woodsideherald.com",
    "phone": "(718) 729-3772",
    "website": "http://woodsideherald.com/",
    "editor": "Sharlyn Sabba",
    "address": "43-11 Greenpoint Ave., Sunnyside, NY 11104",
    "zip": 11104,
    "circulation": "Sunnyside",
    "geographic": "woodsideherald.com",
    "frequency": "Weekly"
  },
  {
    "id": 142,
    "community": "Community",
    "language": "English",
    "borough": "Staten Island",
    "name": "Staten Island Community Television",
    "email": "sictv.org",
    "phone": "(718) 727-1414",
    "website": "100 Cable Way Suite 2, Staten Island, NY 10303",
    "editor": "Ed Salek",
    "address": 10303,
    "zip": "",
    "circulation": "sictv.org",
    "geographic": "English",
    "frequency": ""
  },
  {
    "id": 143,
    "community": "Community",
    "language": "English",
    "borough": "Staten Island",
    "name": "Staten Island Advance",
    "email": "http://www.silive.com/",
    "phone": "(718) 981-1234",
    "website": "950w Fingerboard Road, Staten Island, NY 10305",
    "editor": "Brian Laline",
    "address": 10305,
    "zip": 30000,
    "circulation": "silive.com",
    "geographic": "English",
    "frequency": ""
  },
  {
    "id": 144,
    "community": "Estonian",
    "language": "Estonian",
    "borough": "Manhattan",
    "name": "Vaba Eesti Sona/ Free Estonian Word",
    "email": "toimetus@vabaeestisona.com",
    "phone": "(212) 686-3356",
    "website": "http://vabaeestisona.com/",
    "editor": "Kart Ullman",
    "address": "243 East 34th St., New York, NY 10016",
    "zip": 10016,
    "circulation": 2000,
    "geographic": "US; international",
    "frequency": "Weekly"
  },
  {
    "id": 145,
    "community": "Filipino",
    "language": "English",
    "borough": "Manhattan",
    "name": "Filipino Reporter",
    "email": "filipinoreporter@aol.com",
    "phone": "(212) 967-5784",
    "website": "http://filipinoreporter.us/",
    "editor": "Libertito Pelayo",
    "address": "350 Fifth Ave., Suite 2819, New York, NY 10118",
    "zip": 10118,
    "circulation": "10,000-20,000 (audited)",
    "geographic": "North America; Asia",
    "frequency": "weekly"
  },
  {
    "id": 146,
    "community": "French",
    "language": "French",
    "borough": "Manhattan",
    "name": "France-Amerique",
    "email": "gpellen@france-amerique.com",
    "phone": "(646) 202-9828",
    "website": "https://france-amerique.com/",
    "editor": "Guenola Pellen",
    "address": "115 East 57th Street, 11th Floor, New York, NY 10022",
    "zip": 10022,
    "circulation": "10,000-20,000 (audited)",
    "geographic": "US; Europe",
    "frequency": "Weekly"
  },
  {
    "id": 147,
    "community": "Greek",
    "language": "English",
    "borough": "Queens",
    "name": "Greek News",
    "email": "info@greeknewsonline.com",
    "phone": "(718) 545-4884",
    "website": "http://greece.greekreporter.com/category/greek-news/",
    "editor": "Apostolos Zoupaniotis",
    "address": "35-07 23rd avenue, Astoria, NY 11105",
    "zip": 11105,
    "circulation": "NYC metropolitan area",
    "geographic": "greeknewsonline.com",
    "frequency": "Weekly"
  },
  {
    "id": 148,
    "community": "Greek",
    "language": "English",
    "borough": "Queens",
    "name": "AKTINA FM Radio- WNYE 91.5FM/HD1",
    "email": "aktina@aktina.org",
    "phone": "(718) 545-1151",
    "website": "https://aktina.org/",
    "editor": "Elena Maroulleti",
    "address": "P.O. Box 5869, Astoria, NY 11105",
    "zip": 11105,
    "circulation": "NYC metropolitan area",
    "geographic": "aktinafm.com",
    "frequency": "Radio"
  },
  {
    "id": 149,
    "community": "Greek",
    "language": "English",
    "borough": "Queens",
    "name": "AKTINA TV-WNYE Channel 25 NY",
    "email": "aktina@aktina.org",
    "phone": "(718) 545-1151",
    "website": "aktinatv.com",
    "editor": "Elena Maroulleti",
    "address": "P.O. Box 5869, Astoria, NY 11105",
    "zip": 11105,
    "circulation": "NYC metropolitan area",
    "geographic": "aktinatv.com",
    "frequency": "TV"
  },
  {
    "id": 150,
    "community": "Greek",
    "language": "English",
    "borough": "Queens",
    "name": "Cosmos FM",
    "email": "ioannag@cosmosfm.org",
    "phone": "(718) 204-8900",
    "website": "gaepis.org",
    "editor": "Joanna Giannopoulos",
    "address": "23-18 29th St., Astoria, NY 11105",
    "zip": 11105,
    "circulation": "NYC metropolitan area",
    "geographic": "gaepis.org",
    "frequency": "Radio"
  },
  {
    "id": 151,
    "community": "Greek",
    "language": "English",
    "borough": "Queens",
    "name": "The National Herald",
    "email": "publisher@thenationalherald.com",
    "phone": "(718) 784-5255",
    "website": "thenationalherald.com",
    "editor": "Antonis Diamataris",
    "address": "37-10 30 St., Long Island City, NY 11101",
    "zip": 11101,
    "circulation": "US; Europe",
    "geographic": "thenationalherald.com",
    "frequency": ""
  },
  {
    "id": 152,
    "community": "Haitian",
    "language": "French-Creole",
    "borough": "Brooklyn",
    "name": "Haiti Liberte",
    "email": "editor@haitiliberte.com",
    "phone": "(718) 421-0162",
    "website": "haiti-liberte.com",
    "editor": "Berthony Dupont",
    "address": "1583 Albany Ave., Brooklyn, NY 11210",
    "zip": 11210,
    "circulation": "US",
    "geographic": "haitiliberte.com",
    "frequency": "Weekly"
  },
  {
    "id": 153,
    "community": "Haitian",
    "language": "French-Creole",
    "borough": "Brooklyn",
    "name": "Haiti Progres",
    "email": "haiti@haitiprogres.com",
    "phone": "(718) 701-9185",
    "website": "haitiprogres.com",
    "editor": "Georges Honorat",
    "address": "P.O. Box 30273, Brooklyn, NY 11203",
    "zip": 11203,
    "circulation": "US",
    "geographic": "haitiprogres.com",
    "frequency": "Weekly"
  },
  {
    "id": 154,
    "community": "Haitian",
    "language": "French-Creole",
    "borough": "Brooklyn",
    "name": "Haitian Times",
    "email": "editor@haitiantimes.com",
    "phone": "(917)426-5214",
    "website": "haitiantimes.com",
    "editor": "Vania Andre",
    "address": "507 Flatbush Ave., 2nd Floor, Brooklyn, NY 11225",
    "zip": 11225,
    "circulation": "NYC",
    "geographic": "haitiantimes.com",
    "frequency": "Weekly"
  },
  {
    "id": 155,
    "community": "Haitian",
    "language": "French-Creole",
    "borough": "Brooklyn",
    "name": "Radio Soleil",
    "email": "radsol@aol.com",
    "phone": "(917) 817-2501",
    "website": "radiosoleil.com",
    "editor": "Ricot Dupoy",
    "address": "1622 Nostrand Ave., Brooklyn, NY 11226",
    "zip": 11226,
    "circulation": "NYC",
    "geographic": "radiosoleil.com",
    "frequency": "Radio"
  },
  {
    "id": 156,
    "community": "Haitian",
    "language": "French-Creole",
    "borough": "Queens",
    "name": "Haiti Observateur",
    "email": "lojospo@yahoo.com",
    "phone": "(718) 812-2820",
    "website": "haiti-observateur.net",
    "editor": "Leo Joseph",
    "address": "P.O. Box 366237, Briarwood, NY 11435",
    "zip": 11435,
    "circulation": "US; international",
    "geographic": "haiti-observateur.net",
    "frequency": "Weekly"
  },
  {
    "id": 157,
    "community": "Indian",
    "language": "English",
    "borough": "Manhattan",
    "name": "Little India",
    "email": "achal@littleindia.com",
    "phone": "(212) 560-0609",
    "website": "http://littleindia.com/",
    "editor": "Achal Mehra",
    "address": "Empire State Building, Suite 1826, New York, NY 10118",
    "zip": 10118,
    "circulation": 118900,
    "geographic": "USA",
    "frequency": "Monthly"
  },
  {
    "id": 158,
    "community": "Indian",
    "language": "English",
    "borough": "Manhattan",
    "name": "The South Asian Times",
    "email": "arjit@thesouthasiantimes.info",
    "phone": "(516) 390-7847",
    "website": "http://thesouthasiantimes.info/",
    "editor": "Parween Chopra",
    "address": "76 N. Broadway, Suite 2004, Hicksville, NY",
    "zip": "",
    "circulation": 20000,
    "geographic": "Northeast",
    "frequency": "Weekly"
  },
  {
    "id": 159,
    "community": "Indian",
    "language": "Punjabi",
    "borough": "Manhattan",
    "name": "Punjabi Duniya",
    "email": "editor@punjabiduniya.com",
    "phone": "(917) 612-3158",
    "website": "http://punjabiduniya.com/",
    "editor": "Sharanijit Singh",
    "address": "498 Mark Lane, Wantagh, NY 11793",
    "zip": "",
    "circulation": 20000,
    "geographic": "North America",
    "frequency": "Weekly"
  },
  {
    "id": 160,
    "community": "Indian",
    "language": "English",
    "borough": "Manhattan",
    "name": "The South Asian Insider",
    "email": "editor@thesouthasianinsider.com",
    "phone": "(917) 612-3158",
    "website": "http://thesouthasian.info/",
    "editor": "Sharanjit Singh Thind",
    "address": "PO Box 7005, Hicksville, NY 11801",
    "zip": "",
    "circulation": 16000,
    "geographic": "New York City metropolitan area",
    "frequency": "Weekly"
  },
  {
    "id": 161,
    "community": "Indian",
    "language": "English",
    "borough": "Manhattan",
    "name": "Desi Talk LLC",
    "email": "suniladam@yahoo.com",
    "phone": "(212) 675-7515",
    "website": "http://desitalk.com/",
    "editor": "Sunil Adam",
    "address": "37 West 20th St., Suite 1009, New York, NY 10011",
    "zip": 10011,
    "circulation": "10,000-20,000",
    "geographic": "New York City metropolitan area",
    "frequency": "Weekly"
  },
  {
    "id": 162,
    "community": "Indian",
    "language": "Gujarati",
    "borough": "Manhattan",
    "name": "Gujarat Times Acquisition LLC",
    "email": "editor@gujarattimesusa.com",
    "phone": "(212) 206-7361",
    "website": "http://www.gujarattimesusa.com/",
    "editor": "Hasmukh Barot",
    "address": "37 West 20th St., Suite 1009, New York, NY 10011",
    "zip": 10011,
    "circulation": "5,000-10,000 (audited)",
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 163,
    "community": "Indian",
    "language": "English",
    "borough": "Manhattan",
    "name": "India Abroad Publications Inc.",
    "email": "nikhill@rediff.co.in",
    "phone": "(646) 432-6000",
    "website": "http://www.rediff.com/",
    "editor": "Nikhil Lakshman",
    "address": "42 Broadway, Suite 1836, New York, NY 10004",
    "zip": 10004,
    "circulation": "20,000-50,000 (audited)",
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 164,
    "community": "Indian",
    "language": "English",
    "borough": "Manhattan",
    "name": "News India Times USA LLC",
    "email": "suniladam@yahoo.com",
    "phone": "(212) 675-7515",
    "website": "http://newsindia-times.com/",
    "editor": "Sunil Adam",
    "address": "37 West 20th St., Suite 1009, New York, NY 10011",
    "zip": 10011,
    "circulation": 10000,
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 165,
    "community": "Indian",
    "language": "English",
    "borough": "Manhattan",
    "name": "Overseas India Weekly",
    "email": "chandrakantpancholi@hotmail.com",
    "phone": "(718) 672-6550",
    "website": "http://overseasindiaweekly.com/",
    "editor": "Chandrakant Pancholi",
    "address": "P.O. Box 1241, Church Street Station, New York, NY 10008",
    "zip": 10008,
    "circulation": "<500",
    "geographic": "US",
    "frequency": "Website"
  },
  {
    "id": 166,
    "community": "Indian",
    "language": "Hindi",
    "borough": "Manhattan",
    "name": "PTC Punjabi TV USA",
    "email": "davinderps@ptcnetwork.tv",
    "phone": "(347) 873-5555",
    "website": "http://www.ptcnetwork.tv/",
    "editor": "Davinder Pal Singh",
    "address": "40 West 39th St., 5th Fl., New York, NY 10018",
    "zip": 10018,
    "circulation": 400000,
    "geographic": "North America",
    "frequency": "TV"
  },
  {
    "id": 167,
    "community": "Indian",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Indian Express North American Edition",
    "email": "Pmswamy@gmail.com",
    "phone": "(917) 353-4545",
    "website": "http://indianexpress.com/about/north-america/",
    "editor": "Prakash Swamy",
    "address": "40 West 39th St., 5th Fl., New York, NY 10018",
    "zip": 10018,
    "circulation": "20,000-50,000",
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 168,
    "community": "Indian",
    "language": "Hindi",
    "borough": "Manhattan",
    "name": "Divya Bhaskar North American Edition",
    "email": "dbnacoo@gmail.com",
    "phone": "(201) 888-1561",
    "website": "not available",
    "editor": "Sanjiv Pandya",
    "address": "505 Thomail St., Suite 203, Edison, NJ 08837",
    "zip": "",
    "circulation": "10,000-20,000",
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 169,
    "community": "Indian",
    "language": "Gujarati",
    "borough": "Manhattan",
    "name": "Gujarat Darpan",
    "email": "gujaratdarpan@gmail.com",
    "phone": "(732) 983-9286",
    "website": "http://gujaratdarpan.com/",
    "editor": "Kalpesh Shah",
    "address": "1188 Green St., Iselin, NJ 08830",
    "zip": "",
    "circulation": "10,000-20,000",
    "geographic": "North America",
    "frequency": "Monthly"
  },
  {
    "id": 170,
    "community": "Indian",
    "language": "English",
    "borough": "Queens",
    "name": "Easy96",
    "email": "easy96radio@yahoo.com",
    "phone": "(718) 424-9600",
    "website": "easy96.com",
    "editor": "Sangeet Sharma",
    "address": "33-23 58th St., Woodside, NY 11377",
    "zip": 11377,
    "circulation": "NYC metropolitan area",
    "geographic": "easy96.com",
    "frequency": "Radio, Website"
  },
  {
    "id": 171,
    "community": "Indian",
    "language": "Hindi",
    "borough": "Queens",
    "name": "Indian Panorama",
    "email": "salujaindra@gmail.com",
    "phone": "(646) 247-9458",
    "website": "theindianpanorama.com",
    "editor": "Saluja, Indrajit",
    "address": "PO Box 190067, S. Richmond Hill, NY 11419",
    "zip": 11419,
    "circulation": "NYC metropolitan area",
    "geographic": "theindianpanorama.news",
    "frequency": "Weekly"
  },
  {
    "id": 172,
    "community": "Irish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Irish America Magazine",
    "email": "submit@irishamerica.com",
    "phone": "(212) 725-2993",
    "website": "http://irishamerica.com/",
    "editor": "Patricia Harty",
    "address": "875 Avenue of the Americas, Suite 201, New York, NY 10001",
    "zip": 10001,
    "circulation": 50000,
    "geographic": "US",
    "frequency": "Monthly"
  },
  {
    "id": 173,
    "community": "Irish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Irish Echo",
    "email": "rohanlon@irishecho.com",
    "phone": "(212) 482-4818",
    "website": "http://irishecho.com/",
    "editor": "Ray O'Hanlan",
    "address": "11 Hanover Square, Suite 500, New York, NY 10005",
    "zip": 10005,
    "circulation": 50000,
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 174,
    "community": "Irish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Irish Radio Network USA",
    "email": "aine@irishradio.com",
    "phone": "(212) 935-0606",
    "website": "http://www.irishradio.net/",
    "editor": "Aine Sheridan",
    "address": "515 Madison Ave., 11th Fl., New York, NY 10022",
    "zip": 10022,
    "circulation": "2.5 million daily listeners",
    "geographic": "US; international",
    "frequency": "Radio"
  },
  {
    "id": 175,
    "community": "Irish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Out of Ireland TV",
    "email": "patriciaoreilly@outofirelandtv.com",
    "phone": "(212) 856-9522",
    "website": "http://www.outofirelandtv.com/",
    "editor": "Patricia O'Reilly",
    "address": "555 5th Ave., New York, NY 10016",
    "zip": 10016,
    "circulation": 100000,
    "geographic": "US",
    "frequency": "TV"
  },
  {
    "id": 176,
    "community": "Irish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Irish Voice",
    "email": "editors@irishcentral.com",
    "phone": "(212) 871-0111",
    "website": "http://www.irishcentral.com/news/irishvoice",
    "editor": "Niall ODowd",
    "address": "875 Sixth Avenue, New York, NY 10001",
    "zip": 10001,
    "circulation": 80000,
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 177,
    "community": "Israeli",
    "language": "hebrew",
    "borough": "Brooklyn",
    "name": "Yedioth Ahronoth",
    "email": "admin@yediothusa.com",
    "phone": "(718) 386-3400",
    "website": "https://www.yedioth.co.il/",
    "editor": "Ilan Sasit",
    "address": "1300 Metropolitan Ave., Brooklyn, NY 11237",
    "zip": 11237,
    "circulation": "US",
    "geographic": "yediothusa.com",
    "frequency": "Daily"
  },
  {
    "id": 178,
    "community": "Israeli",
    "language": "hebrew",
    "borough": "Queens",
    "name": "Yediot America",
    "email": "safit@ynetus.com",
    "phone": "(646) 503-2712",
    "website": "ynetus.com",
    "editor": "Ilan Safit",
    "address": "36-12 48th Ave., Long Island City, NY 11101",
    "zip": 11101,
    "circulation": "North America",
    "geographic": "ynetus.com",
    "frequency": "Weekly"
  },
  {
    "id": 179,
    "community": "Japanese",
    "language": "Japanese",
    "borough": "Manhattan",
    "name": "U.S. Frontline",
    "email": "fujiwara@usfrontlinenews.com",
    "phone": "(212) 922-9090",
    "website": "http://usfl.com/",
    "editor": "Ryu Fujiwara",
    "address": "330 Madison Ave., 2nd Fl., New York, NY 10017",
    "zip": 10017,
    "circulation": 69000,
    "geographic": "tri-state area",
    "frequency": "Weekly"
  },
  {
    "id": 180,
    "community": "Japanese",
    "language": "Japanese",
    "borough": "Manhattan",
    "name": "Daily Sun New York",
    "email": "info@dailysunny.com",
    "phone": "(212) 922-9201",
    "website": "https://www.dailysunny.com/",
    "editor": "Chie Tome",
    "address": "228 E. 45th St., 7th Fl., New York, NY 10017",
    "zip": 10017,
    "circulation": "5,000-10,000 (audited)",
    "geographic": "NYC Metropolitan Area",
    "frequency": "Daily"
  },
  {
    "id": 181,
    "community": "Japanese",
    "language": "Japanese",
    "borough": "Manhattan",
    "name": "Kigyo Gaikyo Newspaper",
    "email": "mail@ujp.com",
    "phone": "(212) 252-8833",
    "website": "https://www.ujp.com/",
    "editor": "Nobuo Ijchi",
    "address": "33 East 33rd St., Suite 1101, New York, NY 10016",
    "zip": 10016,
    "circulation": "20,000-50,000 (audited)",
    "geographic": "US",
    "frequency": "Monthly"
  },
  {
    "id": 182,
    "community": "Japanese",
    "language": "Japanese",
    "borough": "Manhattan",
    "name": "NY Japion",
    "email": "tanaka@nyjapion.com",
    "phone": "(212) 431-9970",
    "website": "http://www.ejapion.com/",
    "editor": "Shintaro Tanaka",
    "address": "411 Lafayette St., 3rd Fl., New York, NY 10003",
    "zip": 10003,
    "circulation": "20,000-50,000 (audited)",
    "geographic": "NYC Metropolitan Area",
    "frequency": "Weekly"
  },
  {
    "id": 183,
    "community": "Japanese",
    "language": "Japanese",
    "borough": "Manhattan",
    "name": "Shukan NY Seikatsu",
    "email": "kinuew@gmail.com",
    "phone": "(908) 347-8941",
    "website": "https://www.nyseikatsu.com/",
    "editor": "Ryoichi Miura",
    "address": "18 East 41St., Suite 1012, New York, NY 10017",
    "zip": 10017,
    "circulation": "20,000-50,000 (audited)",
    "geographic": "NYC Metropolitan Area",
    "frequency": "Weekly"
  },
  {
    "id": 184,
    "community": "Japanese",
    "language": "Japanese",
    "borough": "Manhattan",
    "name": "Weekly Biz",
    "email": "kudo@weeklybiz.us",
    "phone": "(212) 997-0210",
    "website": "http://weeklybiz.us/",
    "editor": "Akiko Kudo",
    "address": "274 Madison Ave., Suite 1101, New York, NY 10016",
    "zip": 10016,
    "circulation": "20,000-50,000 (audited)",
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 185,
    "community": "Japanese",
    "language": "Japanese",
    "borough": "Manhattan",
    "name": "ENJOY Magazine",
    "email": "enjoyny33@gmail.com",
    "phone": "(914) 262-7993",
    "website": "http://www.enjoymagazine.net/",
    "editor": "Tetsuo Sugoh",
    "address": "10 Rockland Place, Nyack, NY 10960",
    "zip": "",
    "circulation": "10,000-20,000",
    "geographic": "NYC Metropolitan Area",
    "frequency": "Monthly"
  },
  {
    "id": 186,
    "community": "Jewish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Jewish Daily Forward",
    "email": "eisner@forward.com",
    "phone": "(212) 453-9455",
    "website": "http://forward.com/",
    "editor": "Jane Eisner",
    "address": "125 Maiden Lane, New York, NY 10038",
    "zip": 10038,
    "circulation": 50000,
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 187,
    "community": "Jewish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Jewish Post",
    "email": "henryjlevy@yahoo.com",
    "phone": "(516) 225-4400",
    "website": "http://www.jewishpost.com/",
    "editor": "Henry Levy",
    "address": "31 East 32nd St., 3rd Fl., New York, NY 10016",
    "zip": 10016,
    "circulation": 50000,
    "geographic": "NYC Metropolitan Area",
    "frequency": "Bi-monthly"
  },
  {
    "id": 188,
    "community": "Jewish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Lilith Magazine",
    "email": "SusanWS@Lilith.org",
    "phone": "(212) 757-0818",
    "website": "http://lilith.org/",
    "editor": "Susan Weidman Schneider",
    "address": "250 W. 57th St., Suite 2432, New York, NY 10107",
    "zip": 10107,
    "circulation": 10000,
    "geographic": "International",
    "frequency": "Quarterly"
  },
  {
    "id": 189,
    "community": "Jewish",
    "language": "English",
    "borough": "Manhattan",
    "name": "New Voices",
    "email": "editor@newvoices.org",
    "phone": "(212) 675-1168",
    "website": "http://newvoices.org/",
    "editor": "David Wilensky",
    "address": "125 Maiden Lane, 8th Fl., New York, NY 10038",
    "zip": 10038,
    "circulation": 1000,
    "geographic": "International",
    "frequency": "Website"
  },
  {
    "id": 190,
    "community": "Jewish",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Jewish Week",
    "email": "gary@jewishweek.org",
    "phone": "(212) 921-7822",
    "website": "http://jewishweek.timesofisrael.com/",
    "editor": "Gary Rosenblatt",
    "address": "1501 Broadway, Suite 505, New York, NY 10036",
    "zip": 10036,
    "circulation": 4000,
    "geographic": "NYC Metropolitan Area",
    "frequency": "Weekly"
  },
  {
    "id": 191,
    "community": "Jewish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Forverts (The Yiddish Forward)",
    "email": "eisner@forward.com",
    "phone": "(212) 889-8200 x455",
    "website": "http://forward.com/",
    "editor": "Jane Eisner",
    "address": "45 E. 33rd St., New York, NY 10016",
    "zip": 10016,
    "circulation": "",
    "geographic": "NYC Metropolitan Area",
    "frequency": "Weekly"
  },
  {
    "id": 192,
    "community": "Jewish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Alef",
    "email": "mail@chamah.org",
    "phone": "(212) 943-9690",
    "website": "not available",
    "editor": "Hillel Zaltzman",
    "address": "78 Pearl St., 3rd Fl., New York, NY 10004",
    "zip": 10004,
    "circulation": "22,000 (3,000 in NYC)",
    "geographic": "USA, Russia, Canada",
    "frequency": "Monthly"
  },
  {
    "id": 193,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Algemeiner Journal",
    "email": "editor@algemeiner.com",
    "phone": "(718) 771-0400",
    "website": "https://www.algemeiner.com/",
    "editor": "Gershon Jacobson",
    "address": "P.O Box 250746, Brooklyn, NY 11225",
    "zip": 11225,
    "circulation": "",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 194,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "New Voices",
    "email": "editor@newvoices.org",
    "phone": "(212) 675-1168",
    "website": "newvoices.org",
    "editor": "Chloe Sobel",
    "address": "114 w 26th St., Suite 1004, New York, NY 10001",
    "zip": 10001,
    "circulation": "US",
    "geographic": "newvoices.org",
    "frequency": "Website"
  },
  {
    "id": 195,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Jewish World",
    "email": "mcs11211@aol.com",
    "phone": "(718) 486-9693",
    "website": "http://jewishworldnews.org/",
    "editor": "Jack Brach",
    "address": "131 Division Ave., Brooklyn, NY 11211",
    "zip": 11211,
    "circulation": "",
    "geographic": "jewishworldnews.org",
    "frequency": "Monthly"
  },
  {
    "id": 196,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Hamodia",
    "email": "submissions@hamodia.com",
    "phone": "(718) 853-9103",
    "website": "http://hamodia.com/",
    "editor": "Ruth Lichenstein",
    "address": "207 Foster Ave., Brooklyn, NY 11230",
    "zip": 11230,
    "circulation": "",
    "geographic": "hamodia.com",
    "frequency": "Daily"
  },
  {
    "id": 197,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Der Yid",
    "email": "adv@deryid.org",
    "phone": "(718) 797-3900",
    "website": "http://www.deryid.org/",
    "editor": "Aron Friedman",
    "address": "84 Broadway, Brooklyn, NY 11211",
    "zip": 11211,
    "circulation": "NYC",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 198,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Beis Moshiach",
    "email": "bmoshiach@gmail.com",
    "phone": "(718) 778-8000",
    "website": "http://beismoshiachmagazine.org/",
    "editor": "Menachem Hendel",
    "address": "744 Eastern Parkway, Brooklyn, NY 11213",
    "zip": 11213,
    "circulation": "NYC",
    "geographic": "beismoshiach.org",
    "frequency": "Weekly"
  },
  {
    "id": 199,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Der Blatt",
    "email": "swderblatt@gmail.com",
    "phone": "(347) 743-2599",
    "website": "https://twitter.com/derblatthq?lang=en",
    "editor": "Sam Wieder",
    "address": "76 Rutledge St., Brooklyn, NY 11211",
    "zip": 11211,
    "circulation": "US",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 200,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Jewish Herald",
    "email": "leon@jewishherald.com",
    "phone": "(718) 330-1100",
    "website": "not available",
    "editor": "Leon J. Sternheim",
    "address": "1689 46th St., Brooklyn, NY 11204",
    "zip": 11204,
    "circulation": "US",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 201,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Kashrus Magazine",
    "email": "editorial@kashrusmagazine.com",
    "phone": "(718) 336-8544",
    "website": "http://www.kashrusmagazine.com/",
    "editor": "Rabbi Yosef Wikler",
    "address": "PO Box 204, Brooklyn, NY 11204",
    "zip": 11204,
    "circulation": "NYC",
    "geographic": "kashrusmagazine.com",
    "frequency": "5/Year"
  },
  {
    "id": 202,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Jewish Press",
    "email": "editor@jewishpress.com",
    "phone": "(718) 330-1100",
    "website": "http://www.jewishpress.com/",
    "editor": "Jerry Greenwald",
    "address": "4915 16th Ave., Brooklyn, NY 11204",
    "zip": 11204,
    "circulation": "North America",
    "geographic": "jewishpress.com",
    "frequency": "Weekly"
  },
  {
    "id": 203,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "News Report",
    "email": "news@tzeitung.com",
    "phone": "(718) 851-6607",
    "website": "ditzeitung.com",
    "editor": "Albert Friedman",
    "address": "4915 16th Ave., Brooklyn, NY 11204",
    "zip": 11204,
    "circulation": "US",
    "geographic": "ditzeitung.com",
    "frequency": "Weekly"
  },
  {
    "id": 204,
    "community": "Jewish",
    "language": "English",
    "borough": "Brooklyn",
    "name": "New York Jewish Life",
    "email": "news@nyjlife.com",
    "phone": "(718) 915-6460",
    "website": "not available",
    "editor": "Michael Tobman",
    "address": "",
    "zip": "",
    "circulation": "US",
    "geographic": "",
    "frequency": ""
  },
  {
    "id": 205,
    "community": "Jewish Russian",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Russian Forward",
    "email": "yezmir@gmail.com",
    "phone": "(718) 434-0900",
    "website": "http://forward.com/tag/russian/",
    "editor": "Arye Aatzine",
    "address": "1100 Coney Island Avenue, Suite 409, Brooklyn, NY 11230",
    "zip": 11230,
    "circulation": "US",
    "geographic": "forward.com",
    "frequency": "Weekly"
  },
  {
    "id": 206,
    "community": "Jewish Russian",
    "language": "Russian",
    "borough": "Brooklyn",
    "name": "Yevreiski Mir",
    "email": "yevmir@gmail.com",
    "phone": "(718) 434-0900",
    "website": "http://evreimir.com/",
    "editor": "Aryeh Katzin",
    "address": "1100 Coney Island Avenue, 4th floor, Brooklyn, NY 11230",
    "zip": 11230,
    "circulation": "US",
    "geographic": "evreimir.com",
    "frequency": "Weekly"
  },
  {
    "id": 207,
    "community": "Korean",
    "language": "Korean",
    "borough": "Queens",
    "name": "Korea Central Daily News",
    "email": "dany1773@gmail.com",
    "phone": "(718) 361-7700",
    "website": "http://www.koreadaily.com/index.html?branch=NY",
    "editor": "Danny Chin",
    "address": "95-17 24th Avenue 2nd Fl, East Elmhurst, New York 11369",
    "zip": 11369,
    "circulation": "US",
    "geographic": "koreadaily.com",
    "frequency": ""
  },
  {
    "id": 208,
    "community": "Korean",
    "language": "Korean",
    "borough": "Queens",
    "name": "Korea Times New York",
    "email": "ktnyedit@gmail.com",
    "phone": "(718) 482-1122",
    "website": "http://ny.koreatimes.com/",
    "editor": "Jinhye Kim",
    "address": "42-22 27th St., Long Island City, NY 11101",
    "zip": 11101,
    "circulation": "Northeast",
    "geographic": "ny.koreatimes.com",
    "frequency": ""
  },
  {
    "id": 209,
    "community": "Korean",
    "language": "Korean",
    "borough": "Queens",
    "name": "The Korean New York Daily",
    "email": "shin.dongchan@koreadaily.com; lee.joeun@koreadaily.com",
    "phone": "(718) 361-7700 x127",
    "website": "newyorkilbo.com",
    "editor": "Joeun Lee/Danny Shin",
    "address": "45-22 162nd St., Flushing, NY 11358",
    "zip": 11358,
    "circulation": "North America",
    "geographic": "newyorkilbo.com",
    "frequency": "Daily"
  },
  {
    "id": 210,
    "community": "Latino",
    "language": "English",
    "borough": "Manhattan",
    "name": "WADO- 1280 Univision",
    "email": "nvizcarrondo@univisionradio.com",
    "phone": "(212) 310-6000",
    "website": "http://www.univision.com/nueva-york/wado-am",
    "editor": "Nomar Vizcarrondo",
    "address": "485 Madison Ave., 3rd Fl., New York, NY 10022",
    "zip": 10022,
    "circulation": 500000,
    "geographic": "",
    "frequency": "Radio"
  },
  {
    "id": 211,
    "community": "Latino",
    "language": "English",
    "borough": "Manhattan",
    "name": "La Voz Hispana",
    "email": "discomundo@aol.com",
    "phone": "(212) 348-8270",
    "website": "http://www.lavozhispanact.com/",
    "editor": "Joaquin del Rio",
    "address": "159 E. 116th St., New York, NY 10029",
    "zip": 10029,
    "circulation": 68000,
    "geographic": "NYC",
    "frequency": "Weekly"
  },
  {
    "id": 212,
    "community": "Latino",
    "language": "English",
    "borough": "Manhattan",
    "name": "Diario de Mexico USA",
    "email": "gbaz@diariodemexicousa.com",
    "phone": "(212) 725-1521",
    "website": "http://diariodemexicousa.com/",
    "editor": "German Baz",
    "address": "167 Madison Ave., Suite 401, New York, NY 10016",
    "zip": 10016,
    "circulation": "20,000-50,000 (audited)",
    "geographic": "NYC Metropolitan Area",
    "frequency": "Daily"
  },
  {
    "id": 213,
    "community": "Latino",
    "language": "English",
    "borough": "Manhattan",
    "name": "Impacto Latin News",
    "email": "jsmith@impactolatino.com",
    "phone": "(212) 807-0400",
    "website": "www.impactolatino.com",
    "editor": "Jason Smith",
    "address": "225 West 35th St., Suite 305, New York, NY 10001",
    "zip": 10001,
    "circulation": "57,000 (audited)",
    "geographic": "US; International",
    "frequency": "Weekly"
  },
  {
    "id": 214,
    "community": "Latino",
    "language": "English",
    "borough": "Manhattan",
    "name": "LatinTRENDS",
    "email": "jguillen@latintrends.com",
    "phone": "(212) 851-6164 x12",
    "website": "http://latintrends.com/",
    "editor": "Juan Guillen",
    "address": "60 West 39th St., Suite 2W, New York, NY 10018",
    "zip": 10018,
    "circulation": "294,000 (audited)",
    "geographic": "US",
    "frequency": "Monthly"
  },
  {
    "id": 215,
    "community": "Latino",
    "language": "English",
    "borough": "Manhattan",
    "name": "El Especial",
    "email": "comunidad@elespecial.com",
    "phone": "(201) 348-1959",
    "website": "http://elespecial.com/",
    "editor": "Ruben Alcivar",
    "address": "3711 Hudson Avenue, Union City, NJ 07087",
    "zip": "",
    "circulation": "",
    "geographic": "",
    "frequency": "Website"
  },
  {
    "id": 216,
    "community": "Latino",
    "language": "English",
    "borough": "Manhattan",
    "name": "El Especialito",
    "email": "jsibaja@elespecial.com",
    "phone": "(201) 348-1959",
    "website": "http://elespecial.com/",
    "editor": "Jose Sibaja",
    "address": "3711 Hudson Avenue, Union City, NJ 07087",
    "zip": "",
    "circulation": 76000,
    "geographic": "US; International",
    "frequency": "Weekly"
  },
  {
    "id": 217,
    "community": "Latino",
    "language": "English",
    "borough": "Manhattan",
    "name": "WSKQ 97.9 FM",
    "email": "egarcia@sbsnewyork.com",
    "phone": "(212) 541-9200",
    "website": "http://lamega.lamusica.com/",
    "editor": "Eric Garcia",
    "address": "26 West 56th St., New York, NY 10019",
    "zip": 10019,
    "circulation": "1.25 million",
    "geographic": "",
    "frequency": "Radio"
  },
  {
    "id": 218,
    "community": "Latino",
    "language": "English",
    "borough": "Bronx",
    "name": "La Voz de Honduras",
    "email": "egeguzman31@gmail.com",
    "phone": "(347) 932-7702",
    "website": "not available",
    "editor": "Elsa Guzman",
    "address": "1162 Sheridan Ave. Rm 6D, Bronx, NY 10456",
    "zip": 10456,
    "circulation": "NYC Metropolitan Area",
    "geographic": "Spanish; English",
    "frequency": "Monthly"
  },
  {
    "id": 219,
    "community": "Latino",
    "language": "English",
    "borough": "Bronx",
    "name": "Nueva Luz Photographic Journal",
    "email": "info@enfoco.org",
    "phone": "(718) 931-9311",
    "website": "https://enfoco.org/",
    "editor": "Miriam Romais",
    "address": "1738 Hone Ave., Bronx, NY 10461",
    "zip": 10461,
    "circulation": "Bronx, Brooklyn, Manhattan, New Jersey",
    "geographic": "Spanish",
    "frequency": "Tri-annual"
  },
  {
    "id": 220,
    "community": "Latino",
    "language": "English",
    "borough": "Brooklyn",
    "name": "El Diario/La Prensa",
    "email": "carmen.villavicencio@eldiariony.com",
    "phone": "(212) 807-4787",
    "website": "eldiariony.com",
    "editor": "Carmen Villavicencio",
    "address": "One MetroTech Center, 18th Fl., Brooklyn, NY 11201",
    "zip": 11201,
    "circulation": "NYC; Boston; Philadelphia",
    "geographic": "eldiariony.com",
    "frequency": "Daily"
  },
  {
    "id": 221,
    "community": "Latino",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Remezcla",
    "email": "editorial@remezcla.com",
    "phone": "(718) 388-6262",
    "website": "http://remezcla.com/",
    "editor": "Andrew Herrera",
    "address": "203 Moore Street, Brooklyn, NY 11206",
    "zip": 11206,
    "circulation": "NYC",
    "geographic": "remezcla.com",
    "frequency": "Website"
  },
  {
    "id": 222,
    "community": "Latino",
    "language": "English",
    "borough": "Queens",
    "name": "Ayllu Times",
    "email": "ayllu200@yahoo.com",
    "phone": "(347) 239-3152",
    "website": "not available",
    "editor": "Eric Montoya",
    "address": "94-31 Alstyne Ave., 2nd Fl., Elmhurst, NY 11373",
    "zip": 11373,
    "circulation": "Brooklyn, Manhattan, Queens",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 223,
    "community": "Latino",
    "language": "English",
    "borough": "Queens",
    "name": "Ecuador News",
    "email": "semanario@ecuadornews.us",
    "phone": "(718) 205-7014",
    "website": "not available",
    "editor": "Edison Esparza",
    "address": "64-03 Roosevelt Ave., 2nd floor, Woodside, NY 11377",
    "zip": 11377,
    "circulation": "Bronx, Brooklyn",
    "geographic": "ecuadornews.com",
    "frequency": "Weekly"
  },
  {
    "id": 224,
    "community": "Latino",
    "language": "English",
    "borough": "Queens",
    "name": "El Correo",
    "email": "KLopez@qns.com",
    "phone": "(718) 224-5863",
    "website": "queenscourier.com",
    "editor": "Karmina Lopez",
    "address": "38-15 Bell Blvd., Bayside, NY 11361",
    "zip": 11361,
    "circulation": "NYC Metropolitan Area",
    "geographic": "elcorreo.com",
    "frequency": "Weekly"
  },
  {
    "id": 225,
    "community": "Latino",
    "language": "English",
    "borough": "Queens",
    "name": "El Tiempo de New York Newspaper",
    "email": "diana@eltiemponews.com",
    "phone": "(917) 843-7861",
    "website": "not available",
    "editor": "Diana Sanchez",
    "address": "P.O. Box 720314, Jackson Heights, NY 11372",
    "zip": 11372,
    "circulation": "NYC Metropolitan Area",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 226,
    "community": "Latino",
    "language": "English",
    "borough": "Queens",
    "name": "Peruanisimo News",
    "email": "peruanisimonews@yahoo.com",
    "phone": "(347) 239-3152",
    "website": "not available",
    "editor": "Manuel Alcantara",
    "address": "94-31 Alstyne Ave., 2nd Fl., Elmhurst, NY 11373",
    "zip": 11373,
    "circulation": "Brooklyn, Manhattan, Queens",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 227,
    "community": "Latino",
    "language": "English",
    "borough": "Queens",
    "name": "Presencia Panamena e Hispana News",
    "email": "panamapost@aol.com",
    "phone": "(718) 592-3002",
    "website": "not available",
    "editor": "Antonio Morgan",
    "address": "98-45 57th Ave., Suite 6F, Rego Park, NY 11368",
    "zip": 11368,
    "circulation": "NYC",
    "geographic": "",
    "frequency": "Monthly"
  },
  {
    "id": 228,
    "community": "Latino",
    "language": "English",
    "borough": "Queens",
    "name": "Queens Latino",
    "email": "javiercastano@queenslatino.com",
    "phone": "(646) 246-1960",
    "website": "queenslatino.com",
    "editor": "Javier Castano",
    "address": "76-15 35th Ave., Rm 1P, Jackson Heights, NY 11372",
    "zip": 11372,
    "circulation": "NYC",
    "geographic": "queenslatino.com",
    "frequency": "Monthly"
  },
  {
    "id": 229,
    "community": "Latino",
    "language": "English",
    "borough": "Queens",
    "name": "Nosotros New York",
    "email": "nosotrosnewyork@gmail.com",
    "phone": "(347) 779-7968",
    "website": "https://www.facebook.com/NOSOTROS-NEW-YORK-228443163989397/",
    "editor": "Plinio Garrido",
    "address": "40-45 81st Street Elmhurst NY 11368",
    "zip": 11368,
    "circulation": "NYC",
    "geographic": "nosotrosnewyork.com",
    "frequency": "Online"
  },
  {
    "id": 230,
    "community": "Multi-Ethnic",
    "language": "English",
    "borough": "Manhattan",
    "name": "Multicultural Radio Broadcasting, Inc.",
    "email": "bettyy@mrbi.net",
    "phone": "(212) 219-6489",
    "website": "http://mrbi.net/",
    "editor": "Jenny Lacsmana",
    "address": "29 William St., 11th Fl., New York, NY 10005",
    "zip": 10005,
    "circulation": "daily viewership: 100,000",
    "geographic": "NYC Metropolitan Area",
    "frequency": "Radio"
  },
  {
    "id": 231,
    "community": "Multi-Ethnic",
    "language": "English",
    "borough": "Manhattan",
    "name": "WWRL 1600 AM",
    "email": "adriane@lainvasora1600.com",
    "phone": "(212) 631-0800",
    "website": "not available",
    "editor": "Rennie Bishop",
    "address": "333 7th Ave., New York, NY 10001",
    "zip": 10001,
    "circulation": "",
    "geographic": "",
    "frequency": "Radio"
  },
  {
    "id": 232,
    "community": "Native American",
    "language": "English",
    "borough": "Manhattan",
    "name": "Indian Country Today Media Network",
    "email": "editor@ictmn.com",
    "phone": "(212) 600-2086",
    "website": "https://indiancountrymedianetwork.com/",
    "editor": "Ray Cook",
    "address": "590 Madison Ave., Suite 1864, New York, NY 10022",
    "zip": 10022,
    "circulation": "20,000-30,000",
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 233,
    "community": "Nepali",
    "language": "Nepali",
    "borough": "Manhattan",
    "name": "White Himal Television",
    "email": "info@whitehimal.tv",
    "phone": "(347) 235-2883",
    "website": "http://whitehimal.tv/",
    "editor": "Surya Thapa",
    "address": "1407 Broadway, New York, NY 10018",
    "zip": 10018,
    "circulation": "",
    "geographic": "US",
    "frequency": "TV"
  },
  {
    "id": 234,
    "community": "Nepali",
    "language": "Nepali",
    "borough": "Manhattan",
    "name": "White Himal Weekly",
    "email": "kishorpanthi@gmail.com",
    "phone": "(347) 235-2883",
    "website": "http://whitehimal.tv/",
    "editor": "Surya Thapa",
    "address": "1407 Broadway, New York, NY 10018",
    "zip": 10018,
    "circulation": 20000,
    "geographic": "North America",
    "frequency": "Weekly"
  },
  {
    "id": 235,
    "community": "Nepali",
    "language": "Nepali",
    "borough": "Queens",
    "name": "Khasokhas",
    "email": "kishorpanthi@gmail.com",
    "phone": "(347) 525-5254",
    "website": "http://www.khasokhas.com",
    "editor": "Kishor Panthi",
    "address": "37-15 73rd St., Suite 101, Jackson Heights, NY 11372",
    "zip": 11372,
    "circulation": "",
    "geographic": "khasokhas.com",
    "frequency": "Weekly"
  },
  {
    "id": 236,
    "community": "Nepali",
    "language": "Hindi",
    "borough": "Queens",
    "name": "Everest Times",
    "email": "angchhiring@hotmail.com",
    "phone": "(917) 294-8251",
    "website": "everesttimesnews.com",
    "editor": "Angchhiri Sherpa",
    "address": "42-32 64th St., Woodside, NY 11377",
    "zip": 11377,
    "circulation": "NYC Metropolitan Area",
    "geographic": "everesttimesnews.com",
    "frequency": "Bi-Weekly"
  },
  {
    "id": 237,
    "community": "Nepali",
    "language": "Nepali",
    "borough": "Queens",
    "name": "Vishwa Sandesh New York",
    "email": "nepalinewspaper@gmail.com",
    "phone": "(646) 750-3746",
    "website": "https://www.facebook.com/Vishwa-Sandesh-New-York-264723516928735/",
    "editor": "Bijaya Poudel",
    "address": "35-06 73rd St., Jackson Heights, NY 11372",
    "zip": 11372,
    "circulation": "Bronx; Brooklyn; Queens",
    "geographic": "vishwanews.com",
    "frequency": "Weekly"
  },
  {
    "id": 238,
    "community": "Pakistani",
    "language": "English",
    "borough": "Manhattan",
    "name": "Pakistan Voice",
    "email": "qamar777@hotmail.com",
    "phone": "(917) 702-6043",
    "website": "http://pakistanvoice.net/",
    "editor": "Bashir Qamar",
    "address": "596 Larkfield Rd., East Northport, NY 11737",
    "zip": "",
    "circulation": 10000,
    "geographic": "Northeast",
    "frequency": "Weekly"
  },
  {
    "id": 239,
    "community": "Pakistani",
    "language": "English",
    "borough": "Brooklyn",
    "name": "New York Awam",
    "email": "nypawam@aol.com",
    "phone": "(212) 219-1331",
    "website": "newyorkawam.org",
    "editor": "Hameed Minhas",
    "address": "P.O Box 728, Jericho, NY 11753",
    "zip": "",
    "circulation": "US",
    "geographic": "newyorkawam.org",
    "frequency": "Weekly"
  },
  {
    "id": 240,
    "community": "Pakistani",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Weekly Dunya International",
    "email": "manzhussain72@yahoo.com",
    "phone": "(718) 421-1684",
    "website": "dunyaintl.com",
    "editor": "Manzoor Hussain",
    "address": "724 East 9th St., Brooklyn, NY 11230",
    "zip": 11230,
    "circulation": "Northeast",
    "geographic": "dunyaintl.com",
    "frequency": "Weekly"
  },
  {
    "id": 241,
    "community": "Pakistani",
    "language": "English",
    "borough": "Brooklyn",
    "name": "The Pakistani Newspaper",
    "email": "mohsinzaheer@aol.com",
    "phone": "(917) 287-1995",
    "website": "pn.com.pk",
    "editor": "Mohsin Zaheer",
    "address": "4720 Avenue N, Brooklyn, NY 11234",
    "zip": 11234,
    "circulation": "North America; Asia",
    "geographic": "",
    "frequency": "Website"
  },
  {
    "id": 242,
    "community": "Pakistani",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Weekly Sada-e-Pakistan",
    "email": "mohsinzaheer@aol.com",
    "phone": "(917) 287-1995",
    "website": "http://www.sada-e-pakistan.net/",
    "editor": "Mohsin Zaheer",
    "address": "818 Coney Island Ave., Brooklyn, NY 11228",
    "zip": 11228,
    "circulation": "NYC Metropolitan Area; Midwest",
    "geographic": "sada-e-pakistan.net",
    "frequency": "Weekly"
  },
  {
    "id": 243,
    "community": "Pakistani",
    "language": "English",
    "borough": "Queens",
    "name": "News Pakistan",
    "email": "newspakistan@aol.com",
    "phone": "(347) 236-8690",
    "website": "https://www.thenews.com.pk/",
    "editor": "Mujib S. Lodhi",
    "address": "153-25 Hillside Avenue, Suite 3B, Jamaica, NY 11432",
    "zip": 11432,
    "circulation": "NYC",
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 244,
    "community": "Pakistani",
    "language": "English",
    "borough": "Queens",
    "name": "Pakistan Post",
    "email": "mohammadfarrukh@hotmail.com",
    "phone": "(917) 442-9283",
    "website": "http://www.pakpost.gov.pk/",
    "editor": "Mohammad R. Farrukh",
    "address": "78-26 Parsons Blvd., Fresh Meadows, NY 11366",
    "zip": 11366,
    "circulation": "North America",
    "geographic": "pakistanpost.net",
    "frequency": "Weekly"
  },
  {
    "id": 245,
    "community": "Pakistani",
    "language": "English",
    "borough": "Queens",
    "name": "Urdu Times",
    "email": "urdutimesny@aol.com",
    "phone": "(718) 297-5609",
    "website": "urdutimesusa.com",
    "editor": "Anjum Khalil",
    "address": "169-20 Hillside Avenue, Jamaica, NY 11432",
    "zip": 11432,
    "circulation": "North America",
    "geographic": "urdutimes.com",
    "frequency": "Weekly"
  },
  {
    "id": 246,
    "community": "Polish",
    "language": "Polish",
    "borough": "Manhattan",
    "name": "Nowy Dziennik",
    "email": "as@dziennik.com",
    "phone": "(212) 594-2383",
    "website": "http://www.dziennik.com/",
    "editor": "Aleksandra Slabisz",
    "address": "70 Outwater Lane Garfield, NJ",
    "zip": "",
    "circulation": 20000,
    "geographic": "NYC Metropolitan Area",
    "frequency": "Daily"
  },
  {
    "id": 247,
    "community": "Polish",
    "language": "Polish",
    "borough": "Manhattan",
    "name": "Super Express USA Publishing Corp",
    "email": "kazimierzs@seusa.info",
    "phone": "(212) 227-5800",
    "website": "http://www.se.pl/",
    "editor": "Adam Michejda",
    "address": "111 John St., 28th Fl., New York, NY 10038",
    "zip": 10038,
    "circulation": 50000,
    "geographic": "US",
    "frequency": ""
  },
  {
    "id": 248,
    "community": "Polish",
    "language": "Polish",
    "borough": "Brooklyn",
    "name": "Kurier Plus Inc.",
    "email": "kurier@kurierplus.com",
    "phone": "(718) 389-3018",
    "website": "http://kurierplus.com/",
    "editor": "Zofia Klopotowska",
    "address": "145 Java St., Brooklyn, NY 11222",
    "zip": 11222,
    "circulation": "NYC Metropolitan Area",
    "geographic": "kurierplus.com",
    "frequency": "Weekly"
  },
  {
    "id": 249,
    "community": "Polish",
    "language": "Polish",
    "borough": "Brooklyn",
    "name": "Polska Gazeta",
    "email": "polskagazetanyc@gmail.com",
    "phone": "(718) 782-0881",
    "website": "https://polskagazetausa.com/",
    "editor": "Janusz Czuj",
    "address": "419 Manhattan Ave., Brooklyn, NY 11222",
    "zip": 11222,
    "circulation": "NYC Metropolitan Area",
    "geographic": "polskagazetausa.com",
    "frequency": "Daily"
  },
  {
    "id": 250,
    "community": "Romanian",
    "language": "English",
    "borough": "Queens",
    "name": "Romanian Voice",
    "email": "romanianjournalny@yahoo.com",
    "phone": "(718) 482-9588",
    "website": "http://www.romanianvoice.com/",
    "editor": "Vasile Badaluta",
    "address": "45-41 39th Place, Suite 3E, Sunnyside, NY 11104",
    "zip": 11104,
    "circulation": "NYC",
    "geographic": "rtvny.com",
    "frequency": "Weekly"
  },
  {
    "id": 251,
    "community": "Romanian",
    "language": "English",
    "borough": "Queens",
    "name": "New York Magazin",
    "email": "grigoreculian@yahoo.com",
    "phone": "(718) 896-8383",
    "website": "nymagazin.com",
    "editor": "Grigore Culian",
    "address": "64-42 84th St., Middle Village, NY 11369",
    "zip": 11369,
    "circulation": "US",
    "geographic": "nymagazin.com",
    "frequency": "Weekly"
  },
  {
    "id": 252,
    "community": "Russian",
    "language": "Russian",
    "borough": "Manhattan",
    "name": "V Novom Svete",
    "email": "editor@vnsnews.com",
    "phone": "(212) 482-0303",
    "website": "http://www.vnovomsvete.com/",
    "editor": "Oleg Sulkin",
    "address": "55 Broad St., New York, NY 10004",
    "zip": 10004,
    "circulation": 50000,
    "geographic": "US",
    "frequency": "Weekly"
  },
  {
    "id": 253,
    "community": "Russian",
    "language": "Russian",
    "borough": "Brooklyn",
    "name": "Reporter",
    "email": "editor@reporterru.com",
    "phone": "(718) 303-8855",
    "website": "reporterru.com",
    "editor": "Felix Gorodetsky",
    "address": "2508 Coney Island Ave., Brooklyn, NY 11223",
    "zip": 11223,
    "circulation": "Brooklyn; Manhattan; Queens",
    "geographic": "reporterru.com",
    "frequency": "Daily"
  },
  {
    "id": 254,
    "community": "Russian",
    "language": "Russian",
    "borough": "Brooklyn",
    "name": "Russian Bazaar",
    "email": "rusbazaar@yahoo.com",
    "phone": "(718) 266-4444",
    "website": "Russian-Bazaar.com",
    "editor": "Natasha Shapiro",
    "address": "224 Kings Hwy., 2nd Floor, Brooklyn, NY 11223",
    "zip": 11223,
    "circulation": "US",
    "geographic": "russian-bazaar.com",
    "frequency": "Weekly"
  },
  {
    "id": 255,
    "community": "Russian",
    "language": "Russian",
    "borough": "Brooklyn",
    "name": "Russkaya Reklama",
    "email": "laguno@yahoo.com",
    "phone": "(347) 444-7173",
    "website": "rusrek.com",
    "editor": "Marina Lagunova",
    "address": "2699 Coney Island Ave., Brooklyn, NY 11235",
    "zip": 11235,
    "circulation": "NYC Metropolitan Area",
    "geographic": "rusrek.com",
    "frequency": "Weekly"
  },
  {
    "id": 256,
    "community": "Russian",
    "language": "Russian",
    "borough": "Brooklyn",
    "name": "Vecherniy New York",
    "email": "vechny@yahoo.com",
    "phone": "(718) 615-1210",
    "website": "vechny.com",
    "editor": "Ari Kagan",
    "address": "1529 Voorhies Ave., Brooklyn, NY 11235",
    "zip": 11235,
    "circulation": "NYC Metropolitan Area",
    "geographic": "vechny.com",
    "frequency": "Weekly"
  },
  {
    "id": 257,
    "community": "Russian",
    "language": "Russian",
    "borough": "Brooklyn",
    "name": "Davidzon Media",
    "email": "info@DavidzonRadio.com",
    "phone": "(718) 303-8000",
    "website": "http://www.davidzonradio.com/",
    "editor": "Felix Gorodetsky",
    "address": "2508 Coney Island Avenue,2nd Floor, Brooklyn, NY 11223",
    "zip": 11223,
    "circulation": "NYC Metropolitan Area",
    "geographic": "davidzonradio.com",
    "frequency": "Radio"
  },
  {
    "id": 258,
    "community": "Russian",
    "language": "Russian",
    "borough": "Queens",
    "name": "Druzhba Russian Magazine",
    "email": "druzhba1@yahoo.com",
    "phone": "(718) 275-3318",
    "website": "not available",
    "editor": "Miriam Yakubov",
    "address": "98-12 66th Ave., Rego Park, NY 11374",
    "zip": 11374,
    "circulation": "NYC Metropolitan Area",
    "geographic": "",
    "frequency": "Bi-Weekly"
  },
  {
    "id": 259,
    "community": "Russian",
    "language": "Russian",
    "borough": "Queens",
    "name": "The Bukharian Times",
    "email": "bukhariantimes@aol.com",
    "phone": "(718) 261-1595",
    "website": "bukhariantimes.org",
    "editor": "Raphael Nektalov",
    "address": "106-16 70th Ave. Fl 05, Forest Hills, NY 11375",
    "zip": 11375,
    "circulation": "NYC Metropolitan Area",
    "geographic": "bukhariantimes.org",
    "frequency": "Weekly"
  },
  {
    "id": 260,
    "community": "Serbian",
    "language": "Russian",
    "borough": "Manhattan",
    "name": "Vesti",
    "email": "vesti@mindspring.com",
    "phone": "(212) 369-2505",
    "website": "http://www.vesti.ru/",
    "editor": "Srdjan Cupac",
    "address": "300 E.93rd St., New York, NY 10128",
    "zip": 10128,
    "circulation": 3000,
    "geographic": "",
    "frequency": ""
  },
  {
    "id": 261,
    "community": "South Asian",
    "language": "English",
    "borough": "Queens",
    "name": "Urdu Times USA",
    "email": "7khalil@gmail.com",
    "phone": "(917) 709-5980",
    "website": "urdutimesusa.com",
    "editor": "Khalil Rehman",
    "address": "169-20 Hillside Ave., Jamaica, NY 11432",
    "zip": 11432,
    "circulation": "US",
    "geographic": "urdutimesusa.com",
    "frequency": "Weekly"
  },
  {
    "id": 262,
    "community": "Sri Lankan",
    "language": "English",
    "borough": "Staten Island",
    "name": "Lanka Post USA",
    "email": "C",
    "phone": "(917) 400-6265",
    "website": "editorlankapost@gmail.com",
    "editor": "Amila Wijegunaratne",
    "address": "lankapostusa.com",
    "zip": "1 Edgar Terrace FL 02, Staten Island, NY 10301",
    "circulation": "",
    "geographic": "NYC",
    "frequency": ""
  },
  {
    "id": 263,
    "community": "Swedish",
    "language": "Swedish",
    "borough": "Manhattan",
    "name": "Nordstjernan",
    "email": "ulf@nordstjernan.com",
    "phone": "(914) 522-8287",
    "website": "Not shown (blocked)",
    "editor": "Ulf Barslund Martensson",
    "address": "P.O. Box 4587, New York, NY 10163",
    "zip": 10163,
    "circulation": "5-000-10,000",
    "geographic": "North America; Europe",
    "frequency": "Bi-monthly"
  },
  {
    "id": 264,
    "community": "Thai",
    "language": "Thai",
    "borough": "Queens",
    "name": "New York Thai Press",
    "email": "telakool@msn.com",
    "phone": "(718) 464-0465",
    "website": "not available",
    "editor": "Ksnista Telakool",
    "address": "93-33 204 St, .Hollis, NY 11423",
    "zip": 11423,
    "circulation": "NYC Metropolitan Area",
    "geographic": "",
    "frequency": "Monthly"
  },
  {
    "id": 265,
    "community": "Thai",
    "language": "Thai",
    "borough": "Queens",
    "name": "NY Thai Newspaper",
    "email": "tsasithorn@gmail.com",
    "phone": "(718) 464-0465",
    "website": "not available",
    "editor": "Tanawan Sasithorn",
    "address": "93-33 204 St., Hollis, NY 11423",
    "zip": 11423,
    "circulation": "NYC Metropolitan Area",
    "geographic": "",
    "frequency": "Monthly"
  },
  {
    "id": 266,
    "community": "Turkish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Zaman Weekly",
    "email": "kalayci.sezai@gmail.com",
    "phone": "(646) 624-9419",
    "website": "weeklyzaman.com",
    "editor": "Sezai Kalayci",
    "address": "267 5th Avenue, Suite B-102, New York, NY 10016",
    "zip": 10016,
    "circulation": "5,000-10,000",
    "geographic": "NYC Metropolitan Area",
    "frequency": "Weekly"
  },
  {
    "id": 267,
    "community": "Turkish",
    "language": "English",
    "borough": "Manhattan",
    "name": "Turkish Radio and Television",
    "email": "kahramanhaliscelik@gmail.com",
    "phone": "(646) 981-7787",
    "website": "http://www.trtworld.com/",
    "editor": "Kahraman Haliscelik",
    "address": "Room-302, United Nations, New York NY 10017",
    "zip": 10017,
    "circulation": "",
    "geographic": "",
    "frequency": "Radio/TV"
  },
  {
    "id": 268,
    "community": "Youth",
    "language": "English",
    "borough": "Manhattan",
    "name": "YCteens",
    "email": "hstlifer@youthcomm.org",
    "phone": "(212) 279-0708 x116",
    "website": "http://www.ycteenmag.org/",
    "editor": "Holly St. Lifer",
    "address": "224 W. 29th St., 2nd Fl., New York, NY 10001",
    "zip": 10001,
    "circulation": "50,000+ (audited)",
    "geographic": "NYC Metropolitan Area",
    "frequency": "Quarterly"
  },
  {
    "id": 269,
    "community": "Youth",
    "language": "English",
    "borough": "Manhattan",
    "name": "Harlem Overheard",
    "email": "tjones@hcz.org",
    "phone": "(212) 360-3255",
    "website": "https://twitter.com/harlemoverheard",
    "editor": "T. Jones",
    "address": "35 East 125th St., New York, NY 10035",
    "zip": 10035,
    "circulation": 25000,
    "geographic": "NYC Schools",
    "frequency": "Quarterly"
  },
  {
    "id": 270,
    "community": "Youth",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Campus/CCNYCampus.org",
    "email": "ccnycampusnews@gmail.com",
    "phone": "(212) 650-8177",
    "website": "http://www.ccnycampus.org/",
    "editor": "Louis Oprisa",
    "address": "NAC/Rm 119, The City College of New York, 138th St., Convent Ave., New York, NY 10031",
    "zip": 10031,
    "circulation": 8000,
    "geographic": "",
    "frequency": "Weekly"
  },
  {
    "id": 271,
    "community": "Youth",
    "language": "English",
    "borough": "Manhattan",
    "name": "The Observer",
    "email": "observer@fordham.edu",
    "phone": "(212) 636-6015",
    "website": "http://observer.com/",
    "editor": "Jennie Nau",
    "address": "Fordham University at Lincoln Center, 113 W 60th St., Rm 408, New York, NY 10023",
    "zip": 10023,
    "circulation": 14000,
    "geographic": "",
    "frequency": "Bi-weekly"
  },
  {
    "id": 272,
    "community": "Youth",
    "language": "English",
    "borough": "Manhattan",
    "name": "Downtown Community Television Center",
    "email": "cmartinez@dctvny.org",
    "phone": "(212) 966-4510",
    "website": "http://www.dctvny.org/",
    "editor": "Catherine Martinez",
    "address": "87 Lafayette St, New York, NY 10013",
    "zip": "",
    "circulation": "",
    "geographic": "",
    "frequency": ""
  },
  {
    "id": 273,
    "community": "Youth",
    "language": "English",
    "borough": "Brooklyn",
    "name": "Parle Teen",
    "email": "editor@parlemag.com",
    "phone": "(646) 262-6026",
    "website": "https://www.parlemag.com/",
    "editor": "Kevin Benoit",
    "address": "9109 Avenue N, Brooklyn, NY 11236",
    "zip": 11236,
    "circulation": "NYC",
    "geographic": "parleteen.com",
    "frequency": "Quarterly"
  }
]

// retrieve record to fill out the form
$scope.readOne = function(id){

    // change modal title
    $('#modal-volunteer-title').text("Edit Volunteer Record");

    // show udpate volunteer button
    $('#btn-update-volunteer').show();

    // show create volunteer button
    $('#btn-create-volunteer').hide();

    // post id of volunteer to be edited
    $http.post('read_one.php', {
        'id' : id
    })
    .success(function(data, community, headers, config){

        // put the values in form
        $scope.id = data[0]["id"];
        $scope.community = data[0]["community"];
        $scope.name = data[0]["name"];
        $scope.email = data[0]["email"];
        $scope.phone = data[0]["phone"];



        // show modal
        $('#modal-volunteer-form').openModal();
    })
    .error(function(data, community, headers, config){
        Materialize.toast('Unable to retrieve record.', 4000);
    });
 } //	END READ ONE

// update volunteer record / save changes
$scope.updateVolunteer = function(){
    $http.post('update_volunteer.php', {
        'id' : $scope.id,
        'community' : $scope.community,
        'name' : $scope.name,
        'email' : $scope.email,
        'phone' : $scope.phone,

    })
    .success(function (data, community, headers, config){
        // tell the user volunteer record was updated
        Materialize.toast(data, 4000);

        // close modal

        $('#modal-volunteer-form').closeModal();

        // clear modal content
        $scope.clearForm();

        // refresh the volunteer list
        $scope.getAll();
    });
} //END UPDATE

// delete volunteer record
$scope.deleteVolunteer = function(index){

          if(confirm("Are you sure?")){
        $scope.names.splice(index, 1);
  Materialize.toast('Volunteer record deleted', 4000); }
} //END DELETE



}); // END ANGULAR


app.directive('phoneInput', function($filter, $browser) {
    return {
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModelCtrl) {
            var listener = function() {
                var value = $element.val().replace(/[^0-9]/g, '');
                $element.val($filter('tel')(value, false));
            };

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function(viewValue) {
                return viewValue.replace(/[^0-9]/g, '').slice(0,10);
            });

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function() {
                $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
            };

            $element.bind('change', listener);
            $element.bind('keydown', function(event) {
                var key = event.keyCode;
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
                    return;
                }
                $browser.defer(listener); // Have to do this or changes don't get picked up properly
            });

            $element.bind('paste cut', function() {
                $browser.defer(listener);
            });
        }

    };
});
app.filter('tel', function () {
    return function (tel) {
        console.log(tel);
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 1:
            case 2:
            case 3:
                city = value;
                break;

            default:
                city = value.slice(0, 3);
                number = value.slice(3);
        }

        if(number){
            if(number.length>3){
                number = number.slice(0, 3) + '-' + number.slice(3,7);
            }
            else{
                number = number;
            }

            return ("(" + city + ") " + number).trim();
        }
        else{
            return "(" + city;
        }

    };
});

app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setString('<ul class="pagination " ng-if="1 < pages.length || !autoHide">    <li class="nopad" ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }">        <a href="" ng-click="setCurrent(1)"><i class="material-icons">first_page</i></a>    </li>    <li class="nopad" ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }">        <a href="" ng-click="setCurrent(pagination.current - 1)"><i class="material-icons">chevron_left</i></a>    </li>    <li ng-click="setCurrent(pageNumber)"class="waves-effect" ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' }">        <a href="" >{{ pageNumber }}</a>    </li>    <li class="nopad" ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"> <a href="" ng-click="setCurrent(pagination.current + 1)"><i class="material-icons">chevron_right</i></a>    </li> <li class="nopad" ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)"><i class="material-icons">last_page</i></a></li></ul>');


});


// jquery codes will be here
$(document).ready(function(){
    // initialize modal
    $('.modal-trigger').leanModal();
});


      /**
 * dirPagination - AngularJS module for paginating (almost) anything.
 *
 *
 * Credits
 * =======
 *
 * Daniel Tabuenca: https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
 * for the idea on how to dynamically invoke the ng-repeat directive.
 *
 * I borrowed a couple of lines and a few attribute names from the AngularUI Bootstrap project:
 * https://github.com/angular-ui/bootstrap/blob/master/src/pagination/pagination.js
 *
 * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
 */

(function() {

    /**
     * Config
     */
    var moduleName = 'angularUtils.directives.dirPagination';
    var DEFAULT_ID = '__default';

    /**
     * Module
     */
    angular.module(moduleName, [])
        .directive('dirPaginate', ['$compile', '$parse', 'paginationService', dirPaginateDirective])
        .directive('dirPaginateNoCompile', noCompileDirective)
        .directive('dirPaginationControls', ['paginationService', 'paginationTemplate', dirPaginationControlsDirective])
        .filter('itemsPerPage', ['paginationService', itemsPerPageFilter])
        .service('paginationService', paginationService)
        .provider('paginationTemplate', paginationTemplateProvider)
        .run(['$templateCache',dirPaginationControlsTemplateInstaller]);

    function dirPaginateDirective($compile, $parse, paginationService) {

        return  {
            terminal: true,
            multiElement: true,
            priority: 100,
            compile: dirPaginationCompileFn
        };

        function dirPaginationCompileFn(tElement, tAttrs){

            var expression = tAttrs.dirPaginate;
            // regex taken directly from https://github.com/angular/angular.js/blob/v1.4.x/src/ng/directive/ngRepeat.js#L339
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

            var filterPattern = /\|\s*itemsPerPage\s*:\s*(.*\(\s*\w*\)|([^\)]*?(?=\s+as\s+))|[^\)]*)/;
            if (match[2].match(filterPattern) === null) {
                throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
            }
            var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
            var collectionGetter = $parse(itemsPerPageFilterRemoved);

            addNoCompileAttributes(tElement);

            // If any value is specified for paginationId, we register the un-evaluated expression at this stage for the benefit of any
            // dir-pagination-controls directives that may be looking for this ID.
            var rawId = tAttrs.paginationId || DEFAULT_ID;
            paginationService.registerInstance(rawId);

            return function dirPaginationLinkFn(scope, element, attrs){

                // Now that we have access to the `scope` we can interpolate any expression given in the paginationId attribute and
                // potentially register a new ID if it evaluates to a different value than the rawId.
                var paginationId = $parse(attrs.paginationId)(scope) || attrs.paginationId || DEFAULT_ID;

                // (TODO: this seems sound, but I'm reverting as many bug reports followed it's introduction in 0.11.0.
                // Needs more investigation.)
                // In case rawId != paginationId we deregister using rawId for the sake of general cleanliness
                // before registering using paginationId
                // paginationService.deregisterInstance(rawId);
                paginationService.registerInstance(paginationId);

                var repeatExpression = getRepeatExpression(expression, paginationId);
                addNgRepeatToElement(element, attrs, repeatExpression);

                removeTemporaryAttributes(element);
                var compiled =  $compile(element);

                var currentPageGetter = makeCurrentPageGetterFn(scope, attrs, paginationId);
                paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

                if (typeof attrs.totalItems !== 'undefined') {
                    paginationService.setAsyncModeTrue(paginationId);
                    scope.$watch(function() {
                        return $parse(attrs.totalItems)(scope);
                    }, function (result) {
                        if (0 <= result) {
                            paginationService.setCollectionLength(paginationId, result);
                        }
                    });
                } else {
                    paginationService.setAsyncModeFalse(paginationId);
                    scope.$watchCollection(function() {
                        return collectionGetter(scope);
                    }, function(collection) {
                        if (collection) {
                            var collectionLength = (collection instanceof Array) ? collection.length : Object.keys(collection).length;
                            paginationService.setCollectionLength(paginationId, collectionLength);
                        }
                    });
                }

                // Delegate to the link function returned by the new compilation of the ng-repeat
                compiled(scope);

                // (TODO: Reverting this due to many bug reports in v 0.11.0. Needs investigation as the
                // principle is sound)
                // When the scope is destroyed, we make sure to remove the reference to it in paginationService
                // so that it can be properly garbage collected
                // scope.$on('$destroy', function destroyDirPagination() {
                //     paginationService.deregisterInstance(paginationId);
                // });
            };
        }

        /**
         * If a pagination id has been specified, we need to check that it is present as the second argument passed to
         * the itemsPerPage filter. If it is not there, we add it and return the modified expression.
         *
         * @param expression
         * @param paginationId
         * @returns {*}
         */
        function getRepeatExpression(expression, paginationId) {
            var repeatExpression,
                idDefinedInFilter = !!expression.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);

            if (paginationId !== DEFAULT_ID && !idDefinedInFilter) {
                repeatExpression = expression.replace(/(\|\s*itemsPerPage\s*:\s*[^|\s]*)/, "$1 : '" + paginationId + "'");
            } else {
                repeatExpression = expression;
            }

            return repeatExpression;
        }

        /**
         * Adds the ng-repeat directive to the element. In the case of multi-element (-start, -end) it adds the
         * appropriate multi-element ng-repeat to the first and last element in the range.
         * @param element
         * @param attrs
         * @param repeatExpression
         */
        function addNgRepeatToElement(element, attrs, repeatExpression) {
            if (element[0].hasAttribute('dir-paginate-start') || element[0].hasAttribute('data-dir-paginate-start')) {
                // using multiElement mode (dir-paginate-start, dir-paginate-end)
                attrs.$set('ngRepeatStart', repeatExpression);
                element.eq(element.length - 1).attr('ng-repeat-end', true);
            } else {
                attrs.$set('ngRepeat', repeatExpression);
            }
        }

        /**
         * Adds the dir-paginate-no-compile directive to each element in the tElement range.
         * @param tElement
         */
        function addNoCompileAttributes(tElement) {
            angular.forEach(tElement, function(el) {
                if (el.nodeType === 1) {
                    angular.element(el).attr('dir-paginate-no-compile', true);
                }
            });
        }

        /**
         * Removes the variations on dir-paginate (data-, -start, -end) and the dir-paginate-no-compile directives.
         * @param element
         */
        function removeTemporaryAttributes(element) {
            angular.forEach(element, function(el) {
                if (el.nodeType === 1) {
                    angular.element(el).removeAttr('dir-paginate-no-compile');
                }
            });
            element.eq(0).removeAttr('dir-paginate-start').removeAttr('dir-paginate').removeAttr('data-dir-paginate-start').removeAttr('data-dir-paginate');
            element.eq(element.length - 1).removeAttr('dir-paginate-end').removeAttr('data-dir-paginate-end');
        }

        /**
         * Creates a getter function for the current-page attribute, using the expression provided or a default value if
         * no current-page expression was specified.
         *
         * @param scope
         * @param attrs
         * @param paginationId
         * @returns {*}
         */
        function makeCurrentPageGetterFn(scope, attrs, paginationId) {
            var currentPageGetter;
            if (attrs.currentPage) {
                currentPageGetter = $parse(attrs.currentPage);
            } else {
                // If the current-page attribute was not set, we'll make our own.
                // Replace any non-alphanumeric characters which might confuse
                // the $parse service and give unexpected results.
                // See https://github.com/michaelbromley/angularUtils/issues/233
                var defaultCurrentPage = (paginationId + '__currentPage').replace(/\W/g, '_');
                scope[defaultCurrentPage] = 1;
                currentPageGetter = $parse(defaultCurrentPage);
            }
            return currentPageGetter;
        }
    }

    /**
     * This is a helper directive that allows correct compilation when in multi-element mode (ie dir-paginate-start, dir-paginate-end).
     * It is dynamically added to all elements in the dir-paginate compile function, and it prevents further compilation of
     * any inner directives. It is then removed in the link function, and all inner directives are then manually compiled.
     */
    function noCompileDirective() {
        return {
            priority: 5000,
            terminal: true
        };
    }

    function dirPaginationControlsTemplateInstaller($templateCache) {
        $templateCache.put('angularUtils.directives.dirPagination.template', '<ul class="pagination" ng-if="1 < pages.length || !autoHide"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' || ( ! autoHide && pages.length === 1 ) }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>');
    }

    function dirPaginationControlsDirective(paginationService, paginationTemplate) {

        var numberRegex = /^\d+$/;

        var DDO = {
            restrict: 'AE',
            scope: {
                maxSize: '=?',
                onPageChange: '&?',
                paginationId: '=?',
                autoHide: '=?'
            },
            link: dirPaginationControlsLinkFn
        };

        // We need to check the paginationTemplate service to see whether a template path or
        // string has been specified, and add the `template` or `templateUrl` property to
        // the DDO as appropriate. The order of priority to decide which template to use is
        // (highest priority first):
        // 1. paginationTemplate.getString()
        // 2. attrs.templateUrl
        // 3. paginationTemplate.getPath()
        var templateString = paginationTemplate.getString();
        if (templateString !== undefined) {
            DDO.template = templateString;
        } else {
            DDO.templateUrl = function(elem, attrs) {
                return attrs.templateUrl || paginationTemplate.getPath();
            };
        }
        return DDO;

        function dirPaginationControlsLinkFn(scope, element, attrs) {

            // rawId is the un-interpolated value of the pagination-id attribute. This is only important when the corresponding dir-paginate directive has
            // not yet been linked (e.g. if it is inside an ng-if block), and in that case it prevents this controls directive from assuming that there is
            // no corresponding dir-paginate directive and wrongly throwing an exception.
            var rawId = attrs.paginationId ||  DEFAULT_ID;
            var paginationId = scope.paginationId || attrs.paginationId ||  DEFAULT_ID;

            if (!paginationService.isRegistered(paginationId) && !paginationService.isRegistered(rawId)) {
                var idMessage = (paginationId !== DEFAULT_ID) ? ' (id: ' + paginationId + ') ' : ' ';
                if (window.console) {
                    console.warn('Pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive, which was not found at link time.');
                }
            }

            if (!scope.maxSize) { scope.maxSize = 9; }
            scope.autoHide = scope.autoHide === undefined ? true : scope.autoHide;
            scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
            scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

            var paginationRange = Math.max(scope.maxSize, 5);
            scope.pages = [];
            scope.pagination = {
                last: 1,
                current: 1
            };
            scope.range = {
                lower: 1,
                upper: 1,
                total: 1
            };

            scope.$watch('maxSize', function(val) {
                if (val) {
                    paginationRange = Math.max(scope.maxSize, 5);
                    generatePagination();
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
                }
            }, function(length) {
                if (0 < length) {
                    generatePagination();
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getItemsPerPage(paginationId));
                }
            }, function(current, previous) {
                if (current != previous && typeof previous !== 'undefined') {
                    goToPage(scope.pagination.current);
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return paginationService.getCurrentPage(paginationId);
                }
            }, function(currentPage, previousPage) {
                if (currentPage != previousPage) {
                    goToPage(currentPage);
                }
            });

            scope.setCurrent = function(num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    num = parseInt(num, 10);
                    paginationService.setCurrentPage(paginationId, num);
                }
            };

            /**
             * Custom "track by" function which allows for duplicate "..." entries on long lists,
             * yet fixes the problem of wrongly-highlighted links which happens when using
             * "track by $index" - see https://github.com/michaelbromley/angularUtils/issues/153
             * @param id
             * @param index
             * @returns {string}
             */
            scope.tracker = function(id, index) {
                return id + '_' + index;
            };

            function goToPage(num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    var oldPageNumber = scope.pagination.current;

                    scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = num;
                    updateRangeValues();

                    // if a callback has been set, then call it with the page number as the first argument
                    // and the previous page number as a second argument
                    if (scope.onPageChange) {
                        scope.onPageChange({
                            newPageNumber : num,
                            oldPageNumber : oldPageNumber
                        });
                    }
                }
            }

            function generatePagination() {
                if (paginationService.isRegistered(paginationId)) {
                    var page = parseInt(paginationService.getCurrentPage(paginationId)) || 1;
                    scope.pages = generatePagesArray(page, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = page;
                    scope.pagination.last = scope.pages[scope.pages.length - 1];
                    if (scope.pagination.last < scope.pagination.current) {
                        scope.setCurrent(scope.pagination.last);
                    } else {
                        updateRangeValues();
                    }
                }
            }

            /**
             * This function updates the values (lower, upper, total) of the `scope.range` object, which can be used in the pagination
             * template to display the current page range, e.g. "showing 21 - 40 of 144 results";
             */
            function updateRangeValues() {
                if (paginationService.isRegistered(paginationId)) {
                    var currentPage = paginationService.getCurrentPage(paginationId),
                        itemsPerPage = paginationService.getItemsPerPage(paginationId),
                        totalItems = paginationService.getCollectionLength(paginationId);

                    scope.range.lower = (currentPage - 1) * itemsPerPage + 1;
                    scope.range.upper = Math.min(currentPage * itemsPerPage, totalItems);
                    scope.range.total = totalItems;
                }
            }
            function isValidPageNumber(num) {
                return (numberRegex.test(num) && (0 < num && num <= scope.pagination.last));
            }
        }

        /**
         * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
         * links used in pagination
         *
         * @param currentPage
         * @param rowsPerPage
         * @param paginationRange
         * @param collectionLength
         * @returns {Array}
         */
        function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
            var pages = [];
            var totalPages = Math.ceil(collectionLength / rowsPerPage);
            var halfWay = Math.ceil(paginationRange / 2);
            var position;

            if (currentPage <= halfWay) {
                position = 'start';
            } else if (totalPages - halfWay < currentPage) {
                position = 'end';
            } else {
                position = 'middle';
            }

            var ellipsesNeeded = paginationRange < totalPages;
            var i = 1;
            while (i <= totalPages && i <= paginationRange) {
                var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

                var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
                var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
                if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                    pages.push('...');
                } else {
                    pages.push(pageNumber);
                }
                i ++;
            }
            return pages;
        }

        /**
         * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
         *
         * @param i
         * @param currentPage
         * @param paginationRange
         * @param totalPages
         * @returns {*}
         */
        function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
            var halfWay = Math.ceil(paginationRange/2);
            if (i === paginationRange) {
                return totalPages;
            } else if (i === 1) {
                return i;
            } else if (paginationRange < totalPages) {
                if (totalPages - halfWay < currentPage) {
                    return totalPages - paginationRange + i;
                } else if (halfWay < currentPage) {
                    return currentPage - halfWay + i;
                } else {
                    return i;
                }
            } else {
                return i;
            }
        }
    }

    /**
     * This filter slices the collection into pages based on the current page number and number of items per page.
     * @param paginationService
     * @returns {Function}
     */
    function itemsPerPageFilter(paginationService) {

        return function(collection, itemsPerPage, paginationId) {
            if (typeof (paginationId) === 'undefined') {
                paginationId = DEFAULT_ID;
            }
            if (!paginationService.isRegistered(paginationId)) {
                throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
            }
            var end;
            var start;
            if (angular.isObject(collection)) {
                itemsPerPage = parseInt(itemsPerPage) || 9999999999;
                if (paginationService.isAsyncMode(paginationId)) {
                    start = 0;
                } else {
                    start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
                }
                end = start + itemsPerPage;
                paginationService.setItemsPerPage(paginationId, itemsPerPage);

                if (collection instanceof Array) {
                    // the array just needs to be sliced
                    return collection.slice(start, end);
                } else {
                    // in the case of an object, we need to get an array of keys, slice that, then map back to
                    // the original object.
                    var slicedObject = {};
                    angular.forEach(keys(collection).slice(start, end), function(key) {
                        slicedObject[key] = collection[key];
                    });
                    return slicedObject;
                }
            } else {
                return collection;
            }
        };
    }

    /**
     * Shim for the Object.keys() method which does not exist in IE < 9
     * @param obj
     * @returns {Array}
     */
    function keys(obj) {
        if (!Object.keys) {
            var objKeys = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    objKeys.push(i);
                }
            }
            return objKeys;
        } else {
            return Object.keys(obj);
        }
    }

    /**
     * This service allows the various parts of the module to communicate and stay in sync.
     */
    function paginationService() {

        var instances = {};
        var lastRegisteredInstance;

        this.registerInstance = function(instanceId) {
            if (typeof instances[instanceId] === 'undefined') {
                instances[instanceId] = {
                    asyncMode: false
                };
                lastRegisteredInstance = instanceId;
            }
        };

        this.deregisterInstance = function(instanceId) {
            delete instances[instanceId];
        };

        this.isRegistered = function(instanceId) {
            return (typeof instances[instanceId] !== 'undefined');
        };

        this.getLastInstanceId = function() {
            return lastRegisteredInstance;
        };

        this.setCurrentPageParser = function(instanceId, val, scope) {
            instances[instanceId].currentPageParser = val;
            instances[instanceId].context = scope;
        };
        this.setCurrentPage = function(instanceId, val) {
            instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
        };
        this.getCurrentPage = function(instanceId) {
            var parser = instances[instanceId].currentPageParser;
            return parser ? parser(instances[instanceId].context) : 1;
        };

        this.setItemsPerPage = function(instanceId, val) {
            instances[instanceId].itemsPerPage = val;
        };
        this.getItemsPerPage = function(instanceId) {
            return instances[instanceId].itemsPerPage;
        };

        this.setCollectionLength = function(instanceId, val) {
            instances[instanceId].collectionLength = val;
        };
        this.getCollectionLength = function(instanceId) {
            return instances[instanceId].collectionLength;
        };

        this.setAsyncModeTrue = function(instanceId) {
            instances[instanceId].asyncMode = true;
        };

        this.setAsyncModeFalse = function(instanceId) {
            instances[instanceId].asyncMode = false;
        };

        this.isAsyncMode = function(instanceId) {
            return instances[instanceId].asyncMode;
        };
    }

    /**
     * This provider allows global configuration of the template path used by the dir-pagination-controls directive.
     */
    function paginationTemplateProvider() {

        var templatePath = 'angularUtils.directives.dirPagination.template';
        var templateString;

        /**
         * Set a templateUrl to be used by all instances of <dir-pagination-controls>
         * @param {String} path
         */
        this.setPath = function(path) {
            templatePath = path;
        };

        /**
         * Set a string of HTML to be used as a template by all instances
         * of <dir-pagination-controls>. If both a path *and* a string have been set,
         * the string takes precedence.
         * @param {String} str
         */
        this.setString = function(str) {
            templateString = str;
        };

        this.$get = function() {
            return {
                getPath: function() {
                    return templatePath;
                },
                getString: function() {
                    return templateString;
                }
            };
        };
    }
})();
