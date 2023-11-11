#!/bin/bash

# Read the current version from the version file
VERSION=$(cat version.txt)

# Split the version into major, minor, and patch numbers
IFS='.' read -ra VERSION_PARTS <<< "$VERSION"

# Check the command line argument
case $1 in
  major)
    # Increment the major version and reset minor and patch versions
    MAJOR=$((VERSION_PARTS[0] + 1))
    MINOR=0
    PATCH=0
    ;;
  minor)
    # Increment the minor version and reset the patch version
    MAJOR=${VERSION_PARTS[0]}
    MINOR=$((VERSION_PARTS[1] + 1))
    PATCH=0
    ;;
  patch)
    # Increment the patch version
    MAJOR=${VERSION_PARTS[0]}
    MINOR=${VERSION_PARTS[1]}
    PATCH=$((VERSION_PARTS[2] + 1))
    ;;
  *)
    echo "Invalid argument. Please use 'major', 'minor', or 'patch'."
    exit 1
    ;;
esac

# Ask the user if they've made the required changes to the .env files
read -p "Have you made the required changes to the .env files on the production host? (y/n) " answer

# Check the user's answer
case ${answer:0:1} in
    y|Y )
        echo "Continuing with the script..."
    ;;
    * )
        echo "Please make the required changes and then run the script again."
        exit 1
    ;;
esac

# Construct the new version
NEW_VERSION="$MAJOR.$MINOR.$PATCH"

# Write the new version to the version file
echo "$NEW_VERSION" > version.txt

# Add the version file to the staging area
git add version.txt

# Commit the changes with a message indicating the new version
git commit -m "Bumping version to $NEW_VERSION, triggering build and deploy."

# Push the changes to GitHub
git push origin main
