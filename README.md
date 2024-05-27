# rn-assignment2-11013649


11013649

Objective

Develop a simple React Native application that displays a styled text message on the screen, including a name styled differently from the rest of the text. The application will also include a status bar with default styling.

Steps and Components

Import Dependencies

Import StatusBar from expo-status-bar.
Import React from react.
Import necessary components (StyleSheet, Text, View) from react-native.

Main Application Component

Create a default functional component named App.
Inside the App component, return a View component styled using a predefined style container.
Inside the View, add a Text component that displays the message "My name is" followed by another Text component displaying "Lawrence Adjei" with different styling.
Include the StatusBar component with its style set to "auto".

Styling

Define a StyleSheet to style the components:
container: This style should make the View take up the full screen, center its children both vertically and horizontally, and set the background color to a specific green shade (#317d45).
nameText: This style should set the font size of the text to 24.
myName: This style should set the font weight to bold to differentiate it from the surrounding text.

Expected Outcome

When the application is run, it should display a centered message on a green background, saying "My name is Lawrence Adjei" with "Lawrence Adjei" in bold. The status bar should also be visible with default styling.
![my app](https://github.com/lawrence-adjei68/rn-assignment2-11013649/assets/151617926/8af511ee-0627-48e8-8d80-34804d3aa8e9)
