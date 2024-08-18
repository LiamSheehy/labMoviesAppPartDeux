# React App Assignment

###### Full Stack Development 2, HDip in Computer Science

__Name:__ Liam Sheehy

__Video Demo:__ **https://youtu.be/m79_UUJUFno**

This repository contains an implementation of the Movie Fans Web Application using the React library. 

### Features

+ New - Menu options for Tv Series and Tv Favourite
+ New - Toggle button for movies or TV mode (also modifies the Flicker title's home page link). Instant, no page loading
+ New - Attempting filter and sort options unsuccessfully
+ New - Pagination attempted on Movies page (Homepage)
+ New - Tv Series and TV details page added
+ New - TV Favcourite attempted but issues with Movies favourite conflict

### Setup requirements.

As per standard set up, no additional requirements.
Api reqiured required and can be aquired by setting up an account in Signup for an account [Sign up at TMDb](https://www.themoviedb.org/signup)
Log in to your account. To get a key, follow this sequence:
Settings > API > Create > Click on Request an API > Click “Developer” > Fill in form details (use localhost:3000 for the URL and an arbitrary description)
In VS Code, in the project base folder, create a new file called .env with the following content:

VITE_TMDB_KEY=.... your API key value ...

### API endpoints.

+ TV Series:

+ getTVSeries  https://api.themoviedb.org/3/discover/tv
+ getTVSeriesDetails https://api.themoviedb.org/3/tv/{id}
+ getTVGenres  https://api.themoviedb.org/3/genre/tv/list
+ getTVSeriesImages  https://api.themoviedb.org/3/tv/{id}/images
+ getTVSeriesReviews  https://api.themoviedb.org/3/tv/{id}/reviews
+ getUpcomingTVSeries  https://api.themoviedb.org/3/tv/on_the_air

### Routing


+ Route path="/tvseries"  -> Displays Tv Series
+ Route path="/tvseries/favourites" -> Display Favourite tv series page
+ Route path="/tvseriespage/:id"  Dipslay the SeriesDetailsPage
+ Route path="/tvseries/tvreviews/:id" Displays the TVSeriesReviewPage 
+ Route path="/tvseries/reviews/form" -> set to be used for Adding TVSeriesReview

No authenicaiton is use

Multiple reuses of MUI components, hooks and functional component to manage the layout, displays, buttons, formats & navigation

### Independent learning (If relevant)


1. Material UI for components and problem solving  **https://mui.com/material-ui/getting-started/**
2. Vercel deployment: various you tube videos for step by step but also probelm solve for deployment errors but coudlnt resolve hence not deployed
3. TMDB: for TvSeries endpoints **https://developer.themoviedb.org/reference/intro/getting-started**
4. The web for troubleshooting and guidance when errors occurred and there were alot.