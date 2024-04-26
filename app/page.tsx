import data from "@/app/data.json";
import { FeedbackSidebar } from "./components/FeedbackSidebar";
import { NoFeedbackPage } from "./components/NoFeedbackPage";
import { ProductRequestList } from "./components/ProductRequestList";
import { SuggestionsTitleBar } from "./components/SuggestionsTitleBar";
import SortOrderProvider from "./contexts/SortProvider";
import CategoriesProvider from "./contexts/categoriesProvider";
import { tw } from "./lib/tailwindest";

const menu = tw.style({
  "@tablet": {
    display: "tablet:flex",
    flexDirection: "tablet:flex-col",
    justifyItems: "tablet:justify-items-center",
  },
  "@desktop": {},
});

const layout = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  marginBottom: "mb-[55px]",
  "@desktop": {
    display: "desktop:grid",
    width: "desktop:w-max",
    marginX: "desktop:mx-auto",
    gridTemplateColumns: "desktop:grid-cols-[auto,1fr]",
    gridTemplateRows: "desktop:grid-rows-[92px,auto]",
    marginTop: "desktop:mt-[94px]",
    marginBottom: "desktop:mb-[129px]",
  },
  "@tablet": {
    marginBottom: "tablet:mb-[113px]",
  },
});

export default function Dashboard() {
  return (
    <main>
      <SortOrderProvider>
        <CategoriesProvider>
          <div className={layout.class}>
            <FeedbackSidebar />
            <SuggestionsTitleBar />
            <div className="mt-[16px] tablet:mt-0">
              {data.productRequests.length > 0 ? (
                <ProductRequestList />
              ) : (
                <NoFeedbackPage />
              )}
            </div>
          </div>
        </CategoriesProvider>
      </SortOrderProvider>
    </main>
  );
}
