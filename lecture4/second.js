// let random = parseInt(Math.random()*10)
// console.log(random)

// let res = document.querySelector('.result')
// if(random<5){
//     res.textContent="you lose"+random
// }
// else{
//     res.textContent="you win"+random
// }


// // template strings - backticks
// console.log(`Random is ${random}`)

function check(){
    // p ko create kiya purposely taki uss khali jagah par hamara text print hoe
    let ans=document.querySelector('#answer')
    let element = document.querySelector('#ip')
    // agar input se kuch print karwana ho toh element.value likhte h
    // console.log(element.value)
    if(isNaN(parseInt(element.value))){
        ans.textContent = "enter a valid no!!"
    element.focus()

        return
    }
    // ham aese likh skte, let value = element.value 
    // for(let num=2;num<element.value;num++){
               let flag=true;
                for(let i=2;i<element.value;i++){
                    if(element.value%i==0){
                        flag=false;
                        break;
                    }
                }
                
                if(flag){
                    // console.log("is prime");
                    ans.textContent = `${element.value} is prime`
                }
                else{
                    ans.textContent = `${element.value} is not prime`
                }
                element.focus();
                element.value='';
         }
        

        //  hw currency converter

function convert(){
    let res = document.querySelector('#result');
    let element1 = document.querySelector('#id')

    let exchangeValue=0.012
    let convert = element1.value*exchangeValue;
    res.textContent=`converted value is ${convert}`

    element1.focus()
    element1.value=''
}


let employees = [{"employee_id":1,"first_name":"Pamela","last_name":"Brussell","age":55,"email":"pbrussell0@comsenz.com","gender":"Female","job_title":"Software Test Engineer IV","salary":32033.13,"hire_date":"1/7/2021","department":"HR"},
{"employee_id":2,"first_name":"Julius","last_name":"Worthy","age":34,"email":"jworthy1@reverbnation.com","gender":"Male","job_title":"Budget/Accounting Analyst I","salary":46792.55,"hire_date":"4/10/2019","department":"IT"},
{"employee_id":3,"first_name":"Florance","last_name":"Calabry","age":21,"email":"fcalabry2@washingtonpost.com","gender":"Female","job_title":"Financial Advisor","salary":65528.56,"hire_date":"6/26/2019","department":"Sales"},
{"employee_id":4,"first_name":"Tandy","last_name":"Yitzovicz","age":47,"email":"tyitzovicz3@illinois.edu","gender":"Female","job_title":"Research Assistant III","salary":64618.91,"hire_date":"4/30/2013","department":"IT"},
{"employee_id":5,"first_name":"Hugo","last_name":"Buzza","age":28,"email":"hbuzza4@tamu.edu","gender":"Male","job_title":"Nuclear Power Engineer","salary":79642.6,"hire_date":"9/20/2011","department":"Sales"},
{"employee_id":6,"first_name":"Tonye","last_name":"O'Hallihane","age":24,"email":"tohallihane5@webnode.com","gender":"Female","job_title":"Chief Design Engineer","salary":85972.24,"hire_date":"11/16/2013","department":"Sales"},
{"employee_id":7,"first_name":"Elwin","last_name":"Bonnin","age":19,"email":"ebonnin6@furl.net","gender":"Male","job_title":"Operator","salary":78917.04,"hire_date":"9/26/2019","department":"Sales"},
{"employee_id":8,"first_name":"Gill","last_name":"Player","age":19,"email":"gplayer7@geocities.jp","gender":"Female","job_title":"Accounting Assistant II","salary":85820.33,"hire_date":"3/15/2020","department":"Sales"},
{"employee_id":9,"first_name":"Lazarus","last_name":"Rennebach","age":38,"email":"lrennebach8@alibaba.com","gender":"Male","job_title":"Sales Associate","salary":23681.08,"hire_date":"10/18/2010","department":"Finance"},
{"employee_id":10,"first_name":"Oran","last_name":"Pursey","age":65,"email":"opursey9@youku.com","gender":"Male","job_title":"Administrative Officer","salary":63252.27,"hire_date":"12/30/2012","department":"Marketing"},
{"employee_id":11,"first_name":"Wolfgang","last_name":"Wilshin","age":31,"email":"wwilshina@webeden.co.uk","gender":"Male","job_title":"Junior Executive","salary":41416.87,"hire_date":"10/18/2015","department":"Sales"},
{"employee_id":12,"first_name":"Cesare","last_name":"Vannar","age":27,"email":"cvannarb@sitemeter.com","gender":"Male","job_title":"Media Manager IV","salary":45939.41,"hire_date":"8/9/2017","department":"Marketing"},
{"employee_id":13,"first_name":"Fabio","last_name":"Weatherall","age":45,"email":"fweatherallc@shareasale.com","gender":"Male","job_title":"Nurse Practicioner","salary":89426.03,"hire_date":"1/31/2015","department":"HR"},
{"employee_id":14,"first_name":"Isabelita","last_name":"Sams","age":34,"email":"isamsd@google.com.hk","gender":"Female","job_title":"VP Marketing","salary":70014.93,"hire_date":"10/24/2016","department":"Sales"},
{"employee_id":15,"first_name":"Francisco","last_name":"Garey","age":18,"email":"fgareye@netscape.com","gender":"Genderqueer","job_title":"Food Chemist","salary":73893.36,"hire_date":"2/3/2011","department":"HR"},
{"employee_id":16,"first_name":"Viola","last_name":"Poag","age":23,"email":"vpoagf@ask.com","gender":"Female","job_title":"Help Desk Operator","salary":52164.52,"hire_date":"4/12/2011","department":"Finance"},
{"employee_id":17,"first_name":"Tobye","last_name":"Darlington","age":33,"email":"tdarlingtong@gmpg.org","gender":"Female","job_title":"Office Assistant II","salary":80927.58,"hire_date":"4/20/2022","department":"HR"},
{"employee_id":18,"first_name":"Gillie","last_name":"Lambart","age":44,"email":"glambarth@webs.com","gender":"Female","job_title":"Financial Analyst","salary":26050.45,"hire_date":"11/26/2014","department":"Finance"},
{"employee_id":19,"first_name":"Fax","last_name":"Kenchington","age":49,"email":"fkenchingtoni@engadget.com","gender":"Male","job_title":"Civil Engineer","salary":34369.76,"hire_date":"4/1/2021","department":"Marketing"},
{"employee_id":20,"first_name":"Raddy","last_name":"Bradborne","age":50,"email":"rbradbornej@wordpress.com","gender":"Male","job_title":"VP Sales","salary":88259.05,"hire_date":"3/13/2015","department":"HR"},
{"employee_id":21,"first_name":"Ben","last_name":"Middleton","age":49,"email":"bmiddletonk@statcounter.com","gender":"Male","job_title":"Engineer IV","salary":30225.76,"hire_date":"2/19/2020","department":"Finance"},
{"employee_id":22,"first_name":"Winston","last_name":"Peirce","age":23,"email":"wpeircel@gizmodo.com","gender":"Male","job_title":"VP Sales","salary":44118.38,"hire_date":"7/18/2015","department":"Marketing"},
{"employee_id":23,"first_name":"Joline","last_name":"Mougel","age":32,"email":"jmougelm@disqus.com","gender":"Female","job_title":"Actuary","salary":76243.2,"hire_date":"7/20/2014","department":"Finance"},
{"employee_id":24,"first_name":"Lambert","last_name":"Fetteplace","age":24,"email":"lfetteplacen@jimdo.com","gender":"Male","job_title":"Account Representative II","salary":63696.02,"hire_date":"4/27/2019","department":"Sales"},
{"employee_id":25,"first_name":"Rebekah","last_name":"Constantine","age":52,"email":"rconstantineo@webnode.com","gender":"Female","job_title":"Budget/Accounting Analyst III","salary":65508.14,"hire_date":"11/3/2019","department":"Finance"},
{"employee_id":26,"first_name":"Moe","last_name":"McElroy","age":53,"email":"mmcelroyp@dmoz.org","gender":"Male","job_title":"Help Desk Operator","salary":66064.32,"hire_date":"11/26/2015","department":"IT"},
{"employee_id":27,"first_name":"Marcelle","last_name":"Hawtry","age":39,"email":"mhawtryq@xinhuanet.com","gender":"Female","job_title":"VP Quality Control","salary":60131.59,"hire_date":"7/30/2022","department":"HR"},
{"employee_id":28,"first_name":"Ashlie","last_name":"Petracchi","age":49,"email":"apetracchir@cornell.edu","gender":"Female","job_title":"Pharmacist","salary":22535.68,"hire_date":"8/18/2022","department":"Finance"},
{"employee_id":29,"first_name":"Sorcha","last_name":"MacDaid","age":29,"email":"smacdaids@imageshack.us","gender":"Female","job_title":"Environmental Tech","salary":94258.21,"hire_date":"11/6/2017","department":"Marketing"},
{"employee_id":30,"first_name":"Dela","last_name":"Brocklebank","age":47,"email":"dbrocklebankt@sakura.ne.jp","gender":"Female","job_title":"Actuary","salary":50279.06,"hire_date":"1/28/2018","department":"HR"},
{"employee_id":31,"first_name":"Giffer","last_name":"Enrigo","age":50,"email":"genrigou@mysql.com","gender":"Male","job_title":"Sales Associate","salary":55073.99,"hire_date":"4/24/2013","department":"HR"},
{"employee_id":32,"first_name":"Witty","last_name":"MacCaughey","age":28,"email":"wmaccaugheyv@businessinsider.com","gender":"Male","job_title":"Staff Accountant III","salary":67988.04,"hire_date":"11/12/2018","department":"IT"},
{"employee_id":33,"first_name":"Jefferey","last_name":"Derr","age":18,"email":"jderrw@wunderground.com","gender":"Male","job_title":"Operator","salary":71747.67,"hire_date":"6/30/2010","department":"HR"},
{"employee_id":34,"first_name":"Kellsie","last_name":"Bonaire","age":30,"email":"kbonairex@so-net.ne.jp","gender":"Female","job_title":"Engineer I","salary":21811.02,"hire_date":"8/17/2013","department":"IT"},
{"employee_id":35,"first_name":"Edward","last_name":"Dugall","age":50,"email":"edugally@wiley.com","gender":"Male","job_title":"Administrative Officer","salary":53161.74,"hire_date":"8/3/2015","department":"Sales"},
{"employee_id":36,"first_name":"Mellisa","last_name":"Bausor","age":63,"email":"mbausorz@chronoengine.com","gender":"Female","job_title":"Software Consultant","salary":21829.55,"hire_date":"3/29/2013","department":"Sales"},
{"employee_id":37,"first_name":"Jessee","last_name":"Tidgewell","age":21,"email":"jtidgewell10@unicef.org","gender":"Male","job_title":"Automation Specialist III","salary":48742.95,"hire_date":"3/23/2012","department":"HR"},
{"employee_id":38,"first_name":"Annamarie","last_name":"Muscroft","age":47,"email":"amuscroft11@google.nl","gender":"Female","job_title":"Human Resources Manager","salary":52214.37,"hire_date":"12/22/2016","department":"Marketing"},
{"employee_id":39,"first_name":"Penrod","last_name":"Parkins","age":39,"email":"pparkins12@deliciousdays.com","gender":"Male","job_title":"Environmental Tech","salary":68776.14,"hire_date":"7/6/2016","department":"IT"},
{"employee_id":40,"first_name":"Dall","last_name":"Dundon","age":25,"email":"ddundon13@biblegateway.com","gender":"Male","job_title":"Senior Financial Analyst","salary":40771.09,"hire_date":"1/25/2022","department":"Finance"},
{"employee_id":41,"first_name":"Adrien","last_name":"Elbourne","age":32,"email":"aelbourne14@shinystat.com","gender":"Male","job_title":"Web Developer II","salary":95279.38,"hire_date":"3/29/2012","department":"Sales"},
{"employee_id":42,"first_name":"Corbet","last_name":"Brightwell","age":40,"email":"cbrightwell15@telegraph.co.uk","gender":"Male","job_title":"Technical Writer","salary":89893.7,"hire_date":"8/21/2010","department":"Marketing"},
{"employee_id":43,"first_name":"Natasha","last_name":"Huxham","age":35,"email":"nhuxham16@reference.com","gender":"Female","job_title":"Marketing Manager","salary":28824.06,"hire_date":"12/19/2015","department":"Sales"},
{"employee_id":44,"first_name":"Ines","last_name":"Crowcroft","age":48,"email":"icrowcroft17@opera.com","gender":"Female","job_title":"Tax Accountant","salary":47961.19,"hire_date":"8/21/2010","department":"Sales"},
{"employee_id":45,"first_name":"Andras","last_name":"Budge","age":57,"email":"abudge18@sourceforge.net","gender":"Male","job_title":"Database Administrator IV","salary":56102.11,"hire_date":"6/5/2016","department":"HR"},
{"employee_id":46,"first_name":"Joete","last_name":"Klugman","age":43,"email":"jklugman19@facebook.com","gender":"Female","job_title":"Automation Specialist IV","salary":30203.58,"hire_date":"6/25/2018","department":"IT"},
{"employee_id":47,"first_name":"Weston","last_name":"Sorrell","age":22,"email":"wsorrell1a@google.com.au","gender":"Male","job_title":"Environmental Tech","salary":22867.85,"hire_date":"6/2/2013","department":"HR"},
{"employee_id":48,"first_name":"Neala","last_name":"Bustin","age":36,"email":"nbustin1b@tamu.edu","gender":"Female","job_title":"Physical Therapy Assistant","salary":84903.2,"hire_date":"3/13/2015","department":"Marketing"},
{"employee_id":49,"first_name":"Annetta","last_name":"Arnason","age":33,"email":"aarnason1c@netvibes.com","gender":"Female","job_title":"Information Systems Manager","salary":28341.27,"hire_date":"11/6/2022","department":"Sales"},
{"employee_id":50,"first_name":"Oralia","last_name":"Coppens","age":49,"email":"ocoppens1d@ask.com","gender":"Female","job_title":"Senior Financial Analyst","salary":93436.85,"hire_date":"4/2/2011","department":"Finance"},
{"employee_id":51,"first_name":"Ambrosius","last_name":"Glyde","age":56,"email":"aglyde1e@ft.com","gender":"Male","job_title":"Occupational Therapist","salary":95149.3,"hire_date":"2/10/2012","department":"Marketing"},
{"employee_id":52,"first_name":"Claudianus","last_name":"D'Andrea","age":42,"email":"cdandrea1f@examiner.com","gender":"Male","job_title":"VP Marketing","salary":26951.06,"hire_date":"4/9/2010","department":"Finance"},
{"employee_id":53,"first_name":"Gawain","last_name":"Wreak","age":23,"email":"gwreak1g@wikipedia.org","gender":"Male","job_title":"Software Engineer I","salary":60673.69,"hire_date":"1/23/2011","department":"Sales"},
{"employee_id":54,"first_name":"Lura","last_name":"MacCostye","age":64,"email":"lmaccostye1h@vk.com","gender":"Female","job_title":"Quality Engineer","salary":61120.68,"hire_date":"6/1/2014","department":"Sales"},
{"employee_id":55,"first_name":"Nickey","last_name":"Rapinett","age":32,"email":"nrapinett1i@icq.com","gender":"Male","job_title":"Dental Hygienist","salary":44572.82,"hire_date":"9/14/2014","department":"Sales"},
{"employee_id":56,"first_name":"Poppy","last_name":"Ord","age":47,"email":"pord1j@latimes.com","gender":"Female","job_title":"Pharmacist","salary":27784.45,"hire_date":"12/18/2014","department":"Marketing"},
{"employee_id":57,"first_name":"Horatio","last_name":"Marre","age":62,"email":"hmarre1k@telegraph.co.uk","gender":"Male","job_title":"Nurse","salary":74939.57,"hire_date":"1/4/2017","department":"IT"},
{"employee_id":58,"first_name":"Mariejeanne","last_name":"Marcombe","age":33,"email":"mmarcombe1l@spotify.com","gender":"Female","job_title":"Staff Accountant III","salary":27395.41,"hire_date":"3/23/2013","department":"Marketing"},
{"employee_id":59,"first_name":"Alexandro","last_name":"Bloomer","age":40,"email":"abloomer1m@army.mil","gender":"Male","job_title":"Chemical Engineer","salary":72603.93,"hire_date":"10/19/2016","department":"Marketing"},
{"employee_id":60,"first_name":"Granthem","last_name":"Edelston","age":21,"email":"gedelston1n@hc360.com","gender":"Male","job_title":"Systems Administrator IV","salary":50052.21,"hire_date":"11/17/2016","department":"Finance"},
{"employee_id":61,"first_name":"Vail","last_name":"Enefer","age":50,"email":"venefer1o@google.de","gender":"Male","job_title":"Geological Engineer","salary":49701.96,"hire_date":"12/2/2010","department":"Finance"},
{"employee_id":62,"first_name":"Ced","last_name":"Aspland","age":33,"email":"caspland1p@uol.com.br","gender":"Male","job_title":"Librarian","salary":97162.72,"hire_date":"9/21/2021","department":"Marketing"},
{"employee_id":63,"first_name":"Gillie","last_name":"Moutray Read","age":25,"email":"gmoutrayread1q@wunderground.com","gender":"Female","job_title":"Product Engineer","salary":26785.81,"hire_date":"6/24/2017","department":"HR"},
{"employee_id":64,"first_name":"Marris","last_name":"Doram","age":55,"email":"mdoram1r@bloomberg.com","gender":"Non-binary","job_title":"Biostatistician I","salary":99775.91,"hire_date":"9/23/2019","department":"IT"},
{"employee_id":65,"first_name":"Dagmar","last_name":"Glasser","age":25,"email":"dglasser1s@trellian.com","gender":"Female","job_title":"Editor","salary":83920.94,"hire_date":"8/19/2016","department":"HR"},
{"employee_id":66,"first_name":"Clementia","last_name":"Werner","age":38,"email":"cwerner1t@mysql.com","gender":"Female","job_title":"Senior Cost Accountant","salary":38066.54,"hire_date":"4/1/2020","department":"IT"},
{"employee_id":67,"first_name":"Ingamar","last_name":"Frissell","age":23,"email":"ifrissell1u@pcworld.com","gender":"Male","job_title":"Junior Executive","salary":62860.06,"hire_date":"8/28/2017","department":"Marketing"},
{"employee_id":68,"first_name":"Wyatt","last_name":"Twinborne","age":64,"email":"wtwinborne1v@ow.ly","gender":"Male","job_title":"GIS Technical Architect","salary":83130.48,"hire_date":"3/7/2015","department":"HR"},
{"employee_id":69,"first_name":"Torey","last_name":"Dollar","age":62,"email":"tdollar1w@mozilla.org","gender":"Agender","job_title":"Senior Editor","salary":34398.56,"hire_date":"1/5/2018","department":"IT"},
{"employee_id":70,"first_name":"Cirilo","last_name":"Madoc-Jones","age":33,"email":"cmadocjones1x@springer.com","gender":"Male","job_title":"Research Nurse","salary":44480.17,"hire_date":"6/8/2022","department":"Marketing"},
{"employee_id":71,"first_name":"Lovell","last_name":"Scarrott","age":62,"email":"lscarrott1y@youku.com","gender":"Male","job_title":"Senior Quality Engineer","salary":58204.73,"hire_date":"4/25/2014","department":"IT"},
{"employee_id":72,"first_name":"Marja","last_name":"Rolin","age":26,"email":"mrolin1z@tripod.com","gender":"Female","job_title":"Executive Secretary","salary":86068.41,"hire_date":"2/12/2021","department":"IT"},
{"employee_id":73,"first_name":"Hart","last_name":"Sowray","age":54,"email":"hsowray20@census.gov","gender":"Male","job_title":"Internal Auditor","salary":55133.12,"hire_date":"6/24/2021","department":"Finance"},
{"employee_id":74,"first_name":"Marje","last_name":"Phizackarley","age":58,"email":"mphizackarley21@reference.com","gender":"Female","job_title":"Compensation Analyst","salary":99977.83,"hire_date":"10/14/2019","department":"Marketing"},
{"employee_id":75,"first_name":"Godfry","last_name":"Garey","age":47,"email":"ggarey22@technorati.com","gender":"Male","job_title":"Community Outreach Specialist","salary":42691.09,"hire_date":"12/2/2021","department":"Sales"},
{"employee_id":76,"first_name":"Jessy","last_name":"Roome","age":28,"email":"jroome23@canalblog.com","gender":"Female","job_title":"Research Associate","salary":32409.21,"hire_date":"2/1/2012","department":"Finance"},
{"employee_id":77,"first_name":"Roslyn","last_name":"Kurt","age":46,"email":"rkurt24@digg.com","gender":"Female","job_title":"Legal Assistant","salary":96261.87,"hire_date":"7/15/2021","department":"Marketing"},
{"employee_id":78,"first_name":"Denis","last_name":"Gabala","age":51,"email":"dgabala25@hc360.com","gender":"Male","job_title":"Software Consultant","salary":58150.37,"hire_date":"10/4/2012","department":"IT"},
{"employee_id":79,"first_name":"Reinold","last_name":"Higbin","age":58,"email":"rhigbin26@free.fr","gender":"Male","job_title":"Systems Administrator II","salary":66371.81,"hire_date":"5/7/2017","department":"HR"},
{"employee_id":80,"first_name":"Adolphus","last_name":"Goby","age":28,"email":"agoby27@merriam-webster.com","gender":"Male","job_title":"Web Designer II","salary":55567.63,"hire_date":"1/9/2015","department":"Marketing"},
{"employee_id":81,"first_name":"Garrott","last_name":"Chaplyn","age":38,"email":"gchaplyn28@shareasale.com","gender":"Male","job_title":"Web Designer III","salary":53036.66,"hire_date":"2/16/2015","department":"HR"},
{"employee_id":82,"first_name":"Abigale","last_name":"Swancott","age":30,"email":"aswancott29@blog.com","gender":"Female","job_title":"Analog Circuit Design manager","salary":50833.63,"hire_date":"9/11/2019","department":"Finance"},
{"employee_id":83,"first_name":"Ozzy","last_name":"Tett","age":44,"email":"otett2a@about.me","gender":"Male","job_title":"Programmer III","salary":75472.71,"hire_date":"11/30/2010","department":"HR"},
{"employee_id":84,"first_name":"Paul","last_name":"Hoogendorp","age":25,"email":"phoogendorp2b@discovery.com","gender":"Male","job_title":"Media Manager IV","salary":75014.89,"hire_date":"1/21/2016","department":"Finance"},
{"employee_id":85,"first_name":"Morgen","last_name":"Treagust","age":47,"email":"mtreagust2c@a8.net","gender":"Female","job_title":"Director of Sales","salary":76979.64,"hire_date":"3/1/2012","department":"HR"},
{"employee_id":86,"first_name":"Craig","last_name":"Marven","age":62,"email":"cmarven2d@cpanel.net","gender":"Male","job_title":"Financial Analyst","salary":74128.67,"hire_date":"7/27/2015","department":"HR"},
{"employee_id":87,"first_name":"Madelina","last_name":"Lincke","age":20,"email":"mlincke2e@jalbum.net","gender":"Female","job_title":"Legal Assistant","salary":85258.98,"hire_date":"12/11/2018","department":"Finance"},
{"employee_id":88,"first_name":"Lorrie","last_name":"Curton","age":58,"email":"lcurton2f@dyndns.org","gender":"Female","job_title":"Payment Adjustment Coordinator","salary":42210.99,"hire_date":"5/22/2013","department":"Sales"},
{"employee_id":89,"first_name":"Sibley","last_name":"Snalum","age":39,"email":"ssnalum2g@soundcloud.com","gender":"Female","job_title":"General Manager","salary":90822.59,"hire_date":"1/8/2012","department":"Marketing"},
{"employee_id":90,"first_name":"Haroun","last_name":"Townsend","age":22,"email":"htownsend2h@icq.com","gender":"Bigender","job_title":"Sales Representative","salary":53474.72,"hire_date":"3/28/2012","department":"HR"},
{"employee_id":91,"first_name":"Allison","last_name":"Curson","age":62,"email":"acurson2i@123-reg.co.uk","gender":"Female","job_title":"Product Engineer","salary":96023.4,"hire_date":"7/31/2022","department":"IT"},
{"employee_id":92,"first_name":"Simon","last_name":"Thireau","age":38,"email":"sthireau2j@timesonline.co.uk","gender":"Male","job_title":"Accountant II","salary":46142.01,"hire_date":"4/23/2020","department":"Sales"},
{"employee_id":93,"first_name":"Reidar","last_name":"Moreinis","age":61,"email":"rmoreinis2k@symantec.com","gender":"Genderqueer","job_title":"Research Assistant IV","salary":48053.24,"hire_date":"9/13/2022","department":"IT"},
{"employee_id":94,"first_name":"Adlai","last_name":"Gonnin","age":62,"email":"agonnin2l@xrea.com","gender":"Male","job_title":"Safety Technician II","salary":64957.55,"hire_date":"9/19/2013","department":"Finance"},
{"employee_id":95,"first_name":"Jeane","last_name":"Villa","age":63,"email":"jvilla2m@ycombinator.com","gender":"Genderqueer","job_title":"Safety Technician II","salary":42125.04,"hire_date":"12/7/2022","department":"IT"},
{"employee_id":96,"first_name":"Linnie","last_name":"Cotterell","age":46,"email":"lcotterell2n@noaa.gov","gender":"Bigender","job_title":"Associate Professor","salary":84942.55,"hire_date":"6/8/2012","department":"Marketing"},
{"employee_id":97,"first_name":"Reece","last_name":"Kulver","age":20,"email":"rkulver2o@elegantthemes.com","gender":"Male","job_title":"Physical Therapy Assistant","salary":64316.13,"hire_date":"12/10/2012","department":"Sales"},
{"employee_id":98,"first_name":"Neville","last_name":"Southerns","age":42,"email":"nsoutherns2p@ifeng.com","gender":"Male","job_title":"Developer I","salary":41366.49,"hire_date":"4/17/2016","department":"Sales"},
{"employee_id":99,"first_name":"Jack","last_name":"Woolham","age":36,"email":"jwoolham2q@wired.com","gender":"Polygender","job_title":"Geologist III","salary":42529.96,"hire_date":"3/4/2010","department":"IT"},
{"employee_id":100,"first_name":"Shanda","last_name":"Russilll","age":62,"email":"srussilll2r@google.ca","gender":"Female","job_title":"Technical Writer","salary":55747.83,"hire_date":"9/4/2020","department":"IT"}
]

//   a. Filter out employees with salary more than 50,000
// b. Find out average salary of all employees

// a
let filteredArray=employees.filter((value)=> (value.salary>50000))
console.log(filteredArray);
// b
// let average=employees.forEach((value)=> value.salary/100)
// console.log(average)

// let average= employees.reduce((acc,curr)=>{
//     return acc+curr.salary
// })

let sum =0;
employees.forEach((value)=>{ 
    sum +=(value.salary)
    // return sum
    // console.log(parseInt(sum))
})
console.log(sum)
console.log(`average salary is ${sum/100}`)
// console.log(parseInt(sum))
// console.log(parseInt(sum/100))

// let arr=[1.2,8,2.2,3,3]
// let res=arr.forEach((value)=>{
//     return sum+=value
// })

let salaryArray = employees.map((value)=>value.salary)
let ans = employees.reduce((acc,curr)=>acc+curr)
console.log(ans/salaryArray.length)

// can write in below way too
// map isliye kiya kyuki acc ko array chahiye tha salaries ka so 
let ans2= employees.map((value)=>value.salary)
        .reduce((acc,curr)=> acc+curr)
console.log(ans2/ans2.length)
