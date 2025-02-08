import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


type ServicesCards = {
    id: number;
    title: string;
    description: string;
    image: string;
}

// Define the state type
type ServicesState = {
   services: ServicesCards[];
  loading: boolean;
  error: string | null;
};

// Initial state
const initialState: ServicesState = {
  services: [], // This will be hydrated by Redux Persist
  loading: false,
  error: null,
};

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (_, { rejectWithValue }) => {
   
    try {
      const response = await fetch(
        // "https://faux-api.com/api/v1/blogupdates_8415773995269211"
        "https://faux-api.com/api/v1/services_28785026016346116"
      );

      const data = await response.json();
      return data.result;

    } catch (error) {
      return rejectWithValue("Failed to fetch posts, using cached data.");
    }


  }
);




const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload; // Save fetched data
        state.error = null;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        if (state.services.length === 0) {
          state.error = action.payload as string; // Only store error if no cached data
        }
      });
      
  },
});

export default servicesSlice.reducer;