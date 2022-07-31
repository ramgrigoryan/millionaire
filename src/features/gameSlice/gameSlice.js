import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import filterForFiftyFifty from "../../utils/helpers/fiftyFifty";

export const fetchQuestions = createAsyncThunk(
  "questions\fetchQuestions",
  async () => {
    const questionsArray = await (
      await fetch("http://localhost:3000/questions")
    ).json();
    return questionsArray;
  }
);

const gameSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    status: "idle",
    error: null,
    currentQuestion: null,
    helpers: {
      availableFiftyFifty: true,
      availableAudience: true,
      availableCall: true,
    },
  },
  reducers: {
    addCurrentQuestion: (state, action) => {
      state.currentQuestion = state.questions.find((question,index)=>index===action.payload);
    },
    fiftyFifty: (state) => {
      state.currentQuestion.content = filterForFiftyFifty(
        state.currentQuestion.content,
        state.currentQuestion.correct
      );
      state.helpers.availableFiftyFifty = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = state.questions.concat(action.payload);
      state.status = "succeeded";
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});
export const { addCurrentQuestion,fiftyFifty } = gameSlice.actions;
export default gameSlice.reducer;
