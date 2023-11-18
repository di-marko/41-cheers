# Cheers - Drinks App

## Description
Cheers is a modern, responsive web application for exploring various alcoholic drink recipes. The application showcases a list of drinks, detailed recipes, and ingredient lists. Developed with a white-label approach, it allows easy customization through a **config.json** file, making it adaptable for different branding and styling needs.

## Configuration
The **config.json** file is central to the application's flexibility. Users can alter various aspects of the UI, including:

- Branding: Set the app's name, logo, and primary font.
- Styling: Customize primary and secondary text colors, card text color, and card border radius.
- Layout: Define grid columns and grid gap sizes for the drinks list.
- Features: Toggle image visibility and set image sizes.
- API: Specify endpoints for fetching drinks and drink details.

Example:

```
{
  "branding": {
    "appName": "Cheers",
    "logoUrl": "logo_0.5x.png",
    "fontFamily": "Quicksand, sans-serif"
  },
  ...
}
```

## Setup and Running the App

1. Clone the repository.
2. Install dependencies: npm install
3. Run the app: npm start
4. Open http://localhost:3000 in your browser.

## Design and Architecture

The app utilizes React for its UI components, creating a seamless single-page application experience. It employs a mobile-first design, ensuring responsiveness across various devices.
Future Improvements

<br>
<br>


> # Trade-offs and Limitations

Given the scale and timeline for developing the "Cheers" drinks app, several trade-offs were made to balance functionality, design simplicity, and configurability:

- **Configurability Scope:** The __config.json__ file allows for basic customization of branding, styling, and layout. However, due to time constraints, deeper customization options were not implemented. Such options could include:
> 1. Complete theming of the app including primary and secondary colors
> 2. Button styles
> 3. Font sizes
> 4. Enable layout changes such as grid vs list views
> 5. Adjustable item sizes
> 6. The ability to add or remove UI components like search bars or filters

- **Styling and Design:** The app's design is intentionally kept simple and clean to focus on functionality and responsiveness. Advanced design elements and animations were limited to ensure a faster development cycle and maintain focus on the core features.

- **Feature Set:** The primary focus was on listing drinks and displaying detailed recipes. Additional features like user authentication, social sharing, or advanced search filters were considered but not included in this version, as well as not required.

- **Testing and Optimization:** While basic testing has been conducted, extensive cross-browser and cross-device testing, as well as performance optimizations (such as image optimization), were limited by the project timeline.

- **API Utilization:** The project heavily relies on TheCocktailDB API. More complex or custom data handling was not feasible within the project scope, restricting the app to the data and functionality provided by the API.

- **Error Handling and Validation:** Basic error handling is implemented, but more robust handling (e.g., retry mechanisms or detailed user feedback) could be improved in future versions.

> # Future Considerations

Given more time and resources, the following enhancements could be considered:

- **Enhanced Configurability:** Introducing a more complex configuration setup allowing for detailed customization of UI components.
- **Advanced Design Features:** Implementing sophisticated design elements and interactivity for a richer user experience.
- **Expanded Feature Set:** Adding features like user accounts, favoriting drinks, and social interaction.
- **Comprehensive Testing and Optimization:** Conducting thorough testing across various devices and browsers and implementing advanced performance optimization techniques.
- **Custom Backend Integration:** To offer more tailored content and features, integrating with a custom backend service could be explored.