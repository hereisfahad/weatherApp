# To run app locally
npm install 
npm start
# I followed these steps to deploy a React App to GitHub Pages

Procedure
# Create an empty repository on GitHub. (2 minutes)

By empty, I mean without a README.md file, a .gitignore file, a LICENSE file, or any other files.
Create a new React app on your computer. (5 minutes)

# create-react-app weatherApp

This is the app you will deploy to GitHub Pages in step 7.
However, you can name them differently from one another.
This will create a new folder named weatherApp (or whatever you named your app) on your computer.
Install the gh-pages package as a "dev-dependency" of the app. (1 minute)

# cd react-gh-pages
# npm install gh-pages --save-dev
The commands shown in the following steps can all be issued from within the app's folder.
Add some properties to the app's package.json file. (3 minutes)

At the top level, add a homepage property. Define its value to be the string http://{username}.github.io/{repo-name}, 
where {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created in step 1.
Since my GitHub username is gitname and the name of my GitHub repository is react-gh-pages, 
I added the following property:

//...
"homepage": "http://hereisfahad.github.io/weatherApp"
In the existing scripts property, add a predeploy property and a deploy property, each having the values shown below:
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# git init
Initialized empty Git repository in C:/path/to/react-gh-pages/.git/
Add the GitHub repository as a "remote" in your local git repository. (1 minute)

# git remote add origin https://github.com/hereisfahad/weatherApp.git
This will make it so the gh-pages package knows where you want it to deploy your app in step 7.
It will also make it so git knows where you want it to push your source code (i.e. the commits on your master branch) in step 8.
Generate a production build of your app, and deploy it to GitHub Pages. (2 minutes)

# npm run deploy
That's it! Your app is now accessible at the URL you specified in step 4.
In my case, my app is now accessible at: https://hereisfahad.github.io/weatherApp/
I recommend exploring the GitHub repository at this point. When I explored it, I noticed that, although a master branch did not exist, a gh-pages branch did exist. I noticed the latter contained the built app code, as opposed to the app's source code.
Optionally, commit your source code to the "master" branch and push your commit to GitHub. (1 minute)

# git add .
# git commit -m "Create a React app and publish it to GitHub Pages"
# git push origin master
I recommend exploring the GitHub repository once again at this point. When I did that, I noticed that a master branch now existed, and it contained the app's source code.
So, the master branch held the source code, and the gh-pages branch held the built app code.
