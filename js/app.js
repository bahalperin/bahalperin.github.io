function appViewModel() {
    function wrapInRows() {
        var allRows = [];
        var row;
        self.projects.forEach(function(project, i) {
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
    
    self.colName = (function() {
        return 'col-md-' + 12/self.cols;
    })();
    
    self.projects = [
        {
            name: 'Duct Sizer',
            url: '//duct-sizer.appspot.com', 
            github: '//github.com/bahalps/duct-sizer',
            image: 'images/duct-sizer.png',
            description: 'Eram ad ea lorem expetendis, incididunt culpa cillum de eram.  Quo eram proident litteris, nam ingeniis comprehenderit.  Senserit quo incididunt, in ut cillum irure sint.',
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'September 2014'
        },
        {
            name: 'Resume',
            url: '//bahalps.github.io/frontend-nanodegree-resume', 
            github: '//github.com/bahalps/frontend-nanodegree-resume',
            image: 'images/resume.png',
            description: 'Eram ad ea lorem expetendis, incididunt culpa cillum de eram.  Quo eram proident litteris, nam ingeniis comprehenderit.  Senserit quo incididunt, in ut cillum irure sint.',
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'October 2014'
        },
        {
            name: 'Arcade Game',
            url: '//bahalps.github.io/frontend-nanodegree-arcade-game', 
            github: '//github.com/bahalps/frontend-nanodegree-arcade-game',
            image: 'images/arcade_game.png',
            description: 'Eram ad ea lorem expetendis, incididunt culpa cillum de eram.  Quo eram proident litteris, nam ingeniis comprehenderit.  Senserit quo incididunt, in ut cillum irure sint.',
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'November 2014'
        },
        {
            name: 'Neighborhood Map',
            url: '//bahalps.github.io/frontend-nanodegree-neighborhood-map', 
            github: '//github.com/bahalps/frontend-nanodegree-neighborhood-map',
            image: 'images/neighborhood.png',
            description: 'Eram ad ea lorem expetendis, incididunt culpa cillum de eram.  Quo eram proident litteris, nam ingeniis comprehenderit.  Senserit quo incididunt, in ut cillum irure sint.',
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'December 2014'
        },
        {
            name: 'Website Optimization',
            url: '//bahalps.github.io/frontend-nanodegree-mobile-portfolio', 
            github: '//github.com/bahalps/frontend-nanodegree-mobile-portfolio',
            image: 'images/website_optimization.png',
            description: 'Eram ad ea lorem expetendis, incididunt culpa cillum de eram.  Quo eram proident litteris, nam ingeniis comprehenderit.  Senserit quo incididunt, in ut cillum irure sint.',
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'November 2014'
        },
        {
            name: 'Neighborhood Map',
            url: '//bahalps.github.io/frontend-nanodegree-neighborhood-map', 
            github: '//github.com/bahalps/frontend-nanodegree-neighborhood-map',
            image: 'images/neighborhood.png',
            description: 'Eram ad ea lorem expetendis, incididunt culpa cillum de eram.  Quo eram proident litteris, nam ingeniis comprehenderit.  Senserit quo incididunt, in ut cillum irure sint.',
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'November 2014'
        }
    ];
    
    self.projects.forEach(function(project, i) {
        project.id = 'project' + i;
        project.idWithHash = '#' + project.id;    
    });
    
    self.projectsInRows = wrapInRows();
    
    self.chosenProject = ko.observable();
    
    self.goToProject = function(project) {
        console.log(project);
        self.chosenProject(project);
    };
    
    self.scrollToProjects = function() {
        document.getElementById('projects').scrollIntoView();
    }
    
    console.log(self.chosenProject());
}

ko.applyBindings(new appViewModel());