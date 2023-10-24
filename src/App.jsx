import "./App.css";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header.jsx";
import Lesson from "./pages/Lesson.jsx";
import React from "react";
function App() {
	return (
		<div style={{ maxWidth: 1440, margin: "0 auto" }}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="*" element={<ErrorPage />} />
				<Route path="lesson" element={<Lesson />} />
			</Routes>
		</div>
	);
}

export default App;
