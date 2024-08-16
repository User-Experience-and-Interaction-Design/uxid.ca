import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../components/navigation"
import Section from "../components/section"

const background = [
{ title: 'Postdoctoral Fellow', description: 'Cheriton School of Computer Science, Human-Computer Interaction Lab, University of Waterloo, Canada, Jan 2022 – Present, Supervisors: Dr. Daniel Vogel and Dr. Jian Zhao' },
{ title: 'Ph.D. in Computer Science', description: 'University of Manitoba, Jan 2017 – Dec 2021, Thesis: Data Visualization and Interaction on Smartwatch Small Screens, Advisor: Dr. Pourang Irani' },
{ title: 'M.Sc. in Computer Science', description: 'Sharif University of Technology, Sep 2012 – Sep 2014, Thesis: Defining and Critical Sets in Graphs and Latin Squares, Advisor: Dr. Ebadollah Mahmoodian' },
{ title: 'B.Sc. in Computer Science', description: 'Yazd University, Sep 2007 – Sep 2011' },
];

const news = [
{ title: '2024-08-16', description: "I am currently seeking Master's and Ph.D. students. If you are interested, please send your CV and transcript to my email: ali.neshati@ontariotechu.ca." }
]

const publications = [
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'IVA: An Empirical Investigation and Design of Intelligent Virtual Assistant for Online Meetings', description: 'Ali Neshati, Ehsan Jahangirzadeh, Hanyu Xu, Jian Zhao. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2025), Hamburg, Germany. ACM. (Under review)' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'In-Vehicle Performance and Distraction for Midair and Touch Directional Gestures', description: 'Arman Hafizi, Ali Neshati, Jay Henderson, Wei Zhou, Edward Lank, Daniel Vogel. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2023), Hamburg, Germany. ACM. (Under review)' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Interaction Region Characteristics for Midair Barehand Targeting on a Television', description: 'Jay Henderson, Ali Neshati, Sachi Mizobuchi, Wei Zhou, Daniel Vogel, Edward Lank. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2023), Hamburg, Germany. ACM. (Under review)' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'De-Stijl: Facilitating Graphics Design with Interactive 2D Color Palette Recommendation', description: 'Xinyu Shi, Ziqi Zhou, Jiang Zhang, Ali Neshati, Anjul Tyagi, Ryan Rossi, Shunan Guo, Fan Du, Jian Zhao. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2023), Hamburg, Germany. ACM. (Under review)' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Slide4N: Creating Presentation Slides from Computational Notebooks with Human-AI Collaboration', description: 'Fengjie Wang, Xuye Liu, Oujing Liu, Ali Neshati, Tengfei Ma, Min Zhu, Jian Zhao. In Proceedings of the 41st International Conference on Human Factors in Computing Systems (CHI 2023), Hamburg, Germany. ACM. (Under review)' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'EdgeSelect: Smartwatch Data Interaction with Minimal Screen Occlusion', description: 'Ali Neshati, Aaron Salo, Ahmed Shariff Mohommed Faleel, Ziming Li, Hai-Ning Liang, Celine Latulipe, Pourang Irani. In Proceedings of the 24th International Conference on Multimodal Interaction (ICMI 2022), Bengaluru, India. (Best Paper Award)' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Understanding and Adapting Bezel-to-Bezel Interactions for Circular Smartwatches in Mobile and Encumbered Scenarios', description: 'Bradley Rey, Zhu Kening, Simon Perrault, Sandra Bardot, Ali Neshati, Pourang Irani. In Proceedings of the 25th International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI 2022), Vancouver, Canada. ACM' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'BezelGlide: Interacting with Graphs on Smartwatches with Minimal Screen Occlusion', description: 'Ali Neshati, Bradley Rey, Ahmed Shariff Mohommed Faleel, Sandra Bardot, Celine Latulipe, Pourang Irani. In Proceedings of the 39th International Conference on Human Factors in Computing Systems (CHI 2021), Yokohama, Japan. ACM' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'SF-LG: Space-Filling Line Graphs for Visualizing Interrelated Time-series Data on Smartwatches', description: 'Ali Neshati, Fouad Allah, Bradley Rey, Yumiko Sakamoto, Marcos Serrano, Pourang Irani. In Proceedings of the 23rd International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI 2021), Toulouse, France. ACM. (Honorable Mention Award)' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Using Guessability Framework: Age-related Differences in Hand Gesture Interaction', description: 'Yurii Vasylkiv, Ali Neshati, Ahmed Shariff Mohommed Faleel, Yumiko Sakamoto, Pourang Irani. In Proceedings of the 11th International Conference on Augmented Human (AH 2020), Winnipeg, Canada. ACM' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Eyes-Free Graph Legibility: Using Skin-Dragging to Provide a Tactile Graph Visualization on the Arm', description: 'Sandra Bardot, Sawyer Rempel, Bradley Rey, Ali Neshati, Yumiko Sakamoto, Carlo Menon, Pourang Irani. In Proceedings of the 11th International Conference on Augmented Human (AH 2020), Winnipeg, Canada. ACM' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'G-Sparks: Glanceable Sparklines on Smartwatches', description: 'Ali Neshati, Yumiko Sakamoto, Launa Leboe-Mcgowan, Jason Leboe-Mcgowan, Marcos Serrano, Pourang Irani. In Proceedings of the 45th International Conference on Graphics Interface (GI 2019), Kingston, Canada' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'An Analytic Model for Time-Efficient Personal Hierarchies', description: 'William Delamare, Ali Neshati, Pourang Irani, Xiangshi Ren. In Proceedings of the 37th International Conference on Human Factors in Computing Systems (CHI 2019), Glasgow, UK. ACM. (Honorable Mention Award)' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Smart Home Interactions for People with Reduced Hand Mobility Using Subtle EMG-Signal Gestures', description: 'Yurii Vasylkiv, Ali Neshati, Yumiko Sakamoto, Randy Gomez, Keisuke Nakamura, Pourang Irani. In Proceedings of the 11th Conference on Information Technology and Communications in Health (ITCH 2019), Victoria, Canada. ACM' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Challenges in Displaying Health Data on Small Smartwatch Screens', description: 'Ali Neshati, Yumiko Sakamoto, Pourang Irani. In Proceedings of the 11th Conference on Information Technology and Communications (ITCH 2019), Victoria, Canada. ACM' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Performer vs. Observer: Whose Comfort Level Should We Consider When Examining the Social Acceptability of Input Modalities for Head-Worn Display?', description: 'Fouad Alallah, Ali Neshati, Yumiko Sakamoto, Andrea Bunt, Pourang Irani, Khalad Hasan. In Proceedings of the 24th International Conference on Virtual Reality Software and Technology (VRST 2018), Tokyo, Japan. ACM' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Crowdsourcing vs Laboratory-Style Social Acceptability Studies? Examining the Social Acceptability of Spatial User Interactions for Head-Worn Displays', description: 'Fouad Alallah, Ali Neshati, Nima Sheibani, Yumiko Sakamoto, Khalad Hassan, Edward Lank, Andrea Bunt, Pourang Irani. In Proceedings of the 36th International Conference on Human Factors in Computing Systems (CHI 2018), Montréal, Canada. ACM' },
  { thumbnailUrl: 'https://placehold.co/500x500?text=Placeholder', title: 'Is Really NACK Protocol Secure to Be Employed in MANETs?', description: 'Maryam Saeed, Ali Mackvandi, Mehdi Taghavi, Mohammad Zare Bidoki, Mehdi Ghasemi, Ali Neshati. In Proceedings of the 37th International Conference on Computational Science and Engineering (CSE 2014), Chengdu, China. IEEE' },
];

const students = [
  { masters: [
    { thumbnail: 'https://i.imgur.com/9dCnQoF.png', name: 'Aron-Seth Cohen', status: 'MSc Student (2024-Present)' },
    { thumbnail: 'https://i.imgur.com/hG3AaSJ.jpeg', name: 'Yasaman Ghasemi', status: 'MSc Student (2024-Present)' }
  ],
    undergraduates: [
      { thumbnail: 'https://placehold.co/500x500?text=Placeholder', name: 'Reese', status: 'Undergraduate Student (2024-2025)' },
      { thumbnail: 'https://i.imgur.com/zMdV97X.jpeg', name: 'Makeal', status: 'Undergraduate Student (2024-2025)' },
      { thumbnail: 'https://i.imgur.com/LBuNQMT.jpeg', name: 'Neel', status: 'Undergraduate Student (2025-Present)' }
    ]
  }
]

const teaching = [
  { school: 'School of Computer Science, University of Waterloo, Canada', year: '2022 – 2023', courses: [
    { semester: 'Summer 2022', course: '[CS 449] Human-Computer Interaction' },
    { semester: 'Winter 2023', course: '[CS 105] Introductory Computer Science' }
  ] },
  { school: 'Department of Computer Science, University of Manitoba, Canada', year: '2020 – 2022', courses: [
    { semester: 'Winter 2022', course: '[Comp 1020] Introductory Computer Science 2' },
    { semester: 'Winter 2022', course: '[Comp 2150] Object Orientation' },
    { semester: 'Fall 2021', course: '[Comp 1010] Introductory Computer Science I' },
    { semester: 'Summer 2021', course: '[Comp 2150] Object Orientation' },
    { semester: 'Winter 2021', course: '[Comp 2150] Object Orientation' },
    { semester: 'Fall 2020', course: '[Comp 1020] Introductory Computer Science II' },
    { semester: 'Summer 2020', course: '[Comp 2150] Object Orientation' }
  ] },
  { school: 'Lecturer, Department of Computer Science, Yazd University, Iran', year: '2015 – 2016', courses: [
    { semester: 'Winter 2016', course: 'Introductory Computer Science I (Language: C)' },
    { semester: 'Winter 2016', course: 'Introductory Computer Science I Lab (Language: C)' },
    { semester: 'Winter 2016', course: 'Computer Networks' },
    { semester: 'Winter 2016', course: 'Computer Networks Lab' },
    { semester: 'Fall 2015', course: 'Introductory Computer Science I (Language: C)' },
    { semester: 'Fall 2015', course: 'Introductory Computer Science I Lab (Language: C)' },
    { semester: 'Fall 2015', course: 'Algorithm Design & Analysis' }
  ] }
];

const awards = [
  { title: 'University of Manitoba Graduate Fellowship (UMGF)', description: 'University of Manitoba (3 Years - $18,000/year)', year: '2019 - 2021' },
  { title: 'Mitacs Accelerate Program Scholarships', description: 'Institutional Academic Scholarship (2 years - $45,000/year)', year: '2020 - 2021' },
  { title: 'Visual and Automated Disease Analytics Program', description: 'Institutional Academic Scholarship (2 years - $18,000/year)', year: '2017 - 2019' },
  { title: 'Manitoba Graduate Scholarship (MGS)', description: 'The Government of Manitoba ($7,000)', year: '2018' },
  { title: 'International Graduate Student Scholarship (IGSS)', description: 'University of Manitoba (3 years - $4,000/year)', year: '2017 – 2019' },
  { title: 'Best Paper Award', description: 'International Conference on Multimodal Interaction (ICMI 2022)', year: '' },
  { title: 'Honorable Mention Award', description: 'International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI 2021)', year: '' },
  { title: 'Honorable Mention Award', description: 'International Conference on Human Factors in Computing Systems (CHI 2019)', year: '' },
]

const talks = [
{ title: 'ICMI 2022', location: 'Bengaluru, India', description: 'EdgeSelect: Smartwatch Data Interaction with Minimal Screen Occlusion' },
{ title: 'MobileHCI 2021', location: 'Toulouse, France (remote)', description: 'SF-LG: Space-Filling Line Graphs for Visualizing Interrelated Time-series Data on Smartwatches' },
{ title: 'CHI 2021', location: 'Yokohama, Japan (remote)', description: 'BezelGlide: Interacting with Graphs on Smartwatches with Minimal Screen Occlusion' },
{ title: 'GI 2019', location: 'Kingston, Canada', description: 'G-Sparks: Glanceable Sparklines on Smartwatches' },
{ title: 'ITCH 2019', location: 'Victoria, Canada', description: 'Challenges in Displaying Health Data on Small Smartwatch Screens' },
]

const service = [
  { title: 'Program Committee Member', description: 'ACM Conference on Augmented Human (AH 2020)' },
  { title: 'Conference Reviewer', description: 'Since 2018, I have served as an external reviewer for several peer-reviewed international conferences, including:' },
  { title: 'ACM Conference on Human Factors in Computing Systems (CHI)' },
  { title: 'ACM Symposium on User Interface Software & Technology (UIST)' },
  { title: 'IEEE Information Visualization Conference (InfoVis / VIS)' },
  { title: 'ACM Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI)' },
  { title: 'ACM Symposium on Spatial User Interaction (SUI)' },
  { title: 'ACM Conference on Computer-Human Interaction in Play (CHI PLAY)' },
  { title: 'ACM Nordic Conference on Human-Computer Interaction (NordiCHI)' },
  { title: 'International Journal of Human-Computer Studies (IJHCS)' },
]


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navigation />
      <Section id="background" title="Background">
        <div className="flex flex-col gap-4">
          {background.map((backgroundItem) => (
            <div key={backgroundItem.title}>
              <p className="font-bold">{backgroundItem.title}</p>
              <p>{backgroundItem.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id='research_interests' title='Research Interests'>
        <p>My primary research interest is in Human-Computer Interaction (HCI), where I explore users’ needs and design solutions to make an impact in their lives when it concerns efficient human-computer interactivity. My current research areas include:</p>
        <ul className="list-disc">
          <li className="font-bold">Input Devices and Interaction Techniques</li>
          <li className="font-bold">Ubiquitous Analytics</li>
          <li className="font-bold">Information Visualization</li>
          <li className="font-bold">Mobile and Wearable User Interfaces</li>
        </ul>
      </Section>
      <Section id="news" title="News">
        <div className="flex flex-col gap-4">
          {news.map((newsItem) => (
            <ul className="list-disc">
              <li key={newsItem.title}>
                <p className="font-bold">{newsItem.title}</p>
                <p>{newsItem.description}</p>
              </li>
            </ul>
          ))}
        </div>
      </Section>
      <Section id="publications" title="Publications">
          <div className="flex flex-col gap-4">
              {publications.map((publication) => (
                  <div key={publication.title} className="flex gap-4 bg-slate-100 p-4 rounded">
                      <img className="w-48 h-48 rounded" src={publication.thumbnailUrl} alt={publication.title} />
                      <div>
                          <p className="font-bold">{publication.title}</p>
                          <p>{publication.description}</p>
                      </div>
                  </div>
              ))}
          </div>
      </Section>
      <Section id="students" title="Students">
        <div className="flex flex-col gap-4">
          {students.map((student) => (
            <div key={student.masters[0].name}>
              <p className="font-bold">Masters</p>
              <div className="grid grid-cols-3 gap-4">
                {student.masters.map((master) => (
                  <div key={master.name} className="flex flex-col items-center">
                    <img className="w-48 h-48 rounded" src={master.thumbnail} alt={master.name} />
                    <p>{master.name}</p>
                    <p>{master.status}</p>
                  </div>
                ))}
              </div>
              <p className="font-bold">Undergraduates</p>
              <div className="grid grid-cols-3 gap-4">
                {student.undergraduates.map((undergraduate) => (
                  <div key={undergraduate.name} className="flex flex-col items-center">
                    <img className="w-48 h-48 rounded" src={undergraduate.thumbnail} alt={undergraduate.name} />
                    <p>{undergraduate.name}</p>
                    <p>{undergraduate.status}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="teaching" title="Teaching">
        <div className="flex flex-col gap-4">
          {teaching.map((teachingItem) => (
            <div key={teachingItem.school}>
              <p className="font-bold">{teachingItem.school}</p>
              <p>{teachingItem.year}</p>
              {teachingItem.courses.map((course) => (
                <ul className="list-disc">
                  <li key={course.course}>
                    <p>{course.semester}</p>
                    <p>{course.course}</p>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </Section>
      <Section id="awards" title="Scholarships, Awards, and Funding Resources">
        <div className="flex flex-col gap-4">
          {awards.map((award) => (
            <ul className="list-disc">
              <li key={award.title}>
                <p className="font-bold">{award.title}</p>
                <p>{award.description}</p>
                <p>{award.year}</p>
              </li>
            </ul>
          ))}
        </div>
      </Section>
      <Section id="talks" title="Talks">
        <div className="flex flex-col gap-4">
          {talks.map((talk) => (
            <ul className="list-disc">
              <li key={talk.title}>
                <p className="font-bold">{talk.title}</p>
                <p>{talk.location}</p>
                <p>{talk.description}</p>
              </li>
            </ul>
          ))}
        </div>
      </Section>
      <Section id="service" title="Service">
        <div className="flex flex-col gap-4">
          {service.map((serviceItem) => (
            <ul className="list-disc">
              <li key={serviceItem.title}>
                <p className="font-bold">{serviceItem.title}</p>
                <p>{serviceItem.description}</p>
              </li>
            </ul>
          ))}
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <p>Dr. Ali Neshati</p>
        <p>Ontario Tech University - Science Building - UA 4041</p>
        <p>Email: 
          <a href="mailto:ali.neshati@ontariotechu.ca">ali.neshati@ontariotechu.ca</a>
        </p>
      </Section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
