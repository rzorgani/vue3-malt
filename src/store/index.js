import { createStore } from "vuex";
import { modulePost } from "./modules/ModulePost";

export default createStore({
  modules: { modulePost },
});
