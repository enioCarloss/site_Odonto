import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { ReviewsPage } from "../pages/ReviewsPage"
import { TreatmentsPage } from "../pages/TreatmentsPage"
import { LocationPage } from "../pages/LocationPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/location" element={<LocationPage />} />
        </Routes>
    )
}