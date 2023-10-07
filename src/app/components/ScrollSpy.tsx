"use client";
import { useEffect } from "react";
import ServerComp from "./ServerComp";

const ScrollSpy = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            ?.classList.add("underline");
        } else {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            ?.classList.remove("underline");
        }
      });
    });
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
  });
  return (
    <main className="grid grid-cols-[176px_1fr] grid-rows-1 scroll-smooth">
      <ServerComp />
      <nav className="sticky h-screen top-0">
        <ol>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#request-response">Request &amp; Response</a>
          </li>
          <li>
            <a href="#authentication">Authentication</a>
          </li>
          <li>
            <a href="#endpoints">Endpoints</a>
            <ul>
              <li>
                <a href="#endpoints--root">Root</a>
              </li>
              <li>
                <a href="#endpoints--cities-overview">Cities Overview</a>
              </li>
              <li>
                <a href="#endpoints--city-detail">City Detail</a>
              </li>
              <li>
                <a href="#endpoints--city-config">City Config</a>
              </li>
              <li>
                <a href="#endpoints--city-spots-overview">
                  City Spots Overview
                </a>
              </li>
              <li>
                <a href="#endpoints--city-spot-detail">City Spot Detail</a>
              </li>
              <li>
                <a href="#endpoints--city-icons-overview">
                  City Icons Overview
                </a>
              </li>
              <li>
                <a href="#endpoints--city-icon-detail">City Icon Detail</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#links">Links</a>
          </li>
          <li>
            <a href="#expanders">Expanders</a>
          </li>
          <li>
            <a href="#filters">Filters</a>
          </li>
        </ol>
        {children}
      </nav>
      <div>
        <section id="introduction" className="mb-[50rem]">
          <h2>Introduction</h2>
          <p>…</p>
        </section>
        <section id="request-response" className="mb-[50rem]">
          <h2>Request &amp; Response</h2>
          <p>…</p>
        </section>
        <section id="authentication" className="mb-[50rem]">
          <h2>Authentication</h2>
          <p>…</p>
        </section>
        <section id="endpoints">
          <h2>Endpoints</h2>
          <section id="endpoints--root" className="mb-[50rem]">
            <h3>Root</h3>
            <p>…</p>
          </section>
          <section id="endpoints--cities-overview" className="mb-[50rem]">
            <h3>Cities Overview</h3>
            <p>…</p>
          </section>
          <section id="endpoints--city-detail" className="mb-[50rem]">
            <h3>City Detail</h3>
            <p>…</p>
          </section>
          <section id="endpoints--city-config" className="mb-[50rem]">
            <h3>City Config</h3>
            <p>…</p>
          </section>
          <section id="endpoints--city-spots-overview" className="mb-[50rem]">
            <h3>City Spots Overview</h3>
            <p>…</p>
          </section>
          <section id="endpoints--city-spot-detail" className="mb-[50rem]">
            <h3>City Spot Detail</h3>
            <p>…</p>
          </section>
          <section id="endpoints--city-icons-overview" className="mb-[50rem]">
            <h3>City Icons Overview</h3>
            <p>…</p>
          </section>
          <section id="endpoints--city-icon-detail" className="mb-[50rem]">
            <h3>City Icon Detail</h3>
            <p>…</p>
          </section>
        </section>
        <section id="links" className="mb-[50rem]">
          <h2>Links</h2>
          <p>…</p>
        </section>
        <section id="expanders" className="mb-[50rem]">
          <h2>Expanders</h2>
          <p>…</p>
        </section>
        <section id="filters" className="mb-[50rem]">
          <h2>Filters</h2>
          <p>…</p>
        </section>
      </div>
    </main>
  );
};

export default ScrollSpy;
