import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DemoService {

  private carData = [
    {
      "_id": "6074852449a5690df8b91038",
      "guid": "f8549ed2-6689-47bf-80d0-1299766387d9",
      "price": "$2,909.17",
      "picture": "http://placehold.it/32x32",
      "year": 1979,
      "color": "brown",
      "owner": "Laurel Oneill",
      "gender": "female",
      "company": "DADABASE",
      "email": "laureloneill@dadabase.com",
      "phone": "+1 (982) 588-2195",
      "address": "293 Chapel Street, Fannett, South Dakota, 5666",
      "about": "Tempor duis occaecat tempor adipisicing quis velit anim pariatur. Eu fugiat fugiat deserunt tempor occaecat nulla qui. Dolore sit do fugiat voluptate. Ipsum amet ea cillum fugiat ut occaecat occaecat fugiat aute sint sint excepteur consectetur irure.\r\n",
      "registered": "2020-10-18T06:19:52 -01:00",
      "tags": [
        "esse",
        "deserunt",
        "eiusmod",
        "velit",
        "fugiat",
        "fugiat",
        "sint"
      ],
      "model": "mazda"
    },
    {
      "_id": "60748524b4ce25730e1b73a4",
      "guid": "f855183e-82c2-4c7f-b863-5a8d56870a3a",
      "price": "$3,080.32",
      "picture": "http://placehold.it/32x32",
      "year": 2012,
      "color": "blue",
      "owner": "Mable Estes",
      "gender": "female",
      "company": "TALKALOT",
      "email": "mableestes@talkalot.com",
      "phone": "+1 (830) 402-2407",
      "address": "547 Morton Street, Valmy, North Carolina, 9548",
      "about": "Ea laboris ex aliqua ullamco sint. Voluptate fugiat ex incididunt eiusmod voluptate mollit sunt quis in incididunt eu ipsum reprehenderit. Fugiat deserunt labore do officia. Excepteur occaecat pariatur ad fugiat fugiat veniam deserunt ipsum ipsum culpa. Non eu cillum eiusmod anim aute aliqua exercitation laborum excepteur magna ut exercitation magna. Aute Lorem ullamco incididunt amet ut id officia.\r\n",
      "registered": "2017-07-22T05:15:50 -01:00",
      "tags": [
        "tempor",
        "ullamco",
        "ipsum",
        "ut",
        "ad",
        "cillum",
        "duis"
      ],
      "model": "ford"
    },
    {
      "_id": "607485248d597f6b99d0ffd8",
      "guid": "9146d3d2-6713-4675-9573-226f683ed9b1",
      "price": "$2,341.09",
      "picture": "http://placehold.it/32x32",
      "year": 2008,
      "color": "brown",
      "owner": "Whitehead Lloyd",
      "gender": "male",
      "company": "NEBULEAN",
      "email": "whiteheadlloyd@nebulean.com",
      "phone": "+1 (879) 538-2497",
      "address": "739 Dearborn Court, Deercroft, Illinois, 5794",
      "about": "Et est sint nostrud nisi. Sunt culpa laborum elit est occaecat laboris eu aliqua ea. Incididunt ea nulla eiusmod enim amet eu enim esse enim minim commodo ullamco veniam pariatur.\r\n",
      "registered": "2015-05-10T05:02:21 -01:00",
      "tags": [
        "cupidatat",
        "commodo",
        "deserunt",
        "anim",
        "commodo",
        "laboris",
        "labore"
      ],
      "model": "ford"
    },
    {
      "_id": "607485243353b17f2e58da39",
      "guid": "08ad507b-468e-43c1-9e51-2c427d626e8e",
      "price": "$1,678.80",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "brown",
      "owner": "Selma Bates",
      "gender": "female",
      "company": "VALREDA",
      "email": "selmabates@valreda.com",
      "phone": "+1 (997) 563-2474",
      "address": "986 Matthews Court, Crayne, Iowa, 3211",
      "about": "Sunt dolor consectetur nisi laborum dolor irure officia ut. Sint sunt aute minim nisi laborum aliqua adipisicing cillum veniam voluptate non. Sit do ut dolore eiusmod excepteur aute qui magna minim in cillum fugiat commodo. Elit incididunt amet dolor nisi do labore elit id sit. Aute mollit ex ad occaecat eiusmod cillum duis occaecat aute laborum non. Tempor laboris irure non non et.\r\n",
      "registered": "2021-01-29T08:54:25 -00:00",
      "tags": [
        "magna",
        "ipsum",
        "nulla",
        "culpa",
        "dolor",
        "aliqua",
        "sint"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    },
    {
      "_id": "607485240ed1157b56289552",
      "guid": "21a4a189-d4d8-4ba0-9f10-ad2d5a1b63d5",
      "price": "$2,845.76",
      "picture": "http://placehold.it/32x32",
      "year": 2015,
      "color": "green",
      "owner": "Katy Gonzales",
      "gender": "female",
      "company": "POOCHIES",
      "email": "katygonzales@poochies.com",
      "phone": "+1 (978) 585-3449",
      "address": "686 Herkimer Street, Stagecoach, Maryland, 5828",
      "about": "Consequat consequat commodo eu sunt tempor qui elit elit velit Lorem laboris. Ad nisi occaecat sunt qui labore sint veniam ex irure deserunt magna aute fugiat excepteur. Officia commodo nulla nisi esse nostrud ipsum quis anim anim esse excepteur sunt tempor deserunt. Sint est veniam sint nulla ullamco occaecat ex eiusmod. Culpa quis magna duis do voluptate commodo deserunt ex. Amet veniam consequat voluptate in eiusmod excepteur commodo quis sunt anim. Sunt Lorem et ullamco ut.\r\n",
      "registered": "2018-11-06T10:25:25 -00:00",
      "tags": [
        "pariatur",
        "amet",
        "consectetur",
        "dolor",
        "exercitation",
        "veniam",
        "et"
      ],
      "model": "mazda"
    }
  ]

  private motData = [
    {date: "04/04/2021", outcome: "Pass", location: "Slough Motors"},
    {date: "03/04/2021", outcome: "Failed", location: "Slough Motors"},
    {date: "03/04/2020", outcome: "Pass", location: "Bristol Motors"},
    {date: "29/03/2019", outcome: "Pass", location: "Bristol Motors"},
    {date: "01/04/2018", outcome: "Pass", location: "Bristol Motors"},
  ]

  private testUrl: string = "https://this.does.not.exist";

  constructor(private httpClient: HttpClient) { }

  public getCarData() : Observable<any> {
    return this.httpClient.post(this.testUrl, null).pipe(
      map(res => {
        return "";
      }),
      catchError(error => { 
        return this.carData; 
      })
    )
  }

  public getCarMOTData() : Observable<any> {
    return this.httpClient.post(this.testUrl, null).pipe(
      map(res => {
        return "";
      }),
      catchError(error => {
         return this.motData;
      })
    )
  }
}
