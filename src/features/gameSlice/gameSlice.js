import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk(
  "questions\fetchQuestions",
  async () => {
    const questionsArray = await (
      await fetch("http://localhost:3000/questions")
    ).json();
    const gameCollectionId = Math.floor(5 * Math.random());
    return questionsArray[gameCollectionId];
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
  return [leftQuestion, correct].sort((a, b) => (a > b ? 1 : -1));
}

const initialState = {
  questions: [],
  status: "idle",
  error: null,
  currentQuestion: null,
  helpers: {
    availableFiftyFifty: true,
    availableAudience: { status: true },
    availableCall: { status: true },
  },
  prizeCount: { rightAnswersCount: 0, status: "pending" },
  showStatuses: {
    callStatus: false,
    audienceStatus: false,
  },
};

const gameSlice = createSlice({
  name: "questions",
  initialState,
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
    audience: (state, action) => {
      if (state.helpers.availableAudience.status) {
        state.helpers.availableAudience.status = action.payload.status;
        state.helpers.availableAudience.votes = action.payload.votes;
      }
    },
    callAFriend: (state, action) => {
      if (state.helpers.availableCall.status) {
        state.helpers.availableCall = action.payload;
      }
    },
    refreshQuestions: (state, action) => {
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload
      );
    },
    updateCount: (state, action) => {
      if (action.payload === "withdraw" || action.payload === "lose") {
        state.prizeCount.status = action.payload;
      } else {
        state.prizeCount.rightAnswersCount++;
      }
    },
    resetGame: (state) => (state = initialState),
    changeShowStatuses: (state, action) => {
      state.showStatuses = action.payload;
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
export const {
  addCurrentQuestion,
  fiftyFifty,
  audience,
  callAFriend,
  refreshQuestions,
  updateCount,
  resetGame,
  changeShowStatuses
} = gameSlice.actions;
export default gameSlice.reducer;
