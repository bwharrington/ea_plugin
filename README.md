# ea_plugin

To get up and running, pull the code into a directory.

1 - Change Directory to
    C:\{project directory}\ea_plugin

2 - Run 
    npm install lucid-package

3 - Change Directory to
    C:\{project directory}\ea_plugin\ea_lucid_plugin

4 - Run
    npx lucid-package build-editor-extension ea_lucid_extension
    
5 - Navigate to the following link logged into your Lucid account. This will enable developer mode for you.
    https://lucid.app/abTest/forceTests?DeveloperDashboard=T-B&redirect=https://lucid.app/developer
    
6 - Create a new Blank document. You should see the Developer tab in the document. Click the developer tab and click "Load local extension"
    The page should refresh itself and you should see an extension tab next to the developer tab. 
    Click the Extensions tab and you should see your extension "EA_Lucid_Extension" name "Test Thing" as of 8/3/22.
    
Running the Right Pannel

In a seperate terminal

1 - Change Directory to
    cd C:\{project directory}\lucid-plugin\ea_plugin\ea_lucid_plugin\editorextensions\angular_panel

2 - Run
    npm install @angular/cli webpack-shell-plugin-next inliner

3 - cd C:\{project directory}\lucid-plugin\ea_plugin\ea_lucid_plugin\editorextensions\angular_panel\rightpanel

4 - run npx ng serve
