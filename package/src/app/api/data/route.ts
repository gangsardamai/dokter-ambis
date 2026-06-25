import { CourseType } from '@/app/types/course'
import { FooterLinkType } from '@/app/types/footerlink'
import { MentorType } from '@/app/types/mentor'
import { HeaderType } from '@/app/types/menu'
import { TestimonialType } from '@/app/types/testimonial'
import { NextResponse } from 'next/server'

const HeaderData: HeaderType[] = [
  { label: 'Home', href: '/' },
  { label: 'Universitas', href: '/universitas' },
  { label: 'Program', href: '/program' },
  { label: 'Mentor', href: '/#mentor' },
  { label: 'Kontak', href: '/#contact' },
]

const TechGaintsData: { imgSrc: string }[] = [
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
  {
    imgSrc: '/images/companies/google.svg',
  },
  {
    imgSrc: '/images/companies/hubspot.svg',
  },
  {
    imgSrc: '/images/companies/microsoft.svg',
  },
  {
    imgSrc: '/images/companies/walmart.svg',
  },
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
]

const CourseData = [
  {
    heading: 'Blok Kardiovaskular',
    name: 'Universitas Airlangga',
    imgSrc: '/images/courses/mern.webp',
    students: 120,
    classes: 28,
    price: 99000,
    rating: 5.0,
  },
  {
    heading: 'Blok Respirasi',
    name: 'Universitas Brawijaya',
    imgSrc: '/images/courses/react.webp',
    students: 95,
    classes: 24,
    price: 99000,
    rating: 4.9,
  },
  {
    heading: 'Blok Gastrointestinal',
    name: 'Universitas Jember',
    imgSrc: '/images/courses/UiUx.webp',
    students: 140,
    classes: 30,
    price: 99000,
    rating: 5.0,
  },
  {
    heading: 'Blok Neurologi',
    name: 'Universitas Indonesia',
    imgSrc: '/images/courses/webflow.webp',
    students: 200,
    classes: 32,
    price: 99000,
    rating: 5.0,
  },
]

const MentorData = [
  {
    profession: 'Mentor Blok Kardiovaskular',
    name: 'dr. Ahmad',
    imgSrc: '/images/mentor/user1.webp',
  },
  {
    profession: 'Mentor Blok Respirasi',
    name: 'dr. Budi',
    imgSrc: '/images/mentor/user2.webp',
  },
  {
    profession: 'Mentor UKMPPD',
    name: 'dr. Siti',
    imgSrc: '/images/mentor/user3.webp',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    name: 'Michelle Bennett',
    profession: 'CEO, Parkview International Ltd',
    comment:
      'The courses transformed my career! The practical approach and expert mentorship made all the difference.',
    imgSrc: '/images/testimonial/user1.webp',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'Founder, TechWave Solutions',
    comment:
      'Engaging content and flexible learning schedules helped me upskill without disrupting my work.',
    imgSrc: '/images/testimonial/user2.webp',
    rating: 5,
  },
  {
    name: 'Cody Fisher',
    profession: 'Product Manager, InnovateX',
    comment:
      'Highly recommend! The hands-on projects and supportive community boosted my confidence and skills.',
    imgSrc: '/images/testimonial/user3.webp',
    rating: 5,
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Sitemap',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Courses', href: '/#courses' },
      { label: 'Mentor', href: '/#mentor' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    section: 'Company',
    links: [
      { label: 'Our Team', href: '/' },
      { label: 'career', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'Affiliates', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    TechGaintsData,
    CourseData,
    MentorData,
    TestimonialData,
    FooterLinkData,
  })
}
