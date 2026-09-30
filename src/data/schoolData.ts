import {
  Department,
  GalleryItem,
  LeadershipMember,
  NewsArticle,
  SchoolDocument,
  SchoolEvent,
  SchoolPillar,
  SchoolValue,
  StudentRecord,
  TimetableSlot,
} from '../types/school';

export const SCHOOL_INFO = {
  name: 'Maai Mahiu Boys High School',
  shortName: 'Maai Mahiu Boys',
  county: 'Nakuru County',
  subCounty: 'Naivasha Sub-County',
  locality: 'Maai Mahiu, Kenya',
  motto: 'Built to Lead. Prepared to Serve.',
  establishedLabel: '[Official Year of Establishment]',
  categoryLabel: 'Public Boys Boarding Secondary School',
  contact: {
    phone: '[+254 700 000 000 / Official Phone Pending]',
    admissionsPhone: '[+254 711 000 000 / Admissions Desk]',
    email: '[info@maaimahiuboys.ac.ke / Official Email Pending]',
    admissionsEmail: '[admissions@maaimahiuboys.ac.ke / Official Email Pending]',
    postalAddress: 'P.O. Box [Official Box Number] - 20114, Maai Mahiu, Kenya',
    physicalAddress: 'Off Old Naivasha Road, Maai Mahiu Township, Nakuru County, Kenya',
    knoxCode: '[Official KNEC / MoE Code: 2753XXXX]',
  },
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    youtube: '#',
  }
};

export const IMAGES = {
  heroStudents: '/src/assets/images/hero_students_assembly_1790764465988.jpg',
  campusQuad: '/src/assets/images/campus_academic_quad_1790764480756.jpg',
  scienceLab: '/src/assets/images/science_lab_experiment_1790764492777.jpg',
  sportsPitch: '/src/assets/images/sports_rugby_football_1790764503919.jpg',
};

export const FOUR_PILLARS: SchoolPillar[] = [
  {
    number: '01',
    title: 'Knowledge',
    tagline: 'Intellectual Rigor & Academic Discipline',
    description:
      'Cultivating rigorous academic foundations, sharp analytical inquiry, and an insatiable appetite for discovery across STEM, languages, and humanities.',
  },
  {
    number: '02',
    title: 'Character',
    tagline: 'Integrity, Respect & Moral Fortitude',
    description:
      'Forging honorable young men governed by honesty, personal accountability, peer respect, and the moral strength to do what is right at all times.',
  },
  {
    number: '03',
    title: 'Leadership',
    tagline: 'Service, Responsibility & Self-Governance',
    description:
      'Instilling the confidence to take initiative, shoulder communal responsibility, resolve challenges collaboratively, and lead through active example.',
  },
  {
    number: '04',
    title: 'Purpose',
    tagline: 'Community Impact & Brotherhood',
    description:
      'Guiding each student to discover his unique strengths and prepare him to make an enduring, constructive contribution to family, nation, and society.',
  },
];

export const SCHOOL_VALUES: SchoolValue[] = [
  {
    name: 'DISCIPLINE',
    tagline: 'The bedrock of every enduring achievement.',
    description:
      'Orderliness in study habits, punctuality in every duty, and self-restraint that turns potential into sustained academic and life competence.',
  },
  {
    name: 'INTEGRITY',
    tagline: 'Doing what is right, unseen and accountable.',
    description:
      'Steadfast adherence to honesty in academic examinations, personal conduct, mutual trust among brothers, and unyielding honor.',
  },
  {
    name: 'EXCELLENCE',
    tagline: 'Relentless striving beyond the ordinary.',
    description:
      'Never settling for mediocrity; pursuing personal bests in academic subjects, athletics, debate, leadership, and community service.',
  },
  {
    name: 'RESPECT',
    tagline: 'Valuing humanity, teachers, and tradition.',
    description:
      'Honoring our educators, treating every school brother as family, respecting diverse backgrounds, and stewarding our school environment.',
  },
  {
    name: 'RESPONSIBILITY',
    tagline: 'Owning one’s actions and duties.',
    description:
      'Understanding that choices shape destiny; accepting personal stewardship for learning, school property, and communal well-being.',
  },
  {
    name: 'LEADERSHIP',
    tagline: 'Leading by uplifting and inspiring others.',
    description:
      'Cultivating humility, clear vision, practical courage, and service to peers through the prefect system, clubs, and student forums.',
  },
  {
    name: 'SERVICE',
    tagline: 'Prepared to give back with gratitude.',
    description:
      'Devoting time, energy, and intellect to local community projects in Maai Mahiu and upholding the spirit of selfless brotherhood.',
  },
];

export const TIMETABLE_SAMPLE: TimetableSlot[] = [
  {
    time: '05:30 – 06:30',
    activity: 'Morning Awakening & Routine',
    category: 'routine',
    description: 'Dormitory inspections, personal hygiene, and morning devotional gathering.',
  },
  {
    time: '06:30 – 07:15',
    activity: 'Breakfast & Morning Parade',
    category: 'routine',
    description: 'Wholesome dining followed by school assembly, national anthem, and briefing.',
  },
  {
    time: '07:30 – 10:30',
    activity: 'Morning Academic Block I',
    category: 'academic',
    description: 'Core instructional lessons: Mathematics, Sciences, and Languages.',
  },
  {
    time: '10:30 – 11:00',
    activity: 'Mid-Morning Tea & Academic Refreshment',
    category: 'break',
    description: 'Nutrition break and peer academic consultations with subject teachers.',
  },
  {
    time: '11:00 – 13:00',
    activity: 'Academic Block II & Practical Laboratories',
    category: 'academic',
    description: 'Science laboratory practicals, technical workshops, and humanities seminars.',
  },
  {
    time: '13:00 – 14:00',
    activity: 'Lunch & Campus Recreation',
    category: 'break',
    description: 'Communal dining in the school hall followed by supervised downtime.',
  },
  {
    time: '14:00 – 16:00',
    activity: 'Afternoon Instructional Sessions',
    category: 'academic',
    description: 'Elective subjects, ICT practicals, and remedial review workshops.',
  },
  {
    time: '16:00 – 17:45',
    activity: 'Sports, Societies & Co-Curriculars',
    category: 'sport',
    description: 'Football, rugby, athletics training, debating society, and scouting activities.',
  },
  {
    time: '18:00 – 19:30',
    activity: 'Evening Meal & Personal Preparation',
    category: 'routine',
    description: 'Supper, dormitory prep, and evening administrative notices.',
  },
  {
    time: '19:30 – 21:30',
    activity: 'Supervised Evening Study (Prep)',
    category: 'study',
    description: 'Quiet study, assignment completion, syllabus review under faculty duty master.',
  },
  {
    time: '22:00',
    activity: 'Lights Out & Rest',
    category: 'routine',
    description: 'Structured silence and restful recovery for another focused day.',
  },
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'mathematics',
    name: 'Mathematics Department',
    hodTitle: 'Head of Department',
    hodName: '[Insert Official HOD Name]',
    introduction:
      'The Mathematics department equips young men with analytical problem-solving acumen, logical structure, and computational precision essential for engineering, finance, and scientific careers.',
    subjects: ['Pure Mathematics', 'Applied Mathematics', 'Remedial Numeracy'],
    resources: ['Mathematical Sets & Model Kits', 'Past Paper Archive (2015–2025)', 'Peer Math Clinic'],
    activities: ['National Mathematical Olympiad', 'Inter-House Math Contests', 'Weekly Problem Challenge'],
    announcement: 'Mathematics Speed Contest registrations open next Monday for Form 2 & Form 3 cohorts.',
  },
  {
    id: 'sciences',
    name: 'Sciences Department',
    hodTitle: 'Head of Department',
    hodName: '[Insert Official HOD Name]',
    introduction:
      'Emphasizing hands-on scientific investigation, experimental design, and critical observation in our modern Chemistry, Biology, and Physics laboratories.',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    resources: ['Fully equipped wet chemistry lab', 'Optics & mechanics apparatus', 'Biological specimens & microscopes'],
    activities: ['Annual Science & Engineering Fair (KSEF)', 'Rift Valley Eco-Biology Field Studies', 'Young Physicists Club'],
    announcement: 'Laboratory practical schedules for Form 4 candidates have been posted on the student board.',
  },
  {
    id: 'languages',
    name: 'Languages Department',
    hodTitle: 'Head of Department',
    hodName: '[Insert Official HOD Name]',
    introduction:
      'Nurturing articulate public speakers, thoughtful writers, and critical readers through deep engagement with English Literature and Kiswahili lugha na fasihi.',
    subjects: ['English Language & Literature in English', 'Kiswahili (Lugha na Fasihi)'],
    resources: ['School Library & Fiction Archive', 'Set-Book Audio Visual Room', 'Drama & Elocution Stage'],
    activities: ['Great Debaters Contest', 'Mashairi & Insha Guild', 'Journalism & School Magazine Club'],
    announcement: 'Inter-school friendly debate tournament hosted against neighbouring schools next weekend.',
  },
  {
    id: 'humanities',
    name: 'Humanities Department',
    hodTitle: 'Head of Department',
    hodName: '[Insert Official HOD Name]',
    introduction:
      'Fostering civic consciousness, geographic comprehension, historical memory, and moral ethics to nurture informed, patriotic citizens.',
    subjects: ['History & Government', 'Geography', 'Christian Religious Education (C.R.E)'],
    resources: ['Topographical maps & meteorological kits', 'Historical archive & constitutional primers', 'Geology fieldwork kits'],
    activities: ['Rift Valley Escarpment Geographical Survey', 'Youth Parliament & Model UN', 'Historical Society Excursions'],
    announcement: 'Geography field excursion to Hell’s Gate and Mount Longonot scheduled for Term 2.',
  },
  {
    id: 'technical',
    name: 'Technical & Creative Subjects',
    hodTitle: 'Head of Department',
    hodName: '[Insert Official HOD Name]',
    introduction:
      'Developing practical hands-on capability, entrepreneurial acumen, and financial literacy that directly prepares students for enterprise and technical vocations.',
    subjects: ['Agriculture', 'Business Studies', 'Computer Studies / ICT'],
    resources: ['School Demonstration Farm & Crop Unit', 'Modern Computer Laboratory with LAN', 'Business Simulation Projects'],
    activities: ['Young Farmers Club (YFC)', 'Junior Innovators Business Fair', 'Coding Bootcamp'],
    announcement: 'The school agricultural crop rotation project yielded its highest harvest this season.',
  },
  {
    id: 'guidance',
    name: 'Guidance & Counselling',
    hodTitle: 'Head of Department',
    hodName: '[Insert Official HOD Name]',
    introduction:
      'Providing dedicated emotional, psychological, moral, and career direction. Ensuring every boy navigates adolescent transition with dignity, resilience, and balance.',
    subjects: ['Career Mentorship', 'Adolescent Development', 'Peer Counseling Training'],
    resources: ['Private Consultation Rooms', 'University & Career Guidance Library', 'Alumni Mentorship Network'],
    activities: ['Career Week & Professionals Forum', 'Peer Counselors Camp', 'Mental Wellness Roundtables'],
    announcement: 'Term 1 one-on-one subject combination guidance available for all Form 2 students.',
  },
];

export const SCHOOL_DOCUMENTS: SchoolDocument[] = [
  {
    id: 'doc-joining-2026',
    title: 'Official Form 1 Joining Instructions & Information',
    category: 'Admissions',
    description: 'Comprehensive guidelines for newly admitted students: arrival procedures, uniform codes, and boarding requirements.',
    date: 'Jan 2026',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    isOfficialPlaceholder: true,
  },
  {
    id: 'doc-requirements-list',
    title: 'Boarding & Academic Requirements Checklist',
    category: 'Admissions',
    description: 'Detailed inventory of mandatory personal items, approved textbooks, bedding, and sportswear for resident students.',
    date: 'Jan 2026',
    fileType: 'PDF',
    fileSize: '650 KB',
    isOfficialPlaceholder: true,
  },
  {
    id: 'doc-fee-guideline',
    title: 'Approved Ministry of Education Fee Guidelines',
    category: 'Fees',
    description: 'Official Ministry fee structures, designated bank account details, and approved payment verification mechanisms.',
    date: 'Dec 2025',
    fileType: 'PDF',
    fileSize: '920 KB',
    isOfficialPlaceholder: true,
  },
  {
    id: 'doc-calendar-2026',
    title: 'School Academic Almanac & Term Dates 2026',
    category: 'Calendar',
    description: 'Schedule of opening dates, mid-term breaks, parent-teacher conferences, national exam windows, and closing ceremonies.',
    date: 'Jan 2026',
    fileType: 'PDF',
    fileSize: '480 KB',
    isOfficialPlaceholder: true,
  },
  {
    id: 'doc-code-conduct',
    title: 'Student Code of Discipline & School Rules',
    category: 'Policies',
    description: 'The school’s governing behavioral standards, anti-bullying compact, honor code, and disciplinary procedures.',
    date: 'Nov 2025',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    isOfficialPlaceholder: true,
  },
  {
    id: 'doc-co-curricular-reg',
    title: 'Co-Curricular & Sports Enrolment Form',
    category: 'Academic',
    description: 'Registration form for student participation in sports teams, clubs, societies, and national competitions.',
    date: 'Feb 2026',
    fileType: 'DOCX',
    fileSize: '340 KB',
    isOfficialPlaceholder: true,
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-academic-seminar',
    title: 'Form 4 Candidate Readiness & Regional Academic Mentorship Concludes',
    slug: 'form-4-candidate-readiness-seminar',
    category: 'Academics',
    date: 'March 18, 2026',
    author: 'Academic Dean Office',
    readTime: '3 min read',
    summary: 'Our graduating cohort completed an intensive three-day symposium focusing on examination technique, mental stamina, and syllabus mastery.',
    content: [
      'In keeping with our commitment to intellectual rigor, the school hosted a comprehensive candidate empowerment weekend in our main assembly hall.',
      'Experienced external chief examiners and academic mentors led interactive workshops covering scientific data interpretation, essay composition in English and Kiswahili, and high-speed calculation accuracy in Mathematics.',
      'Students engaged in group consultations, received targeted diagnostic reviews of previous assessment results, and formulated individualized revision timetables leading up to the national examination cycle.',
    ],
    image: IMAGES.scienceLab,
    isFeatured: true,
  },
  {
    id: 'news-rugby-football-cup',
    title: 'Maai Mahiu Boys Excel at Sub-County Secondary Schools Athletics and Ball Games',
    slug: 'sub-county-games-performance',
    category: 'Sport',
    date: 'March 10, 2026',
    author: 'Games Department',
    readTime: '4 min read',
    summary: 'Displaying brotherhood and discipline on the pitch, our rugby and football squads qualified for the upcoming county championships.',
    content: [
      'The weekend saw our student athletes represent Maai Mahiu Boys High School with poise and unmatched physical discipline across multiple disciplines.',
      'Our senior football squad secured three clean-sheet victories through disciplined tactical positioning and teamwork, earning praise from regional match commissioners.',
      'Off the pitch, our traveling student cheering contingent demonstrated exceptional sportsmanship, representing our school values with exemplary decorum.',
    ],
    image: IMAGES.sportsPitch,
    isFeatured: false,
  },
  {
    id: 'news-stem-environmental',
    title: 'Environmental Club Spearheads 1,000 Tree Seedling Campaign on Campus Grounds',
    slug: 'environmental-seedling-campaign',
    category: 'Community',
    date: 'February 24, 2026',
    author: 'Patron, Environmental Club',
    readTime: '3 min read',
    summary: 'Students and staff collaborated with local environmental officers to restore native acacia and indigenous tree cover in support of national greening goals.',
    content: [
      'As part of our commitment to service and environmental stewardship, the school community planted indigenous saplings along our perimeter and agricultural quad.',
      'Under the leadership of our student prefect for environment and agriculture, each dormitory has adopted a designated green grove to nurture throughout the academic year.',
      'The initiative demonstrates the school’s dedication to hands-on climate responsibility in the ecologically delicate Great Rift Valley ecosystem.',
    ],
    image: IMAGES.campusQuad,
    isFeatured: false,
  },
  {
    id: 'news-leadership-induction',
    title: 'New Student Prefects Council Formally Inducted for 2026/2027 Academic Session',
    slug: 'student-prefects-induction',
    category: 'Leadership',
    date: 'February 05, 2026',
    author: 'Dean of Students',
    readTime: '4 min read',
    summary: 'The newly elected student leadership body took the solemn oath of service, pledging to govern with humility, justice, and accountability.',
    content: [
      'In a solemn and dignified ceremony attended by the Board of Management, teachers, and the entire student fraternity, the new School Captain and prefects assumed office.',
      'The Principal reminded the student leaders that true leadership in a boys’ secondary school is defined by exemplary personal discipline, attentive listening to peers, and self-sacrifice.',
      'The ceremony concluded with the traditional handover of the school staff of leadership from the outgoing Form 4 prefectural council.',
    ],
    image: IMAGES.heroStudents,
    isFeatured: false,
  },
];

export const EVENTS: SchoolEvent[] = [
  {
    id: 'evt-parent-day-form1',
    title: 'Form 1 Parents & Guardians Orientation Conference',
    category: 'Parents',
    date: 'April 12, 2026',
    time: '09:00 AM – 01:30 PM',
    location: 'School Main Assembly Hall',
    description: 'Comprehensive briefing on academic expectation, boarding welfare, fees clearance, and teacher consultations.',
    isUpcoming: true,
  },
  {
    id: 'evt-midterm-assess',
    title: 'Term 1 Mid-Term Comprehensive Examinations',
    category: 'Examinations',
    date: 'May 04 – May 08, 2026',
    time: '07:30 AM – 04:00 PM',
    location: 'Examination Halls',
    description: 'School-wide continuous assessment tests across all forms to measure syllabus progress and academic targets.',
    isUpcoming: true,
  },
  {
    id: 'evt-inter-house-games',
    title: 'Annual Inter-House Cross-Country & Athletics Championship',
    category: 'Sport',
    date: 'May 23, 2026',
    time: '08:00 AM – 05:00 PM',
    location: 'School Sports Pavilion',
    description: 'Competitive track and field showcase among all four school boarding houses.',
    isUpcoming: true,
  },
  {
    id: 'evt-science-congress',
    title: 'Rift Valley Regional Science & Innovation Congress',
    category: 'Academic',
    date: 'June 14, 2026',
    time: '08:30 AM – 04:30 PM',
    location: 'Science Complex & ICT Labs',
    description: 'Student project exhibitions in Robotics, Applied Chemistry, and Environmental Conservation.',
    isUpcoming: true,
  },
  {
    id: 'evt-careers-symposium',
    title: 'Senior School University & Career Mentorship Day',
    category: 'Academic',
    date: 'July 02, 2026',
    time: '10:00 AM – 03:30 PM',
    location: 'Multi-Purpose Auditorium',
    description: 'Guest engineers, medical doctors, entrepreneurs, and armed forces alumni advising students on subject choices.',
    isUpcoming: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Morning Courtyard Assembly',
    category: 'Leadership',
    caption: 'Student body gathered in crisp formation during the Monday morning address.',
    image: IMAGES.heroStudents,
    aspect: 'tall',
  },
  {
    id: 'gal-2',
    title: 'Campus Academic Quadrangle',
    category: 'Campus',
    caption: 'Classroom architecture bordered by indigenous Rift Valley acacia trees and pristine lawns.',
    image: IMAGES.campusQuad,
    aspect: 'wide',
  },
  {
    id: 'gal-3',
    title: 'Physics & Chemistry Practical Laboratory',
    category: 'Academics',
    caption: 'Senior students conducting titration and optics experiments under instructor supervision.',
    image: IMAGES.scienceLab,
    aspect: 'square',
  },
  {
    id: 'gal-4',
    title: 'Afternoon Sports on the Green Pitch',
    category: 'Sport',
    caption: 'Vigorous inter-class football match under the scenic backdrop of the Great Rift Valley hills.',
    image: IMAGES.sportsPitch,
    aspect: 'wide',
  },
  {
    id: 'gal-5',
    title: 'Library & Quiet Study Archive',
    category: 'Academics',
    caption: 'Concentrated individual study during afternoon revision hours.',
    image: IMAGES.campusQuad,
    aspect: 'square',
  },
  {
    id: 'gal-6',
    title: 'School Choir & Music Guild',
    category: 'Student Life',
    caption: 'Rehearsals for the Kenya Music Festivals in the school music hall.',
    image: IMAGES.heroStudents,
    aspect: 'tall',
  },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    role: 'Principal / Chief Executive',
    name: '[Insert Official Principal Name]',
    designation: 'B.Ed (Sci), M.Ed (Ed. Admin) - [Official Credentials Pending]',
    bio: 'Oversees whole-school strategic leadership, academic standards, moral culture, and institutional development in partnership with the Ministry of Education.',
    isPlaceholder: true,
  },
  {
    role: 'Deputy Principal (Academics)',
    name: '[Insert Official Deputy Principal Name]',
    designation: 'Curriculum & Instruction Lead - [Official Credentials Pending]',
    bio: 'Responsible for timetable enforcement, syllabus coverage monitoring, examination integrity, and teacher development programs.',
    isPlaceholder: true,
  },
  {
    role: 'Deputy Principal (Administration)',
    name: '[Insert Official Deputy Principal Name]',
    designation: 'Discipline & Operations Lead - [Official Credentials Pending]',
    bio: 'Guides student discipline, pastoral care, boarding operations, campus security, and parent communication protocols.',
    isPlaceholder: true,
  },
  {
    role: 'Senior Teacher / Dean of Students',
    name: '[Insert Official Senior Teacher Name]',
    designation: 'Student Welfare & Mentorship - [Official Credentials Pending]',
    bio: 'Coordinates the student prefect council, co-curricular societies, peer leadership programs, and daily boarding routines.',
    isPlaceholder: true,
  },
  {
    role: 'School Captain / Head Boy',
    name: '[Insert Official Student Captain Name]',
    designation: 'Prefects Governing Council President - Form 4',
    bio: 'Liaises between the student brotherhood and school administration, representing student voice and maintaining daily order.',
    isPlaceholder: true,
  },
];

export const MOCK_STUDENT_DATA: StudentRecord = {
  admNo: 'MMB-2024-4192',
  name: 'Brian Mwangi Kamau',
  form: 'Form 3',
  stream: 'East (Simba)',
  house: 'Mount Longonot House',
  attendancePct: 98.6,
  overallGrade: 'A- (78 Points)',
  subjects: [
    { subject: 'Mathematics', score: 84, grade: 'A', remarks: 'Exceptional mathematical grasp.' },
    { subject: 'English', score: 76, grade: 'A-', remarks: 'Articulate essay composition.' },
    { subject: 'Kiswahili', score: 81, grade: 'A', remarks: 'Lugha safi na uchambuzi bora wa fasihi.' },
    { subject: 'Chemistry', score: 79, grade: 'A-', remarks: 'High lab competency and theory.' },
    { subject: 'Physics', score: 88, grade: 'A', remarks: 'Outstanding mechanics and problem solving.' },
    { subject: 'Biology', score: 72, grade: 'B+', remarks: 'Consistent revision recommended.' },
    { subject: 'Geography', score: 85, grade: 'A', remarks: 'Thorough fieldwork analysis.' },
    { subject: 'Computer Studies', score: 92, grade: 'A', remarks: 'Superb programming and logic.' },
  ],
  assignments: [
    { title: 'Calculus: Rates of Change Problem Set', subject: 'Mathematics', dueDate: 'Tomorrow, 5:00 PM', status: 'Pending' },
    { title: 'Volumetric Analysis Lab Report', subject: 'Chemistry', dueDate: 'Friday, 8:00 AM', status: 'Submitted' },
    { title: 'Fasihi: Uchambuzi wa Wahusika', subject: 'Kiswahili', dueDate: 'Next Monday', status: 'Graded' },
  ],
};
