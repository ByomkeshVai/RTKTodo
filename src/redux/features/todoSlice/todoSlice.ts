import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type TTodo = {
  id: string;
  task: string;
  description: string;
  priority: string;
  isCompleted: boolean;
};

export type TInitialState = {
  todo: TTodo[];
};

const initialState: TInitialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});
