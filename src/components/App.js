import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { QuestionProvider } from "./QuestionContext";

function App() {
  const [page, setPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      <QuestionProvider>
        {page === "Form" ? <QuestionForm /> : <QuestionList />}
      </QuestionProvider>
    </main>
  );
}

export default App;
