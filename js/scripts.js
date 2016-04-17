var search, results, allStuds = [];


var rebuildAndRerunSearch = function () {
    rebuildSearchIndex();
    searchStuds();
};


var rebuildSearchIndex = function () {
    search = new JsSearch.Search('name');

    //console.log(allStuds);
    search.addDocuments(allStuds);
};

var indexedStudsTable = document.getElementById('indexedStudsTable');
var indexedStudsTBody = indexedStudsTable.tBodies[0];
var searchInput = document.getElementById('searchInput');
var studCountBadge = document.getElementById('studCountBadge');

var updateStudsTable = function (Studs) {
    indexedStudsTBody.innerHTML = '';

    var tokens = search.tokenizer.tokenize(searchInput.value);
    console.log(Studs);
    console.log(StudsallStuds = {
    "id":[
    {
        "name": "Aakarsh",
        "social": "www.aakarsh.com",
        "location": "Indore",
        "interests": "Python",
        "contact": "9899100101",
        "email": "a@a.com"
    },

    {
        "name": "Aarshiya",
        "social": "www.aarshiya.com",
        "location": "sgnr",
        "interests": "PHP",
        "contact": "9879100101",
        "email": "ar@ar.com"
    },

    {
        "name": "Sonali",
        "social": "www.sonali.com",
        "location": "Jaipur",
        "interests": "Django",
        "contact": "9819100101",
        "email": "so@so.com"
    },

    {
        "name": "Swapnil",
        "social": "www.pandey.com",
        "location": "Delhi",
        "interests": "Android",
        "contact": "9009100101",
        "email": "sw@sw.com"
    },

    {
        "name": "Zaheer",
        "social": "www.zak.com",
        "location": "Mumbai",
        "interests": "Cricket",
        "contact": "9899456101",
        "email": "zk@zk.com"
    }

]
});
    allStuds = {
    "id":[
    {
        "name": "Aakarsh",
        "social": "www.aakarsh.com",
        "location": "Indore",
        "interests": "Python",
        "contact": "9899100101",
        "email": "a@a.com"
    },

    {
        "name": "Aarshiya",
        "social": "www.aarshiya.com",
        "location": "sgnr",
        "interests": "PHP",
        "contact": "9879100101",
        "email": "ar@ar.com"
    },

    {
        "name": "Sonali",
        "social": "www.sonali.com",
        "location": "Jaipur",
        "interests": "Django",
        "contact": "9819100101",
        "email": "so@so.com"
    },

    {
        "name": "Swapnil",
        "social": "www.pandey.com",
        "location": "Delhi",
        "interests": "Android",
        "contact": "9009100101",
        "email": "sw@sw.com"
    },

    {
        "name": "Zaheer",
        "social": "www.zak.com",
        "location": "Mumbai",
        "interests": "Cricket",
        "contact": "9899456101",
        "email": "zk@zk.com"
    }

]
}.length;
    
    
    var key, count = 0;
for(key in Studs.id) {
  if(Studs.id.hasOwnProperty(key)) {
    count++;
  }
}
    console.log(count);
    
    for (var i = 0, length = count; i < length; i++) {
        var stud = Studs.id[i];
        console.log(Studs.id[i]);
        var nameCol = document.createElement('td');
        nameCol.innerText = stud.name;

        var socialCol = document.createElement('td');
        socialCol.innerHTML = stud.social;

        var locationCol = document.createElement('td');
        locationCol.innerHTML = stud.location;


        var interestsCol = document.createElement('td');
        interestsCol.innerHTML = stud.interests;


        var contactsCol = document.createElement('td');
        contactsCol.innerHTML = stud.contact;


        var emailCol = document.createElement('td');
        emailCol.innerHTML = stud.email;

        var tableRow = document.createElement('tr');
        tableRow.appendChild(nameCol);
        tableRow.appendChild(socialCol);
        tableRow.appendChild(locationCol);
        tableRow.appendChild(interestsCol);
        tableRow.appendChild(contactsCol);
        tableRow.appendChild(emailCol);

        indexedStudsTBody.appendChild(tableRow);
    }
};

var updatestudCountAndTable = function () {
    updatestudCount(results.length);

    if (results.length > 0) {
        updateStudsTable(results);
    } else if (!!searchInput.value) {
        updateStudsTable([]);
    } else {
        updatestudCount(allStuds.length);
        updateStudsTable(allStuds);
    }
};

var searchStuds = function () {
    results = search.search(searchInput.value);
    updatestudCountAndTable();
};

searchInput.oninput = searchStuds;

var updatestudCount = function (numStuds) {
    studCountBadge.innerText = numStuds + ' Studs';
};
var hideElement = function (element) {
    element.className += ' hidden';
};
var showElement = function (element) {
    element.className = element.className.replace(/\s*hidden/, '');
};

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var json = JSON.parse(xmlhttp.responseText);

        allStuds = json;
        console.log(allStuds);
        updatestudCount(allStuds.length);

        var loadingProgressBar = document.getElementById('loadingProgressBar');
        hideElement(loadingProgressBar);
        showElement(indexedStudsTable);

        rebuildSearchIndex();
        updateStudsTable(allStuds);
    }
}
xmlhttp.open('GET', 'stud.json', true);
xmlhttp.send();