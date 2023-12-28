"use client";

import { Pagination } from "@/components/common/pagination";
import { PageTitle } from "@/components/layout/page-title";
import { useState } from "react";

const DUMMY_TOTAL_PAGE = 58;

export default function CommunityPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="container pb-16">
      <PageTitle title="커뮤니티" />

      {/* <section className="mt-8">
        <CommunityPostList />
      </section> */}
      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPage={DUMMY_TOTAL_PAGE}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </main>
  );
}
