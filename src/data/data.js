class MovieList{
    constructor(id,movieName,movieDescription,movieRate,movieTrailer,movieStreaming,moviePoster,movieCategories,movieRealeaseDate,movieActors){
        this.id=id;
        this.movieName=movieName;
        this.movieDescription=movieDescription;
        this.movieRate=movieRate;
        this.movieTrailer=movieTrailer;
        this.movieStreaming=movieStreaming;
        this.moviePoster=moviePoster;
        this.movieCategories=movieCategories;
        this.movieRealeaseDate=movieRealeaseDate;
        this.movieActors=movieActors;
        this.statusFavori=false;
    }
}

let movie1=new MovieList(
    1,
    "Palm Springs",
    "When Nils and Sarah get a chance to get away from trouble and stress by attending a wedding in Palm Springs, things get complicated and the duo are unable to escape from the place or themselves or each other.",
    4,
    "https://www.youtube.com/watch?v=CpBLtXduh_k",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y21qbVlFRWNsbW1tVEhjbW1tSWE.jpg",
    ["Comedy","Romantic"],
    2020,
    ["Cristin Milioti","Andy Samberg","JK Simmons"]
);

let movie2=new MovieList(
    2,
    "Useless Humans",
    "A thirtieth birthday - and the survival of mankind - are left hanging in the balance after a mysterious creature crashes the party, forcing four childhood friends to save the night.",
    1,
    "https://youtu.be/JDKlf6dpsvo",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y3ZObW1qRWNsbWptZnd4bUx3YQ.jpg",
    ["Adventure","Comedy","Horror","Science Fiction"],
    2020,
    ["Rushi Kota","Josh Zuckerman","Stephen Ohl"]
);

let movie3=new MovieList(
    3,
    "Coven",
    "A young woman tricks her best friend into coming out into complete her initiation into an exclusive group",
    2,
    "https://youtu.be/ZmCaj8BehF8",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21UcGptWWJtRXZSY3Z3S3htVHZsY05q.jpg",
    ["Horror"],
    2020,
    ["Jocelyn Saenz","Sofya Skya","Terri Ivens"]
);

let movie4=new MovieList(
    4,
    "We Are One",
    "Activists around the world fight injustice and drive social change in this documentary that follows their participation in the music video Solidarity.",
    1,
    "https://youtu.be/kCiMA094Dbg",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y3ZOcGVjbUVtam1JYXhtVEls.jpg",
    ["Documentary"],
    2020,
    ["Ren Cheng Wei","Lian Lian","Kobe Liu"]
);

let movie5=new MovieList(
    5,
    "The Old Guard",
    "a secret team made up of a group of immortal mercenaries, gathers to fight to preserve their anonymity, and matters get complicated when an unexpected new member joins them.",
    3,
    "https://youtu.be/aK-X2d0lJ_s",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVHZtcEVtTFJjbWdhbG1qbWZOYnZj.jpg",
    ["Action","Fantasy"],
    2020,
    ["Chiwetel Ejiofor","Charlize Theron","Marwan Kenzari"]
);

let movie6=new MovieList(
    6,
    "Greyhound",
    "during World War II, Captain Ernst Cross becomes responsible for an American destroyer early in the war, but he faces a difficult test when he is pursued by naval personnel of the Nazi forces across the North Atlantic.",
    4,
    "https://youtu.be/eyzxu26-Wqk",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZcG1tRW12bWp2Y0Vjdk5ibVlvY3h2d0s.jpg",
    ["Action","Drama","History","War"],
    2020,
    ["Tom Hanks","Elisabeth Shue","Stephen Graham"]
);

let movie7=new MovieList(
    7,
    "Archive",
    "2038: George Almore is working on a true human-equivalent AI. His latest prototype is almost ready. This sensitive phase is also the riskiest. Especially as he has a goal that must be hidden at all costs: being reunited with his dead wife.",
    3,
    "https://youtu.be/I8WfXdxQ0Cw",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y21ibW1tdkVjUG1tS2FsbUdObQ.jpg",
    ["Science Fiction"],
    2020,
    ["Toby Jones","Theo James","Gavin Rothery"]
);

let movie8=new MovieList(
    8,
    "Cut Off",
    "Thriller set in the world of Forensic Pathology. Coroner Paul Herzfeld finds a capsule in the head of a heavily mutilated corpse, containing a phone number and single word: the name of his daughter.",
    4,
    "https://youtu.be/tw0padxF1gQ",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y21qbVlhY3h4dmNtSXhQbW1tRQ.jpg",
    ["Action","Crime","Horror","Mystery","Excitement"],
    2020,
    ["Lars Eidinger","Moritz Bleibtreu","Christian Alvart"]
);

let movie9=new MovieList(
    9,
    "Invasion",
    "With the fall of the alien ship Julia's life changed, now three years later mankind is about to experience new encounter.",
    2,
    "https://youtu.be/UPFIY8GO4oE",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MY3ZOdm12bXZ2UmNsdmNtYm1FbXZtam12dmM.jpg",
    ["Action","Science Fiction"],
    2020,
    ["Irina Starshenhenbaum","Alexander Petrov","Fedor Bondarchuk"]
);

let movie10=new MovieList(
    10,
    "Broil",
    "Broil follows a dysfunctional family of demons vying to control the future of their wealth.",
    3,
    "https://youtu.be/XrkdhABO3gU",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y21tbUxjRWN2TkVtbXh4bWJsSw.jpg",
    ["Fantasy","horror","Stir"],
    2020,
    ["Alyson Bath","Timothy V.Murphy","Jonathan Lipnicki"]
);

let movie11=new MovieList(
    11,
    "Possessor",
    "Possessor follows an agent who works for a secretive organization that uses brain-implant technology to inhabit other people bodies - ultimately driving them to commit assassinations for high-paying clients.",
    3,
    "https://youtu.be/OiZAbZeIHLI",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y21tbXZ2UmNtZk5oenhtbW12Y3c.jpg",
    ["Science Fiction","horror","Stir"],
    2020,
    ["Andrea Riseborough","Daniel Park","Brandon Cronenberg"]
);

let movie12=new MovieList(
    12,
    "Relic",
    "Remnants of a grandmother, a mother, and a daughter who are suffering madness and dementia attack at their family home, turning the house into a terrible square.",
    4,
    "https://youtu.be/XWhZDQkq0bw",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y21tbUVtYkVjbWRUSHdQeG12bWo.jpg",
    ["Drama","horror"],
    2020,
    ["Robyn Nevin","Emily Mortimer","Bella Heathcote"]
);

let movie13=new MovieList(
    13,
    "Think Like a Dog",
    "A 12-year-old tech prodigy's science experiment goes awry and he forges a telepathic connection with his best friend, his dog. The duo join forces and use their unique perspectives on life.",
    2,
    "https://youtu.be/V4h7R4GaPbk",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVFlqbW1tTGNFY21md2x4bXpQY05t.jpg",
    ["Comedy","Drama","Family","Science Fiction"],
    2020,
    ["Josh Duhamel","Megan Fox","Gil Junger"]
);

let movie14=new MovieList(
    14,
    "We Bare Bears: The Movie",
    "Grizz, Panda, and Ice Bear embark on an adventure to Canada after an agent from the Department of National Wildlife Control tries to put an end to their hi-jinx.",
    4,
    "https://youtu.be/0ZNsLy2IwcY",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVG1tWW9OakVjd1RiYWxtYmNORWw.jpg",
    ["Comedy","Animation","Family","Adventure"],
    2020,
    ["Demetri Martin","Bobby Moynihan","Eric Edelstein"]
);

let movie15=new MovieList(
    15,
    "Time to Hunt",
    "In the near future, a financial crisis will hit Korea and slums arise. From those areas, a group of young people commit crime to survive.",
    3,
    "https://youtu.be/1qFSdKY2wvk",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZcFlFbUhjbWpFY2x2Y2x2Y21wamFL.jpg",
    ["Action","Crime","Drama","Thriller"],
    2020,
    ["Woo-sik Choi","Jae-hong Ahn","Sung-hyun Yoon"]
);

let movie16=new MovieList(
    16,
    "Money Plane",
    "A professional criminal who has accumulated debts tries to make a final robbery in his career, when he goes to steal a flying casino that holds many important figures.",
    2,
    "https://youtu.be/aETz_dRDEys",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJtWW1tbW12RWNhbXZ4bUVsbXZ3VGI.jpg",
    ["Action"],
    2020,
    ["Thomas Jane","Denise Richards","Andrew Lawrence"]
);

let movie17=new MovieList(
    17,
    "The Black Godfather",
    "Follows the life of Clarence Avant, the ultimate, uncensored mentor and behind-the-scenes rainmaker in music, film, TV and politics.",
    4,
    "https://youtu.be/Gp_MsziYf4s",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MY21qbVlFbW1tdkVjbG1UYm1FbUVtdm12bWc.jpg",
    ["Documentary"],
    2019,
    ["Sean Combs","Snoop Dogg","Reginald Hudlin"]
);

let movie18=new MovieList(
    18,
    "First Cow",
    "A skilled cook has traveled west and joined a group of fur trappers in Oregon, though he only finds true connection with a Chinese immigrant also seeking his fortune. Soon the two collaborate on a successful business.",
    3,
    "https://youtu.be/SRUWVT87mt8",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZcEhjbWJtRW1tRWNtRW1UYm1ZSWF2dHc.jpg",
    ["Drama"],
    2019,
    ["Toby Jones","Alia Shawkat","Kelly Reichardt"]
);

let movie19=new MovieList(
    19,
    "The Beach House",
    "turns into a holiday for two lovers looking to get away from the troubles and pressures of a terrible catastrophe, when their holiday storms strangers visitors, to become the duo in the survival of their lives.",
    2,
    "https://youtu.be/WwAEWM9Jzfs",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y21ibW1tdWNhbUVtRW12bUlhdmNs.jpg",
    ["Drama","Horror","Mystery"],
    2019,
    ["Maryanne Nagel","Jake Weber","Liana Liberato"]
);

let movie20=new MovieList(
    20,
    "Long Shot",
    "When (Fred Flarsky) meets again with the first girl he likes, Charlotte Field, after she becomes one of the most influential women in the world, he bewitches her and captures her admiration, all while she is preparing to enter a presidential race United States of America, where she hired him as a writer for her letters.",
    3,
    "https://youtu.be/S5jiaHvx-kY",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MY212bWptdnZjbXZFY1B2Y21HTkh3YW1q.jpg",
    ["Comedy","Romantic"],
    2019,
    ["Seth Rogen","Charlize Theron","Jonathan Levine"]
);

let movie21=new MovieList(
    21,
    "Fragtime",
    "What would you do if you could stop time? Moritani for one is using her unusual ability to stop time for three minutes a day to observe the people around her. One day, she chooses to.",
    2,
    "https://www.youtube.com/watch?v=v-J9FuoGVr4",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZcGptWWJtVEVFY21MTm90d1BtdlA.jpg",
    ["Drama","Romantic","Animation","Science Fiction"],
    2019,
    ["Yuichiro Umehara","Chika Anzai","Miku Itou"]
);

let movie22=new MovieList(
    22,
    "Man of Men",
    "It's a comical story about a businessman and a street thug. They are on the mission to complete a government infrastructure project within 200 days. They use all the available tactics like.",
    2,
    "https://youtu.be/fYe061sj7L8",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVHZtcHZtRW12RWN3VFRZdm1qbW1tZ2E.jpg",
    ["Drama","Comedy"],
    2019,
    ["Kyung-gu Sol","Jin-woong Jo"]
);

let movie23=new MovieList(
    23,
    "Hello World",
    "A man travels in time from the year 2027 to relive his school years and to correct a bad decision.",
    3,
    "https://youtu.be/PtT9WXxAlBQ",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MTnBwRXZjbWpFY21ZbW12d2RUanhtYg.jpg",
    ["Drama","Comedy","Animation","Family","Romantic","Science Fiction"],
    2019,
    ["Rie Kugimiya","Takehito Koyasu","Minami Hamabe"]
);

let movie24=new MovieList(
    24,
    "Drowning",
    "Drowning is a slow burn psychological thriller where the lead character, Anna, uses wish fulfillment to break free from a cycle of abuse. Anna does not have the self-esteem needed to",
    3,
    "https://www.youtube.com/watch?v=8a0D-AFepPo",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MY212dmNtYnZOYWN2Y3hsbW1tSXh2Tmo.jpg",
    ["Drama"],
    2019,
    ["Laura Tremblay","Alys Crocker","Jessica Allen"]
);

let movie25=new MovieList(
    25,
    "The Bravest",
    "Chinese firefighters struggle to contain a huge fire after an oil pipeline explodes.",
    2,
    "https://youtu.be/g-FiLvc-Xlo",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MY21qbWptWWJtdkVjbG1FUGN3bGN3eG1J.jpg",
    ["Drama","Action","Family"],
    2019,
    ["Zhuo Tan","Zi Yang","Xiaoming Huang"]
);

let movie26=new MovieList(
    26,
    "The Beast",
    "A criminal action movie about two detectives in conflict who solve a murder that shakes up the Korean peninsula.",
    3,
    "https://youtu.be/beiUGVgMIgw",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MTnBURW1vUmNhbUVsbXZjVWR6YQ.jpg",
    ["Crime","Action","Stir"],
    2019,
    ["Daniel Choi","Jae-Myeong Yoo","Sung-min Lee"]
);

let movie27=new MovieList(
    27,
    "The Battle: Roar to Victory",
    "Over a 4 day period, a fierce battle takes place between Korean independence militias and imperialist Japanese forces in Manchuria, China. The militia includes a master swordsman and an expert marksman.",
    3,
    "https://youtu.be/CdpD7HAJVWg",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MTnB2bXZtTGNFY2FjTmp2Tm13VElh.jpg",
    ["Drama","Action","History","War"],
    2019,
    ["Jun-yeol Ryu","Hae-jin Yoo","Shin-yeon Won"]
);

let movie28=new MovieList(
    28,
    "Gundala",
    "Indonesia's preeminent comic book superhero and his alter ego Sancaka enter the cinematic universe to battle the wicked pengkor and his diabolical squad of orphan assassins.",
    4,
    "https://youtu.be/Tp9gidgPxyE",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MY212dmNtRW1tbXZFY21wRW12bWJjTnZjd0s.jpg",
    ["Drama","Action","Adventure","Science Fiction"],
    2019,
    ["Tara Basro","Bront Palarae","Joko Anwar"]
);

let movie29=new MovieList(
    29,
    "I Lost My Body",
    "A story of Naoufel, a young man who is in love with Gabrielle. In another part of town, a severed hand escapes from a dissection lab, determined to find its body again.",
    4,
    "https://youtu.be/_UC6KAo7NU8",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MY212dk5qdmNtbUVjY05MY21FdmN3Q2ptbQ.jpg",
    ["Drama","Animation","Fantasy","Romantic"],
    2019,
    ["Dev Patel","Victoire Du Bois","Patrick d'Assumcao"]
);

let movie30=new MovieList(
    30,
    "Fire in Paradise",
    "On 8th November, 2018, a fire broke out in California near the town of Paradise. Over the course of a few hours, the Camp Fire grew into the country deadliest wildfire in over a century.",
    4,
    "https://youtu.be/5KNAl23NwME",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MTkVtdnZjdmN2UmNtRW1tbWptbklsbW1tSQ.jpg",
    ["Documentary"],
    2019,
    ["Joy Beeson", "Beth Bowersox", "Abbie Davis"]
);

let movie31=new MovieList(
    31,
    "Dads",
    "director and actress Price Dallas Howard meets with her father, in order to explore parenting and wisdom through a group of comedian artists and celebrities such as Will Smith, Jimmy Fallon, Neil Patrick Harris and others.",
    3,
    "https://youtu.be/7clwrlPI64U",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVG12dE5IY0VjeGxtcnRObXdMYw.jpg",
    ["Documentary","Comedy","Family"],
    2019,
    ["Judd Apatow", "Ron Howard", "Bryce Dallas Howard"]
);

let movie32=new MovieList(
    32,
    "The Legend of Zu",
    "After claiming countless lives, the fairies won the great battle with the demons. However, the leader of their Kunlun sect Yu Qingzi died for his young apprentice Xiao He. 500 tranquil",
    1,
    "https://youtu.be/odOElkNzFA0",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21URW12bVRUYnZSY21ibURURW1ZRW1qY3c.jpg",
    ["Action"],
    2018,
    ["Ron Ng"]
);

let movie33=new MovieList(
    33,
    "The Ghost and the Tout",
    "Isila, a young woman from the ghetto, that encounters a ghost called Mike in need of her assistance to communicate with the people he left behind. She becomes tangled and puzzled in solving a murder mystery.",
    1,
    "https://youtu.be/WCvY6vmSLUs",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZcGptVHBFdmNFY1B4bWdhdndQbXZjdw.jpg",
    ["Comedy"],
    2018,
    ["Toyin Abraham", "Chioma Chukwuka Akpotha", "Sambasa Nzeribe"]
);

let movie34=new MovieList(
    34,
    "The 3rd Eye",
    "When her little sister claims she sees the dead, Alia consults a psychic, who opens her own eyes to the vengeful ghosts haunting their childhood home.",
    1,
    "https://youtu.be/y63y5hwXBvo",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJ2Y212bWJtakVjYWFhdnRjdmN2d1A.jpg",
    ["Horror"],
    2018,
    ["Martin Klebba", "Danny Arroyo", "Byron Cherry "]
);

let movie35=new MovieList(
    35,
    "In Search of Greatness",
    "Through the eyes of the greatest athletes of all time, IN SEARCH OF GREATNESS is a cinematic journey into the secrets of genius.",
    3,
    "https://youtu.be/J-B9CVCcLrM",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21UbXZObW1UbXZSY3htcEl4S3htdm1i.jpg",
    ["Documentary"],
    2018,
    ["Pelé", "Jerry Rice", "Wayne Gretzky"]
);

let movie36=new MovieList(
    36,
    "Pinky Memsaab",
    "The lives of a gullible maid; a beautiful socialite; an ambitious investment banker and a happy go lucky chauffeur are entwined together in Dubai, in this bitter-sweet tale of self discovery.",
    3,
    "https://youtu.be/crzPqyo1TVU",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MY21idmNtVHZtYWNtYm1ibVRqbW1tYmN0Yw.jpg",
    ["Drama","Family"],
    2018,
    ["Khalid Ahmed", "Sunny Hinduja", "Adnan Jaffar"]
);

let movie37=new MovieList(
    37,
    "Mobile Suit Gundam Narrative",
    "One year has passed since the events of Mobile Suit Gundam Unicorn and the Laplace's Box was opened. Following the conflict called the Laplace Incident, the Neo Zeon remnant force known",
    3,
    "https://youtu.be/jZYflDyRjzc",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MY21qbVlFbUVtZWNtTHRjbUdOam1iSw.jpg",
    ["Animation","Action"],
    2018,
    ["Brianna Knickerbocker", "Daniel J.Edwards", "J.David Brimmer"]
);

let movie38=new MovieList(
    38,
    "Herstory",
    "10 plaintiffs who suffered as comfort woman during World War II and their 13 lawyers stand in a courtroom in Japan. They have gone through 23 difficult trials from 1992 to 1998.",
    2,
    "https://youtu.be/VJ6J1zPR-FA",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21URW1tbVlwWUVFY212bXZ2dGN2TmJ3THc.jpg",
    ["Drama"],
    2018,
    ["Soo-jung Ye", "Hae-suk Kim", "Kyn-dong Min"]
);

let movie39=new MovieList(
    39,
    "Merry Men: The Real Yoruba Demons",
    "Four rich men (the Merry Men) seduce powerful women, get contracts from the political elite, steal from the rich, give to the poor and have sex with the hottest women in town. They face",
    3,
    "https://youtu.be/HUTJvVBLkLM",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MTkVtbW1FbW1tdWN2Y3hsd1RFY05qbXY.jpg",
    ["Action","Comedy"],
    2018,
    ["Ireti Doyle", "Osas Ighodaro", "Damilola Adegbite"]
);

let movie40=new MovieList(
    40,
    "Vazante",
    "Brazil 1821. A rich cattle herder finds out that his wife dies in labor. Forced to live in the property with numerous African slaves, he marries his wife's niece. But he returns to droving, leaving his wife behind alone with the slaves.",
    3,
    "https://youtu.be/OvoaU5Xcb54",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21UcEVtdnZjbWptYkVjYW1ZcHp4dmNLYQ.jpg",
    ["Drama","Adventure"],
    2017,
    ["Sandra Corveloni", "Luana Tito Nastas", "Adriano Carvalho"]
);

let movie41=new MovieList(
    41,
    "The Broken Key",
    "In a near future, due to the effects of an uncompromising law on the eco-sustainability of supports, paper has become a rare item, a luxury possession, controlled by the Big Z: Zimurgh Corporation.",
    1,
    "https://youtu.be/k7kQ3FOEDD0",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21qbWJtcFlFbW1FY0tQd1RId2xtVGI.jpg",
    ["History","Science Fiction","Stir"],
    2017,
    ["Christopher Lambert", "Michael Madsen", "Rutger Hauer"]
);

let movie42=new MovieList(
    42,
    "Kung Fu Traveler 2",
    "Southern Style Kung Fu was unsuccessful in defeating the invading enemy aliens. General Chen (Tiger Chen) has no choice but to be go back in time again to the late Qing Dynasty to find the master of Northern Style Kung Fu.",
    2,
    "https://youtu.be/BP71K87Hp5Y",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21Udm1MTmptcHZFY21ZcGJ3VHZtYmxtag.jpg",
    ["Action","Science Fiction"],
    2017,
    ["Tiger Hu Chen"]
);

let movie43=new MovieList(
    43,
    "5 Headed Shark Attack",
    "Shaped like a demented starfish, a monster 5-headed shark terrorizes the open ocean before invading the beaches of Puerto Rico, endangering the once peaceful island paradise.",
    1,
    "https://youtu.be/vVNeL13XFM4",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21URW1ibW1tbW1wdkVjbWpjd2F2Y21td1Roeg.jpg",
    ["Action","Science Fiction","Adventure","Comedy","Horror","Thriller"],
    2017,
    ["Chris Costanzo","Lindsay Sawyer","Chris Bruno"]
);

let movie44=new MovieList(
    44,
    "Dead Body",
    "Nine high school students celebrate graduation at a secluded home in the wilderness. Once the party dies down they play a game: Dead Body. But when one of them actually murders someone, it's up to the group to ferret out the real murderer.",
    2,
    "https://youtu.be/lYrN3VE5fb0",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21MTnBUbW1tRWNtbXZOdmxsbVRqbXo.jpg",
    ["Mystery","Horror"],
    2017,
    ["Spencer Hamp","Miho Aizawa","Cooper Hopkins"]
);

let movie45=new MovieList(
    45,
    "Mademoiselle Paradis",
    "A blind pianist living in 18th-century Vienna forms an extraordinary relationship with the physician who is trying to restore her sight.",
    3,
    "https://youtu.be/AYjHk7hcrMA",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21UcEVtVHZtYm1qRWNsbXp4bWJtam12Y05F.jpg",
    ["Drama","History"],
    2017,
    ["Devid Striesow","Maria-Victoria Dragus","Susanne Wuest"]
);

let movie46=new MovieList(
    46,
    "Kung Fu Traveler",
    "Aliens have invaded and overtaken the Earth. Trying to escape defeat, a Chinese General (Tiger Chen) is accidentally sent back in time while trying to devise a way to defeat the alien",
    3,
    "https://youtu.be/gqZcyOrd1Do",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY21ZVGJtVFRibWJFY21ibWJ2VWZ3eGxtZw.jpg",
    ["Action","Science Fiction","Thriller"],
    2017,
    ["Zhi Wang","Darren Grosvenor","Tiger Hu Chen"]
);

let movie47=new MovieList(
    47,
    "Hagazussa",
    "Paranoia & Superstition in 15th Century Europe.",
    3,
    "https://youtu.be/wp2sapNMpx4",
    "",
    "https://pic.egybest.net/i/RHNhSUNlY3Z0TmptbXZOZWNQY3d4bXZtbW12eG1F.jpg",
    ["Drama","Horror"],
    2017,
    ["Tanja Petrovsky","Claudia Martini","Haymon Maria Buttinger"]
);

export const movies=[movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9,movie10,movie11,movie12,movie13,movie14,movie15,movie16,movie17,movie18,movie19,movie20,movie21,movie22,movie23,movie24,movie25,movie26,movie27,movie28,movie29,movie30,movie31,movie32,movie33,movie34,movie35,movie36,movie37,movie38,movie39,movie40,movie41,movie42,movie43,movie44,movie45,movie46,movie47]

export const categoriesMovie=["Adventure","Comedy","Horror","Science Fiction","Romantic","Documentary","Action","Fantasy","Drama","History","War","Crime","Mystery","Excitement","Stir","Family","Animation","Thriller"]