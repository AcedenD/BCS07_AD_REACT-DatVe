import { configureStore } from "@reduxjs/toolkit";
import { BaiTapDatVeReducer } from "./BaiTapDatVeReducer";

export const store = configureStore({
  // reducer
  reducer: {
    hoTen: "Aden",

    danhSachGhe: BaiTapDatVeReducer,
  },
});
