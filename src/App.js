import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="font-roboto">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
