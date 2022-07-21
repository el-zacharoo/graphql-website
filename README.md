# website

This site is using GraphCMS to store the content, and is programmed with React JS. This is supposed to be a demo of how to create dynamic views and routing with GraphCMS. This app was created using vite, which is much faster than using create react-app. 

## Getting started 

`yarn` to install deps
`yarn vite` or `yarn dev` to start the app up 

## OpenTelemetry 

I have configured OpenTelemetry to a Button component and I am using this to track metrics, logs, and traces via onClick events. This also holds info on which button I used to trigger the event. Open the console logger up in a browser, grab the `TraceID`. Then open the terminal and run `docker run -d -p 9411:9411 openzipkin/zipkin.` Then visit `http://localhost:9411/zipkin/` and place the TraceID in as a query. All the telemetry info should then appear. 
