import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// Define the Post type
// export type Post = {
//   id: number;
//   date: string;
//   title: string;
//   description: string;
//   image: string;
// };

type Cards = {
    id: number;
    title: string;
    date: string;
    image: string;
  }


// Define the state type
type PostsState = {
  posts: Cards[];
  loading: boolean;
  error: string | null;
};

// Initial state
const initialState: PostsState = {
  posts: [], // This will be hydrated by Redux Persist
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
   
    try {
      const response = await fetch(
        // "https://faux-api.com/api/v1/blogupdates_8415773995269211"
        "https://faux-api.com/api/v1/blog_28785026016346116"
      );

      const data = await response.json();
      return data.result;

    } catch (error) {
      return rejectWithValue("Failed to fetch posts, using cached data.");
    }


  }
);




const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload; // Save fetched data
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        if (state.posts.length === 0) {
          state.error = action.payload as string; // Only store error if no cached data
        }
      });
      
  },
});

export default postsSlice.reducer;