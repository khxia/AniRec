
// Question.options = Array[n][3] 
// Where Question.options[i] = [string: Question, int: 0=anime/1=question, int: id]
// id = the index to question_list or the anime_list/anime_dict

class Question {
    constructor(question="", options=[], id=0){
        this.question = question;
        this.options = options;
        this.id = id;
    }
    
    get_question() { 
        return this.question;
    }
    get_all_options(index) {
        return this.options;
    }
    get_single_option(index) {
        return this.options[index];
    }
    get_id() {
        return this.id;
    }
}

const questions_list = [
    new Question(
        question="What kind of series are you looking for?",
        options=[
            ["Series? What if I want to watch a movie?", 0, 0],
            ["Action/Adventure", 1, 1],
            ["Comedy", 1, 2],
            ["Slice of Life", 1, 3],
            ["Drama", 1, 4],
            ["Thriller & Horror", 1, 5],
            ["Give me one of your favourite animes", 0, 116]
        ],
        id=0
    ),
    new Question(
        question="What kind of action?",
        options=[
            ["I want a lot of fighting", 1, 6],
            ["I want to watch sports anime", 1, 7],
            ["I just want to watch some pure dumb fun", 1, 8]
        ],
        id=1
    ),
    new Question(
        question="What kind of comedy?",
        options=[
            ["Daily life (slice of life)", 1, 9],
            ["Romance comedy (Romcoms)", 1, 10],
            ["Parody (generally not recommended if you're new to anime)", 1, 11]
        ],
        id=2
    ),
    new Question(
        question="What kind of slice of life?",
        options=[
            ["I want to kick back and relax", 1, 12],
            ["I want something more heavy (the FEELS)", 1, 13],
        ],
        id=3
    ),
    new Question(
        question="What kind of drama?",
        options=[
            ["Romance", 1, 14],
            ["Fantasy", 1, 15],
            ["Science Fiction", 1, 16],
            ["Post-apocalypse", 0, 95],
            ["Time travel", 0, 142],
            ["Psychological", 1, 17]
        ],
        id=4
    ),
    new Question(
        question="You picked thriller and horror, but which?",
        options=[
            ["Thriller", 1, 19],
            ["Horror", 1, 18]
        ],
        id=5
    ),
    new Question(
        question="What if it's good, but will probably never get finished?",
        options=[
            ["Doesn't matter to me", 1, 20],
            ["I'll pass. I want a conclusive ending", 1, 21],
        ],
        id=6
    ),
    new Question(
        question="Oldschool or new stuff?",
        options=[
            ["Fresh classic", 0, 42],
            ["Classics", 1, 22], 
            ["New stuff", 1, 23] 
        ],
        id=7
    ),
    new Question(
        question="Get ready for a joyride. What are you looking for?",
        options=[
            ["I want to do a little deep thinking while watching", 0, 17],
            ["Some nonsensical action", 0, 19],
            ["Eyegasm (I want some cool visuals)", 0, 20],
            ["Foodgasm (literally)", 0, 22],
            ["Cartoon", 0, 23],
            ["Kick-ass", 0, 24],
            ["Zombie Apocalypse", 0, 25],
            ["Old school", 0, 152]
        ],
        id=8
    ),
    new Question(
        question="Setting?",
        options=[
            ["School", 1, 24],
            ["Workplace", 1, 25], 
        ],
        id=9
    ),
    new Question(
        question="Theme?",
        options=[
            ["Shoujo", 1, 47],
            ["Sport", 0, 46],
            ["Give me a good start", 0, 57],
            ["Music", 0, 60],
            ["Harem", 0, 62],
            ["Incest", 0, 155],
            ["Gay couples", 0, 156],
            ["Everybody wins", 0, 157],
            ["Cool, smart, pessimistic protagonist", 63],
            ["Genius ML vs Genius FL", 0, 111],
            ["Workplace Romance", 0, 129],
            ["Chuunibyou", 0, 147],
            ["Manga artist", 0, 64],
            ["Dating-sim game creation", 0, 153],
            ["College in Tokyo", 0, 154],
            ["Body Swapping", 0, 90],
            ["Arcade gamers", 0, 128]
        ],
        id=10
    ),
    new Question(
        question="Making fun of...?",
        options=[
            ["Anime cliches", 0, 66],
            ["Action series", 0, 65], 
            ["Romance comedies", 0, 64],
            ["Society", 0, 161]
        ],
        id=11
    ),
    new Question(
        question="With who?",
        options=[
            ["Random people", 1, 26],
            ["Cute girls doing cute things", 1, 27]
        ],
        id=12
    ),
    new Question(
        question="What sort of heavy?",
        options=[
            ["I've gote tissues", 1, 28],
            ["Heavy cringe", 1, 29],
            ["Warm and bittersweet", 1, 30]
        ],
        id=13
    ),
    new Question(
        question="What kind of theme?", // skipped a lot of themes
        options=[
            ["Mystery (supernatural)", 0, 37],
            ["Fantasy", 0, 162],
            ["1980 classic", 0, 163],
            ["Comedy-drama with musicians", 0, 60],
            ["Ballet Dancing", 0, 165] 
        ],
        id=14
    ),
    new Question(
        question="Action-packed?",
        options=[
            ["Yes", 0, 166],
            ["Fantasy", 0, 167],
        ],
        id=15
    ),
    new Question(
        question="Theme?",
        options=[
            ["Space travel", 0, 101],
            ["Cyberpunk", 0, 16],
            ["Mystery", 0, 98]
        ],
        id=16
    ),
    new Question(
        question="Theme?",
        options=[
            ["Game of souls", 0, 145], //NEEDS ADDING TO
            ["Gambling", 0, 120],
            ["Society for animals", 0, 179]
        ],
        id=17
    ),
    new Question(
        question="What's scary?",
        options=[
            ["Vampires", 0, 168],
            ["Vampires with guns", 0, 11],
            ["Aliens", 0, 54],
            ["Mystery", 0, 169],
            ["Sci-Fi", 0, 170],
            ["Ghosts", 0, 171],
            ["Superpowers", 0, 95],
            ["Ghouls", 0, 104],
            ["People are", 0, 67]
        ],
        id=18
    ),
    new Question(
        question="What kind of thriller?",
        options=[
            ["Give me a good start (a personal recommendation)", 0, 118],
            ["Gambling", 0, 61],
            ["Hunger Games (Battle Royale)", 0, 55],
            ["Science Fiction", 1, 31],
            ["Crime Drama", 1, 32],
            ["Mechas", 0, 79],
            ["Magical Girls", 0, 77]
        ],
        id=19
    ),
    new Question(
        question="How many episodes?",
        options=[
            ["Hundreds", 1, 33],
            ["Just a few (usually 12 or 24)", 1, 34],
        ],
        id=20
    ),
    new Question(
        question="Action or Adventure?",
        options=[
            ["Road trip adventure", 1, 35],
            ["Full-blown action", 1, 36],
        ],
        id=21
    ),
    new Question(
        question="What sport?",
        options=[
            ["Boxing", 0, 43],
            ["Basketball", 0, 44],
            ["Baseball", 0, 45],
            ["Go", 0, 172],
            ["Baseball gambling", 0, 53],
            ["Prince of Tennis", 0, 174]
        ],
        id=22
    ),
    new Question(
        question="What sport?",
        options=[
            ["Cycling", 0, 49],
            ["Basketball", 0, 47],
            ["Baseball", 0, 48],
            ["Tennis", 0, 173],
            ["Volleyball", 0, 51],
            ["Poetry card game", 0, 50],
            ["Swimming", 0, 52],
            ["American Football", 0, 175],
            ["Figure Skating", 0, 136]
        ],
        id=23
    ),
    new Question(
        question="About?",
        options=[
            ["Delinquents", 0, 91],
            ["Nursing a demon baby", 0, 176],
            ["'Ordinary' school life", 0, 83],
            ["Game development?", 0, 177],
            ["When you're the only one with psychic powers", 0, 139],
            ["Boys being boys", 0, 88],
            ["Dirty jokes", 0, 82],
            ["Body Swapping", 0, 89],
            ["Learning to be assassins", 0, 141]
        ],
        id=24
    ),
    new Question(
        question="at...?",
        options=[
            ["Animation studio", 0, 74],
            ["Restaurant", 0, 73],
            ["Disneyland", 0, 83],
            ["McDonald's", 0, 75],
            ["Teaching", 0, 91],
            ["The human body...?", 0, 107]
        ],
        id=25
    ),
    new Question(
        question="Setting?",
        options=[
            ["At work", 1, 37],
            ["School friends drawing manga", 0, 178],
            ["Road trip adventure", 1, 38],
            ["School mystery club", 0, 124],
            ["Rehabilitating NEETs", 0, 138]
        ],
        id=26
    ),
    new Question(
        question="What's cute?",
        options=[
            ["Wannabe Popstars", 1, 39], 
            ["Working in a game company", 0, 108],
            ["Tank driving", 0, 180],
            ["Cute PTSD (...what?)", 1, 40]
        ],
        id=27
    ),
    new Question(
        question="What kind of feels?",
        options=[
            ["Hardships of life and death", 1, 41], 
            ["Overcoming grief", 1, 42],
            ["Feels but with some laughs", 0, 84],
            ["A journey of self-discovery", 0, 102]
        ],
        id=28
    ),
    new Question(
        question="The MC?",
        options=[
            ["Shut-in loser", 0, 182], 
            ["Overcoming grief", 0, 183],
        ],
        id=29
    ),
    new Question(
        question="Premise?",
        options=[
            ["Unexpected child", 0, 184], 
            ["Unexpected relocation", 0, 81],
            ["Talent vs hard work", 0, 80]
        ],
        id=30
    ),
    new Question(
        question="What kind of sci-fi? (both of these are personal recommendations)",
        options=[
            ["Time travel experiment", 0, 58], 
            ["Cyberpunk police in a dystopia", 0, 59]
        ],
        id=31
    ),
    new Question(
        question="What kind of crime drama?",
        options=[
            ["Psychology of a sociopath", 0, 67], 
            ["Grim reapers", 0, 41],
            ["Terrorists", 0, 56],
            ["Dissociative Identity", 0, 186]
        ],
        id=32
    ),
    new Question(
        question="Pick your poison:",
        options=[
            ["Pirates", 0, 27], 
            ["Ninjas", 0, 28],
            ["Spirit samurai", 0, 187],
            ["Mages", 0, 29],
            ["Mechas", 0, 31],
            ["Magical Girls", 0, 30],
            ["Unfinished Greatness", 0, 18],
            ["The classic, the og, the original.", 0, 188]
        ],
        id=33
    ),
    new Question(
        question="Setting?",
        options=[
            ["Trapped in a video game", 1, 43], 
            ["Fantasy", 1, 44],
            ["Big city life", 1, 45],
            ["Historical", 1, 48],
            ["Space", 0, 8]
        ],
        id=34
    ),
    new Question(
        question="Theme?",
        options=[
            ["Space opera jazz", 0, 1], 
            ["30's in Chicago", 0, 6],
            ["Hip-hop samurai", 0, 5],
            ["Talking swords", 0, 189],
            ["Steampunk world with Scientific magic", 0, 2],
            ["Mecha", 0, 15]
        ],
        id=35
    ),
    new Question(
        question="What sort of action?",
        options=[
            ["Crime syndicates", 0, 1],
            ["Superpowers", 0, 12],
            ["Medieval Fantasy", 0, 4],
            ["Urban Fantasy", 0, 3],
            ["Magical Girls", 0, 193],
            ["Mecha", 0, 9],
            ["Steampunk world with Scientific magic", 0, 2],
            ["Martial Arts", 0, 194],
            ["Samurai", 0, 5]
        ],
        id=36
    ),
    new Question(
        question="Where?",
        options=[
            ["Futuristic Venice", 0, 71],
            ["Concert Band", 0, 195],
            ["Rural Japan", 0, 69],
            ["Shopping district", 0, 148],
            ["Spirit hunting", 0, 196]
        ],
        id=37
    ),
    new Question(
        question="Through?",
        options=[
            ["Medieval Europe and its economy", 0, 94],
            ["Rural Japan and spirits", 0, 96],
            ["Different countries with a talking motorcycle", 0, 197],
        ],
        id=38
    ),
    new Question(
        question="Pro or amateur?",
        options=[
            ["Big stage", 0, 198],
            ["School club", 0, 199],
            ["Zombies?", 0, 126],
        ],
        id=39
    ),
    new Question(
        question="Serving as...",
        options=[
            ["Magical Girls", 0, 77],
            ["Soldiers", 0, 76],
        ],
        id=40
    ),
    new Question(
        question="Are you patient?",
        options=[
            ["Bring it on", 0, 86],
            ["Just make it short", 0, 85],
            ["Nope", 0, 200]
        ],
        id=41
    ),
    new Question(
        question="What kind of grief?",
        options=[
            ["A group of friends reuniting after a dark history", 0, 92],
            ["A young pianist struggling to overcome his trauma", 0, 93],
        ],
        id=42
    ),
    new Question(
        question="Choose your MMO:",
        options=[
            ["The dumb, popular MC", 0, 32],
            ["The boring, smart MC", 0, 33],
            ["The godlike MC", 0, 127]
        ],
        id=43
    ),
    new Question(
        question="Theme?",
        options=[
            ["Mankind's last stand", 1, 46],
            ["Supernatural schools", 1, 49],
            ["Take me to isekai", 1, 50],
            ["Arabian Nights (djinns)", 0, 35],
            ["Fantasy hunger games", 0, 13],
            ["Dragons, adventure, and romance", 0, 36],
            ["Medieval knights", 0, 114],
            ["Spirit weapons", 0, 202],
            ["Gods, adventurers, and labyrinths", 0, 105],
            ["Back to the stone age", 0, 115],
            ["Demon hunting", 0, 116],
            ["Adventure into the abyss", 0, 133],
        ],
        id=44
    ),
    new Question(
        question="What drives your plot?",
        options=[
            ["Gang wars", 0, 39],
            ["Psychic powers in a futuristic city", 0, 38],
            ["Spirit hunting", 0, 143],
            ["Life in a spirit town", 0, 203],
            ["A hero that can end things with one punch (you know what I'm talking about", 0, 151],
            ["Kick-ass firefighters", 0, 103],
            ["Solving supernatural mysteries", 0, 117],
            ["Comedic action involving espers", 0, 140]
        ],
        id=45
    ),
    new Question(
        question="Against?",
        options=[
            ["Man-eating Giants", 0, 40],
            ["Alien-like lifeforms", 0, 110],
        ],
        id=46
    ),
    new Question(
        question="Theme, again?",
        options=[
            ["Playful Love", 0, 204],
            ["Reverse Harem", 0, 205],
            ["Breaking the loner", 0, 206],
            ["Tall girl, short boy", 0, 207],
            ["Weirdo girl, cool boy", 0, 208],
            ["Idols and revenge", 0, 209],
            ["Gentle giant", 0, 210],
            ["'Too busy for romance'", 0, 211],
            ["Fine arts college student", 0, 212],
        ],
        id=47
    ),
    new Question(
        question="Setting?",
        options=[
            ["1900s Hokkaido", 0, 125],
            ["Vikings", 0, 150],
            ["China's Warring States period", 0, 190],
        ],
        id=48
    ),
    new Question(
        question="What kind of school?",
        options=[
            ["Anime hogwarts", 0, 26],
            ["Futuristic magic academy", 0, 201],
            ["Hero academy", 0, 113],
            ["Assasins"]
        ],
        id=49
    ),
    new Question(
        question="What kind of isekai?",
        options=[
            ["A shield hero", 0, 119],
            ["Death to all goblins", 0, 121],
            ["Reincarnated as a slime", 0, 122],
            ["Reincarnation gone wrong", 0, 135],
            ["Legendary heroes", 0, 134],
            ["Repeating history", 0, 109],
            ["Magic in World War II", 0, 149],
            ["Gate opens to an unknown world", 0, 144]
        ],
        id=50
    )
]