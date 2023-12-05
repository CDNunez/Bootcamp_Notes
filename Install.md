# MongoDB
## Windows
**Services**

1. Download the MongoDB Community Server at: https://www.mongodb.com/try/download/community
2. Run the installer from your Downloads folder.
3. Choose the "Complete" setup type from the installation wizard.
4. On the "Service Configuration" pane, select "Run Service as Network Service User".

[Video Installation Guide for MongoDB on Windows](https://www.loom.com/share/23f358e7221048748b433e4f5fd8c83a)

**Compass**

**NOTE**: MongoDB Compass is usually installed automatically when MongoDB Community Edition is installed via the official installer. only follow the instructions below if something goes wrong during the Community Edition installer and Compass failed to install.

1. Download MongoDB Compass from https://www.mongodb.com/try/download/compass
2. Run the installer from your Downloads folder.
3. Accept the default values for installation location and options.

## Mac
Check the documentation on [this page](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) for Mac install instructions.

**Services**
1. Run the following commands one after the other in your terminal to install mongoDB
```
brew tap mongodb/brew
brew install mongodb-community
```
2. Then run the following command to test it:

```
brew services start mongodb/brew/mongodb-community
```
3. If you run into any issues please let one of our instructors know.

**Compass**
**NOTE**: Only do this if it was not installed along with MongoDB in the previous step.

1. Visit the MongoDB Compass installation instructions https://docs.mongodb.com/compass/master/install/
2. Download MongoDB Compass from https://www.mongodb.com/try/download/compass
3. Run the installer from your Downloads folder.
4. Accept the default values for installation location and options.