export type ActiveView = 
  | 'home'
  | 'about'
  | 'academics'
  | 'experience'
  | 'admissions'
  | 'news'
  | 'events'
  | 'gallery'
  | 'leadership'
  | 'contact'
  | 'portal-student'
  | 'portal-parent'
  | 'portal-teacher'
  | 'portal-admin';

export interface SchoolPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface SchoolValue {
  name: string;
  tagline: string;
  description: string;
}

export interface TimetableSlot {
  time: string;
  activity: string;
  category: 'routine' | 'academic' | 'break' | 'sport' | 'study';
  description: string;
}

export interface Department {
  id: string;
  name: string;
  hodTitle: string;
  hodName: string;
  introduction: string;
  subjects: string[];
  resources: string[];
  activities: string[];
  announcement: string;
}

export interface SchoolDocument {
  id: string;
  title: string;
  category: 'Admissions' | 'Academic' | 'Policies' | 'Calendar' | 'Fees';
  description: string;
  date: string;
  fileType: 'PDF' | 'DOCX';
  fileSize: string;
  isOfficialPlaceholder: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Academics' | 'Student Life' | 'Sport' | 'Leadership' | 'Community' | 'Announcements';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  isFeatured?: boolean;
}

export interface SchoolEvent {
  id: string;
  title: string;
  category: 'Academic' | 'Sport' | 'Parents' | 'Examinations' | 'Cultural' | 'Community';
  date: string;
  time: string;
  location: string;
  description: string;
  isUpcoming: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Academics' | 'Sport' | 'Student Life' | 'Events' | 'Leadership' | 'Community';
  caption: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface LeadershipMember {
  role: string;
  name: string;
  designation: string;
  bio: string;
  department?: string;
  isPlaceholder: boolean;
}

export interface StudentRecord {
  admNo: string;
  name: string;
  form: string;
  stream: string;
  house: string;
  attendancePct: number;
  overallGrade: string;
  subjects: {
    subject: string;
    score: number;
    grade: string;
    remarks: string;
  }[];
  assignments: {
    title: string;
    subject: string;
    dueDate: string;
    status: 'Submitted' | 'Pending' | 'Graded';
  }[];
}
