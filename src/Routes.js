import React from "react";
import Businesscapital from "pages/Businesscapital";
import ReportsDB from "pages/ReportsDB";
import Ccmarketplace from "pages/Ccmarketplace";
import Creditcards from "pages/Creditcards";
import ReportsEquifax from "pages/ReportsEquifax";
import ScoresEquifax from "pages/ScoresEquifax";
import ExperianScoresOne from "pages/ExperianScoresOne";
import ReportsExperian from "pages/ReportsExperian";
import Capital from "pages/Capital";
import Identity from "pages/Identity";
import ExperianScores from "pages/ExperianScores";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/experianscores" element={<ExperianScores />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/capital" element={<Capital />} />
        <Route path="/reportsexperian" element={<ReportsExperian />} />
        <Route path="/experianscoresone" element={<ExperianScoresOne />} />
        <Route path="/scoresequifax" element={<ScoresEquifax />} />
        <Route path="/reportsequifax" element={<ReportsEquifax />} />
        <Route path="/creditcards" element={<Creditcards />} />
        <Route path="/ccmarketplace" element={<Ccmarketplace />} />
        <Route path="/reportsdb" element={<ReportsDB />} />
        <Route path="/businesscapital" element={<Businesscapital />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
