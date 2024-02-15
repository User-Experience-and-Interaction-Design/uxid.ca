import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import uxid from "../images/uxid.png"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Section from "../components/section"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header
        title="Ali Neshati"
        subtitle="Assistant Professor at Ontario Tech University"
        description="Data Visualization, Wearable Technologies, Interaction Design, and Input Modalities"
        logoUrl={uxid}
      />
      <Navigation />
      <Section id="research" title="Research">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="courses" title="Courses">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="publications" title="Publications">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="projects" title="Projects">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="contact" title="Contact">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="students" title="Students">
        <p>
          Lorem Ipsum
        </p>
      </Section>
      <Section id="cv" title="CV">
        <p>
          Lorem Ipsum
        </p> 
      </Section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
