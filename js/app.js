function appViewModel() {
    function wrapInRows() {
        var allRows = [];
        var row;
        self.projects.forEach(function (project, i) {
            if (i % self.cols === 0) {
                if (row) {
                    allRows.push(row);
                }
                row = {};
                row.content = [];
            }
            row.content.push(project);
        });

        if (row) {
            allRows.push(row);
        }

        return allRows;
    }

    self.cols = 2;

    self.colName = (function () {
        return 'col-md-' + 12 / self.cols;
    })();

    self.projects = [
        {
            name: 'Arcade Game',
            url: '//bahalps.github.io/frontend-nanodegree-arcade-game',
            github: '//github.com/bahalps/frontend-nanodegree-arcade-game',
            image: 'images/arcade_game.png',
            description: "This was the third project in Udacity's Front-End Web Developer Nanodegree.  " +
            "The purpose of this project was to gain experience with object-oriented programming.  " +
            "This was by far my favorite project of the Nanodegree (and it was even featured in " +
            "an email sent out to 15k+ potential Udacity students)!  I hope you have as much fun " +
            "playing it as I had making it! <br><br> (P.S. I recommend going to GitHub and checking " +
            "out the game's app.js file.  There may or may not be an easter egg hiding in there!)",
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'November 2014'
        },
        {
            name: 'Neighborhood Map',
            url: '//bahalps.github.io/frontend-nanodegree-neighborhood-map',
            github: '//github.com/bahalps/frontend-nanodegree-neighborhood-map',
            image: 'images/neighborhood.png',
            description: "This was the fifth project in Udacity's Front-End Web Developer Nanodegree.  " +
            "The purpose of this project was to gain experience using a JavaScript framework (Knockout.js) " +
            "and using third-party API's.  The website is a full-page map that loads with popular bars " +
            "and restaurants in Boston.  By clicking the Instagram button at the bottom of the page " +
            "the user can view recent pictures taken at each location.",
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'November 2014'
        },
        {
            name: 'Duct Sizer',
            url: '//duct-sizer.appspot.com',
            github: '//github.com/bahalps/duct-sizer',
            image: 'images/duct-sizer.png',
            description: "This is a personal project I built to perform a calculation " +
            "I regularly do at my job as an HVAC engineer.  This was my first ever web " +
            "development project and I'm very proud of it!  It's been very rewarding " +
            "to see most of the engineers in my office using it!  The site was built " +
            "on Google App Engine with a Python back end.",
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'September 2014'
        },
        {
            name: 'Website Optimization',
            url: '//bahalps.github.io/frontend-nanodegree-mobile-portfolio',
            github: '//github.com/bahalps/frontend-nanodegree-mobile-portfolio',
            image: 'images/website_optimization.png',
            description: "This was the fourth project in Udacity's Front-End Web Developer Nanodegree.  " +
            "The purpose of this project was to learn about the critical rendering path and " +
            "efficient animations.  I took an existing website and optimized the critical " +
            "rendering path to achieve a PageSpeed Insights score above 90.  One of the pages also had " +
            "a janky background animation that now runs at smooth 60 frames per second!",
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'November 2014'
        },
        {
            name: 'Resume',
            url: '//bahalps.github.io/frontend-nanodegree-resume',
            github: '//github.com/bahalps/frontend-nanodegree-resume',
            image: 'images/resume.png',
            description: "This was the second project in Udacity's Front-End Web Developer Nanodegree.  " +
                "The purpose of this project was to practice basic JavaScript skills such as loops, functions " +
                "and DOM manipulation (and build an awesome resume of course!).  All of the resume's content " +
                "is filled in dynamically with JavaScript!  Isn't JavaScript awesome?",
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'October 2014'
        },
        {
            name: 'Portfolio',
            url: '//bahalps.github.io/',
            github: '//github.com/bahalps/bahalps.github.io/',
            image: 'images/portfolio.png',
            description: "This was the first project in Udacity's Front-End Web Developer Nanodegree " +
                "(it also happens to be the site you're looking at right now!).  The purpose of this " +
                "project was to learn how to create a website from a PDF mockup and it was built " +
                "using Twitter Bootstrap.  After completing the Nanodegree, I restyled and rebuilt the " +
                "portfolio using Knockout.js.",
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'December 2014'
        }
    ];

    self.projects.forEach(function (project, i) {
        project.id = 'project' + i;
        project.idWithHash = '#' + project.id;
    });

    self.projectsInRows = wrapInRows();

    self.chosenProject = ko.observable();

    self.goToProject = function (project) {
        self.chosenProject(project);
    };
}

ko.applyBindings(new appViewModel());
