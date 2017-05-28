document.addEventListener("DOMContentLoaded", e => {
    const Handlebars = require("handlebars");
    const source = document.getElementById("BesideThePark-template").innerHTML;
    const template = Handlebars.compile(source);
    const data = {
        header: {
            searchIcon: "./img/search.png",
            menuIcon  : "./img/menu.png",
            logo      : 'Beside the park',
            title     : 'Lorem impsum',
            text      : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor                             incididunt ut labore et dolore magna aliqua.',
            iphoneImg : './img/iphone.png'
        },
        articles: {
            title     : 'Lorem impsum',
            article1  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            article2  : "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu                             fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in                              culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde                             omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem                          aperiam.",
            article3  : 'eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta                          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit                            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
            article4  : 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed                             quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            article5  : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,                               adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore                         magnam aliquam quaerat voluptatem.',
            iphoneImg : './img/iphone.png'
        },
        boxes: {
            box1Large:{
                    title : 'Build to last',
                    text  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
                    link  : 'Find Out more',
                    href  : '#'
            },
            box1Small:{
                    title : 'Our clients',
                    text  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
                    link  : 'Get insights',
                    href  : '#'
            },
            box2Large:{
                    title : 'Sign up & see why',
                    text  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
                    link  : 'Get started',
                    href  : '#'
            },
            box2Small:{
                    title : 'Perfect pictures',
                    text  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
                    link  : 'Find Out more',
                    href  : '#'
            }
        }

    };
    const mobileViewport = window.matchMedia("screen and (min-width: 621px)");

    if(mobileViewport.matches) {
        data.boxes.box1Large.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut adipisicing';
        data.boxes.box1Small.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt';
        data.boxes.box2Large.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut adipisicing';
        data.boxes.box2Small.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut adipisicing';
    }

    document.getElementById("out").innerHTML = template(data);

    const menu = document.getElementById('menu');
    const slideMenu = document.getElementById('slide--menu');
    console.log(slideMenu);
    menu.addEventListener('click', (e) => {
        slideMenu.classList.toggle('hide');
    });
    slideMenu.addEventListener('mouseleave', (e) => {
        slideMenu.classList.add('hide');
    });
});