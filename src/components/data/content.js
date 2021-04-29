// banner image
import banner from "../../static/images/b.jpg"

// social media icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

// contact icons
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// about, programme and registration
import about from "../../static/images/bg3.jpg";
import programme from "../../static/images/image12.jpg";
import register from "../../static/images/image6.jpeg";

// partners images
import partner from "../../static/images/partner.png";
import partner2 from "../../static/images/partner2.png";
import partner3 from "../../static/images/partner5.png";
import testimony from "../../static/images/image13.jpg";

// gallary images
import image1 from "../../static/images/image1.jpeg";
import image2 from "../../static/images/image2.jpeg";
import image3 from "../../static/images/image3.jpeg";
import image4 from "../../static/images/image4.jpeg";
import image5 from "../../static/images/image4.jpg";
import image6 from "../../static/images/image5.jpeg";
import image7 from "../../static/images/image6.jpeg";
import image8 from "../../static/images/image6.jpg";
import image17 from "../../static/images/bg4.jpeg";

// activity icon
import StarIcon from '@material-ui/icons/Star';

export const data = {
    header : [
        {
            text : "Home",
            link : "/home",
        },
        {
            text : "Programme",
            link : "/programme",
        },
        {
            text : "Cohorts",
            link : "/cohorts",
        },
        {
            text : "Gallary",
            link : "/gallary",
        }
    ],

    auth : [
        {
            text: "Sign In",
            link : "/login"
        },
        {
            text : "register",
            link : "/register"
        }
    ],

    banner : {
        image : banner,
        welcome : "WELCOME TO",
        logo : "OPCLUB",
        subImages : [
            {
                text : "ZAZIBAR SPICE TOUR ",
                image : image17
            },
            {
                text: "SLAVE TRADE TOUR",
                image:image3
            },
            {
                text: "MWALIMU NYERER TOUR",
                image: image4
            },
            {
                text : "KIGALI REMEMBERANCE TOUR",
                image: image8
            }
        ]
    },

    about : {
        title : "About",
        image : about,
        readmore : "Read more",
        moreInfo : [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            
        ],
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },

    
    programme : {
        
        subInfo : {
            image: programme,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },

        list : {
            title : "Program Lists",
            programs : [
                "Larry the Bird",
                "consectetur adipiscing",
                "Lorem ipsum dolor",
                "Usmod tempor",
                "Tempor incididunt",
                "Exercitation ullamco"
                
            ],

            programList : [
                {
                    title : "Larry the Bird",
                    cardContent : [
                       { 
                            subtitile : "Program title",
                            images :image17,
                            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                        },
                        { 
                            subtitile : "Program title",
                            images :image7,
                            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                        },
                    ],
                    
                },
                {
                    title : "consectetur adipiscing",
                    cardContent : [
                        { 
                             subtitile : "Program title",
                             images :image17,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         },
                         { 
                             subtitile : "Program title",
                             images :image17,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         },
                     ],
                },
                {
                    title : "Lorem ipsum dolor",
                    cardContent : [
                        { 
                             subtitile : "Program title",
                             images :image17,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         },
                         { 
                             subtitile : "Program title",
                             images :image17,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         }
                     ],
                },
                {
                    title : "Exercitation ullamco",
                    cardContent : [
                        { 
                             subtitile : "Program title",
                             images :image17,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         },
                         { 
                             subtitile : "Program title",
                             images :image17,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         },
                     ],
                },
                {
                    title : "Tempor incididunt",
                    cardContent : [
                        { 
                             subtitile : "Program title",
                             images :image1,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         },
                         { 
                             subtitile : "Program title",
                             images :image17,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         }
                     ],
                },
                {
                    title : "Usmod tempor",
                    cardContent : [
                        { 
                             subtitile : "Program title",
                             images :image17,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         },
                         { 
                             subtitile : "Program title",
                             images :image6,
                             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                         }
                     ],
                }
            ]
        },
        join : {
            title : "Why join?",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        categories : [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

        ],

        activities : [
            {
                icon :  <StarIcon/>,
                content: [
                    "Activity here ",
                    "Activity here",
                    "Activity here",
                    "Activity here",
                    "Activity here"
                ]
            },

            {
                icon :  <StarIcon/>,
                content: [
                    "Activity 1",
                    "Activity 1",
                    "Activity 1",
                    "Activity 1",
                    "Activity 1"
                ]
            },
            {
                icon :  <StarIcon/>,
                content: [
                    "Activity 1",
                    "Activity 1",
                    "Activity 1",
                    "Activity 1",
                    "Activity 1"
                ]
            },
            
        ],

        title : "Programme",
        image : programme,
        readmore : "Read more",
        moreInfo : [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            
        ],
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },

    gallary : [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8
    ],

    register : {
        title : "Registration",
        image : register,
        readmore : "Read more",
        moreInfo : [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

        ],
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },

    testimonies :  {
        image : testimony,
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    
    partners : {
            title : "Our partners",
            images : [
                partner,
                partner3,
                partner2,
                partner3,
                partner2
            ]
        },

    footer : [
        {
            class : "brandLogo",
            content : [
                {text : "OPCLUB"}
            ]
        },
        {
            title : "QUick Links",
            class : "quick-links",
            content : [
                {
                    text :"Consectetur"
                },
                {
                    text : "Incididunt"
                },
                {
                    text : "Eiusmod"
                },
                {
                    text : "Exercitation"
                },
                {
                    text : "Adipiscing"
                }

            ]
        },
        {
            title : "Contact us",
            class : "contact-info",
            content : [
                {
                    icon :  <LocationOnIcon/>,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    icon :  <PhoneIcon/>,
                    text: "+254717890000"
                },
                {
                    icon : <EmailIcon/>,
                    text: "info@openinstituteclub.com"}
            ]
        },
        {
            title : "Connect",
            class : "social-media",
            content : [
                {
                    icon :<FacebookIcon/>
            
                },
                {
                    icon: <TwitterIcon/>
                },
                {
                    icon : <LinkedInIcon/>
                },
                {
                    icon :<InstagramIcon/>
                }
            ]
        }
    ]

}

