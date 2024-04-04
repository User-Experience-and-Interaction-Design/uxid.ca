import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../components/navigation"
import Section from "../components/section"

const research = [
  // { title: 'Project 1', description: 'Description 1' },
  // { title: 'Project 2', description: 'Description 2' },
];

const announcements = [
  // { title: 'Project 1', description: 'Description 1' },
  // { title: 'Project 2', description: 'Description 2' },
];

const publications = [
  { thumbnailUrl: 'https://www.jeffjianzhao.com/paper-imgs/earablegesture.png', title: 'Exploring Uni-manual Around Ear Off-Device Gestures for Earables', description: 'Shaikh Shawon Arefin Shimon, Ali Neshati, Junwei Sun, Qiang Xu, Jian Zhao. Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 8(1), pp. 3:1-3:29, 2024.' },
  { thumbnailUrl: 'https://www.jeffjianzhao.com/paper-imgs/earablegesture.png', title: 'Exploring Uni-manual Around Ear Off-Device Gestures for Earables', description: 'Shaikh Shawon Arefin Shimon, Ali Neshati, Junwei Sun, Qiang Xu, Jian Zhao. Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 8(1), pp. 3:1-3:29, 2024.' },
  // { thumbnailUrl: 'https://placehold.co/128x128/png', title: 'Publication 2', description: 'Description 2' },
];

const people = [
  { name: 'Dr. Ali Neshati', imageUrl: 'https://i.imgur.com/YWVkjlC.png', status: 'Lab Director, PhD'},
  { name: 'Aron-Seth Cohen', imageUrl: 'https://i.imgur.com/9dCnQoF.png', status: 'MSc Student (2024-Present)'},
];

const courses = [
  { title: 'CSCI 4620U Human-Computer Interaction', description: 'Fall 2023' },
  { title: 'CSCI 2040U Software Design & Analysis', description: 'Winter 2024' },
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
      <Section id='announcements' title='Announcements'>
            <div className="flex flex-col gap-4">
          {announcements.map((announcementItems) => (
            <div key={announcementItems.title}>
              <p className="font-bold">{announcementItems.title}</p>
              <p>{announcementItems.description}</p>
            </div>
          ))}
        </div>
      </Section>
      {/* <Section id="research" title="Research">
      <div className="flex flex-col gap-4">
          {research.map((researchItems) => (
            <div key={researchItems.title}>
              <p className="font-bold">{researchItems.title}</p>
              <p>{researchItems.description}</p>
            </div>
          ))}
        </div>
      </Section> */}
      <Section id="publications" title="Publications">
        <div className="flex flex-col gap-4">
          {publications.map((publication) => (
            <div key={publication.title} className="flex gap-4">
              <img className="w-24 h-24 rounded" src={publication.thumbnailUrl} alt={publication.title} />
              <div>
                <p className="font-bold">{publication.title}</p>
                <p>{publication.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="people" title="People">
        <div className="grid grid-cols-4 gap-2">
          {people.map((person) => (
            <div key={person.name} className="flex flex-col items-center">
              <img className="w-48 h-48 rounded" src={person.imageUrl} alt={person.name} />
              <p className="mt-2 font-bold">{person.name}</p>
              <p className="mt-1 text-sm text-gray-500">{person.status}</p>
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
