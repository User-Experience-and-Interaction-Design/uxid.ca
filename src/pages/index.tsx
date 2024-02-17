import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import uxid from "../images/uxid.png"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Section from "../components/section"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
{/* 
<a href="#about" className="text-lightGray mx-4 hover:bg-teal no-underline">About</a>
            <a href="#research" className="text-lightGray mx-4 hover:bg-teal no-underline">Research</a>
            <a href="#publications" className="text-lightGray mx-4 hover:bg-teal no-underline">Publications</a>
            <a href="#people" className="text-lightGray mx-4 hover:bg-teal no-underline">People</a>
            <a href="#courses" className="text-lightGray mx-4 hover:bg-teal no-underline">Courses</a>
            <a href="#contact" className="text-lightGray mx-4 hover:bg-teal no-underline">Contact</a> */}
      <Header
        title="Ali Neshati"
        subtitle="Assistant Professor at Ontario Tech University"
        description="Data Visualization, Wearable Technologies, Interaction Design, and Input Modalities"
        logoUrl={uxid}
      />
      <Navigation />
      <Section id="about" title="About">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="research" title="Research">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="publications" title="Publications">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="people" title="People">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="courses" title="Courses">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="contact" title="Contact">
        <p>
          Lorem Ipsum
        </p>
      </Section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
