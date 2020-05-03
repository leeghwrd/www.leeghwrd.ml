import React from "react";
import { render } from "@testing-library/react";
import Header from "../header";

describe(`Header`, () => {
  it(`renders siteTitle`, () => {
    const siteTitle = `Lee Howard`;
    const { getByText } = render(<Header siteTitle={siteTitle} />);

    const title = getByText(siteTitle);

    expect(title).toBeInTheDocument();
  });

  it(`renders About me link`, () => {
    const aboutMeTxt = `About me`;
    const { getByText } = render(<Header />);

    const aboutMe = getByText(aboutMeTxt);

    expect(aboutMe).toBeInTheDocument();
  });

  it(`renders Articles link`, () => {
    const articlesTxt = `Articles`;
    const { getByText } = render(<Header />);

    const articles = getByText(articlesTxt);

    expect(articles).toBeInTheDocument();
  });

  it(`renders Resources link`, () => {
    const resourcesTxt = `Articles`;
    const { getByText } = render(<Header />);

    const resources = getByText(resourcesTxt);

    expect(resources).toBeInTheDocument();
  });

  it(`renders Github link`, () => {
    const { getByLabelText } = render(<Header />);

    const github = getByLabelText("github");

    expect(github).toBeInTheDocument();
  });

  it(`renders Twitter link`, () => {
    const { getByLabelText } = render(<Header />);

    const twitter = getByLabelText("twitter");

    expect(twitter).toBeInTheDocument();
  });

  it(`renders LinkedIn link`, () => {
    const { getByLabelText } = render(<Header />);

    const linkedIn = getByLabelText("linkedin");

    expect(linkedIn).toBeInTheDocument();
  });
});
