import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk(
  "questions\fetchQuestions",
  async () => {
    const questionsArray = await (
      await fetch("http://localhost:3000/questions")
    ).json();
    return questionsArray;
  }
);

function blurFiftyFifty(question) {
  const { content, correct } = question;
  const wrongIndexes = content
    .map((question, index) => {
      if (index === correct) {
        return -1;
      }
      return index;
    })
    .filter((index) => index > -1);
  const rand = Math.floor(3 * Math.random());
  const leftQuestion = wrongIndexes.find((question, index) => {
    return index === rand;
  });
  return [leftQuestion, correct];
}

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
      state.currentQuestion = state.questions.find(
        (question, index) => index === action.payload
      );
      state.currentQuestion.leftIndexes = [0, 1, 2, 3];
    },
    fiftyFifty: (state, action) => {
      state.currentQuestion.leftIndexes = blurFiftyFifty(state.currentQuestion);
      state.helpers.availableFiftyFifty = false;
    },
    audience: (state) => (state.helpers.availableAudience = false),
    callAFriend: (state) => (state.helpers.availableCall = false),
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
export const { addCurrentQuestion, fiftyFifty, audience, callAFriend } =
  gameSlice.actions;
export default gameSlice.reducer;
