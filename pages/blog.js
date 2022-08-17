import React from "react";
import Layout from "../components/Layouts/Layout";
import Header from "../components/Layouts/Header";
import DashCards from "../components/DashCards";
import BreadCrump from "../components/BreadCrump";
import BlogComponent from "../components/BlogComponent";
import Pagination from "../components/Pagination";
import RelatedContent from "../components/RelatedContent";

export default function blog() {
  return (
    <Layout>
            <Header header="Feeblytech"/>
            <BreadCrump>
                <span>Dashboard</span>
                <span className="mx-2">&gt;</span>
                <span>Category</span>
                <span className="mx-2">&gt;</span>
                <span>DisneyPlus News</span>
            </BreadCrump>
            <DashCards >
                    <BlogComponent title="The Majestic and Wonderful Bahamas" />
                    <BlogComponent title="The Majestic and Wonderful Bahamas" />
                    <BlogComponent title="The Majestic and Wonderful Bahamas" />
                    <BlogComponent title="The Majestic and Wonderful Bahamas" />
                    <BlogComponent title="The Majestic and Wonderful Bahamas" />
                    <BlogComponent title="The Majestic and Wonderful Bahamas" />
                    <BlogComponent title="The Majestic and Wonderful Bahamas" />
                    <BlogComponent title="The Majestic and Wonderful Bahamas" />
                    <BlogComponent title="The Majestic and Wonderful Bahamas" />
                    <Pagination/>
                    <RelatedContent/>



            </DashCards>
                   

      
      </Layout>
  )
}
