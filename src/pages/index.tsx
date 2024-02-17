import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../components/navigation"
import Section from "../components/section"

const research = [
  { title: 'Project 1', description: 'Description 1' },
  { title: 'Project 2', description: 'Description 2' },
];

const publications = [
  { title: 'Publication 1', description: 'Description 1' },
  { title: 'Publication 2', description: 'Description 2' },
];

const people = [
  { name: 'Dr. Ali Neshati', imageUrl: 'https://i.imgur.com/yD8XzT6.png' },
  { name: 'Aron-Seth Cohen', imageUrl: 'https://i.imgur.com/5XCOPLK.png' },
  { name: 'Lorem Ipsum', imageUrl: 'https://i.imgur.com/5XCOPLK.png' },
  { name: 'Lorem Ipsum', imageUrl: 'https://i.imgur.com/5XCOPLK.png' },
];

const courses = [
  { title: 'Course 1', description: 'Description 1' },
  { title: 'Course 2', description: 'Description 2' },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navigation />
      <Section id="about" title="About">
        <p>
          User Experience and Interaction Design Lab.
          <br />
          Data Visualization, Wearable Technologies, Interaction Design, and Input Modalities.
        </p>
      </Section>
      <Section id="research" title="Research">
      <div className="flex flex-col gap-4">
          {research.map((researchItems) => (
            <div key={researchItems.title}>
              <p className="font-bold">{researchItems.title}</p>
              <p>{researchItems.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="publications" title="Publications">
      <div className="flex flex-col gap-4">
          {publications.map((publication) => (
            <div key={publication.title}>
              <p className="font-bold">{publication.title}</p>
              <p>{publication.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="people" title="People">
        <div className="grid grid-cols-4 gap-2">
          {people.map((person) => (
            <div key={person.name} className="flex flex-col items-center">
              <img className="w-24 h-24 rounded-full" src={person.imageUrl} alt={person.name} />
              <p className="mt-2 font-bold">{person.name}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="courses" title="Courses">
        <div className="flex flex-col gap-4">
          {courses.map((course) => (
            <div key={course.title}>
              <p className="font-bold">{course.title}</p>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full py-2 px-3 border border-transparent bg-zinc-800 rounded-md shadow-sm focus:outline-none focus:border-zinc-50 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full py-2 px-3 border border-transparent bg-zinc-800 rounded-md shadow-sm focus:outline-none focus:border-zinc-50 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="mt-1 block w-full py-2 px-3 border border-transparent bg-zinc-800 rounded-md shadow-sm focus:outline-none focus:border-zinc-50 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-zinc-800 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-100">
            Submit
          </button>
        </form>
      </Section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
