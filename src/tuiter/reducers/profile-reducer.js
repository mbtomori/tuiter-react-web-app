import { createSlice } from "@reduxjs/toolkit";

const profile =   {
    "firstName": "Alice",
    "lastName": "Liddell",
    "handle": "@realaliceinwonderland",
    "profilePicture": "../images/Alice.jpg",
    "bannerPicture": "../images/rose_banner.jpeg",
    "bio": "Adventurer in wonderland. Regularly flummoxed by the white rabbit and cheshire cat. Overly curious - not a fan of mad royalty.",
    "website": "movies.disney.com/alice-in-wonderland-1951",
    "location": "Bletchingdon, UK",
    "dateOfBirth": "7/28/1951",
    "dateJoined": "4/2012",
    "numberOfTweets": "543",
    "followingCount": "312",
    "followersCount": "3.4k"
  }


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state = action.payload;
            console.log("state");
            console.log(state);
       },
    }
});

export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer;