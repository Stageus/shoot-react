import React from "react";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import GlobalStyles from "./globalStyles";
import theme from "./theme";
import HomePage from "./pages/post/HomePage";
import PostDetailPage from "./pages/post/PostDetailPage";
import CategoryPage from "./pages/post/CategoryPage";
import HasgTagPage from "./pages/post/HashtagPage";
import HotPage from "./pages/post/HotPage";
import BookmarkPage from "./pages/post/BookmarkPage";
import SubscribePage from "./pages/post/SubscribePage";
import HistoryPage from "./pages/post/HistoryPage";
import SearchPage from "./pages/post/SearchPage";
import { ChannelPage } from "./pages/channel/ChannelPage";
import ChannelInfoContainer from "./components/channel/ChannelInfoComponent";
import UploadComponent from "./components/upload/UploadComponent";
import NavComponent from "./components/nav/NavComponent";
import LoginPage from "./pages/account/LoginPage";
import SignupPage from "./pages/account/SignupPage";
import FindPasswordPage from "./pages/account/FindPasswordPage";
import ResetPasswordPage from "./pages/account/ResetPasswordPage";
import AdminPage from "./pages/admin/AdminPage";
import AdminCategoryRequestComponent from "./components/admin/AdminCategoryRequestComponent";
import AdminCategoryUpdateComponent from "./components/admin/AdminCategoryUpdateComponent";
import AdminReportComponent from "./components/admin/AdminReportComponent";
import AdminReportPost from "./components/admin/AdminReportPost";
import AdminReportChannel from "./components/admin/AdminReportChannel";
import AdminReportComment from "./components/admin/AdminReportComment";
import AdminReportReplyComment from "./components/admin/AdminReportReplyComment";
import AdminLogComponent from "./components/admin/AdminLogComponent";
import AdminStatisticsComponent from "./components/admin/AdminStatisticsComponent";

import ChannelModifyComponent from "./components/channel/ChannelModifyComponent";
import Modal from "./components/modal/Modal";
import { modalOpenState } from "./recoil/modalState";

const App = () => {
  const openModal = useRecoilValue(modalOpenState);

  return (
    // store 사용으로 props도 없어짐
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* 모달 사용 */}
      {openModal && <Modal />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/post-id/:postId" element={<PostDetailPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/hashtag/:hashtagId" element={<HasgTagPage />} />
        <Route path="/hot" element={<HotPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route
          path="/search/:searchType/:searchKeyword"
          element={<SearchPage />}
        />
        <Route path="/channel/:channelEmail" element={<ChannelPage />}>
          <Route path="info" element={<ChannelInfoContainer />} />
        </Route>

        <Route path="/modify" element={<ChannelModifyComponent />} />
        <Route path="/upload" element={<UploadComponent />} />

        <Route path="/" element={<NavComponent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-pw" element={<FindPasswordPage />} />
        <Route path="/reset-pw" element={<ResetPasswordPage />} />
        <Route element={<AdminPage />}>
          <Route
            path="admin/category-request"
            element={<AdminCategoryRequestComponent />}
          />
          <Route
            path="admin/category-update"
            element={<AdminCategoryUpdateComponent />}
          />
          <Route element={<AdminReportComponent />}>
            <Route path="admin/report/post" element={<AdminReportPost />} />
            <Route
              path="admin/report/channel"
              element={<AdminReportChannel />}
            />
            <Route
              path="admin/report/comment"
              element={<AdminReportComment />}
            />
            <Route
              path="admin/report/reply-comment"
              element={<AdminReportReplyComment />}
            />
          </Route>

          <Route path="admin/log" element={<AdminLogComponent />} />
          <Route path="admin/stats" element={<AdminStatisticsComponent />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
