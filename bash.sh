#!/bin/bash

# Set the appropriate file and directory names
app_name="myapp"
jar_file="your_jar_file.jar"

# Create a new directory and give it a suitable name
mkdir "$app_name"

# Copy the JAR file into the newly created directory
cp "$jar_file" "$app_name"

# Create the WEB-INF directory
mkdir "$app_name/WEB-INF"

# Move the JAR file into the WEB-INF/lib directory
mv "$app_name/$jar_file" "$app_name/WEB-INF/lib"

# Create the web.xml file inside the WEB-INF directory
touch "$app_name/WEB-INF/web.xml"

# Compress the directory into a ZIP file
zip -r "$app_name.zip" "$app_name"

# Rename the ZIP file to have a .war extension
mv "$app_name.zip" "$app_name.war"

echo "WAR file created: $app_name.war"